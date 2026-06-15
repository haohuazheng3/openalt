/**
 * One-time Google Search Console mount via the SEO service account:
 *   1. JWT → access token (siteverification + webmasters scopes)
 *   2. Site Verification API: get DNS-TXT token → add to Cloudflare → verify
 *   3. Search Console: add sc-domain property → submit sitemap
 *
 * Run: node scripts/gsc-setup.mjs
 * Env: CF_TOKEN, CF_ZONE (Cloudflare). Service account read from ../.env.local.
 */
import { readFileSync } from 'node:fs'
import { createSign } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dir = dirname(fileURLToPath(import.meta.url))
const DOMAIN = 'openreplace.com'
const SITEMAP = `https://${DOMAIN}/sitemap.xml`
const CF_TOKEN = process.env.CF_TOKEN
const CF_ZONE = process.env.CF_ZONE

const b64url = (buf) => Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

function loadServiceAccount() {
  const raw = readFileSync(join(__dir, '..', '.env.local'), 'utf8')
  const start = raw.indexOf('{')
  const end = raw.lastIndexOf('}')
  if (start < 0 || end < 0) throw new Error('No service-account JSON found in .env.local')
  return JSON.parse(raw.slice(start, end + 1))
}

async function getAccessToken(sa) {
  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claim = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/siteverification https://www.googleapis.com/auth/webmasters',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }))
  const signer = createSign('RSA-SHA256')
  signer.update(`${header}.${claim}`)
  const sig = b64url(signer.sign(sa.private_key))
  const assertion = `${header}.${claim}.${sig}`

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
  })
  const j = await res.json()
  if (!j.access_token) throw new Error('token error: ' + JSON.stringify(j))
  return j.access_token
}

const api = (token) => async (url, opts = {}) => {
  const res = await fetch(url, { ...opts, headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json', ...(opts.headers || {}) } })
  const text = await res.text()
  let body
  try { body = text ? JSON.parse(text) : {} } catch { body = { raw: text } }
  return { status: res.status, body }
}

async function cfAddTxt(name, content) {
  const res = await fetch(`https://api.cloudflare.com/client/v4/zones/${CF_ZONE}/dns_records`, {
    method: 'POST',
    headers: { authorization: `Bearer ${CF_TOKEN}`, 'content-type': 'application/json' },
    body: JSON.stringify({ type: 'TXT', name, content, ttl: 1 }),
  })
  return res.json()
}

async function txtResolves(name, needle) {
  try {
    const r = await fetch(`https://dns.google/resolve?name=${name}&type=TXT`).then((x) => x.json())
    return (r.Answer || []).some((a) => (a.data || '').includes(needle))
  } catch { return false }
}

async function main() {
  const sa = loadServiceAccount()
  console.log(`→ service account: ${sa.client_email} (project ${sa.project_id})`)
  const token = await getAccessToken(sa)
  console.log('✓ got access token')
  const call = api(token)

  // 1. Get DNS-TXT verification token
  const tok = await call('https://www.googleapis.com/siteVerification/v1/token', {
    method: 'POST',
    body: JSON.stringify({ site: { type: 'INET_DOMAIN', identifier: DOMAIN }, verificationMethod: 'DNS_TXT' }),
  })
  if (tok.status !== 200) {
    console.error('✗ getToken failed:', tok.status, JSON.stringify(tok.body).slice(0, 400))
    if (JSON.stringify(tok.body).includes('SERVICE_DISABLED')) {
      console.error('  → Enable the Site Verification API for project ' + sa.project_id + ' and re-run.')
    }
    process.exit(1)
  }
  const verifyToken = tok.body.token
  console.log('✓ verification token: ' + verifyToken)

  // 2. Add TXT to Cloudflare
  const cf = await cfAddTxt(DOMAIN, verifyToken)
  console.log(cf.success ? '✓ added TXT to Cloudflare' : '  (TXT add: ' + JSON.stringify(cf.errors) + ')')

  // 3. Poll DNS
  process.stdout.write('→ waiting for DNS propagation')
  let ok = false
  for (let i = 0; i < 20; i++) {
    if (await txtResolves(DOMAIN, verifyToken)) { ok = true; break }
    process.stdout.write('.')
    await new Promise((r) => setTimeout(r, 5000))
  }
  console.log(ok ? ' resolved' : ' (timeout — trying anyway)')

  // 4. Verify ownership
  const ins = await call('https://www.googleapis.com/siteVerification/v1/webResource?verificationMethod=DNS_TXT', {
    method: 'POST',
    body: JSON.stringify({ site: { type: 'INET_DOMAIN', identifier: DOMAIN } }),
  })
  if (ins.status === 200) console.log('✓ domain VERIFIED with Google (' + (ins.body.id || DOMAIN) + ')')
  else { console.error('✗ verify failed:', ins.status, JSON.stringify(ins.body).slice(0, 400)); process.exit(1) }

  // 5. Add Search Console property (domain property)
  const prop = `sc-domain:${DOMAIN}`
  const add = await call(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(prop)}`, { method: 'PUT' })
  console.log(add.status === 200 || add.status === 204 ? `✓ added Search Console property ${prop}` : `  property add: ${add.status} ${JSON.stringify(add.body).slice(0, 200)}`)

  // 6. Submit sitemap
  const sm = await call(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(prop)}/sitemaps/${encodeURIComponent(SITEMAP)}`, { method: 'PUT' })
  console.log(sm.status === 200 || sm.status === 204 ? `✓ submitted sitemap ${SITEMAP}` : `  sitemap submit: ${sm.status} ${JSON.stringify(sm.body).slice(0, 200)}`)

  // 7. Confirm
  const list = await call('https://www.googleapis.com/webmasters/v3/sites')
  console.log('→ properties on this account:', (list.body.siteEntry || []).map((s) => s.siteUrl).join(', ') || '(none)')
  console.log('\n✓ GSC mount complete. Impressions will start flowing once Google indexes the sitemap (days).')
}

main().catch((e) => { console.error('✗', e); process.exit(1) })

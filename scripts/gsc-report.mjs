/**
 * Weekly Search Console action report. Pulls the last 28 days of search
 * analytics and turns them into a do-this list:
 *   • impressions but no clicks  → rewrite the title/meta
 *   • impressions but weak rank  → build/strengthen a dedicated page
 *   • sitemap errors             → fix/alert
 *
 * Auth: GOOGLE_SERVICE_ACCOUNT_JSON env (CI) or ../.env.local (local).
 * Output: markdown to stdout (and $GITHUB_STEP_SUMMARY in CI).
 */
import { readFileSync, appendFileSync } from 'node:fs'
import { createSign } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dir = dirname(fileURLToPath(import.meta.url))
const DOMAIN = 'openreplace.com'
const PROP = `sc-domain:${DOMAIN}`
const SITEMAP = `https://${DOMAIN}/sitemap.xml`

const b64url = (b) => Buffer.from(b).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

function loadSA() {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) return JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON)
  const raw = readFileSync(join(__dir, '..', '.env.local'), 'utf8')
  return JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1))
}

async function token(sa) {
  const now = Math.floor(Date.now() / 1000)
  const h = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const c = b64url(JSON.stringify({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 }))
  const s = createSign('RSA-SHA256'); s.update(`${h}.${c}`)
  const assertion = `${h}.${c}.${b64url(s.sign(sa.private_key))}`
  const r = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }) }).then((x) => x.json())
  if (!r.access_token) throw new Error('token: ' + JSON.stringify(r))
  return r.access_token
}

const iso = (d) => d.toISOString().slice(0, 10)

async function main() {
  const sa = loadSA()
  const tok = await token(sa)
  const auth = { authorization: `Bearer ${tok}`, 'content-type': 'application/json' }
  const end = new Date(Date.now() - 2 * 86400000) // GSC data lags ~2 days
  const start = new Date(end.getTime() - 28 * 86400000)

  const query = (dimensions) =>
    fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(PROP)}/searchAnalytics/query`, {
      method: 'POST', headers: auth,
      body: JSON.stringify({ startDate: iso(start), endDate: iso(end), dimensions, rowLimit: 500 }),
    }).then((r) => r.json())

  const [byQuery, byPage, sm] = await Promise.all([
    query(['query']),
    query(['page']),
    fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(PROP)}/sitemaps/${encodeURIComponent(SITEMAP)}`, { headers: auth }).then((r) => r.json()),
  ])

  const qrows = byQuery.rows || []
  const totals = qrows.reduce((a, r) => ({ imp: a.imp + r.impressions, clk: a.clk + r.clicks }), { imp: 0, clk: 0 })

  // impressions, no/low clicks, decent position → rewrite title/meta
  const rewriteTitle = qrows
    .filter((r) => r.impressions >= 20 && r.position <= 20 && r.ctr < 0.01)
    .sort((a, b) => b.impressions - a.impressions).slice(0, 20)
  // impressions but ranking poorly (no strong page) → build/strengthen a page
  const buildPage = qrows
    .filter((r) => r.impressions >= 15 && r.position > 15)
    .sort((a, b) => b.impressions - a.impressions).slice(0, 20)
  // best pages by clicks (what's working — double down)
  const winners = (byPage.rows || []).sort((a, b) => b.clicks - a.clicks).slice(0, 10)

  const lines = []
  lines.push(`# OpenAlt — Search Console weekly report`)
  lines.push(`Window: ${iso(start)} → ${iso(end)} · **${totals.imp} impressions, ${totals.clk} clicks** across ${qrows.length} queries.`)
  if (totals.imp === 0) lines.push(`\n_No search impressions yet — normal for a newly-submitted site. Google typically starts showing data 1–3 weeks after indexing._`)

  lines.push(`\n## 🔧 Rewrite the title/meta (impressions, but ~no clicks)`)
  lines.push(rewriteTitle.length ? rewriteTitle.map((r) => `- "${r.keys[0]}" — ${r.impressions} impr · CTR ${(r.ctr * 100).toFixed(1)}% · pos ${r.position.toFixed(1)}`).join('\n') : '- (nothing yet)')

  lines.push(`\n## 🆕 Build / strengthen a page (impressions, weak rank)`)
  lines.push(buildPage.length ? buildPage.map((r) => `- "${r.keys[0]}" — ${r.impressions} impr · pos ${r.position.toFixed(1)} → ensure a dedicated, deep page targets this`).join('\n') : '- (nothing yet)')

  lines.push(`\n## ✅ What's working (top pages by clicks — double down)`)
  lines.push(winners.length ? winners.map((r) => `- ${r.keys[0].replace('https://' + DOMAIN, '')} — ${r.clicks} clicks · ${r.impressions} impr`).join('\n') : '- (nothing yet)')

  lines.push(`\n## 🚨 Sitemap health`)
  if (sm.errors > 0 || sm.warnings > 0) lines.push(`- ⚠️ sitemap reports ${sm.errors || 0} errors, ${sm.warnings || 0} warnings`)
  else lines.push(`- sitemap OK (${(sm.contents?.[0]?.submitted) || '?'} URLs submitted, ${(sm.contents?.[0]?.indexed) || '?'} indexed)`)

  const out = lines.join('\n')
  console.log(out)
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, out + '\n')
}

main().catch((e) => { console.error('✗', e); process.exit(1) })

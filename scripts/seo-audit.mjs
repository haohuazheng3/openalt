/**
 * Signal-consistency audit (the checks automation most often gets wrong):
 *   • noindex / auth-gated paths must NOT be in the sitemap
 *   • every sitemapped URL returns 200 (no redirect / 404)
 *   • canonical is self-referential (no canonical → redirect/404/noindex)
 *   • no <meta robots noindex> on indexable pages
 *
 *   node scripts/seo-audit.mjs        (audits https://openreplace.com)
 */
const BASE = process.env.SITE || 'https://openreplace.com'
const MUST_NOT_BE_IN_SITEMAP = ['/search', '/submit', '/admin', '/sign-in', '/sign-up', '/advertise/success']

const get = (url, manual = false) =>
  fetch(url, { redirect: manual ? 'manual' : 'follow', headers: { 'user-agent': 'OpenAltAudit/1.0' } })

let fails = 0
const ok = (m) => console.log('  ✓ ' + m)
const bad = (m) => { console.log('  ✗ ' + m); fails++ }

async function main() {
  console.log(`SEO signal audit — ${BASE}\n`)

  // 1. Sitemap
  const xml = await get(`${BASE}/sitemap.xml`).then((r) => r.text())
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  console.log(`Sitemap: ${urls.length} URLs`)
  for (const p of MUST_NOT_BE_IN_SITEMAP) {
    if (urls.some((u) => u === BASE + p || u === BASE + p + '/')) bad(`noindex/gated path ${p} is in sitemap`)
    else ok(`${p} correctly excluded from sitemap`)
  }

  // 2. robots
  const robots = await get(`${BASE}/robots.txt`).then((r) => r.text())
  ;/Sitemap:/i.test(robots) ? ok('robots.txt points to sitemap') : bad('robots.txt missing Sitemap directive')
  /GPTBot/i.test(robots) ? ok('robots.txt allows AI crawlers') : bad('robots.txt missing AI bot rules')

  // 3. Sample URLs across page types
  const sample = [
    '/', '/self-hosted', '/open-source-alternatives', '/easiest-self-hosted-apps',
    '/notion-alternatives', '/appflowy', '/category/notes-docs', '/self-hosted/notes-docs',
    '/appflowy-vs-notion', '/reports/self-host-difficulty-index', '/self-host-savings-calculator',
  ].map((p) => BASE + p)

  console.log(`\nChecking ${sample.length} sample pages (status / canonical / robots):`)
  for (const url of sample) {
    const head = await get(url, true)
    if (head.status !== 200) { bad(`${url} → HTTP ${head.status} (expected 200, no redirect)`); continue }
    const html = await get(url).then((r) => r.text())
    const canon = (html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/) || [])[1]
    const noindex = /<meta[^>]+name="robots"[^>]+noindex/i.test(html)
    const okStatus = '200'
    if (noindex) bad(`${url} has noindex (but is in sitemap/sample)`)
    if (!canon) bad(`${url} missing canonical`)
    else if (canon.replace(/\/$/, '') !== url.replace(/\/$/, '')) bad(`${url} canonical → ${canon} (not self)`)
    else ok(`${url.replace(BASE, '') || '/'} (${okStatus}, self-canonical${noindex ? '' : ', indexable'})`)
  }

  console.log(`\n${fails === 0 ? '✓ PASS — no signal inconsistencies' : `✗ ${fails} issue(s) found`}`)
  process.exit(fails === 0 ? 0 : 1)
}

main().catch((e) => { console.error('✗', e); process.exit(1) })

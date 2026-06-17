/**
 * Submit all live URLs to IndexNow (Bing, Yandex, etc.) so new/changed pages
 * get crawled within hours instead of weeks. Reads the live sitemap, extracts
 * URLs, and POSTs them. Run after a deploy or on a schedule.
 *
 *   node scripts/indexnow-submit.mjs
 */
const HOST = 'openreplace.com'
const KEY = 'a7f3c1e9b04d4e2f8c6a5b1d2e3f4a5b'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`
const SITEMAP = `https://${HOST}/sitemap.xml`

async function main() {
  const xml = await fetch(SITEMAP, { headers: { 'user-agent': 'OpenAltIndexNow/1.0' } }).then((r) => r.text())
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => u.includes(HOST))
  if (urls.length === 0) {
    console.error('✗ no URLs found in sitemap')
    process.exit(1)
  }
  console.log(`→ submitting ${urls.length} URLs to IndexNow (key ${KEY.slice(0, 8)}…)`)

  // IndexNow accepts up to 10,000 URLs per request.
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }),
  })
  console.log(`IndexNow response: ${res.status} ${res.statusText}`)
  // 200/202 = accepted; 422 = key/host mismatch; 403 = key not found at keyLocation.
  if (res.status === 200 || res.status === 202) console.log('✓ submitted')
  else console.log('  (note: 403 = key file not reachable yet; 422 = host/key mismatch)')
}

main().catch((e) => { console.error('✗', e); process.exit(1) })

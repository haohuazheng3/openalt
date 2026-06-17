/**
 * Pull real crawler activity from Cloudflare analytics (more precise/real-time
 * than GSC coverage): which bots hit the zone, how often, and 404 hits.
 *
 *   CF_TOKEN=... CF_ZONE=... node scripts/cf-bot-crawl.mjs
 * Skips gracefully (annotated) if the token lacks Analytics:Read.
 */
const CF_TOKEN = process.env.CF_TOKEN
const CF_ZONE = process.env.CF_ZONE
const BOTS = ['googlebot', 'bingbot', 'gptbot', 'claudebot', 'perplexitybot', 'google-extended', 'ccbot', 'applebot']

async function gql(query) {
  const r = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers: { authorization: `Bearer ${CF_TOKEN}`, 'content-type': 'application/json' },
    body: JSON.stringify({ query }),
  })
  return r.json()
}

async function main() {
  if (!CF_TOKEN || !CF_ZONE) { console.log('skip: CF_TOKEN/CF_ZONE not set'); return }
  const since = new Date(Date.now() - 24 * 3600 * 1000).toISOString()

  const q = `{ viewer { zones(filter:{zoneTag:"${CF_ZONE}"}) {
    httpRequestsAdaptiveGroups(limit:50, filter:{datetime_geq:"${since}"}, orderBy:[count_DESC]) {
      count
      dimensions { userAgent edgeResponseStatus }
    }
  } } }`

  const res = await gql(q)
  if (res.errors) {
    console.log('skip (annotated): Cloudflare GraphQL error — likely the token lacks Analytics:Read.')
    console.log('  ' + JSON.stringify(res.errors).slice(0, 300))
    return
  }
  const rows = res.data?.viewer?.zones?.[0]?.httpRequestsAdaptiveGroups || []
  if (rows.length === 0) { console.log('No request data in the last 24h yet (new site).'); return }

  const byBot = {}
  let total = 0, notFound = 0
  for (const r of rows) {
    const ua = (r.dimensions.userAgent || '').toLowerCase()
    total += r.count
    if (r.dimensions.edgeResponseStatus === 404) notFound += r.count
    const hit = BOTS.find((b) => ua.includes(b))
    if (hit) byBot[hit] = (byBot[hit] || 0) + r.count
  }
  console.log(`Last 24h: ${total} requests, ${notFound} were 404.`)
  console.log('Crawler hits:')
  const entries = Object.entries(byBot).sort((a, b) => b[1] - a[1])
  if (entries.length === 0) console.log('  (no known crawlers yet)')
  else entries.forEach(([b, c]) => console.log(`  ${b}: ${c}`))
}

main().catch((e) => { console.error('✗', e); process.exit(1) })

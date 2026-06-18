/**
 * Local near-duplicate detector — the no-API stand-in for embedding dedupe
 * (no OpenAI key available). Computes character 3-gram cosine similarity between
 * texts and flags any pair above the threshold (default 0.85), so scaled or
 * templated content can't slip through.
 *
 * This round's pages are topically distinct (methodology / PaaS / one-click /
 * head-to-head), so it's a guard rail for the NEXT batch of programmatic pages
 * (migrate / lock-in / license) — run it over their generated bodies before
 * publish and drop anything that scores too similar to an existing page.
 *
 *   import { similarity, findDuplicates } from './dedupe.mjs'
 *   node scripts/dedupe.mjs            # runs a self-test
 */
export function shingles(text, n = 3) {
  const s = text.toLowerCase().replace(/\s+/g, ' ').trim()
  const grams = new Map()
  for (let i = 0; i <= s.length - n; i++) {
    const g = s.slice(i, i + n)
    grams.set(g, (grams.get(g) || 0) + 1)
  }
  return grams
}

export function similarity(a, b) {
  const ga = shingles(a)
  const gb = shingles(b)
  let dot = 0, na = 0, nb = 0
  for (const [g, c] of ga) {
    na += c * c
    if (gb.has(g)) dot += c * gb.get(g)
  }
  for (const [, c] of gb) nb += c * c
  return na && nb ? dot / (Math.sqrt(na) * Math.sqrt(nb)) : 0
}

/** items: {id, text}[] → pairs scoring above `threshold` (likely duplicates). */
export function findDuplicates(items, threshold = 0.85) {
  const dups = []
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      const sim = similarity(items[i].text, items[j].text)
      if (sim > threshold) dups.push({ a: items[i].id, b: items[j].id, sim: +sim.toFixed(3) })
    }
  }
  return dups
}

// Self-test when run directly.
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) {
  const t1 = 'Coolify is the most popular self-hosted PaaS with a polished web UI for deploying apps from Git.'
  const t2 = 'Coolify is the most popular self-hosted PaaS with a polished web UI for deploying apps from Git.'
  const t3 = 'Dokku is a minimal, Heroku-like platform that deploys via git push and buildpacks on a small VPS.'
  console.log('identical  :', similarity(t1, t2).toFixed(3), '(expect 1.000)')
  console.log('distinct   :', similarity(t1, t3).toFixed(3), '(expect < 0.85)')
  console.log('flagged >0.85:', JSON.stringify(findDuplicates([{ id: 'a', text: t1 }, { id: 'b', text: t2 }, { id: 'c', text: t3 }])))
}

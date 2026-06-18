/**
 * Freshness engine for the static (no-DB) site. Refreshes the catalogue
 * src/data/seed-listings.ts from the GitHub API:
 *   • githubStars  ← stargazers_count
 *   • lastCommitAt ← pushed_at (date)
 *   • status       ← 'archived' when the repo is archived on GitHub
 *
 * No database and no LLM key required — just a GitHub token (the Action's
 * GITHUB_TOKEN, or `GITHUB_TOKEN=$(gh auth token)` locally). A weekly Action
 * runs this and commits the diff, so "freshness / dead-project" data — the
 * site's signature claim — actually stays true instead of rotting.
 *
 *   node scripts/refresh-listings.mjs           # refresh all, write file
 *   node scripts/refresh-listings.mjs --dry     # report only, no write
 *   node scripts/refresh-listings.mjs --dry 10  # only first 10 (quick test)
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dir = dirname(fileURLToPath(import.meta.url))
const FILE = join(__dir, '..', 'src', 'data', 'seed-listings.ts')
const TOKEN = process.env.GITHUB_TOKEN || ''
const MARKER = 'export const SEED_LISTINGS: SeedListing[] = '

const args = process.argv.slice(2)
const DRY = args.includes('--dry')
const LIMIT = Number(args.find((a) => /^\d+$/.test(a))) || Infinity

function parseRepo(url) {
  try {
    const u = new URL(url)
    if (!/github\.com$/i.test(u.hostname.replace(/^www\./, ''))) return null
    const p = u.pathname.split('/').filter(Boolean)
    if (p.length < 2) return null
    return { owner: p[0], repo: p[1].replace(/\.git$/, '') }
  } catch {
    return null
  }
}

function loadArray(text) {
  const i = text.indexOf('[', text.indexOf(MARKER))
  const e = text.lastIndexOf(']')
  return new Function('return ' + text.slice(i, e + 1))()
}

async function ghRepo(owner, repo) {
  const r = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: {
      accept: 'application/vnd.github+json',
      'user-agent': 'openalt-refresh',
      ...(TOKEN ? { authorization: `Bearer ${TOKEN}` } : {}),
    },
  })
  if (r.status === 200) return { ok: true, data: await r.json() }
  return { ok: false, status: r.status, remaining: r.headers.get('x-ratelimit-remaining') }
}

async function pool(items, n, fn) {
  let idx = 0
  await Promise.all(
    Array.from({ length: Math.min(n, items.length) }, async () => {
      while (idx < items.length) await fn(items[idx++])
    }),
  )
}

async function main() {
  if (!TOKEN) console.warn('⚠ no GITHUB_TOKEN — unauthenticated (60 req/h). Use GITHUB_TOKEN=$(gh auth token).')
  const text = readFileSync(FILE, 'utf8')
  const header = text.slice(0, text.indexOf(MARKER) + MARKER.length)
  const list = loadArray(text)
  const targets = LIMIT === Infinity ? list : list.slice(0, LIMIT)

  let updated = 0, newArchived = 0, failed = 0, starDelta = 0
  await pool(targets, 6, async (l) => {
    const r = parseRepo(l.repoUrl)
    if (!r) { failed++; return }
    const res = await ghRepo(r.owner, r.repo)
    if (!res.ok) {
      failed++
      console.warn(`  ✗ ${l.slug}: HTTP ${res.status}${res.remaining === '0' ? ' (rate-limited!)' : ''}`)
      return
    }
    const d = res.data
    const newStars = typeof d.stargazers_count === 'number' ? d.stargazers_count : l.githubStars
    const newDate = (d.pushed_at || '').slice(0, 10) || l.lastCommitAt
    if (newStars !== l.githubStars || newDate !== l.lastCommitAt) updated++
    starDelta += newStars - l.githubStars
    l.githubStars = newStars
    l.lastCommitAt = newDate
    if (d.archived && l.status !== 'archived') {
      l.status = 'archived'
      newArchived++
      console.log(`  ⚠ now archived on GitHub: ${l.slug}`)
    }
  })

  console.log(
    `\n${targets.length} repos · ${updated} updated · ${newArchived} newly archived · ${failed} failed · stars Δ ${starDelta >= 0 ? '+' : ''}${starDelta}`,
  )

  if (DRY) { console.log('(--dry: file not written)'); return }
  writeFileSync(FILE, header + JSON.stringify(list, null, 2) + '\n', 'utf8')
  console.log(`✓ wrote ${FILE}`)
}

main().catch((e) => { console.error('✗', e); process.exit(1) })

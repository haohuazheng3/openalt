import { NextResponse, type NextRequest } from 'next/server'
import { getListingBySlug } from '@/lib/db/queries'
import { difficultyInfo } from '@/lib/difficulty'

export const runtime = 'nodejs'
export const revalidate = 86400

/**
 * Embeddable "self-host difficulty" badge (shields-style SVG). OSS maintainers
 * drop it in their README, which links back to openreplace.com — our organic
 * backlink engine. e.g.
 *   [![Self-host difficulty](https://openreplace.com/api/badge/appflowy)](https://openreplace.com/appflowy)
 */
const TONE_HEX: Record<string, string> = {
  emerald: '#10b981',
  lime: '#84cc16',
  amber: '#f59e0b',
  orange: '#f97316',
  rose: '#ef4444',
}

const LABEL = 'self-host'
// Rough monospace-ish width estimate (Verdana 11px ≈ 6.5px/char + padding).
const w = (s: string) => Math.round(s.length * 6.5) + 14

function badge(message: string, color: string): string {
  const lw = w(LABEL)
  const mw = w(message)
  const total = lw + mw
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${total}" height="20" role="img" aria-label="${LABEL}: ${message}">
<title>${LABEL}: ${message}</title>
<linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient>
<clipPath id="r"><rect width="${total}" height="20" rx="3" fill="#fff"/></clipPath>
<g clip-path="url(#r)">
<rect width="${lw}" height="20" fill="#555"/>
<rect x="${lw}" width="${mw}" height="20" fill="${color}"/>
<rect width="${total}" height="20" fill="url(#s)"/>
</g>
<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11">
<text x="${lw / 2}" y="15" fill="#010101" fill-opacity=".3">${LABEL}</text>
<text x="${lw / 2}" y="14">${LABEL}</text>
<text x="${lw + mw / 2}" y="15" fill="#010101" fill-opacity=".3">${message}</text>
<text x="${lw + mw / 2}" y="14">${message}</text>
</g>
</svg>`
}

const headers = {
  'content-type': 'image/svg+xml; charset=utf-8',
  'cache-control': 'public, max-age=86400, s-maxage=86400',
}

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug.replace(/\.svg$/, '')
  const listing = await getListingBySlug(slug)
  const info = listing ? difficultyInfo(listing.selfHostDifficulty) : null

  const message = info ? `${info.score}/5 ${info.label}` : 'unrated'
  const color = info ? TONE_HEX[info.tone] : '#9f9f9f'

  return new NextResponse(badge(message, color), { headers })
}

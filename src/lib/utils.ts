import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Extract a bare hostname (sans www) from a URL, safely. */
export function domainFromUrl(url?: string | null): string {
  if (!url) return ''
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

/** Parse a GitHub repo URL into { owner, repo }, or null. */
export function parseRepo(repoUrl?: string | null): { owner: string; repo: string } | null {
  if (!repoUrl) return null
  try {
    const u = new URL(repoUrl)
    if (!/github\.com$/i.test(u.hostname.replace(/^www\./, ''))) return null
    const parts = u.pathname.split('/').filter(Boolean)
    if (parts.length < 2) return null
    return { owner: parts[0], repo: parts[1].replace(/\.git$/, '') }
  } catch {
    return null
  }
}

/** A reliable favicon/logo source derived from a domain. */
export function faviconUrl(url?: string | null, size = 64): string {
  const domain = domainFromUrl(url)
  if (!domain) return ''
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}

/**
 * Best logo for a listing: an explicit logoUrl wins, else the GitHub org avatar
 * (reliable for OSS projects), else the website's favicon.
 */
export function logoUrlFor(
  listing: { logoUrl?: string | null; repoUrl?: string | null; websiteUrl?: string | null },
  size = 128,
): string {
  if (listing.logoUrl) return listing.logoUrl
  const repo = parseRepo(listing.repoUrl)
  if (repo) return `https://github.com/${repo.owner}.png?size=${size}`
  return faviconUrl(listing.websiteUrl, size)
}

export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return ''
  const d = typeof date === 'string' ? new Date(date) : date
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

/** Compact star count: 1234 → "1.2k", 12345 → "12.3k". */
export function formatStars(n?: number | null): string {
  const v = Number(n ?? 0)
  if (v < 1000) return String(v)
  if (v < 10000) return (v / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
  if (v < 1_000_000) return Math.round(v / 1000) + 'k'
  return (v / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
}

/** Human "last updated" string: "today", "3 days ago", "5 months ago". */
export function relativeFromNow(date: Date | string | null | undefined): string {
  if (!date) return ''
  const d = typeof date === 'string' ? new Date(date) : date
  if (Number.isNaN(d.getTime())) return ''
  const days = Math.floor((Date.now() - d.getTime()) / 86_400_000)
  if (days <= 0) return 'today'
  if (days === 1) return 'yesterday'
  if (days < 30) return `${days} days ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months} month${months === 1 ? '' : 's'} ago`
  const years = Math.floor(days / 365)
  return `${years} year${years === 1 ? '' : 's'} ago`
}

/** True when a repo hasn't been touched in over a year (a staleness signal). */
export function isStale(date: Date | string | null | undefined): boolean {
  if (!date) return false
  const d = typeof date === 'string' ? new Date(date) : date
  if (Number.isNaN(d.getTime())) return false
  return Date.now() - d.getTime() > 365 * 86_400_000
}

/** Truncate text to a max length on a word boundary. */
export function truncate(text: string, max = 160): string {
  if (text.length <= max) return text
  return text.slice(0, text.lastIndexOf(' ', max)).trimEnd() + '…'
}

/** Strip markdown to plain text for meta descriptions. */
export function stripMarkdown(md?: string | null): string {
  if (!md) return ''
  return md
    .replace(/`{1,3}[^`]*`{1,3}/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_~-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

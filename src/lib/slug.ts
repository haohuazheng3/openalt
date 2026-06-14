export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['’`]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Separator for /[a]-vs-[b] comparison pages. */
export const VS_SEPARATOR = '-vs-'

export function isVersusSlug(slug: string): boolean {
  return slug.includes(VS_SEPARATOR)
}

/** Split a comparison slug into its two slugs (or null if not a vs slug). */
export function parseVersusSlug(slug: string): [string, string] | null {
  const idx = slug.indexOf(VS_SEPARATOR)
  if (idx <= 0) return null
  const a = slug.slice(0, idx)
  const b = slug.slice(idx + VS_SEPARATOR.length)
  if (!a || !b) return null
  return [a, b]
}

/** Build a stable, canonical comparison slug (alphabetical order). */
export function versusSlug(a: string, b: string): string {
  const [x, y] = [a, b].sort((m, n) => m.localeCompare(n))
  return `${x}${VS_SEPARATOR}${y}`
}

/**
 * In-memory fallback dataset.
 *
 * When DATABASE_URL is not configured, every public query resolves against the
 * curated seed data baked into the repo (src/data/*), so the directory renders
 * its full catalogue with zero infrastructure — ideal for a preview deploy.
 *
 * DB-only features (click logging, submissions, Stripe-driven featuring) simply
 * no-op in this mode; add a Postgres connection string to enable them.
 */
import { CATEGORIES } from '@/data/categories'
import { PROPRIETARY_TOOLS } from '@/data/proprietary-tools'
import { SEED_LISTINGS, type SeedListing } from '@/data/seed-listings'
import type { Category, ListingWithCategory, ProprietaryTool } from './schema'
import { isActivelyFeatured } from '@/lib/featured'
import type { ListingFilters, ListingSort, RedirectListing } from './queries'

const FAR_FUTURE = new Date('2099-01-01T00:00:00Z')

function toDate(v?: string | null): Date | null {
  if (!v) return null
  const d = new Date(v)
  return Number.isNaN(d.getTime()) ? null : d
}

// ── Build the in-memory tables once ─────────────────────────────────────────

const categoryList: Category[] = CATEGORIES.map((c, i) => ({
  id: i + 1,
  slug: c.slug,
  name: c.name,
  description: c.description,
  sortOrder: c.sortOrder,
}))
const categoryBySlug = new Map(categoryList.map((c) => [c.slug, c]))

const proprietaryList: ProprietaryTool[] = PROPRIETARY_TOOLS.map((p, i) => ({
  id: i + 1,
  slug: p.slug,
  name: p.name,
  categoryId: categoryBySlug.get(p.categorySlug)?.id ?? null,
  website: p.website,
  blurb: p.blurb,
  priceHook: p.priceHook,
}))

function buildListing(s: SeedListing, i: number): ListingWithCategory {
  const category = categoryBySlug.get(s.categorySlug) ?? null
  const featured = Boolean(s.featured)
  return {
    id: i + 1,
    slug: s.slug,
    name: s.name,
    tagline: s.tagline,
    descriptionMd: s.descriptionMd,
    repoUrl: s.repoUrl,
    websiteUrl: s.websiteUrl ?? null,
    demoUrl: s.demoUrl ?? null,
    affiliateUrl: s.affiliateUrl ?? null,
    affiliateNetwork: s.affiliateNetwork ?? null,
    logoUrl: s.logoUrl ?? null,
    categoryId: category?.id ?? null,
    replaces: s.replaces,
    license: s.license,
    language: s.language,
    githubStars: s.githubStars,
    lastCommitAt: toDate(s.lastCommitAt),
    selfHostDifficulty: s.selfHostDifficulty,
    deployOptions: s.deployOptions,
    hasManagedHosting: s.hasManagedHosting,
    featureGapMd: s.featureGapMd,
    tags: s.tags,
    featured,
    featuredUntil: featured ? FAR_FUTURE : null,
    featuredRank: s.featuredRank ?? null,
    status: s.status ?? 'live',
    source: s.source,
    stripeCustomerId: null,
    stripeSubscriptionId: null,
    lastCheckedAt: null,
    createdAt: new Date(2026, 0, 1),
    updatedAt: new Date(2026, 0, 1),
    category,
  }
}

const listingsAll: ListingWithCategory[] = SEED_LISTINGS.map(buildListing)
const listingById = new Map(listingsAll.map((l) => [l.id, l]))
const listingBySlugMap = new Map(listingsAll.map((l) => [l.slug, l]))

// ── Sorting / filtering (mirrors queries.ts semantics) ──────────────────────

const cmpFeatured = (a: ListingWithCategory, b: ListingWithCategory) =>
  Number(isActivelyFeatured(b)) - Number(isActivelyFeatured(a))

const nullsLast = (v: number | null | undefined) => (v == null ? Number.POSITIVE_INFINITY : v)

function comparator(sort: ListingSort) {
  return (a: ListingWithCategory, b: ListingWithCategory): number => {
    const f = cmpFeatured(a, b)
    if (f) return f
    switch (sort) {
      case 'stars':
        return b.githubStars - a.githubStars
      case 'newest':
        return b.id - a.id
      case 'name':
        return a.name.localeCompare(b.name)
      case 'easiest':
        return nullsLast(a.selfHostDifficulty) - nullsLast(b.selfHostDifficulty) || b.githubStars - a.githubStars
      case 'featured':
      default:
        return nullsLast(a.featuredRank) - nullsLast(b.featuredRank) || b.githubStars - a.githubStars
    }
  }
}

function applyFilters(filters: ListingFilters): ListingWithCategory[] {
  const {
    categorySlug,
    replaces,
    tag,
    maxDifficulty,
    deployOption,
    license,
    language,
    search,
    sort = 'featured',
    status = 'live',
    limit = 60,
    offset = 0,
  } = filters
  const q = search?.trim().toLowerCase()

  const out = listingsAll.filter((l) => {
    if (status !== 'all' && l.status !== status) return false
    if (categorySlug && l.category?.slug !== categorySlug) return false
    if (replaces && !l.replaces.includes(replaces)) return false
    if (tag && !l.tags.includes(tag)) return false
    if (typeof maxDifficulty === 'number' && (l.selfHostDifficulty ?? 99) > maxDifficulty) return false
    if (deployOption && !l.deployOptions.includes(deployOption)) return false
    if (license && !(l.license ?? '').toLowerCase().startsWith(license.toLowerCase())) return false
    if (language && l.language !== language) return false
    if (q) {
      const hay = [l.name, l.tagline, l.descriptionMd, l.language, l.tags.join(' '), l.replaces.join(' ')]
        .join(' ')
        .toLowerCase()
      if (!hay.includes(q)) return false
    }
    return true
  })

  out.sort(comparator(sort))
  return out.slice(offset, offset + limit)
}

// ── Public API (matches the DB query signatures) ────────────────────────────

export const staticStore = {
  getListings: (filters: ListingFilters = {}) => applyFilters(filters),

  getFeaturedListings: (limit = 6) =>
    listingsAll
      .filter((l) => l.status === 'live' && isActivelyFeatured(l))
      .sort((a, b) => nullsLast(a.featuredRank) - nullsLast(b.featuredRank) || b.githubStars - a.githubStars)
      .slice(0, limit),

  getListingBySlug: (slug: string) => listingBySlugMap.get(slug) ?? null,

  getRelatedListings: (listing: ListingWithCategory, limit = 4) =>
    listingsAll
      .filter(
        (l) =>
          l.status === 'live' &&
          l.id !== listing.id &&
          (l.categoryId === listing.categoryId || l.replaces.some((r) => listing.replaces.includes(r))),
      )
      .sort((a, b) => cmpFeatured(a, b) || b.githubStars - a.githubStars)
      .slice(0, limit),

  getCategories: (): Category[] => [...categoryList].sort((a, b) => a.sortOrder - b.sortOrder),

  getCategoryBySlug: (slug: string) => categoryBySlug.get(slug) ?? null,

  getCategoriesWithCounts: () =>
    [...categoryList]
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((c) => ({
        ...c,
        count: listingsAll.filter((l) => l.status === 'live' && l.categoryId === c.id).length,
      })),

  getProprietaryToolsWithCounts: () =>
    proprietaryList.map((p) => ({
      ...p,
      categorySlug: categoryList.find((c) => c.id === p.categoryId)?.slug ?? null,
      count: listingsAll.filter((l) => l.status === 'live' && l.replaces.includes(p.slug)).length,
    })),

  getProprietaryToolBySlug: (slug: string) => proprietaryList.find((p) => p.slug === slug) ?? null,

  getAllListingSlugs: () => listingsAll.filter((l) => l.status === 'live').map((l) => l.slug),

  getReplacedProprietarySlugs: () =>
    proprietaryList
      .filter((p) => listingsAll.some((l) => l.status === 'live' && l.replaces.includes(p.slug)))
      .map((p) => p.slug),

  getListingForRedirect: (id: number): RedirectListing | null => {
    const l = listingById.get(id)
    if (!l) return null
    return {
      id: l.id,
      repoUrl: l.repoUrl,
      websiteUrl: l.websiteUrl,
      demoUrl: l.demoUrl,
      affiliateUrl: l.affiliateUrl,
      deployOptions: l.deployOptions,
    }
  },

  comparePairs: (perCategory = 3): string[] => {
    const byCat = new Map<number, string[]>()
    const sorted = [...listingsAll]
      .filter((l) => l.status === 'live')
      .sort((a, b) => cmpFeatured(a, b) || b.githubStars - a.githubStars)
    for (const l of sorted) {
      if (l.categoryId == null) continue
      const arr = byCat.get(l.categoryId) ?? []
      if (arr.length < perCategory) arr.push(l.slug)
      byCat.set(l.categoryId, arr)
    }
    const pairs = new Set<string>()
    for (const slugs of byCat.values()) {
      for (let i = 0; i < slugs.length; i++)
        for (let j = i + 1; j < slugs.length; j++) {
          const [x, y] = [slugs[i], slugs[j]].sort((m, n) => m.localeCompare(n))
          pairs.add(`${x}-vs-${y}`)
        }
    }
    return [...pairs]
  },
}

import 'server-only'
import { and, asc, desc, eq, ilike, ne, or, sql } from 'drizzle-orm'
import { db } from './index'
import {
  categories,
  clickEvents,
  listings,
  proprietaryTools,
  type Category,
  type ListingWithCategory,
  type ProprietaryTool,
} from './schema'
import { isDatabaseConfigured } from '@/lib/env'
import { versusSlug } from '@/lib/slug'
import { staticStore } from './static-store'

/** SQL predicate: this listing is featured AND its paid window hasn't expired. */
const activeFeatured = sql<boolean>`(${listings.featured} = true and (${listings.featuredUntil} is null or ${listings.featuredUntil} > now()))`

type Row = { listings: typeof listings.$inferSelect; categories: Category | null }
const mapRow = (r: Row): ListingWithCategory => ({ ...r.listings, category: r.categories ?? null })

export type ListingSort = 'featured' | 'stars' | 'newest' | 'name' | 'easiest'
export type ListingStatusFilter = 'live' | 'pending' | 'rejected' | 'archived' | 'all'

export type ListingFilters = {
  categorySlug?: string
  /** proprietary slug — listings whose `replaces` contains it. */
  replaces?: string
  tag?: string
  /** only listings with selfHostDifficulty <= this. */
  maxDifficulty?: number
  /** deployOptions contains this label (e.g. "Docker Compose"). */
  deployOption?: string
  /** license starts-with match (e.g. "MIT", "AGPL"). */
  license?: string
  language?: string
  search?: string
  sort?: ListingSort
  status?: ListingStatusFilter
  limit?: number
  offset?: number
}

function buildOrderBy(sort: ListingSort) {
  switch (sort) {
    case 'stars':
      return [desc(activeFeatured), desc(listings.githubStars)]
    case 'newest':
      return [desc(activeFeatured), desc(listings.createdAt)]
    case 'name':
      return [desc(activeFeatured), asc(listings.name)]
    case 'easiest':
      return [
        desc(activeFeatured),
        sql`${listings.selfHostDifficulty} asc nulls last`,
        desc(listings.githubStars),
      ]
    case 'featured':
    default:
      return [
        desc(activeFeatured),
        sql`${listings.featuredRank} asc nulls last`,
        desc(listings.githubStars),
      ]
  }
}

/** Core listing query used by every public page. Returns listings + category. */
export async function getListings(filters: ListingFilters = {}): Promise<ListingWithCategory[]> {
  if (!isDatabaseConfigured()) return staticStore.getListings(filters)
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

  const conditions = []
  if (status !== 'all') conditions.push(eq(listings.status, status))
  if (categorySlug) conditions.push(eq(categories.slug, categorySlug))
  if (replaces) conditions.push(sql`${listings.replaces} @> array[${replaces}]::text[]`)
  if (tag) conditions.push(sql`${listings.tags} @> array[${tag}]::text[]`)
  if (typeof maxDifficulty === 'number')
    conditions.push(sql`${listings.selfHostDifficulty} <= ${maxDifficulty}`)
  if (deployOption) conditions.push(sql`${listings.deployOptions} @> array[${deployOption}]::text[]`)
  if (license) conditions.push(ilike(listings.license, `${license}%`))
  if (language) conditions.push(eq(listings.language, language))
  if (search && search.trim()) {
    const q = `%${search.trim()}%`
    conditions.push(
      or(
        ilike(listings.name, q),
        ilike(listings.tagline, q),
        ilike(listings.descriptionMd, q),
        ilike(listings.language, q),
        sql`array_to_string(${listings.tags}, ' ') ilike ${q}`,
        sql`array_to_string(${listings.replaces}, ' ') ilike ${q}`,
      ),
    )
  }

  try {
    const rows = await db
      .select({ listings, categories })
      .from(listings)
      .leftJoin(categories, eq(listings.categoryId, categories.id))
      .where(conditions.length ? and(...conditions) : undefined)
      .orderBy(...buildOrderBy(sort))
      .limit(limit)
      .offset(offset)
    return rows.map(mapRow)
  } catch (err) {
    console.error('[queries.getListings]', err)
    return []
  }
}

export async function getFeaturedListings(limit = 6): Promise<ListingWithCategory[]> {
  if (!isDatabaseConfigured()) return staticStore.getFeaturedListings(limit)
  try {
    const rows = await db
      .select({ listings, categories })
      .from(listings)
      .leftJoin(categories, eq(listings.categoryId, categories.id))
      .where(and(eq(listings.status, 'live'), activeFeatured))
      .orderBy(sql`${listings.featuredRank} asc nulls last`, desc(listings.githubStars))
      .limit(limit)
    return rows.map(mapRow)
  } catch (err) {
    console.error('[queries.getFeaturedListings]', err)
    return []
  }
}

export async function getLatestListings(limit = 8): Promise<ListingWithCategory[]> {
  return getListings({ sort: 'newest', limit })
}

export async function getTopListings(limit = 8): Promise<ListingWithCategory[]> {
  return getListings({ sort: 'stars', limit })
}

export async function getListingBySlug(slug: string): Promise<ListingWithCategory | null> {
  if (!isDatabaseConfigured()) return staticStore.getListingBySlug(slug)
  try {
    const rows = await db
      .select({ listings, categories })
      .from(listings)
      .leftJoin(categories, eq(listings.categoryId, categories.id))
      .where(eq(listings.slug, slug))
      .limit(1)
    return rows[0] ? mapRow(rows[0]) : null
  } catch (err) {
    console.error('[queries.getListingBySlug]', err)
    return null
  }
}

/**
 * Alternatives in the same niche: shares a category OR a `replaces` target with
 * the current listing. Used in the "related" rail on the detail page.
 */
export async function getRelatedListings(
  listing: ListingWithCategory,
  limit = 4,
): Promise<ListingWithCategory[]> {
  if (!isDatabaseConfigured()) return staticStore.getRelatedListings(listing, limit)
  try {
    const sameCategory = listing.categoryId ? eq(listings.categoryId, listing.categoryId) : undefined
    const sharesReplaces = listing.replaces.length
      ? sql`${listings.replaces} && array[${sql.join(
          listing.replaces.map((r) => sql`${r}`),
          sql`, `,
        )}]::text[]`
      : undefined
    const overlap = [sameCategory, sharesReplaces].filter(Boolean)
    const rows = await db
      .select({ listings, categories })
      .from(listings)
      .leftJoin(categories, eq(listings.categoryId, categories.id))
      .where(
        and(
          eq(listings.status, 'live'),
          ne(listings.id, listing.id),
          overlap.length ? or(...overlap) : sql`true`,
        ),
      )
      .orderBy(desc(activeFeatured), desc(listings.githubStars))
      .limit(limit)
    return rows.map(mapRow)
  } catch (err) {
    console.error('[queries.getRelatedListings]', err)
    return []
  }
}

/** Listings that replace a given proprietary tool. Powers /[slug]-alternatives. */
export async function getListingsReplacing(
  proprietarySlug: string,
  sort: ListingSort = 'featured',
  limit = 60,
): Promise<ListingWithCategory[]> {
  return getListings({ replaces: proprietarySlug, sort, limit })
}

export async function getCategories(): Promise<Category[]> {
  if (!isDatabaseConfigured()) return staticStore.getCategories()
  try {
    return await db.select().from(categories).orderBy(asc(categories.sortOrder), asc(categories.name))
  } catch (err) {
    console.error('[queries.getCategories]', err)
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  if (!isDatabaseConfigured()) return staticStore.getCategoryBySlug(slug)
  try {
    const rows = await db.select().from(categories).where(eq(categories.slug, slug)).limit(1)
    return rows[0] ?? null
  } catch (err) {
    console.error('[queries.getCategoryBySlug]', err)
    return null
  }
}

/** Categories annotated with their live listing count (for the home grid). */
export async function getCategoriesWithCounts(): Promise<(Category & { count: number })[]> {
  if (!isDatabaseConfigured()) return staticStore.getCategoriesWithCounts()
  try {
    const rows = await db
      .select({
        category: categories,
        count: sql<number>`count(${listings.id})::int`,
      })
      .from(categories)
      .leftJoin(listings, and(eq(listings.categoryId, categories.id), eq(listings.status, 'live')))
      .groupBy(categories.id)
      .orderBy(asc(categories.sortOrder), asc(categories.name))
    return rows.map((r) => ({ ...r.category, count: Number(r.count) }))
  } catch (err) {
    console.error('[queries.getCategoriesWithCounts]', err)
    return []
  }
}

export type ProprietaryWithCount = ProprietaryTool & { count: number; categorySlug: string | null }

/** All proprietary tools with how many live listings replace each (for /[x]-alternatives index + home). */
export async function getProprietaryToolsWithCounts(): Promise<ProprietaryWithCount[]> {
  if (!isDatabaseConfigured()) return staticStore.getProprietaryToolsWithCounts()
  try {
    const rows = await db
      .select({
        tool: proprietaryTools,
        categorySlug: categories.slug,
        count: sql<number>`(
          select count(*) from ${listings}
          where ${listings.status} = 'live'
          and ${listings.replaces} @> array[${proprietaryTools.slug}]::text[]
        )::int`,
      })
      .from(proprietaryTools)
      .leftJoin(categories, eq(proprietaryTools.categoryId, categories.id))
      .orderBy(asc(proprietaryTools.name))
    return rows.map((r) => ({ ...r.tool, categorySlug: r.categorySlug ?? null, count: Number(r.count) }))
  } catch (err) {
    console.error('[queries.getProprietaryToolsWithCounts]', err)
    return []
  }
}

export async function getProprietaryToolBySlug(slug: string): Promise<ProprietaryTool | null> {
  if (!isDatabaseConfigured()) return staticStore.getProprietaryToolBySlug(slug)
  try {
    const rows = await db.select().from(proprietaryTools).where(eq(proprietaryTools.slug, slug)).limit(1)
    return rows[0] ?? null
  } catch (err) {
    console.error('[queries.getProprietaryToolBySlug]', err)
    return null
  }
}

export async function getAllListingSlugs(): Promise<string[]> {
  if (!isDatabaseConfigured()) return staticStore.getAllListingSlugs()
  try {
    const rows = await db
      .select({ slug: listings.slug })
      .from(listings)
      .where(eq(listings.status, 'live'))
    return rows.map((r) => r.slug)
  } catch (err) {
    console.error('[queries.getAllListingSlugs]', err)
    return []
  }
}

/** Proprietary slugs that have at least one live alternative (for static params). */
export async function getReplacedProprietarySlugs(): Promise<string[]> {
  if (!isDatabaseConfigured()) return staticStore.getReplacedProprietarySlugs()
  try {
    const rows = await db
      .select({ slug: proprietaryTools.slug })
      .from(proprietaryTools)
      .where(
        sql`exists (select 1 from ${listings} where ${listings.status} = 'live' and ${listings.replaces} @> array[${proprietaryTools.slug}]::text[])`,
      )
    return rows.map((r) => r.slug)
  } catch (err) {
    console.error('[queries.getReplacedProprietarySlugs]', err)
    return []
  }
}

/**
 * Canonical comparison slugs for the top listings in each category (used to
 * pre-render valuable "X vs Y" pages for SEO).
 */
export async function getComparePairs(perCategory = 4): Promise<string[]> {
  if (!isDatabaseConfigured()) return staticStore.comparePairs(perCategory)
  try {
    const rows = await db
      .select({ slug: listings.slug, categoryId: listings.categoryId })
      .from(listings)
      .where(eq(listings.status, 'live'))
      .orderBy(desc(activeFeatured), desc(listings.githubStars))
    const byCat = new Map<number, string[]>()
    for (const r of rows) {
      if (r.categoryId == null) continue
      const arr = byCat.get(r.categoryId) ?? []
      if (arr.length < perCategory) arr.push(r.slug)
      byCat.set(r.categoryId, arr)
    }
    const pairs = new Set<string>()
    for (const slugs of byCat.values()) {
      for (let i = 0; i < slugs.length; i++) {
        for (let j = i + 1; j < slugs.length; j++) {
          pairs.add(versusSlug(slugs[i], slugs[j]))
        }
      }
    }
    return [...pairs]
  } catch (err) {
    console.error('[queries.getComparePairs]', err)
    return []
  }
}

export async function getListingsForCompare(
  slugA: string,
  slugB: string,
): Promise<{ a: ListingWithCategory | null; b: ListingWithCategory | null }> {
  const [a, b] = await Promise.all([getListingBySlug(slugA), getListingBySlug(slugB)])
  return { a, b }
}

/**
 * Canonical "open-source-tool vs proprietary-SaaS" comparison slugs — e.g.
 * appflowy-vs-notion. For each proprietary tool we pair its top `perTool`
 * alternatives. High-intent, AI-cited "X vs Y" pages.
 */
export async function getProprietaryVsPairs(perTool = 2): Promise<string[]> {
  try {
    const tools = await getProprietaryToolsWithCounts()
    const pairs = new Set<string>()
    for (const t of tools) {
      if (t.count === 0) continue
      const alts = await getListingsReplacing(t.slug, 'stars', perTool)
      for (const a of alts) pairs.add(versusSlug(a.slug, t.slug))
    }
    return [...pairs]
  } catch (err) {
    console.error('[queries.getProprietaryVsPairs]', err)
    return []
  }
}

/** Record an outbound click. Best-effort: never throws into the redirect path. */
export async function recordClick(listingId: number, ref?: string | null): Promise<void> {
  if (!isDatabaseConfigured()) return
  try {
    await db.insert(clickEvents).values({ listingId, ref: ref ?? null })
  } catch (err) {
    console.error('[queries.recordClick]', err)
  }
}

export type RedirectListing = {
  id: number
  repoUrl: string
  websiteUrl: string | null
  demoUrl: string | null
  affiliateUrl: string | null
  deployOptions: string[]
}

/** Minimal listing lookup for the /api/go redirect endpoint. */
export async function getListingForRedirect(id: number): Promise<RedirectListing | null> {
  if (!isDatabaseConfigured()) return staticStore.getListingForRedirect(id)
  try {
    const rows = await db
      .select({
        id: listings.id,
        repoUrl: listings.repoUrl,
        websiteUrl: listings.websiteUrl,
        demoUrl: listings.demoUrl,
        affiliateUrl: listings.affiliateUrl,
        deployOptions: listings.deployOptions,
      })
      .from(listings)
      .where(eq(listings.id, id))
      .limit(1)
    return rows[0] ?? null
  } catch (err) {
    console.error('[queries.getListingForRedirect]', err)
    return null
  }
}

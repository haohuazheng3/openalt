import type { ListingWithCategory } from '@/lib/db/schema'
import { isActivelyFeatured } from '@/lib/featured'
import type { CompareRow } from '@/components/comparison-table'

/** Map listings → the serializable shape the sortable ComparisonTable consumes. */
export function toCompareRows(listings: ListingWithCategory[]): CompareRow[] {
  return listings.map((l) => ({
    id: l.id,
    slug: l.slug,
    name: l.name,
    repoUrl: l.repoUrl,
    stars: l.githubStars,
    difficulty: l.selfHostDifficulty,
    deploy: l.deployOptions,
    managed: l.hasManagedHosting,
    license: l.license,
    language: l.language,
    lastCommitISO: l.lastCommitAt ? new Date(l.lastCommitAt).toISOString() : null,
    featured: isActivelyFeatured(l),
    category: l.category?.name ?? null,
    categorySlug: l.category?.slug ?? null,
  }))
}

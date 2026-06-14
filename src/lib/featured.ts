import type { Listing } from '@/lib/db/schema'

/** A listing counts as featured only while its paid window is still open. */
export function isActivelyFeatured(
  listing: Pick<Listing, 'featured' | 'featuredUntil'>,
): boolean {
  if (!listing.featured) return false
  if (!listing.featuredUntil) return true
  return new Date(listing.featuredUntil).getTime() > Date.now()
}

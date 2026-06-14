import { NextResponse, type NextRequest } from 'next/server'
import { getListingForRedirect, recordClick, type RedirectListing } from '@/lib/db/queries'
import { hostingById, hostingDeployUrl } from '@/lib/hosting'

// Needs the Postgres client, so run on Node (not Edge). Never cached.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Resolve where an outbound click should go, based on the `to` param.
 *
 *   to=<platformId>  → hosting deploy/affiliate URL (railway, render, pikapods…)
 *   to=repo          → the GitHub repo
 *   to=website       → project homepage
 *   to=demo          → live demo
 *   (none)           → affiliate URL first, else the repo
 *
 * Returns the destination URL and a `ref` label for the click log.
 */
function resolveTarget(listing: RedirectListing, to: string | null): { url: string | null; ref: string } {
  if (to && hostingById(to)) {
    return { url: hostingDeployUrl(to, listing.repoUrl) ?? listing.repoUrl, ref: `deploy:${to}` }
  }
  switch (to) {
    case 'repo':
      return { url: listing.repoUrl, ref: 'repo' }
    case 'website':
      return { url: listing.websiteUrl ?? listing.repoUrl, ref: 'website' }
    case 'demo':
      return { url: listing.demoUrl ?? listing.repoUrl, ref: 'demo' }
    default:
      // Affiliate-first: monetized link wins when present.
      return { url: listing.affiliateUrl || listing.repoUrl, ref: 'default' }
  }
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  const home = new URL('/', req.url)
  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.redirect(home, 302)
  }

  const listing = await getListingForRedirect(id)
  if (!listing) {
    return NextResponse.redirect(home, 302)
  }

  const to = req.nextUrl.searchParams.get('to')
  const { url: target, ref } = resolveTarget(listing, to)

  // Best-effort logging — must never block or break the redirect.
  await recordClick(id, ref)

  if (!target) return NextResponse.redirect(home, 302)
  try {
    const url = new URL(target) // validate it's absolute
    return NextResponse.redirect(url.toString(), 302)
  } catch {
    return NextResponse.redirect(home, 302)
  }
}

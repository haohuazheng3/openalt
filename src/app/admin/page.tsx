import Link from 'next/link'
import type { Metadata } from 'next'
import { Lock, TriangleAlert } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  getAdminCounts,
  getAdminListings,
  getSubmissions,
  type ListingPayload,
} from '@/lib/db/admin-queries'
import { isAdmin } from '@/lib/auth'
import { isClerkConfigured } from '@/lib/env'
import { isActivelyFeatured } from '@/lib/featured'
import {
  approveSubmissionAction,
  rejectSubmissionAction,
  setStatusAction,
  toggleFeaturedAction,
  updateAffiliateAction,
} from './actions'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
}

const cellSelect =
  'h-8 rounded-md border border-input bg-background px-2 text-xs shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export default async function AdminPage() {
  if (!(await isAdmin())) {
    return (
      <div className="container max-w-md py-24 text-center">
        <Lock className="mx-auto size-10 text-muted-foreground" />
        <h1 className="mt-4 text-2xl font-bold">Admin access required</h1>
        <p className="mt-2 text-muted-foreground">
          Sign in with an email listed in <code>ADMIN_EMAILS</code> to manage the directory.
        </p>
      </div>
    )
  }

  const [counts, listings, submissions] = await Promise.all([
    getAdminCounts(),
    getAdminListings(),
    getSubmissions(),
  ])
  const pending = submissions.filter((s) => s.status === 'pending')

  const stats = [
    { label: 'Live listings', value: counts.liveListings },
    { label: 'Featured (active)', value: counts.featuredActive },
    { label: 'Pending submissions', value: counts.pendingSubmissions },
    { label: 'Pending listings', value: counts.pendingListings },
    { label: 'Archived', value: counts.archivedListings },
    { label: 'Total outbound clicks', value: counts.totalClicks },
  ]

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold tracking-tight">Admin</h1>

      {!isClerkConfigured() && (
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" />
          <span>
            Clerk isn’t configured, so admin is <strong>open</strong> in this environment. Configure Clerk and{' '}
            <code>ADMIN_EMAILS</code> before deploying publicly.
          </span>
        </div>
      )}

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s) => (
          <Card key={s.label} className="p-4">
            <div className="text-2xl font-bold tabular-nums">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </Card>
        ))}
      </div>

      {/* Pending submissions */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Pending submissions ({pending.length})</h2>
        {pending.length === 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">Nothing waiting for review.</p>
        ) : (
          <div className="mt-3 space-y-3">
            {pending.map((s) => {
              const p = (s.payload as ListingPayload | null) ?? null
              return (
                <Card key={s.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="font-medium">{p?.name ?? `Submission #${s.id}`}</div>
                    <div className="truncate text-sm text-muted-foreground">
                      {p?.repoUrl}
                      {p?.categorySlug ? ` · ${p.categorySlug}` : ''}
                      {p?.replaces?.length ? ` · replaces ${p.replaces.join(', ')}` : ''}
                    </div>
                    {p?.tagline && <div className="text-sm text-muted-foreground">{p.tagline}</div>}
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <form action={approveSubmissionAction}>
                      <input type="hidden" name="id" value={s.id} />
                      <Button size="sm">Approve</Button>
                    </form>
                    <form action={rejectSubmissionAction}>
                      <input type="hidden" name="id" value={s.id} />
                      <Button size="sm" variant="outline">Reject</Button>
                    </form>
                  </div>
                </Card>
              )
            })}
          </div>
        )}
      </section>

      {/* Listings table */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Listings ({listings.length})</h2>
        <div className="mt-3 overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/40 text-left text-xs uppercase text-muted-foreground">
                <th className="p-3">Project</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Clicks</th>
                <th className="p-3">Featured</th>
                <th className="p-3">Affiliate</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((l) => (
                <tr key={l.id} className="border-b align-top last:border-0">
                  <td className="p-3">
                    <Link href={`/${l.slug}`} className="font-medium hover:underline">{l.name}</Link>
                    <div className="text-xs text-muted-foreground">
                      {l.category?.name ?? '—'} · {l.githubStars.toLocaleString()} ★
                    </div>
                  </td>
                  <td className="p-3">
                    <form action={setStatusAction} className="flex items-center gap-1">
                      <input type="hidden" name="id" value={l.id} />
                      <select name="status" defaultValue={l.status} className={cellSelect}>
                        <option value="live">live</option>
                        <option value="pending">pending</option>
                        <option value="rejected">rejected</option>
                        <option value="archived">archived</option>
                      </select>
                      <Button size="sm" variant="ghost" className="h-8 px-2 text-xs">Set</Button>
                    </form>
                  </td>
                  <td className="p-3 text-right tabular-nums">{l.clicks}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      {isActivelyFeatured(l) ? (
                        <Badge variant="sponsored">Active</Badge>
                      ) : l.featured ? (
                        <Badge variant="muted">Expired</Badge>
                      ) : null}
                      <form action={toggleFeaturedAction}>
                        <input type="hidden" name="id" value={l.id} />
                        <input type="hidden" name="featured" value={l.featured ? '0' : '1'} />
                        <Button size="sm" variant={l.featured ? 'secondary' : 'default'} className="h-8 px-2 text-xs">
                          {l.featured ? 'Unfeature' : 'Feature'}
                        </Button>
                      </form>
                    </div>
                  </td>
                  <td className="p-3">
                    <details>
                      <summary className="cursor-pointer select-none text-xs text-muted-foreground">
                        {l.affiliateUrl ? '✓ ' : ''}
                        {l.affiliateNetwork ?? 'set link'}
                      </summary>
                      <form action={updateAffiliateAction} className="mt-2 flex flex-col gap-1">
                        <input type="hidden" name="id" value={l.id} />
                        <input name="affiliateUrl" defaultValue={l.affiliateUrl ?? ''} placeholder="https://affiliate-link…" className="h-8 w-56 rounded-md border border-input bg-background px-2 text-xs shadow-sm" />
                        <input name="affiliateNetwork" defaultValue={l.affiliateNetwork ?? ''} placeholder="Network (Railway, PartnerStack…)" className="h-8 w-56 rounded-md border border-input bg-background px-2 text-xs shadow-sm" />
                        <Button size="sm" variant="outline" className="h-8 w-20 text-xs">Save</Button>
                      </form>
                    </details>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

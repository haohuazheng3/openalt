import Link from 'next/link'
import type { Metadata } from 'next'
import { Check, Github, Sparkles, Star, TriangleAlert } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FEATURED, SITE } from '@/lib/constants'
import { getListingOptions } from '@/lib/db/admin-queries'
import { isStripeConfigured } from '@/lib/env'
import { buildMetadata } from '@/lib/seo'
import { CATEGORIES } from '@/data/categories'
import { PROPRIETARY_TOOLS } from '@/data/proprietary-tools'
import { SEED_LISTINGS } from '@/data/seed-listings'

const STATS = [
  { value: `${SEED_LISTINGS.filter((l) => (l.status ?? 'live') !== 'archived').length}+`, label: 'projects indexed' },
  { value: `${PROPRIETARY_TOOLS.length}`, label: '“X alternatives” pages' },
  { value: `${CATEGORIES.length}`, label: 'categories' },
  { value: 'High', label: 'buyer intent' },
]

export const dynamic = 'force-dynamic'

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Advertise — Get your project featured',
    description: `Feature your open-source project (or hosting platform) at the top of its category and the relevant “X alternatives” pages on ${SITE.name}. Self-serve, ${FEATURED.priceLabel}/${FEATURED.interval}, cancel anytime.`,
    path: '/advertise',
  })
}

export default async function AdvertisePage({
  searchParams,
}: {
  searchParams: { canceled?: string }
}) {
  const options = await getListingOptions()
  const stripeReady = isStripeConfigured()

  return (
    <div className="container max-w-3xl py-14">
      <div className="text-center">
        <div className="mx-auto inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900">
          <Sparkles className="size-3.5" /> Featured placement
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Put your project in front of self-hosters</h1>
        <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
          Our visitors arrive ready to ditch a SaaS and run something they own. Feature your project — or your
          hosting platform — to land at the top of its category and the relevant “alternatives” pages.
        </p>
      </div>

      {/* Intent / reach stats */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((s) => (
          <Card key={s.label} className="p-4 text-center">
            <div className="text-2xl font-bold tabular-nums">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </Card>
        ))}
      </div>

      {/* What featured looks like */}
      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">What a featured placement looks like</h2>
        <Card className="relative mt-3 flex flex-col gap-3 p-5 ring-1 ring-amber-300/70 sm:max-w-sm">
          <Badge variant="sponsored" className="absolute right-3 top-3 gap-1">
            <Sparkles className="size-3" /> Sponsored
          </Badge>
          <div className="flex items-center gap-3 pr-20">
            <span className="flex size-10 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
              <Github className="size-5" />
            </span>
            <div>
              <span className="font-semibold">Your project</span>
              <div className="text-xs text-muted-foreground">Pinned to the top · highlighted card</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Your tagline, shown above the fold on its category and every “alternatives” page it qualifies for.</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Star className="size-3.5 text-amber-500" /> Affiliate-first deploy &amp; visit buttons send buyers straight to you.
          </div>
        </Card>
      </div>

      {searchParams.canceled && (
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-3 text-center text-sm text-amber-900">
          Checkout canceled — no charge was made.
        </div>
      )}

      <Card className="mt-10 overflow-hidden">
        <div className="grid gap-0 sm:grid-cols-5">
          <div className="border-b p-6 sm:col-span-3 sm:border-b-0 sm:border-r">
            <h2 className="text-lg font-semibold">What you get</h2>
            <ul className="mt-4 space-y-3">
              {FEATURED.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center p-6 sm:col-span-2">
            <div className="text-3xl font-bold">
              {FEATURED.priceLabel}
              <span className="text-base font-normal text-muted-foreground">/{FEATURED.interval}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Billed monthly. Cancel anytime.</p>

            {!stripeReady ? (
              <div className="mt-5 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
                <TriangleAlert className="mt-0.5 size-4 shrink-0" />
                <span>
                  Stripe isn’t configured yet. Add <code>STRIPE_SECRET_KEY</code> and{' '}
                  <code>NEXT_PUBLIC_STRIPE_FEATURED_PRICE_ID</code> to enable checkout.
                </span>
              </div>
            ) : options.length === 0 ? (
              <p className="mt-5 text-sm text-muted-foreground">
                No listings available yet.{' '}
                <Link href="/submit" className="text-primary hover:underline">Submit your project</Link> first.
              </p>
            ) : (
              <form action="/api/stripe/checkout" method="post" className="mt-5 space-y-3">
                <label className="block text-sm font-medium">
                  Which project?
                  <select
                    name="listingId"
                    required
                    className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {options.map((o) => (
                      <option key={o.id} value={o.id}>{o.name}</option>
                    ))}
                  </select>
                </label>
                <Button type="submit" size="lg" className="w-full">
                  Get featured — {FEATURED.priceLabel}/{FEATURED.interval}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Don’t see your project?{' '}
                  <Link href="/submit" className="text-primary hover:underline">Submit it</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </Card>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Sponsored placements are always labeled. Editorial rankings on “alternatives” pages reflect genuine fit and
        self-host difficulty.
      </p>
    </div>
  )
}

import Link from 'next/link'
import { ArrowRight, Boxes, GitFork, Rocket, ShieldCheck } from 'lucide-react'
import { CategoryGrid } from '@/components/category-grid'
import { HeroSearch } from '@/components/hero-search'
import { ListingCard } from '@/components/listing-card'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { CATEGORIES } from '@/data/categories'
import { alternativesSlug } from '@/data/proprietary-tools'
import {
  getCategoriesWithCounts,
  getFeaturedListings,
  getProprietaryToolsWithCounts,
  getTopListings,
} from '@/lib/db/queries'

// Listing data is refreshed daily (ISR).
export const revalidate = 86400

export default async function HomePage() {
  const [featured, top, categories, proprietary] = await Promise.all([
    getFeaturedListings(6),
    getTopListings(8),
    getCategoriesWithCounts(),
    getProprietaryToolsWithCounts(),
  ])

  const categoryItems = categories.length ? categories : CATEGORIES
  // Most-covered SaaS first — the high-intent "X alternatives" entry points.
  const popularSaaS = proprietary.filter((p) => p.count > 0).sort((a, b) => b.count - a.count).slice(0, 18)

  return (
    <>
      {/* Hero */}
      <section className="hero-grid border-b">
        <div className="container flex flex-col items-center gap-6 py-20 text-center">
          <Badge variant="secondary" className="gap-1.5">
            <Boxes className="size-3.5" /> {top.length ? `${Math.max(top.length, 150)}+` : '150+'} open-source projects, self-host scored
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Open-source alternatives to the SaaS you’re tired of paying for
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Every listing comes with a <strong className="text-foreground">self-host difficulty score</strong>, a{' '}
            <strong className="text-foreground">one-click deploy</strong> path, and an honest look at where it still
            falls short of the original. Own your tools — stop renting them.
          </p>
          <HeroSearch />
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-4 text-primary" /> Difficulty 1–5 rubric</span>
            <span className="inline-flex items-center gap-1.5"><Rocket className="size-4 text-primary" /> Railway · Render · PikaPods</span>
            <span className="inline-flex items-center gap-1.5"><GitFork className="size-4 text-primary" /> Live stars &amp; freshness</span>
          </div>
        </div>
      </section>

      {/* Hub band */}
      <section className="border-b bg-muted/20">
        <div className="container grid gap-3 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: '/self-hosted', title: 'Self-hosted directory', desc: 'Every app in one sortable table' },
            { href: '/easiest-self-hosted-apps', title: 'Easiest to self-host', desc: 'Ranked by difficulty score' },
            { href: '/open-source-alternatives', title: 'Browse by SaaS', desc: '56 “X alternatives” pages' },
            { href: '/reports/self-host-difficulty-index', title: 'Difficulty index', desc: 'Data report by category' },
          ].map((h) => (
            <Link key={h.href} href={h.href} className="group flex items-center justify-between gap-2 rounded-lg border bg-background px-4 py-3 transition-colors hover:border-primary/40">
              <div>
                <div className="text-sm font-semibold group-hover:text-primary">{h.title}</div>
                <div className="text-xs text-muted-foreground">{h.desc}</div>
              </div>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="container py-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Featured projects</h2>
              <p className="text-sm text-muted-foreground">Sponsored placements from projects &amp; hosts we partner with.</p>
            </div>
            <Link href="/advertise" className="text-sm font-medium text-primary hover:underline">
              Get featured →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </section>
      )}

      {/* Browse by SaaS — the "X alternatives" entry points */}
      <section id="alternatives" className="scroll-mt-20 border-y bg-muted/30 py-14">
        <div className="container">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Find an alternative to…</h2>
              <p className="text-sm text-muted-foreground">
                Pick the product you want to replace. We’ll show every open-source project that does its job.
              </p>
            </div>
            <Link href="/open-source-alternatives" className="shrink-0 text-sm font-medium text-primary hover:underline">
              See all →
            </Link>
          </div>
          {popularSaaS.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {popularSaaS.map((p) => (
                <Link key={p.slug} href={`/${alternativesSlug(p.slug)}`}>
                  <Card className="flex h-full flex-col gap-1 p-4 transition-colors hover:border-primary/40">
                    <span className="font-semibold leading-tight">{p.name}</span>
                    <span className="text-xs text-muted-foreground">{p.count} alternatives →</span>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Seed the database to populate alternatives.</p>
          )}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="container scroll-mt-20 py-14">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Browse by category</h2>
          <p className="text-sm text-muted-foreground">Organized by the kind of SaaS being replaced.</p>
        </div>
        <CategoryGrid categories={categoryItems} />
      </section>

      {/* Top projects */}
      {top.length > 0 && (
        <section className="container py-14">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Most-starred projects</h2>
            <Link href="/search?sort=stars" className="text-sm font-medium text-primary hover:underline">
              See all <ArrowRight className="inline size-3.5" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {top.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}

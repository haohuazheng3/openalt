import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Server } from 'lucide-react'
import { EmptyState } from '@/components/empty-state'
import { JsonLd } from '@/components/json-ld'
import { ListingCard } from '@/components/listing-card'
import { CATEGORIES, CATEGORY_SLUGS } from '@/data/categories'
import { getCategoryBySlug, getListings } from '@/lib/db/queries'
import { breadcrumbLd, buildMetadata, itemListLd } from '@/lib/seo'

export const revalidate = 86400

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((category) => ({ category }))
}

function staticCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug) ?? null
}

function headlineFor(slug: string, name: string) {
  return staticCategory(slug)?.selfHostHeadline ?? `Self-Hosted ${name} Tools`
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = (await getCategoryBySlug(params.category)) ?? staticCategory(params.category)
  if (!category) return {}
  const headline = headlineFor(params.category, category.name)
  return buildMetadata({
    title: `${headline} (2026)`,
    description: `The easiest open-source ${category.name.toLowerCase()} tools to self-host in 2026 — ranked by self-host difficulty, with one-click deploy options.`,
    path: `/self-hosted/${params.category}`,
    ogSubtitle: 'Ranked by how easy they are to host',
  })
}

export default async function SelfHostedPage({ params }: { params: { category: string } }) {
  const category = (await getCategoryBySlug(params.category)) ?? staticCategory(params.category)
  if (!category) notFound()

  const headline = headlineFor(params.category, category.name)
  // Easiest to self-host first (featured respected), capped at a curated dozen.
  const listings = await getListings({ categorySlug: params.category, sort: 'easiest', limit: 12 })

  return (
    <div className="container max-w-5xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: category.name, path: `/category/${params.category}` },
            { name: 'Self-hosted', path: `/self-hosted/${params.category}` },
          ]),
          itemListLd(listings, headline),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href={`/category/${params.category}`} className="hover:text-foreground">{category.name}</Link> /{' '}
        <span className="text-foreground">Self-hosted</span>
      </nav>

      <div className="flex items-center gap-2">
        <Server className="size-6 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{headline} (2026)</h1>
      </div>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Ranked by how painless they are to run yourself — from one-click deploys and single <code className="rounded bg-muted px-1 text-sm">docker run</code> commands up to multi-service stacks. Lower difficulty first.
      </p>

      {listings.length === 0 ? (
        <div className="mt-8"><EmptyState message={`No self-hostable ${category.name} tools yet.`} /></div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l, i) => (
            <ListingCard key={l.id} listing={l} rank={i + 1} showCategory={false} />
          ))}
        </div>
      )}

      <div className="mt-8">
        <Link href={`/category/${params.category}`} className="text-sm font-medium text-primary hover:underline">
          ← See all {category.name} projects
        </Link>
      </div>
    </div>
  )
}

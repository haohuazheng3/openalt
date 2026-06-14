import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Server } from 'lucide-react'
import { EmptyState } from '@/components/empty-state'
import { JsonLd } from '@/components/json-ld'
import { ListingCard } from '@/components/listing-card'
import { ListingFilters } from '@/components/listing-filters'
import { CATEGORIES, CATEGORY_SLUGS } from '@/data/categories'
import { getCategoryBySlug, getListings, type ListingSort } from '@/lib/db/queries'
import { breadcrumbLd, buildMetadata, itemListLd } from '@/lib/seo'

export const revalidate = 86400

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((slug) => ({ slug }))
}

function staticCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug) ?? null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = (await getCategoryBySlug(params.slug)) ?? staticCategory(params.slug)
  if (!category) return {}
  return buildMetadata({
    title: `${category.name} — Open-Source Alternatives`,
    description:
      category.description ??
      `Open-source, self-hostable ${category.name} tools — compared by stars, license, self-host difficulty, and deploy options.`,
    path: `/category/${params.slug}`,
    ogSubtitle: 'Self-hostable · difficulty-scored',
  })
}

type SearchParams = { sort?: string; maxdiff?: string; deploy?: string; license?: string }

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: SearchParams
}) {
  const category = (await getCategoryBySlug(params.slug)) ?? staticCategory(params.slug)
  if (!category) notFound()

  const sort = (searchParams.sort as ListingSort) ?? 'featured'
  const listings = await getListings({
    categorySlug: params.slug,
    sort,
    maxDifficulty: searchParams.maxdiff ? Number(searchParams.maxdiff) : undefined,
    deployOption: searchParams.deploy,
    license: searchParams.license,
  })

  // Build filter option lists from the (unfiltered) category set.
  const allInCategory = await getListings({ categorySlug: params.slug, limit: 200 })
  const deployOptions = Array.from(new Set(allInCategory.flatMap((l) => l.deployOptions))).sort()
  const licenses = Array.from(new Set(allInCategory.map((l) => l.license).filter(Boolean) as string[])).sort()

  return (
    <div className="container py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: category.name, path: `/category/${params.slug}` },
          ]),
          itemListLd(listings, `${category.name} — open-source alternatives`),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">{category.name}</span>
      </nav>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
          {category.description && (
            <p className="mt-1 max-w-2xl text-muted-foreground">{category.description}</p>
          )}
        </div>
        <Link
          href={`/self-hosted/${params.slug}`}
          className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm font-medium hover:bg-accent"
        >
          <Server className="size-4 text-primary" /> Easiest to self-host
        </Link>
      </div>

      <div className="mb-6 flex items-center justify-between gap-4">
        <ListingFilters deployOptions={deployOptions} licenses={licenses} />
        <span className="shrink-0 text-sm text-muted-foreground">{listings.length} projects</span>
      </div>

      {listings.length === 0 ? (
        <EmptyState message={`No ${category.name} projects match your filters.`} />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} showCategory={false} />
          ))}
        </div>
      )}
    </div>
  )
}

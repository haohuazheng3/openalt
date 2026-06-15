import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { Faq } from '@/components/faq'
import { JsonLd } from '@/components/json-ld'
import { Card } from '@/components/ui/card'
import { CATEGORIES } from '@/data/categories'
import { alternativesSlug } from '@/data/proprietary-tools'
import { getCategories, getProprietaryToolsWithCounts } from '@/lib/db/queries'
import { breadcrumbLd, buildMetadata, faqLd } from '@/lib/seo'
import { formatDate } from '@/lib/utils'

export const revalidate = 86400

const FAQS = [
  { q: 'Are these alternatives really free?', a: 'Yes — every project listed is open source, so the software itself is free to self-host. Some also offer an optional paid managed-hosting plan if you’d rather not run a server yourself.' },
  { q: 'How do I pick the right alternative?', a: 'Open any “X alternatives” page and sort the comparison table by self-host difficulty (easiest first), GitHub stars (most popular), or last updated (most active). Each option also shows an honest feature-gap vs the original SaaS.' },
  { q: 'Can I migrate my data from the SaaS?', a: 'Most mature open-source alternatives provide importers or support standard formats (CSV, Markdown, JSON). Check the individual project page and its docs; we note migration support where it exists.' },
]

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Open-Source Alternatives to Popular SaaS (2026)',
    description: 'Every popular SaaS and its best open-source, self-hostable alternatives — Notion, Airtable, Zapier, Slack, Google Analytics and 50+ more. Each replacement is scored for self-host difficulty with one-click deploy options.',
    path: '/open-source-alternatives',
    ogSubtitle: 'Every SaaS → its open-source replacements',
  })
}

export default async function OpenSourceAlternativesHub() {
  const [tools, dbCats] = await Promise.all([getProprietaryToolsWithCounts(), getCategories()])
  const covered = tools.filter((t) => t.count > 0)
  const cats = (dbCats.length ? dbCats : CATEGORIES).map((c) => ({ slug: c.slug, name: c.name }))

  const byCat = new Map<string, typeof covered>()
  for (const t of covered) {
    const k = t.categorySlug ?? 'other'
    byCat.set(k, [...(byCat.get(k) ?? []), t])
  }

  return (
    <div className="container max-w-5xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Open-source alternatives', path: '/open-source-alternatives' },
          ]),
          faqLd(FAQS),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">Open-source alternatives</span>
      </nav>

      <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        Open-Source Alternatives to Popular SaaS
      </h1>
      <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
        Pick the product you’re paying for and we’ll show every open-source, self-hostable project that
        replaces it — each scored for how hard it is to self-host, with one-click deploy paths and an
        honest look at what you give up. {covered.length} SaaS products covered.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        Last updated {formatDate(new Date())} · also browse the full <Link href="/self-hosted" className="text-primary hover:underline">self-hosted directory</Link>
      </p>

      {cats.map((c) => {
        const items = byCat.get(c.slug)
        if (!items?.length) return null
        return (
          <section key={c.slug} className="mt-10">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold">{c.name}</h2>
              <Link href={`/category/${c.slug}`} className="text-sm text-primary hover:underline">
                View category →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items
                .sort((a, b) => b.count - a.count)
                .map((t) => (
                  <Link key={t.slug} href={`/${alternativesSlug(t.slug)}`}>
                    <Card className="flex items-center justify-between gap-2 p-4 transition-colors hover:border-primary/40">
                      <div>
                        <div className="font-semibold">{t.name} alternatives</div>
                        <div className="text-xs text-muted-foreground">{t.count} open-source {t.count === 1 ? 'option' : 'options'}</div>
                      </div>
                      <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                    </Card>
                  </Link>
                ))}
            </div>
          </section>
        )
      })}

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Frequently asked questions</h2>
        <Faq items={FAQS} />
      </section>
    </div>
  )
}

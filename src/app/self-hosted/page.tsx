import Link from 'next/link'
import type { Metadata } from 'next'
import { CalendarClock, Gauge, Rocket, ServerCog } from 'lucide-react'
import { CategoryGrid } from '@/components/category-grid'
import { ComparisonTable } from '@/components/comparison-table'
import { Faq } from '@/components/faq'
import { JsonLd } from '@/components/json-ld'
import { Card } from '@/components/ui/card'
import { CATEGORIES } from '@/data/categories'
import { getCategoriesWithCounts, getListings } from '@/lib/db/queries'
import { breadcrumbLd, buildMetadata, datasetLd, faqLd, itemListLd } from '@/lib/seo'
import { toCompareRows } from '@/lib/rows'
import { formatDate } from '@/lib/utils'

export const revalidate = 86400

const FAQS = [
  { q: 'What is self-hosting?', a: 'Self-hosting means running software on a server you control — your own VPS, home server, or a managed host — instead of paying for a vendor’s cloud SaaS. You own the data and avoid per-seat subscription fees.' },
  { q: 'What does the self-host difficulty score mean?', a: 'It’s a 1–5 rating of how hard a project is to run: 1 = a one-click deploy or official managed hosting, 2 = a single `docker run`, 3 = docker-compose with a few services, 4 = manual database/reverse-proxy/dependency setup, 5 = a complex multi-component stack or thin docs.' },
  { q: 'Which self-hosted apps are easiest to deploy?', a: 'Sort the table by “Self-host” to see difficulty 1–2 projects first, or visit our Easiest Self-Hosted Apps guide. Anything with a “1-click” badge can be deployed on Railway, Render, or PikaPods in minutes.' },
  { q: 'How do you keep this list current?', a: 'Stars, last-commit dates, and archived status are refreshed from the GitHub API on a weekly schedule, and abandoned projects are flagged so you don’t deploy something that’s no longer maintained.' },
]

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Self-Hosted Software Directory',
    description: 'The complete directory of open-source, self-hostable software — each project scored 1–5 for self-host difficulty, with one-click deploy options, live GitHub freshness, and feature-gap comparisons. Sort and compare every app in one table.',
    path: '/self-hosted',
    ogSubtitle: 'Difficulty-scored · deploy-ready · always fresh',
  })
}

export default async function SelfHostedHub() {
  const [listings, categories] = await Promise.all([
    getListings({ sort: 'stars', limit: 300 }),
    getCategoriesWithCounts(),
  ])
  const rows = toCompareRows(listings)
  const categoryItems = categories.length ? categories : CATEGORIES
  const oneClick = listings.filter((l) => l.deployOptions.includes('One-Click')).length
  const easy = listings.filter((l) => (l.selfHostDifficulty ?? 5) <= 2).length

  const stats = [
    { icon: ServerCog, value: listings.length, label: 'projects, scored' },
    { icon: Gauge, value: easy, label: 'easy (difficulty ≤ 2)' },
    { icon: Rocket, value: oneClick, label: 'with one-click deploy' },
    { icon: CalendarClock, value: categoryItems.length, label: 'categories' },
  ]

  return (
    <div className="container max-w-6xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Self-hosted directory', path: '/self-hosted' },
          ]),
          itemListLd(listings, 'Self-hosted open-source software'),
          datasetLd({
            name: 'Self-hosted software directory',
            description: `${listings.length} open-source, self-hostable projects with self-host difficulty scores, deploy options, GitHub stars and freshness.`,
            path: '/self-hosted',
          }),
          faqLd(FAQS),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">Self-hosted directory</span>
      </nav>

      <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        Self-Hosted Software Directory
      </h1>
      <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
        Every open-source, self-hostable app in one place — and unlike other lists, each one is scored
        <strong className="text-foreground"> 1–5 for how hard it is to actually run</strong>, with one-click
        deploy paths, live GitHub freshness, and an honest feature-gap vs the SaaS it replaces. Sort the
        table to find the easiest, the most popular, or the most actively maintained.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        Data from the GitHub API · Last updated {formatDate(new Date())} · {listings.length} projects tracked
      </p>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="flex items-center gap-3 p-4">
            <s.icon className="size-5 shrink-0 text-primary" />
            <div>
              <div className="text-xl font-bold tabular-nums">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Guides */}
      <div className="mt-6 flex flex-wrap gap-2 text-sm">
        <Link href="/easiest-self-hosted-apps" className="rounded-md border px-3 py-1.5 hover:bg-accent">Easiest to self-host →</Link>
        <Link href="/self-hosting-for-beginners" className="rounded-md border px-3 py-1.5 hover:bg-accent">Self-hosting for beginners →</Link>
        <Link href="/self-host-savings-calculator" className="rounded-md border px-3 py-1.5 hover:bg-accent">Savings calculator →</Link>
        <Link href="/open-source-alternatives" className="rounded-md border px-3 py-1.5 hover:bg-accent">Browse by SaaS →</Link>
        <Link href="/reports/one-click-deploy-apps" className="rounded-md border px-3 py-1.5 hover:bg-accent">One-click deploy apps →</Link>
        <Link href="/reports/archived-self-hosted-projects" className="rounded-md border px-3 py-1.5 hover:bg-accent">Dead projects to avoid →</Link>
      </div>

      {/* Master comparison table */}
      <section className="mt-10">
        <div className="mb-3 flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold">Compare all {listings.length} self-hosted apps</h2>
          <span className="hidden text-xs text-muted-foreground sm:inline">Tap a column header to sort</span>
        </div>
        <ComparisonTable rows={rows} showCategory />
      </section>

      {/* Categories */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Browse by category</h2>
        <CategoryGrid categories={categoryItems} />
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Self-hosting FAQ</h2>
        <Faq items={FAQS} />
      </section>
    </div>
  )
}

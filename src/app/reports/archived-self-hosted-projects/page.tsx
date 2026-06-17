import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Github, TriangleAlert } from 'lucide-react'
import { Faq } from '@/components/faq'
import { GoButton } from '@/components/go-button'
import { JsonLd } from '@/components/json-ld'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { getListings } from '@/lib/db/queries'
import type { ListingWithCategory } from '@/lib/db/schema'
import { proprietaryBySlug } from '@/data/proprietary-tools'
import { breadcrumbLd, buildMetadata, datasetLd, faqLd } from '@/lib/seo'
import { formatDate, relativeFromNow } from '@/lib/utils'

export const revalidate = 86400

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Archived Self-Hosted Projects to Avoid (2026)',
    description: 'Open-source self-hosted projects that are archived or abandoned — yet other lists still recommend them. For each dead project we show how long it’s been inactive and a maintained alternative to use instead.',
    path: '/reports/archived-self-hosted-projects',
    ogSubtitle: 'Dead projects other lists still recommend',
  })
}

function liveAlternative(archived: ListingWithCategory, live: ListingWithCategory[]): ListingWithCategory | null {
  const byReplaces = live.find((l) => l.replaces.some((r) => archived.replaces.includes(r)))
  if (byReplaces) return byReplaces
  return live.find((l) => l.categoryId === archived.categoryId) ?? null
}

export default async function ArchivedReport() {
  const [archived, live] = await Promise.all([
    getListings({ status: 'archived', sort: 'stars', limit: 100 }),
    getListings({ sort: 'stars', limit: 300 }),
  ])

  const faqs = [
    { q: 'Why avoid archived self-hosted projects?', a: 'An archived or long-abandoned repo gets no security patches, no bug fixes, and no compatibility updates. Self-hosting it means you own those risks. Many “best of” lists are recycled and still recommend these dead projects.' },
    { q: 'How do you detect dead projects?', a: 'We pull last-commit dates and the GitHub archived flag weekly. A repo that’s archived, or hasn’t been pushed to in over a year, is marked archived here and a maintained alternative is suggested.' },
    { q: 'A project here is actually still maintained — what gives?', a: 'Maintenance can resume. We re-check weekly; if a repo becomes active again it’s automatically un-archived. If you spot one, let us know via the submit page.' },
  ]

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Self-hosted', path: '/self-hosted' },
            { name: 'Archived projects to avoid', path: '/reports/archived-self-hosted-projects' },
          ]),
          datasetLd({
            name: 'Archived / abandoned self-hosted projects',
            description: 'Open-source self-hosted projects that are archived or long-abandoned, with a maintained alternative for each.',
            path: '/reports/archived-self-hosted-projects',
          }),
          faqLd(faqs),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href="/self-hosted" className="hover:text-foreground">Self-hosted</Link> /{' '}
        <span className="text-foreground">Archived projects</span>
      </nav>

      <p className="text-xs font-medium uppercase tracking-wide text-primary">Data report</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
        Archived Self-Hosted Projects to Avoid
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        These open-source projects are archived or abandoned — no patches, no fixes — yet they still show up
        on “best self-hosted X” lists everywhere. For each one, here’s how long it’s been dead and a maintained
        alternative to use instead.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        Source: GitHub archived flag + last-commit dates · Last updated {formatDate(new Date())}
      </p>

      {archived.length === 0 ? (
        <p className="mt-8 text-muted-foreground">No archived projects currently tracked.</p>
      ) : (
        <ol className="mt-8 space-y-4">
          {archived.map((a) => {
            const alt = liveAlternative(a, live)
            const replaced = a.replaces.map((s) => proprietaryBySlug(s)?.name).filter(Boolean).join(', ')
            return (
              <li key={a.id}>
                <Card className="p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link href={`/${a.slug}`} className="text-lg font-semibold hover:underline">{a.name}</Link>
                    <Badge variant="danger" className="gap-1"><TriangleAlert className="size-3" /> Archived</Badge>
                    {a.lastCommitAt && <span className="text-sm text-muted-foreground">last commit {relativeFromNow(a.lastCommitAt)}</span>}
                  </div>
                  {a.tagline && <p className="mt-1 text-sm text-muted-foreground">{a.tagline}</p>}
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-muted-foreground">
                      {replaced ? `Was a ${replaced} alternative. ` : ''}
                      {a.category?.name}
                    </p>
                    {alt && (
                      <Link href={`/${alt.slug}`} className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-900 hover:bg-emerald-100">
                        Use {alt.name} instead <ArrowRight className="size-3.5" />
                      </Link>
                    )}
                  </div>
                  <div className="mt-3">
                    <GoButton id={a.id} to="repo" label="See the (archived) repo" icon={Github} variant="outline" size="sm" />
                  </div>
                </Card>
              </li>
            )
          })}
        </ol>
      )}

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">FAQ</h2>
        <Faq items={faqs} />
      </section>
    </div>
  )
}

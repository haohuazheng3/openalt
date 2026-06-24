import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowRight, Check, Gift, Server, Sparkles, Target } from 'lucide-react'
import { Faq } from '@/components/faq'
import { JsonLd } from '@/components/json-ld'
import { ListingCard } from '@/components/listing-card'
import { Tldr } from '@/components/tldr'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { CATEGORIES, CATEGORY_SLUGS } from '@/data/categories'
import { PROPRIETARY_TOOLS, alternativesSlug } from '@/data/proprietary-tools'
import { guideForCategory } from '@/data/category-guides'
import { getCategoryBySlug, getListings } from '@/lib/db/queries'
import { articleLd, breadcrumbLd, buildMetadata, faqLd, itemListLd } from '@/lib/seo'
import { difficultyInfo } from '@/lib/difficulty'
import { versusSlug } from '@/lib/slug'
import { logoUrlFor, formatDate } from '@/lib/utils'

export const revalidate = 86400

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((category) => ({ category }))
}

const staticCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug) ?? null
const headlineFor = (slug: string, name: string) => staticCategory(slug)?.selfHostHeadline ?? `Self-Hosted ${name} Tools`

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = (await getCategoryBySlug(params.category)) ?? staticCategory(params.category)
  if (!category) return {}
  const headline = headlineFor(params.category, category.name)
  const guide = guideForCategory(params.category)
  return buildMetadata({
    title: `${headline} (2026)`,
    description:
      guide?.intro?.slice(0, 155) ||
      `The best open-source ${category.name.toLowerCase()} tools to self-host in 2026 — ranked by self-host difficulty, with deploy options and honest trade-offs.`,
    path: `/self-hosted/${params.category}`,
    ogSubtitle: 'Ranked by how easy they are to host',
  })
}

export default async function SelfHostedCategoryPillar({ params }: { params: { category: string } }) {
  const category = (await getCategoryBySlug(params.category)) ?? staticCategory(params.category)
  if (!category) notFound()

  const headline = headlineFor(params.category, category.name)
  const guide = guideForCategory(params.category)
  const listings = await getListings({ categorySlug: params.category, sort: 'easiest', limit: 60 })
  const bySlug = new Map(listings.map((l) => [l.slug, l]))
  const saas = PROPRIETARY_TOOLS.filter((p) => p.categorySlug === params.category)
  const related = CATEGORIES.filter((c) => c.slug !== params.category).slice(0, 6)
  const today = formatDate(new Date())

  return (
    <div className="container max-w-5xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: category.name, path: `/category/${params.category}` },
            { name: 'Self-hosted', path: `/self-hosted/${params.category}` },
          ]),
          articleLd({
            headline: `${headline} (2026)`,
            description: guide?.intro || `Self-hosted ${category.name} tools.`,
            path: `/self-hosted/${params.category}`,
          }),
          itemListLd(listings, headline),
          ...(guide?.faqs?.length ? [faqLd(guide.faqs)] : []),
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

      {guide ? (
        <>
          <Tldr updated={today} sources="GitHub API (stars, last commit); self-host difficulty scored against our rubric">
            {guide.verdict}
          </Tldr>

          {/* Project logo strip (visual) */}
          {listings.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {listings.slice(0, 12).map((l) => (
                <Link key={l.id} href={`/${l.slug}`} title={l.name} className="rounded-lg border bg-white p-1.5 transition hover:ring-2 hover:ring-primary/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logoUrlFor(l)} alt={l.name} width={28} height={28} className="size-7 rounded object-contain" />
                </Link>
              ))}
            </div>
          )}

          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{guide.intro}</p>
          {guide.whySwitch && <p className="mt-3 max-w-3xl text-muted-foreground">{guide.whySwitch}</p>}

          {/* Best picks by use case */}
          {guide.useCases.length > 0 && (
            <section className="mt-10">
              <h2 className="flex items-center gap-2 text-xl font-semibold"><Target className="size-5 text-primary" /> Best {category.name.toLowerCase()} for…</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {guide.useCases.map((u) => {
                  const l = bySlug.get(u.pickSlug)
                  const diff = l ? difficultyInfo(l.selfHostDifficulty) : null
                  return (
                    <Card key={u.audience} className="p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-primary">{u.audience}</div>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <Link href={`/${u.pickSlug}`} className="text-lg font-semibold hover:underline">{l?.name ?? u.pickSlug}</Link>
                        {diff && <Badge variant="outline">Self-host: {diff.label}</Badge>}
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground">{u.reason}</p>
                    </Card>
                  )
                })}
              </div>
            </section>
          )}

          {/* How to choose */}
          <section className="mt-10">
            <h2 className="text-xl font-semibold">How to choose</h2>
            <p className="mt-2 max-w-3xl text-muted-foreground">{guide.howToChoose}</p>
            <Link href="/methodology" className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline">
              How we score self-host difficulty <ArrowRight className="size-3.5" />
            </Link>
          </section>
        </>
      ) : (
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Open-source {category.name.toLowerCase()} tools you can self-host — ranked by how painless they are to run.
        </p>
      )}

      {/* Cluster: all projects */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">All {listings.length} self-hostable {category.name.toLowerCase()} tools</h2>
        <p className="mt-1 text-sm text-muted-foreground">Ranked easiest-to-host first — one-click and single-container options at the top.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l, i) => (
            <ListingCard key={l.id} listing={l} rank={i + 1} showCategory={false} />
          ))}
        </div>
      </section>

      {guide && (
        <>
          {/* Standouts + free angle */}
          {guide.standouts.length > 0 && (
            <section className="mt-12">
              <h2 className="flex items-center gap-2 text-xl font-semibold"><Sparkles className="size-5 text-primary" /> Standouts</h2>
              <ul className="mt-3 space-y-2">
                {guide.standouts.map((s) => {
                  const l = bySlug.get(s.slug)
                  return (
                    <li key={s.slug} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                      <span><Link href={`/${s.slug}`} className="font-medium text-foreground hover:underline">{l?.name ?? s.slug}</Link> — <span className="text-muted-foreground">{s.note}</span></span>
                    </li>
                  )
                })}
              </ul>
            </section>
          )}

          {guide.freeAngle && (
            <section className="mt-8">
              <Card className="flex items-start gap-3 border-primary/30 bg-accent/40 p-5">
                <Gift className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm text-foreground">{guide.freeAngle}</p>
              </Card>
            </section>
          )}
        </>
      )}

      {/* Cluster internal links: which SaaS these replace + related categories */}
      <section className="mt-12 border-t pt-8">
        <h2 className="text-base font-semibold">Replacing a specific tool?</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          {saas.map((p) => (
            <Link key={p.slug} href={`/${alternativesSlug(p.slug)}`} className="rounded-md border px-3 py-1.5 text-muted-foreground hover:bg-accent hover:text-foreground">
              {p.name} alternatives →
            </Link>
          ))}
        </div>
        {listings.length >= 2 && (
          <div className="mt-3 text-sm">
            <Link href={`/${versusSlug(listings[0].slug, listings[1].slug)}`} className="text-primary hover:underline">
              Compare {listings[0].name} vs {listings[1].name} →
            </Link>
          </div>
        )}
      </section>

      {/* FAQ */}
      {guide?.faqs?.length ? (
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold">Frequently asked questions</h2>
          <Faq items={guide.faqs} />
        </section>
      ) : null}

      {/* Related categories */}
      <section className="mt-12 border-t pt-8">
        <h2 className="text-base font-semibold">Explore other categories</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          {related.map((c) => (
            <Link key={c.slug} href={`/self-hosted/${c.slug}`} className="rounded-md border px-3 py-1.5 hover:bg-accent">
              Self-hosted {c.name} →
            </Link>
          ))}
          <Link href="/self-hosted" className="rounded-md border px-3 py-1.5 hover:bg-accent">Full directory →</Link>
        </div>
      </section>
    </div>
  )
}

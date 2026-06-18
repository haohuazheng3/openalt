import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowRight, Check, ExternalLink, Github, Globe, PencilLine, PlayCircle, Sparkles, TriangleAlert } from 'lucide-react'
import { BadgeEmbed } from '@/components/badge-embed'
import { CompareTable } from '@/components/compare-table'
import { ComparisonTable, type CompareRow } from '@/components/comparison-table'
import { DeployButtons } from '@/components/deploy-buttons'
import { DifficultyMeter } from '@/components/difficulty-meter'
import { Faq } from '@/components/faq'
import { GoButton } from '@/components/go-button'
import { JsonLd } from '@/components/json-ld'
import { ListingCard } from '@/components/listing-card'
import { Markdown } from '@/components/markdown'
import { QuickPicks } from '@/components/quick-picks'
import { RepoStats } from '@/components/repo-stats'
import { ReplacesBadges } from '@/components/replaces-badges'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  getAllListingSlugs,
  getComparePairs,
  getListingBySlug,
  getListingsReplacing,
  getProprietaryToolBySlug,
  getProprietaryVsPairs,
  getRelatedListings,
  getReplacedProprietarySlugs,
} from '@/lib/db/queries'
import type { ListingWithCategory, ProprietaryTool } from '@/lib/db/schema'
import { difficultyInfo } from '@/lib/difficulty'
import { isActivelyFeatured } from '@/lib/featured'
import { isVersusSlug, parseVersusSlug, versusSlug } from '@/lib/slug'
import {
  ALTERNATIVES_SUFFIX,
  alternativesSlug,
  parseAlternativesSlug,
  PROPRIETARY_TOOLS,
  proprietaryBySlug,
} from '@/data/proprietary-tools'
import { categoryName } from '@/data/categories'
import { breadcrumbLd, buildMetadata, faqLd, itemListLd, softwareApplicationLd } from '@/lib/seo'
import { absoluteUrl } from '@/lib/env'
import { domainFromUrl, formatDate, stripMarkdown, truncate } from '@/lib/utils'
import { guideFor } from '@/data/alternative-guides'
import { extraFor } from '@/data/listing-extras'
import { Tldr } from '@/components/tldr'
import { FEATURED_VS } from '@/data/featured-comparisons'

export const revalidate = 86400

export async function generateStaticParams() {
  const [slugs, propSlugs, pairs, vsPairs] = await Promise.all([
    getAllListingSlugs(),
    getReplacedProprietarySlugs(),
    getComparePairs(3),
    getProprietaryVsPairs(2),
  ])
  const all = [
    ...slugs,
    ...propSlugs.map((p) => `${p}${ALTERNATIVES_SUFFIX}`),
    ...pairs,
    ...vsPairs,
    ...FEATURED_VS.map((v) => versusSlug(v.a, v.b)),
  ]
  return [...new Set(all)].map((slug) => ({ slug }))
}

const YEAR = 2026

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params

  // 1) Alternatives page
  const propSlug = parseAlternativesSlug(slug)
  if (propSlug) {
    const tool = (await getProprietaryToolBySlug(propSlug)) ?? toolFromSeed(propSlug)
    if (tool) {
      return buildMetadata({
        title: `Best Open-Source ${tool.name} Alternatives (${YEAR})`,
        description: `Self-hostable, open-source alternatives to ${tool.name} — ranked, with self-host difficulty scores, one-click deploy options, and how each compares to ${tool.name}.`,
        path: `/${alternativesSlug(propSlug)}`,
        ogSubtitle: 'Self-hosted & open source · difficulty-scored',
      })
    }
  }

  // 2) Listing detail
  const listing = await getListingBySlug(slug)
  if (listing) {
    const description = truncate(
      stripMarkdown(listing.descriptionMd) || listing.tagline || `${listing.name} — open-source, self-hostable.`,
      160,
    )
    return buildMetadata({
      title: `${listing.name} — Self-Host Guide & Difficulty`,
      description,
      path: `/${listing.slug}`,
      ogSubtitle: listing.tagline ?? undefined,
    })
  }

  // 3) Versus
  if (isVersusSlug(slug)) {
    const parsed = parseVersusSlug(slug)
    if (parsed) {
      const [a, b] = await Promise.all([resolveSide(parsed[0]), resolveSide(parsed[1])])
      if (a && b) {
        return buildMetadata({
          title: `${a.name} vs ${b.name}: Which to Self-Host?`,
          description: `${a.name} vs ${b.name} compared on stars, license, self-host difficulty, deploy options, and what each replaces.`,
          path: `/${slug}`,
          ogSubtitle: 'Side-by-side comparison',
        })
      }
    }
  }
  return {}
}

export default async function SlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // 1) /[proprietary]-alternatives
  const propSlug = parseAlternativesSlug(slug)
  if (propSlug) {
    const tool = (await getProprietaryToolBySlug(propSlug)) ?? toolFromSeed(propSlug)
    if (tool) {
      const listings = await getListingsReplacing(propSlug, 'featured', 60)
      return <AlternativesPage tool={tool} listings={listings} />
    }
  }

  // 2) /[listing-slug]
  const listing = await getListingBySlug(slug)
  if (listing) return <ListingDetail listing={listing} />

  // 3) /[a]-vs-[b]
  if (isVersusSlug(slug)) {
    const parsed = parseVersusSlug(slug)
    if (parsed) {
      const [a, b] = await Promise.all([resolveSide(parsed[0]), resolveSide(parsed[1])])
      if (a && b) return <CompareView a={a} b={b} />
    }
  }

  notFound()
}

/* ─────────────────────────── helpers ─────────────────────────── */

type Side =
  | { kind: 'listing'; name: string; listing: ListingWithCategory }
  | { kind: 'proprietary'; name: string; tool: ProprietaryTool | SeedTool }

async function resolveSide(slug: string): Promise<Side | null> {
  const listing = await getListingBySlug(slug)
  if (listing) return { kind: 'listing', name: listing.name, listing }
  const tool = (await getProprietaryToolBySlug(slug)) ?? toolFromSeed(slug)
  if (tool) return { kind: 'proprietary', name: tool.name, tool }
  return null
}

type SeedTool = { slug: string; name: string; website: string | null; blurb: string | null; priceHook: string | null }
/** Fallback to the static registry when the DB isn't seeded yet. */
function toolFromSeed(slug: string): SeedTool | null {
  const p = proprietaryBySlug(slug)
  return p ? { slug: p.slug, name: p.name, website: p.website, blurb: p.blurb, priceHook: p.priceHook } : null
}

/* ─────────────────────── Alternatives page ─────────────────────── */

function AlternativesPage({
  tool,
  listings,
}: {
  tool: ProprietaryTool | SeedTool
  listings: ListingWithCategory[]
}) {
  const hook = 'priceHook' in tool ? tool.priceHook : null
  const guide = guideFor(tool.slug)
  const bySlug = new Map(listings.map((l) => [l.slug, l]))
  const rows: CompareRow[] = listings.map((l) => ({
    id: l.id,
    slug: l.slug,
    name: l.name,
    repoUrl: l.repoUrl,
    stars: l.githubStars,
    difficulty: l.selfHostDifficulty,
    deploy: l.deployOptions,
    managed: l.hasManagedHosting,
    license: l.license,
    language: l.language,
    lastCommitISO: l.lastCommitAt ? new Date(l.lastCommitAt).toISOString() : null,
    featured: isActivelyFeatured(l),
  }))

  return (
    <div className="container max-w-5xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: `${tool.name} alternatives`, path: `/${alternativesSlug(tool.slug)}` },
          ]),
          itemListLd(listings, `Open-source ${tool.name} alternatives`),
          ...(guide?.faqs.length ? [faqLd(guide.faqs)] : []),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">{tool.name} alternatives</span>
      </nav>

      <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        Best Open-Source {tool.name} Alternatives ({YEAR})
      </h1>
      <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
        {listings.length} self-hostable, open-source {listings.length === 1 ? 'project' : 'projects'} that replace{' '}
        {tool.name}
        {hook ? ` — without ${hook}` : ''}. Each is scored for how hard it is to self-host, with one-click deploy
        options where they exist.
      </p>
      {guide?.whySwitch && (
        <p className="mt-3 max-w-3xl text-muted-foreground">{guide.whySwitch}</p>
      )}

      {listings.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed p-10 text-center text-muted-foreground">
          No open-source alternatives indexed yet.
        </div>
      ) : (
        <>
          {/* Quick picks */}
          {guide && (
            <section className="mt-8">
              <h2 className="mb-3 text-lg font-semibold">Our picks at a glance</h2>
              <QuickPicks picks={guide.picks} bySlug={bySlug} />
            </section>
          )}

          {/* Comparison table */}
          <section className="mt-10">
            <div className="mb-3 flex items-end justify-between gap-4">
              <h2 className="text-lg font-semibold">Compare all {listings.length} alternatives</h2>
              <span className="hidden text-xs text-muted-foreground sm:inline">Tap a column header to sort</span>
            </div>
            <ComparisonTable rows={rows} />
            {guide?.whatToLookFor && (
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">What to look for: </span>
                {guide.whatToLookFor}
              </p>
            )}
            {/* Head-to-head: each top alternative vs the proprietary tool */}
            {listings.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                <span className="text-muted-foreground">Head-to-head:</span>
                {listings.slice(0, 5).map((l) => (
                  <Link key={l.id} href={`/${versusSlug(l.slug, tool.slug)}`} className="rounded-md border px-2.5 py-1 text-muted-foreground hover:bg-accent hover:text-foreground">
                    {l.name} vs {tool.name}
                  </Link>
                ))}
              </div>
            )}
          </section>

          {/* Detailed reviews */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold">The alternatives, reviewed</h2>
            <ol className="mt-4 space-y-4">
              {listings.map((l, i) => (
                <li key={l.id}>
                  <AlternativeRow listing={l} rank={i + 1} replacingName={tool.name} />
                </li>
              ))}
            </ol>
          </section>

          {/* Verdict */}
          {guide?.verdict && (
            <section className="mt-10">
              <Card className="border-primary/30 bg-accent/40 p-5">
                <h2 className="text-base font-semibold">The verdict</h2>
                <p className="mt-1.5 text-muted-foreground">{guide.verdict}</p>
              </Card>
            </section>
          )}

          {/* Compare top two */}
          {listings.length >= 2 && (
            <div className="mt-6 rounded-lg border bg-muted/30 p-4 text-sm">
              Still deciding?{' '}
              <Link href={`/${versusSlug(listings[0].slug, listings[1].slug)}`} className="font-medium text-primary hover:underline">
                Compare {listings[0].name} vs {listings[1].name} side by side →
              </Link>
            </div>
          )}

          {/* FAQ */}
          {guide?.faqs.length ? (
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-semibold">
                {tool.name} alternatives — frequently asked questions
              </h2>
              <Faq items={guide.faqs} />
            </section>
          ) : null}

          {/* Related / internal links */}
          <AlternativesRelated toolSlug={tool.slug} />
        </>
      )}
    </div>
  )
}

function AlternativesRelated({ toolSlug }: { toolSlug: string }) {
  const meta = proprietaryBySlug(toolSlug)
  const catSlug = meta?.categorySlug
  const siblings = catSlug
    ? PROPRIETARY_TOOLS.filter((p) => p.categorySlug === catSlug && p.slug !== toolSlug).slice(0, 6)
    : []
  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-base font-semibold">Keep exploring</h2>
      <div className="mt-3 flex flex-wrap gap-2 text-sm">
        {catSlug && (
          <Link href={`/category/${catSlug}`} className="rounded-md border px-3 py-1.5 hover:bg-accent">
            All {categoryName(catSlug)} →
          </Link>
        )}
        <Link href="/self-hosted" className="rounded-md border px-3 py-1.5 hover:bg-accent">Self-hosted directory →</Link>
        <Link href="/easiest-self-hosted-apps" className="rounded-md border px-3 py-1.5 hover:bg-accent">Easiest to self-host →</Link>
      </div>
      {siblings.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          {siblings.map((p) => (
            <Link key={p.slug} href={`/${alternativesSlug(p.slug)}`} className="rounded-md border px-3 py-1.5 text-muted-foreground hover:bg-accent hover:text-foreground">
              {p.name} alternatives
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

function AlternativeRow({
  listing,
  rank,
  replacingName,
}: {
  listing: ListingWithCategory
  rank: number
  replacingName: string
}) {
  const featured = isActivelyFeatured(listing)
  const diff = difficultyInfo(listing.selfHostDifficulty)
  return (
    <Card className={'flex flex-col gap-4 p-5 sm:flex-row sm:items-start ' + (featured ? 'ring-1 ring-amber-300/70' : '')}>
      <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2">
        <span className="text-2xl font-bold tabular-nums text-muted-foreground">#{rank}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://github.com/${(listing.repoUrl.split('/')[3] ?? '')}.png?size=96`}
          alt=""
          width={48}
          height={48}
          className="size-12 rounded-lg border bg-white object-contain p-1.5"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Link href={`/${listing.slug}`} className="text-lg font-semibold hover:underline">
            {listing.name}
          </Link>
          {featured && (
            <Badge variant="sponsored" className="gap-1">
              <Sparkles className="size-3" /> Sponsored
            </Badge>
          )}
          {diff && <Badge variant="outline">Self-host: {diff.label}</Badge>}
        </div>
        {listing.tagline && <p className="mt-0.5 text-muted-foreground">{listing.tagline}</p>}
        <div className="mt-2"><RepoStats listing={listing} /></div>
        {listing.featureGapMd && (
          <details className="mt-2 text-sm">
            <summary className="cursor-pointer select-none font-medium text-muted-foreground hover:text-foreground">
              How it compares to {replacingName}
            </summary>
            <div className="mt-2"><Markdown>{listing.featureGapMd}</Markdown></div>
          </details>
        )}
      </div>

      <div className="flex shrink-0 flex-col gap-2 sm:items-end">
        <GoButton id={listing.id} to="repo" label="Repo" icon={Github} variant="outline" size="sm" />
        <Link href={`/${listing.slug}`} className="text-center text-xs text-muted-foreground hover:text-foreground">
          Details &amp; deploy →
        </Link>
      </div>
    </Card>
  )
}

/* ───────────────────────── Listing detail ───────────────────────── */

async function ListingDetail({ listing }: { listing: ListingWithCategory }) {
  const related = await getRelatedListings(listing, 4)
  const featured = isActivelyFeatured(listing)
  const repoDomain = domainFromUrl(listing.repoUrl)
  const primaryReplace = listing.replaces.map((s) => proprietaryBySlug(s)).find(Boolean)
  const extra = extraFor(listing.slug)

  return (
    <div className="container max-w-5xl py-10">
      <JsonLd
        data={[
          softwareApplicationLd(listing),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            ...(listing.category
              ? [{ name: listing.category.name, path: `/category/${listing.category.slug}` }]
              : []),
            { name: listing.name, path: `/${listing.slug}` },
          ]),
        ]}
      />

      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        {listing.category && (
          <>
            {' / '}
            <Link href={`/category/${listing.category.slug}`} className="hover:text-foreground">
              {listing.category.name}
            </Link>
          </>
        )}
        {' / '}
        <span className="text-foreground">{listing.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <header className="flex items-start gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github.com/${(listing.repoUrl.split('/')[3] ?? '')}.png?size=128`}
              alt={`${listing.name} logo`}
              width={56}
              height={56}
              className="size-14 rounded-xl border bg-white object-contain p-2"
            />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-3xl font-bold tracking-tight">{listing.name}</h1>
                {featured && (
                  <Badge variant="sponsored" className="gap-1">
                    <Sparkles className="size-3" /> Sponsored
                  </Badge>
                )}
                {listing.status === 'archived' && (
                  <Badge variant="danger" className="gap-1">
                    <TriangleAlert className="size-3" /> Archived
                  </Badge>
                )}
              </div>
              {listing.tagline && <p className="mt-1 text-lg text-muted-foreground">{listing.tagline}</p>}
              {listing.replaces.length > 0 && <ReplacesBadges replaces={listing.replaces} className="mt-2" />}
            </div>
          </header>

          <div className="mt-5">
            <RepoStats listing={listing} className="text-sm" />
          </div>

          {listing.descriptionMd && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold">Overview</h2>
              <div className="mt-2"><Markdown>{listing.descriptionMd}</Markdown></div>
            </section>
          )}

          {/* Key features */}
          {extra?.keyFeatures.length ? (
            <section className="mt-8">
              <h2 className="text-xl font-semibold">Key features</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {extra.keyFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Editorial review */}
          {extra?.review && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold">Our take</h2>
              <Card className="mt-3 p-5">
                <Markdown>{extra.review}</Markdown>
                {extra.idealFor && (
                  <p className="mt-3 border-t pt-3 text-sm">
                    <span className="font-medium text-foreground">Ideal for: </span>
                    <span className="text-muted-foreground">{extra.idealFor}</span>
                  </p>
                )}
              </Card>
            </section>
          )}

          {/* Feature gap vs the original */}
          {listing.featureGapMd && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                Where it falls short of {primaryReplace ? primaryReplace.name : 'the original'}
              </h2>
              <Card className="mt-3 border-amber-200 bg-amber-50/40 p-5">
                <Markdown>{listing.featureGapMd}</Markdown>
              </Card>
              <p className="mt-2 text-xs text-muted-foreground">
                We list the gaps honestly so you can decide if the trade-off is worth owning your data.
              </p>
            </section>
          )}

          {listing.tags.length > 0 && (
            <section className="mt-8">
              <h2 className="text-xl font-semibold">Tags</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {listing.tags.map((t) => (
                  <Badge key={t} variant="outline" className="text-sm">{t}</Badge>
                ))}
              </div>
            </section>
          )}

          {/* Maintainer CTA (seller-side) */}
          <section className="mt-10">
            <Card className="flex flex-col items-start gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 font-medium">
                  <PencilLine className="size-4 text-primary" /> Maintain {listing.name}?
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Claim this listing to keep it accurate, add a deploy template, or feature it on relevant pages.
                </p>
              </div>
              <div className="flex gap-2">
                <Link href={`/submit?claim=${listing.slug}`} className="inline-flex h-9 items-center rounded-md border px-3 text-sm font-medium hover:bg-accent">
                  Claim / suggest an edit
                </Link>
                <Link href="/advertise" className="inline-flex h-9 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  Get featured
                </Link>
              </div>
            </Card>

            {listing.selfHostDifficulty && (
              <Card className="mt-4 p-5">
                <div className="text-sm font-medium">Show off your self-host difficulty score</div>
                <p className="mb-3 mt-0.5 text-sm text-muted-foreground">
                  Embed the {listing.name} difficulty badge in your README — it links back here.
                </p>
                <BadgeEmbed
                  badgeUrl={absoluteUrl(`/api/badge/${listing.slug}`)}
                  snippet={`[![Self-host difficulty](${absoluteUrl(`/api/badge/${listing.slug}`)})](${absoluteUrl(`/${listing.slug}`)})`}
                />
              </Card>
            )}
          </section>
        </div>

        {/* CTA rail */}
        <aside className="lg:col-span-1">
          <Card className="sticky top-20 p-5">
            <GoButton id={listing.id} to="repo" label="View on GitHub" icon={Github} size="lg" className="w-full" />
            <div className="mt-2 grid grid-cols-2 gap-2">
              {listing.websiteUrl && (
                <GoButton id={listing.id} to="website" label="Website" icon={Globe} variant="outline" size="sm" />
              )}
              {listing.demoUrl && (
                <GoButton id={listing.id} to="demo" label="Live demo" icon={PlayCircle} variant="outline" size="sm" />
              )}
            </div>
            {repoDomain && (
              <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Github className="size-3.5" /> {listing.repoUrl.replace(/^https?:\/\//, '')}
              </div>
            )}

            {/* Self-host difficulty */}
            <div className="mt-5 border-t pt-5">
              <div className="text-sm font-semibold">Self-host difficulty</div>
              <div className="mt-2"><DifficultyMeter score={listing.selfHostDifficulty} /></div>
              {difficultyInfo(listing.selfHostDifficulty) && (
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {difficultyInfo(listing.selfHostDifficulty)!.blurb}
                </p>
              )}
            </div>

            {/* Deploy / hosting (affiliate-first) */}
            <div className="mt-5 border-t pt-5">
              <div className="text-sm font-semibold">Deploy it</div>
              {listing.deployOptions.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {listing.deployOptions.map((d) => (
                    <Badge key={d} variant="muted">{d}</Badge>
                  ))}
                </div>
              )}
              <div className="mt-3">
                <DeployButtons id={listing.id} deployOptions={listing.deployOptions} />
              </div>
            </div>

            {/* Facts */}
            <dl className="mt-5 space-y-3 border-t pt-5 text-sm">
              <Fact label="License" value={listing.license} />
              <Fact label="Language" value={listing.language} />
              {listing.category && <Fact label="Category" value={listing.category.name} />}
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Managed hosting</dt>
                <dd className="font-medium">{listing.hasManagedHosting ? 'Yes' : 'Self-host only'}</dd>
              </div>
            </dl>
          </Card>
        </aside>
      </div>

      {/* Alternatives / related */}
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-semibold">Similar open-source projects</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Other self-hostable tools in the same space worth comparing.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((alt) => (
              <div key={alt.id} className="flex flex-col gap-2">
                <ListingCard listing={alt} showCategory={false} showReplaces={false} />
                <Link
                  href={`/${versusSlug(listing.slug, alt.slug)}`}
                  className="text-center text-xs text-primary hover:underline"
                >
                  {listing.name} vs {alt.name}
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function Fact({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium">{value ?? '—'}</dd>
    </div>
  )
}

/* ─────────────────────────── Compare view ─────────────────────────── */

function CompareView({ a, b }: { a: Side; b: Side }) {
  const canonical = versusSlug(slugOf(a), slugOf(b))
  // open-source vs open-source → full head-to-head
  if (a.kind === 'listing' && b.kind === 'listing') {
    const la = a.listing
    const lb = b.listing
    const da = la.selfHostDifficulty ?? null
    const db = lb.selfHostDifficulty ?? null
    const easier = da != null && db != null && da !== db ? (da < db ? la : lb) : null
    const other = (x: ListingWithCategory) => (x === la ? lb : la)
    const morePopular = la.githubStars === lb.githubStars ? null : la.githubStars > lb.githubStars ? la : lb
    const fresher =
      la.lastCommitAt && lb.lastCommitAt && +new Date(la.lastCommitAt) !== +new Date(lb.lastCommitAt)
        ? +new Date(la.lastCommitAt) > +new Date(lb.lastCommitAt)
          ? la
          : lb
        : null
    const faqs = [
      {
        q: `Is ${la.name} or ${lb.name} easier to self-host?`,
        a: easier
          ? `${easier.name} is easier to self-host — ${difficultyInfo(easier.selfHostDifficulty)?.label.toLowerCase()} (difficulty ${easier.selfHostDifficulty}/5) versus ${other(easier).selfHostDifficulty}/5 for ${other(easier).name}.`
          : `${la.name} and ${lb.name} score the same on our self-host difficulty scale (${da ?? '—'}/5), so neither has a clear setup advantage.`,
      },
      {
        q: `Which has more momentum, ${la.name} or ${lb.name}?`,
        a: `${morePopular ? `${morePopular.name} has more GitHub stars (${morePopular.githubStars.toLocaleString()} vs ${other(morePopular).githubStars.toLocaleString()})` : 'Both have similar GitHub stars'}${fresher ? `, and ${fresher.name} has been committed to more recently` : ''}.`,
      },
    ]
    return (
      <div className="container max-w-4xl py-10">
        <JsonLd
          data={[
            breadcrumbLd([
              { name: 'Home', path: '/' },
              { name: `${a.name} vs ${b.name}`, path: `/${canonical}` },
            ]),
            faqLd(faqs),
          ]}
        />
        <nav className="mb-3 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
          <span className="text-foreground">Compare</span>
        </nav>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{a.name} vs {b.name}</h1>
        <Tldr updated={formatDate(new Date())} sources="GitHub API (stars, last commit); difficulty scored against our rubric">
          {easier ? (
            <>{easier.name} is easier to self-host (difficulty {easier.selfHostDifficulty}/5 vs {other(easier).selfHostDifficulty}/5)</>
          ) : (
            <>{la.name} and {lb.name} are a similar lift to self-host</>
          )}
          {morePopular ? (
            <>, while {morePopular.name} has more GitHub stars ({morePopular.githubStars.toLocaleString()})</>
          ) : (
            <>, with comparable GitHub traction</>
          )}
          . Full side-by-side on difficulty, deploy options, license and freshness below.
        </Tldr>
        <div className="mt-6"><CompareTable a={la} b={lb} /></div>

        {(la.featureGapMd || lb.featureGapMd) && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Where each falls short</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              The honest trade-offs — what you give up with each, versus the proprietary tools they replace.
            </p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {[la, lb].map((l) => (
                <Card key={l.id} className="border-amber-200 bg-amber-50/40 p-5">
                  <div className="font-semibold">{l.name}</div>
                  {l.featureGapMd ? (
                    <div className="mt-2 text-sm"><Markdown>{l.featureGapMd}</Markdown></div>
                  ) : (
                    <p className="mt-2 text-sm text-muted-foreground">No major gaps documented.</p>
                  )}
                </Card>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10">
          <Card className="border-primary/30 bg-accent/40 p-5">
            <h2 className="text-base font-semibold">Bottom line</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {easier ? `Choose ${easier.name} if you want the lower-effort setup` : `Both are a similar lift to self-host`}
              {morePopular ? `; choose ${morePopular.name} for the larger community and ecosystem` : ''}.
              {fresher ? ` ${fresher.name} has seen more recent development.` : ''} Open each guide below for deploy steps and the full feature gap.
            </p>
          </Card>
        </section>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[la, lb].map((l) => (
            <Card key={l.id} className="p-5">
              <Link href={`/${l.slug}`} className="text-lg font-semibold hover:underline">{l.name}</Link>
              {l.tagline && <p className="mt-2 text-sm text-muted-foreground">{l.tagline}</p>}
              <div className="mt-3 flex items-center gap-3">
                <GoButton id={l.id} to="repo" label="View repo" icon={Github} size="sm" />
                <Link href={`/${l.slug}`} className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                  Full guide <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  // open-source vs proprietary → "should you switch" framing
  const listing = a.kind === 'listing' ? a.listing : (b as Extract<Side, { kind: 'listing' }>).listing
  const tool = a.kind === 'proprietary' ? a.tool : (b as Extract<Side, { kind: 'proprietary' }>).tool
  return (
    <div className="container max-w-3xl py-10">
      <JsonLd
        data={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: `${a.name} vs ${b.name}`, path: `/${canonical}` },
        ])}
      />
      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href={`/${alternativesSlug(tool.slug)}`} className="hover:text-foreground">{tool.name} alternatives</Link>{' '}
        / <span className="text-foreground">vs {listing.name}</span>
      </nav>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{a.name} vs {b.name}</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Thinking of swapping {tool.name} for the open-source {listing.name}? Here’s the honest trade-off.
      </p>
      <div className="mt-6"><RepoStats listing={listing} className="text-sm" /></div>
      {listing.featureGapMd && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">What you give up vs {tool.name}</h2>
          <Card className="mt-3 border-amber-200 bg-amber-50/40 p-5"><Markdown>{listing.featureGapMd}</Markdown></Card>
        </section>
      )}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">What you gain</h2>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <li>• Full data ownership — self-host {listing.name} on your own infrastructure.</li>
          <li>• No per-seat SaaS bill{('priceHook' in tool && tool.priceHook) ? ` (${tool.name}: ${tool.priceHook})` : ''}.</li>
          <li>• Open-source code you can audit and extend{listing.license ? ` (${listing.license})` : ''}.</li>
        </ul>
      </section>
      <div className="mt-8 flex flex-wrap gap-3">
        <GoButton id={listing.id} to="repo" label={`Get ${listing.name}`} icon={Github} />
        <Link href={`/${listing.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
          Full {listing.name} guide <ArrowRight className="size-4" />
        </Link>
        {tool.website && (
          <a href={tool.website} target="_blank" rel="nofollow noopener" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            {tool.name} site <ExternalLink className="size-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}

function slugOf(side: Side): string {
  return side.kind === 'listing' ? side.listing.slug : side.tool.slug
}

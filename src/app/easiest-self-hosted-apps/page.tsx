import Link from 'next/link'
import type { Metadata } from 'next'
import { Rocket } from 'lucide-react'
import { ComparisonTable } from '@/components/comparison-table'
import { DifficultyMeter } from '@/components/difficulty-meter'
import { Faq } from '@/components/faq'
import { GoButton } from '@/components/go-button'
import { JsonLd } from '@/components/json-ld'
import { ReplacesBadges } from '@/components/replaces-badges'
import { Card } from '@/components/ui/card'
import { getListings } from '@/lib/db/queries'
import { breadcrumbLd, buildMetadata, faqLd, itemListLd } from '@/lib/seo'
import { toCompareRows } from '@/lib/rows'
import { formatDate } from '@/lib/utils'

export const revalidate = 86400

const FAQS = [
  { q: 'What’s the single easiest app to self-host?', a: 'The projects scored difficulty 1 in the table below — they offer a free one-click deploy template or official managed hosting, so you can be running in minutes with no server skills. Anything scored 2 needs only a single `docker run`.' },
  { q: 'Do I need a server to self-host these?', a: 'For difficulty 1 picks, no — a one-click platform like Railway, Render, or PikaPods runs it for you. For difficulty 2–3, a cheap $5/mo VPS with Docker is plenty.' },
  { q: 'How is “easiest” measured here?', a: 'Every project gets a strict 1–5 self-host difficulty score: 1 = one-click/managed, 2 = single docker run, 3 = docker-compose, 4 = manual DB/proxy/deps, 5 = complex multi-component. The table is sorted easiest-first.' },
  { q: 'Are the easy ones any good?', a: 'Yes — easy to deploy doesn’t mean weak. Many difficulty 1–2 projects (e.g. Umami, Vaultwarden, Uptime Kuma) are best-in-class. Sort by stars to see the most popular easy picks.' },
]

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'The Easiest Self-Hosted Apps to Run (2026)',
    description: 'The easiest open-source apps to self-host, ranked by a strict 1–5 difficulty score — one-click deploys and single-command Docker setups first. No server skills required for the top picks.',
    path: '/easiest-self-hosted-apps',
    ogSubtitle: 'Ranked by self-host difficulty, easiest first',
  })
}

export default async function EasiestSelfHostedApps() {
  const listings = await getListings({ sort: 'easiest', limit: 300 })
  const rows = toCompareRows(listings)
  const effortless = listings.filter((l) => l.selfHostDifficulty === 1).slice(0, 8)

  return (
    <div className="container max-w-6xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Easiest self-hosted apps', path: '/easiest-self-hosted-apps' },
          ]),
          itemListLd(listings.slice(0, 30), 'Easiest self-hosted apps'),
          faqLd(FAQS),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href="/self-hosted" className="hover:text-foreground">Self-hosted</Link> /{' '}
        <span className="text-foreground">Easiest to run</span>
      </nav>

      <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        The Easiest Self-Hosted Apps to Run (2026)
      </h1>
      <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
        Every other “easiest” list throws adjectives at you. We score it. Below is every self-hostable app
        ranked by a strict <strong className="text-foreground">1–5 difficulty score</strong>, easiest first —
        one-click deploys and single-command Docker setups at the top, complex multi-service stacks at the
        bottom. Pick a difficulty 1 and you’re running in minutes.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        Last updated {formatDate(new Date())} · scored on a consistent rubric · {listings.length} apps ranked
      </p>

      {/* Effortless picks */}
      {effortless.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Rocket className="size-5 text-primary" /> Effortless picks (difficulty 1 — one-click or managed)
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {effortless.map((l) => (
              <Card key={l.id} className="flex flex-col gap-2 p-4">
                <Link href={`/${l.slug}`} className="font-semibold hover:text-primary">{l.name}</Link>
                {l.replaces.length > 0 && <ReplacesBadges replaces={l.replaces} max={2} label={false} />}
                <DifficultyMeter score={l.selfHostDifficulty} compact />
                {l.tagline && <p className="line-clamp-2 text-xs text-muted-foreground">{l.tagline}</p>}
                <div className="mt-auto pt-1">
                  <GoButton id={l.id} to="railway" label="1-click deploy" icon={Rocket} variant="outline" size="sm" />
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Full ranked table */}
      <section className="mt-10">
        <div className="mb-3 flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold">All {listings.length} apps, ranked by difficulty</h2>
          <span className="hidden text-xs text-muted-foreground sm:inline">Sorted easiest-first · tap headers to re-sort</span>
        </div>
        <ComparisonTable rows={rows} showCategory />
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Frequently asked questions</h2>
        <Faq items={FAQS} />
      </section>
    </div>
  )
}

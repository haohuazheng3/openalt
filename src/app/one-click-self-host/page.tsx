import Link from 'next/link'
import type { Metadata } from 'next'
import { Rocket } from 'lucide-react'
import { ComparisonTable } from '@/components/comparison-table'
import { DifficultyMeter } from '@/components/difficulty-meter'
import { Faq } from '@/components/faq'
import { GoButton } from '@/components/go-button'
import { JsonLd } from '@/components/json-ld'
import { ReplacesBadges } from '@/components/replaces-badges'
import { Tldr } from '@/components/tldr'
import { Card } from '@/components/ui/card'
import { getListings } from '@/lib/db/queries'
import { breadcrumbLd, buildMetadata, faqLd, itemListLd } from '@/lib/seo'
import { toCompareRows } from '@/lib/rows'
import { formatDate } from '@/lib/utils'

export const revalidate = 86400

const FAQS = [
  { q: 'What does “one-click self-hosting” mean?', a: 'These projects ship an official deploy template, so a platform like Railway, Render, or PikaPods provisions and runs the app for you — no manual server setup, Docker commands, or reverse-proxy config. You click deploy and it’s live.' },
  { q: 'Which open-source apps have a one-click deploy?', a: 'The apps in the table below all offer one — including n8n, NocoDB, Grafana, Coolify, Umami, Metabase, Cal.com, and Nextcloud. They’re ranked by our 1–5 self-host difficulty score so you can see which are truly turnkey.' },
  { q: 'Do I still need my own server?', a: 'Not for the one-click route — the platform hosts it. If you’d rather own the box, every app here also runs on a cheap $5/mo VPS with Docker. Either way the software itself is free and open-source.' },
  { q: 'Is one-click deploy free?', a: 'The software is free; the hosting platform usually has a small free or low-cost tier. A one-click deploy trades a few dollars a month for skipping all the setup — the fastest way to try self-hosting.' },
]

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'One-Click Self-Hosted Apps: Deploy Without the Setup (2026)',
    description:
      'Open-source apps with an official one-click deploy — push to Railway, Render, or PikaPods with no server setup. Ranked by self-host difficulty, with what each replaces and how fresh the project is.',
    path: '/one-click-self-host',
    ogSubtitle: 'Deploy in a click — no server skills',
  })
}

export default async function OneClickSelfHostPage() {
  const listings = await getListings({ deployOption: 'One-Click', sort: 'easiest', limit: 60 })
  const rows = toCompareRows(listings)
  const top = listings.slice(0, 8)
  const today = formatDate(new Date())

  return (
    <div className="container max-w-6xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Self-hosted', path: '/self-hosted' },
            { name: 'One-click self-host', path: '/one-click-self-host' },
          ]),
          itemListLd(listings, 'One-click self-hosted apps'),
          faqLd(FAQS),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href="/self-hosted" className="hover:text-foreground">Self-hosted</Link> /{' '}
        <span className="text-foreground">One-click</span>
      </nav>

      <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        One-Click Self-Hosted Apps: Deploy Without the Setup (2026)
      </h1>

      <Tldr updated={today} sources="GitHub API (stars, last commit); deploy options & difficulty from our rubric">
        <strong>{listings.length} open-source apps</strong> ship an official one-click deploy — push to Railway, Render
        or PikaPods with no server setup. The most popular: <strong>n8n, NocoDB, Grafana, Coolify, Umami, Cal.com</strong>{' '}
        and <strong>Nextcloud</strong>. All are ranked below by our 1–5 self-host difficulty score.
      </Tldr>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        “One-click” gets thrown around a lot — these actually have it: a maintained deploy template that a platform runs
        for you. Every app here is also scored for difficulty if you’d rather self-host it on your own VPS.{' '}
        <Link href="/methodology" className="text-primary hover:underline">How we score →</Link>
      </p>
      <p className="mt-2 text-xs text-muted-foreground">Last updated {today} · {listings.length} one-click apps</p>

      {/* Top picks */}
      {top.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
            <Rocket className="size-5 text-primary" /> Fastest to deploy
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {top.map((l) => (
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
          <h2 className="text-xl font-semibold">All {listings.length} one-click apps, ranked by difficulty</h2>
          <span className="hidden text-xs text-muted-foreground sm:inline">Tap headers to re-sort</span>
        </div>
        <ComparisonTable rows={rows} showCategory />
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Frequently asked questions</h2>
        <Faq items={FAQS} />
      </section>

      <section className="mt-12 border-t pt-8">
        <h2 className="text-base font-semibold">Keep exploring</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <Link href="/easiest-self-hosted-apps" className="rounded-md border px-3 py-1.5 hover:bg-accent">Easiest self-hosted apps →</Link>
          <Link href="/self-hosted-paas" className="rounded-md border px-3 py-1.5 hover:bg-accent">Self-hosted PaaS →</Link>
          <Link href="/self-hosting-for-beginners" className="rounded-md border px-3 py-1.5 hover:bg-accent">Self-hosting for beginners →</Link>
          <Link href="/methodology" className="rounded-md border px-3 py-1.5 hover:bg-accent">How we score →</Link>
        </div>
      </section>
    </div>
  )
}

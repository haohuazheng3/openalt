import Link from 'next/link'
import type { Metadata } from 'next'
import { ComparisonTable } from '@/components/comparison-table'
import { Faq } from '@/components/faq'
import { JsonLd } from '@/components/json-ld'
import { getListings } from '@/lib/db/queries'
import { breadcrumbLd, buildMetadata, datasetLd, faqLd, itemListLd } from '@/lib/seo'
import { toCompareRows } from '@/lib/rows'
import { formatDate } from '@/lib/utils'

export const revalidate = 86400

const FAQS = [
  { q: 'What does “one-click deploy” mean?', a: 'The project ships a deploy template (or official managed hosting) so a platform like Railway, Render, or PikaPods can stand it up for you in a few clicks — no terminal, no server configuration.' },
  { q: 'Where do these deploy to?', a: 'Each app’s page has deploy buttons for the relevant platforms: Railway and Render (push-the-repo PaaS), DigitalOcean App Platform, PikaPods and Elestio (fully-managed), and Coolify (self-host on your own VPS).' },
  { q: 'Is one-click hosting free?', a: 'Several platforms have free tiers; managed app hosting typically starts around $1–5/mo. Cheaper than almost any SaaS subscription, and you keep your data.' },
]

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Self-Hosted Apps With One-Click Deploy (2026)',
    description: 'Open-source apps you can deploy in minutes with no server skills — one-click templates and managed hosting on Railway, Render, PikaPods and more. Every app scored for difficulty, sortable by stars and freshness.',
    path: '/reports/one-click-deploy-apps',
    ogSubtitle: 'Deploy in minutes, no terminal required',
  })
}

export default async function OneClickReport() {
  const all = await getListings({ sort: 'stars', limit: 300 })
  const listings = all.filter((l) => l.deployOptions.includes('One-Click') || (l.selfHostDifficulty ?? 5) === 1)
  const rows = toCompareRows(listings)

  return (
    <div className="container max-w-6xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Self-hosted', path: '/self-hosted' },
            { name: 'One-click deploy apps', path: '/reports/one-click-deploy-apps' },
          ]),
          itemListLd(listings, 'Self-hosted apps with one-click deploy'),
          datasetLd({
            name: 'Self-hosted apps with one-click deploy',
            description: `${listings.length} open-source apps that deploy in one click via Railway, Render, PikaPods and more, with self-host difficulty scores.`,
            path: '/reports/one-click-deploy-apps',
          }),
          faqLd(FAQS),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href="/self-hosted" className="hover:text-foreground">Self-hosted</Link> /{' '}
        <span className="text-foreground">One-click deploy</span>
      </nav>

      <p className="text-xs font-medium uppercase tracking-wide text-primary">Data report</p>
      <h1 className="mt-1 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        Self-Hosted Apps With One-Click Deploy
      </h1>
      <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
        Want to own your tools without touching a terminal? These {listings.length} open-source apps offer a
        one-click deploy template or official managed hosting — pick one, click deploy on Railway / Render /
        PikaPods, and you’re live in minutes. Each is also scored for difficulty and kept fresh.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">Last updated {formatDate(new Date())} · {listings.length} apps</p>

      <section className="mt-8">
        <ComparisonTable rows={rows} showCategory />
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">FAQ</h2>
        <Faq items={FAQS} />
      </section>
    </div>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { Faq } from '@/components/faq'
import { JsonLd } from '@/components/json-ld'
import { SavingsCalculator, type CalcItem } from '@/components/savings-calculator'
import { getListingsReplacing, getProprietaryToolsWithCounts } from '@/lib/db/queries'
import { breadcrumbLd, buildMetadata, faqLd } from '@/lib/seo'

export const revalidate = 86400

const FAQS = [
  { q: 'How accurate is the savings estimate?', a: 'It compares what you tell us you pay against a rough self-hosting cost (managed/one-click ≈ $5/mo, a small Docker VPS ≈ $6–12/mo depending on the app’s difficulty). Your real cost depends on your provider and scale — but the software itself is always free.' },
  { q: 'Which alternative does it recommend?', a: 'The most popular (most-starred) open-source replacement for the SaaS you select. Open its page or the full “X alternatives” list to compare every option by difficulty, freshness, and feature gap.' },
  { q: 'Is self-hosting really cheaper?', a: 'Almost always, once you have more than a couple of seats — SaaS bills scale per user, while a single VPS can run several self-hosted apps for a flat ~$5–10/mo.' },
]

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Self-Hosting Savings Calculator',
    description: 'Pick the SaaS you pay for and see how much you’d save each year by switching to its open-source, self-hostable alternative — with the recommended project, its self-host difficulty, and a one-click deploy.',
    path: '/self-host-savings-calculator',
    ogSubtitle: 'See your annual savings in seconds',
  })
}

export default async function SavingsCalculatorPage() {
  const tools = await getProprietaryToolsWithCounts()
  const covered = tools.filter((t) => t.count > 0).sort((a, b) => a.name.localeCompare(b.name))

  const items: CalcItem[] = (
    await Promise.all(
      covered.map(async (t) => {
        const [top] = await getListingsReplacing(t.slug, 'stars', 1)
        if (!top) return null
        return {
          propSlug: t.slug,
          propName: t.name,
          altName: top.name,
          altSlug: top.slug,
          altId: top.id,
          difficulty: top.selfHostDifficulty,
          managed: top.hasManagedHosting,
          oneClick: top.deployOptions.includes('One-Click'),
        } satisfies CalcItem
      }),
    )
  ).filter(Boolean) as CalcItem[]

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Savings calculator', path: '/self-host-savings-calculator' },
          ]),
          faqLd(FAQS),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">Savings calculator</span>
      </nav>

      <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        How much would self-hosting save you?
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Pick the SaaS you’re paying for and what it costs you each month. We’ll show the best open-source
        replacement, how hard it is to self-host, and what you’d save per year by switching.
      </p>

      <div className="mt-8">
        {items.length > 0 ? (
          <SavingsCalculator items={items} />
        ) : (
          <p className="text-muted-foreground">Seed the database to use the calculator.</p>
        )}
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Frequently asked questions</h2>
        <Faq items={FAQS} />
      </section>
    </div>
  )
}

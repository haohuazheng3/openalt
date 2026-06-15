import Link from 'next/link'
import type { Metadata } from 'next'
import { Faq } from '@/components/faq'
import { JsonLd } from '@/components/json-ld'
import { Card } from '@/components/ui/card'
import { getListings } from '@/lib/db/queries'
import { difficultyInfo } from '@/lib/difficulty'
import { breadcrumbLd, buildMetadata, faqLd } from '@/lib/seo'
import { formatDate } from '@/lib/utils'

export const revalidate = 86400

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'The Self-Host Difficulty Index (2026)',
    description: 'A data report ranking every category of self-hosted software by how hard it is to run — average difficulty score, share of one-click apps, and the easiest pick in each category. Original data from OpenAlt.',
    path: '/reports/self-host-difficulty-index',
    ogSubtitle: 'Which categories are easy to self-host — and which aren’t',
  })
}

export default async function DifficultyIndexReport() {
  const listings = await getListings({ limit: 300 })

  // Aggregate by category.
  type Row = { name: string; slug: string; count: number; sum: number; easy: number; oneClick: number; easiest?: { name: string; slug: string; d: number } }
  const map = new Map<string, Row>()
  for (const l of listings) {
    if (!l.category || !l.selfHostDifficulty) continue
    const k = l.category.slug
    const r = map.get(k) ?? { name: l.category.name, slug: k, count: 0, sum: 0, easy: 0, oneClick: 0 }
    r.count++
    r.sum += l.selfHostDifficulty
    if (l.selfHostDifficulty <= 2) r.easy++
    if (l.deployOptions.includes('One-Click')) r.oneClick++
    if (!r.easiest || l.selfHostDifficulty < r.easiest.d) r.easiest = { name: l.name, slug: l.slug, d: l.selfHostDifficulty }
    map.set(k, r)
  }
  const rows = [...map.values()].map((r) => ({ ...r, avg: r.sum / r.count })).sort((a, b) => a.avg - b.avg)
  const overallAvg = listings.filter((l) => l.selfHostDifficulty).reduce((s, l) => s + (l.selfHostDifficulty ?? 0), 0) /
    Math.max(1, listings.filter((l) => l.selfHostDifficulty).length)

  const faqs = [
    { q: 'What is the Self-Host Difficulty Index?', a: `An aggregate of OpenAlt’s 1–5 self-host difficulty scores across ${listings.length} open-source projects, averaged per category, so you can see which kinds of software are easy to run yourself and which take real effort. The overall average is ${overallAvg.toFixed(1)}/5.` },
    { q: 'Which category is easiest to self-host?', a: rows[0] ? `${rows[0].name}, with an average difficulty of ${rows[0].avg.toFixed(1)}/5 — its easiest pick is ${rows[0].easiest?.name}.` : 'See the table above.' },
    { q: 'Which is hardest?', a: rows.length ? `${rows[rows.length - 1].name}, averaging ${rows[rows.length - 1].avg.toFixed(1)}/5.` : 'See the table above.' },
  ]

  const bar = (avg: number) => {
    const pct = (avg / 5) * 100
    const tone = avg <= 2 ? 'bg-emerald-500' : avg <= 3 ? 'bg-amber-500' : 'bg-rose-500'
    return (
      <div className="flex items-center gap-2">
        <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
          <div className={`h-full ${tone}`} style={{ width: `${pct}%` }} />
        </div>
        <span className="tabular-nums">{avg.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Reports', path: '/self-hosted' },
            { name: 'Self-host difficulty index', path: '/reports/self-host-difficulty-index' },
          ]),
          faqLd(faqs),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href="/self-hosted" className="hover:text-foreground">Self-hosted</Link> /{' '}
        <span className="text-foreground">Difficulty index</span>
      </nav>

      <p className="text-xs font-medium uppercase tracking-wide text-primary">Data report</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">The Self-Host Difficulty Index</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        We scored {listings.length} open-source apps on a strict 1–5 self-host difficulty rubric. Here’s how
        hard each category is to run yourself — averaged, with the easiest pick in each. Overall average:{' '}
        <strong className="text-foreground">{overallAvg.toFixed(1)}/5</strong>.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        Source: OpenAlt · self-host difficulty rubric · Last updated {formatDate(new Date())}. Free to cite with a link.
      </p>

      <div className="mt-8 overflow-x-auto rounded-xl border">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="p-3 text-left font-medium">Category</th>
              <th className="p-3 text-left font-medium">Avg difficulty</th>
              <th className="p-3 text-right font-medium">Apps</th>
              <th className="p-3 text-right font-medium">Easy (≤2)</th>
              <th className="p-3 text-right font-medium">1-click</th>
              <th className="p-3 text-left font-medium">Easiest pick</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.slug} className="border-b last:border-0 hover:bg-muted/30">
                <td className="p-3"><Link href={`/category/${r.slug}`} className="font-medium hover:underline">{r.name}</Link></td>
                <td className="p-3">{bar(r.avg)}</td>
                <td className="p-3 text-right tabular-nums">{r.count}</td>
                <td className="p-3 text-right tabular-nums">{r.easy}</td>
                <td className="p-3 text-right tabular-nums">{r.oneClick}</td>
                <td className="p-3">{r.easiest && <Link href={`/${r.easiest.slug}`} className="hover:underline">{r.easiest.name} <span className="text-muted-foreground">({difficultyInfo(r.easiest.d)?.label})</span></Link>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Card className="mt-6 p-5 text-sm text-muted-foreground">
        <strong className="text-foreground">Methodology:</strong> each project is scored 1 (one-click / managed
        hosting) to 5 (complex multi-component stack or thin docs). Category averages are the mean of all scored
        projects in that category. See the full{' '}
        <Link href="/self-hosted" className="text-primary hover:underline">self-hosted directory</Link> or the{' '}
        <Link href="/easiest-self-hosted-apps" className="text-primary hover:underline">easiest apps ranking</Link>.
      </Card>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold">FAQ</h2>
        <Faq items={faqs} />
      </section>
    </div>
  )
}

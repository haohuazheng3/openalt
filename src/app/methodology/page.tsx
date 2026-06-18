import Link from 'next/link'
import type { Metadata } from 'next'
import { CheckCircle2, GitCommitVertical, RefreshCw, ScrollText, ShieldCheck } from 'lucide-react'
import { Faq } from '@/components/faq'
import { JsonLd } from '@/components/json-ld'
import { Tldr } from '@/components/tldr'
import { Card } from '@/components/ui/card'
import { getListings } from '@/lib/db/queries'
import { breadcrumbLd, buildMetadata, faqLd } from '@/lib/seo'
import { formatDate } from '@/lib/utils'

export const revalidate = 86400

const RUBRIC = [
  {
    score: 1,
    label: 'Effortless',
    means: 'A one-click deploy template or official managed hosting — you never touch a server.',
    signal: 'A deploy button (Railway / Render / PikaPods) or a hosted tier exists.',
  },
  {
    score: 2,
    label: 'Easy',
    means: 'A single `docker run` brings up a working instance.',
    signal: 'One container, embedded/SQLite storage, no external services to wire up.',
  },
  {
    score: 3,
    label: 'Moderate',
    means: 'docker-compose with a few services (app + database + cache).',
    signal: 'An official compose file; 2–4 services; little manual configuration.',
  },
  {
    score: 4,
    label: 'Involved',
    means: 'Manual setup — you configure a database, reverse proxy, env and dependencies yourself.',
    signal: 'No turnkey compose; external Postgres/Redis/SMTP; TLS to terminate.',
  },
  {
    score: 5,
    label: 'Advanced',
    means: 'A complex multi-component architecture and/or thin documentation.',
    signal: 'Many services, Kubernetes-leaning deployments, or docs that assume deep ops knowledge.',
  },
]

const FAQS = [
  {
    q: 'How do you decide a project’s difficulty score?',
    a: 'We apply the fixed 1–5 rubric on this page to each project: what deployment method actually exists (one-click, single container, compose, or manual), how many services it needs, and how good the official documentation is. The score reflects getting to a working instance, not mastering every advanced feature.',
  },
  {
    q: 'Is the score about installation only, or running it long-term?',
    a: 'Primarily first-run difficulty — getting a working instance. Long-term maintenance (updates, backups) roughly tracks the same scale, but a low score is not a promise that ongoing ops are zero-effort.',
  },
  {
    q: 'How often is the data updated?',
    a: 'Stars, last-commit dates, and archived status are refreshed every week directly from the GitHub API, and projects that get archived are flagged automatically. Difficulty scores and feature-gap notes are editorial and revised when a project changes how it deploys.',
  },
  {
    q: 'What if a score looks wrong?',
    a: 'Tell us — scores are judgement calls and projects evolve. Use the “suggest an edit” link and we’ll re-evaluate against the rubric. We would rather be corrected than be confidently wrong.',
  },
  {
    q: 'Why do you publish each project’s weaknesses?',
    a: 'Because a directory that only lists upsides can’t help you decide. Every project page documents where it falls short of the proprietary tool it replaces, so you can judge whether the trade-off is worth owning your data.',
  },
]

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Methodology — How We Score Self-Host Difficulty',
    description:
      'Exactly how OpenAlt scores self-host difficulty (1–5), where the data comes from, how often it’s refreshed, and the limitations we’re upfront about. The rubric, the sources, and the corrections process.',
    path: '/methodology',
    ogSubtitle: 'The rubric, the sources, the limits',
  })
}

export default async function MethodologyPage() {
  const all = await getListings({ sort: 'stars', limit: 500, status: 'all' })
  const total = all.length
  const dist = [1, 2, 3, 4, 5].map((n) => ({ n, count: all.filter((l) => l.selfHostDifficulty === n).length }))
  const maxCount = Math.max(...dist.map((d) => d.count), 1)
  const withGap = all.filter((l) => l.featureGapMd && l.featureGapMd.trim()).length
  const archived = all.filter((l) => l.status === 'archived').length
  const today = formatDate(new Date())

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Methodology', path: '/methodology' },
          ]),
          faqLd(FAQS),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">Methodology</span>
      </nav>

      <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        How we score self-host difficulty
      </h1>

      <Tldr updated={today} sources="GitHub API (stars, commits, archived status); editorial rubric below">
        Every project gets a <strong>1–5 self-host difficulty score</strong> from a fixed rubric — the deployment
        method that actually exists, how many services it needs, and documentation quality. Stars, last-commit and
        archived status refresh <strong>weekly from the GitHub API</strong>. We document each project’s weaknesses
        honestly. Here’s exactly how — so you can judge whether to trust the numbers.
      </Tldr>

      {/* Data transparency */}
      <section className="mt-8">
        <div className="grid gap-3 sm:grid-cols-3">
          <Card className="p-4">
            <div className="text-2xl font-bold tabular-nums">{total}</div>
            <div className="text-xs text-muted-foreground">projects scored against the rubric</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold tabular-nums">{Math.round((withGap / total) * 100)}%</div>
            <div className="text-xs text-muted-foreground">with a documented feature-gap vs the original</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold tabular-nums">{archived}</div>
            <div className="text-xs text-muted-foreground">flagged archived / dead so you don’t deploy them</div>
          </Card>
        </div>
        {/* Difficulty distribution */}
        <Card className="mt-3 p-5">
          <div className="text-sm font-semibold">Difficulty distribution across all {total} projects</div>
          <div className="mt-3 space-y-1.5">
            {dist.map((d) => (
              <div key={d.n} className="flex items-center gap-3 text-sm">
                <span className="w-24 shrink-0 text-muted-foreground">{d.n} · {RUBRIC[d.n - 1].label}</span>
                <div className="h-4 flex-1 overflow-hidden rounded bg-muted">
                  <div className="h-full rounded bg-primary/70" style={{ width: `${(d.count / maxCount) * 100}%` }} />
                </div>
                <span className="w-8 shrink-0 text-right tabular-nums">{d.count}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* The rubric */}
      <section className="mt-12">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <ScrollText className="size-5 text-primary" /> The 1–5 rubric
        </h2>
        <p className="mt-2 text-muted-foreground">
          The score reflects how hard it is to get a working instance running — not how feature-complete it is. We score
          against the easiest officially-supported path a project offers.
        </p>
        <div className="mt-4 space-y-3">
          {RUBRIC.map((r) => (
            <Card key={r.score} className="p-4">
              <div className="flex items-baseline gap-3">
                <span className="text-lg font-bold tabular-nums text-primary">{r.score}</span>
                <span className="font-semibold">{r.label}</span>
              </div>
              <p className="mt-1 text-sm">{r.means}</p>
              <p className="mt-1 text-xs text-muted-foreground"><span className="font-medium">Typical signal:</span> {r.signal}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* What we look at */}
      <section className="mt-12">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <CheckCircle2 className="size-5 text-primary" /> What goes into a score
        </h2>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            ['Deployment method that exists', 'One-click template, single container, compose, or fully manual — we score the easiest official path.'],
            ['Number of moving parts', 'How many services (database, cache, queue, worker, reverse proxy) you must run and keep healthy.'],
            ['Documentation quality', 'Whether the official docs get a non-expert to a running instance, or assume deep ops knowledge.'],
            ['Managed-hosting escape hatch', 'Whether an official or third-party hosted option exists for people who don’t want to run servers at all.'],
          ].map(([h, body]) => (
            <li key={h} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
              <span><span className="font-medium text-foreground">{h}:</span> <span className="text-muted-foreground">{body}</span></span>
            </li>
          ))}
        </ul>
      </section>

      {/* Sources & freshness */}
      <section className="mt-12">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <RefreshCw className="size-5 text-primary" /> Where the data comes from & how it stays fresh
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <Card className="p-4">
            <div className="flex items-center gap-2 text-sm font-semibold"><GitCommitVertical className="size-4 text-primary" /> Live from GitHub (weekly)</div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Star counts, last-commit dates, and archived status are pulled straight from the GitHub API every week.
              When a repo gets archived, the project is automatically flagged so you don’t deploy something abandoned.
            </p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 text-sm font-semibold"><ScrollText className="size-4 text-primary" /> Editorial (rubric-based)</div>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Difficulty scores, deploy-option tags, and the honest feature-gap notes are assigned by us against the
              rubric above, and revised when a project changes how it deploys or what it can do.
            </p>
          </Card>
        </div>
      </section>

      {/* Honesty & limitations */}
      <section className="mt-12">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <ShieldCheck className="size-5 text-primary" /> Honesty & limitations
        </h2>
        <Card className="mt-3 border-amber-200 bg-amber-50/40 p-5">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• A difficulty score is a judgement call and a starting point — your exact effort depends on your stack, network, and experience.</li>
            <li>• We deliberately document where each project <span className="font-medium text-foreground">falls short</span> of the tool it replaces. Missing features are listed, not hidden.</li>
            <li>• We never invent ratings, reviews, or usage statistics. If we don’t have real data for something, we leave it out.</li>
            <li>• Deploy and hosting links may be affiliate links — they never change a score, the ranking, or what we say about a project.</li>
          </ul>
        </Card>
      </section>

      {/* Corrections / who */}
      <section className="mt-10">
        <Card className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-medium">See something wrong?</div>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Scores and notes are maintained by the OpenAlt editorial team. Corrections are welcome and reviewed against the rubric.
            </p>
          </div>
          <Link href="/submit" className="inline-flex h-9 shrink-0 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Suggest an edit
          </Link>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Methodology FAQ</h2>
        <Faq items={FAQS} />
      </section>

      {/* Internal links */}
      <section className="mt-12 border-t pt-8">
        <h2 className="text-base font-semibold">See it in action</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <Link href="/reports/self-host-difficulty-index" className="rounded-md border px-3 py-1.5 hover:bg-accent">Self-host difficulty index →</Link>
          <Link href="/easiest-self-hosted-apps" className="rounded-md border px-3 py-1.5 hover:bg-accent">Easiest self-hosted apps →</Link>
          <Link href="/reports/archived-self-hosted-projects" className="rounded-md border px-3 py-1.5 hover:bg-accent">Dead projects to avoid →</Link>
          <Link href="/self-hosted" className="rounded-md border px-3 py-1.5 hover:bg-accent">Full directory →</Link>
        </div>
      </section>
    </div>
  )
}

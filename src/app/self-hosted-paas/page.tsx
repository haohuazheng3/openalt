import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Github, Server } from 'lucide-react'
import { ComparisonTable, type CompareRow } from '@/components/comparison-table'
import { Faq } from '@/components/faq'
import { GoButton } from '@/components/go-button'
import { JsonLd } from '@/components/json-ld'
import { Tldr } from '@/components/tldr'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { getListings } from '@/lib/db/queries'
import { isActivelyFeatured } from '@/lib/featured'
import { difficultyInfo } from '@/lib/difficulty'
import { FEATURED_VS } from '@/data/featured-comparisons'
import { breadcrumbLd, buildMetadata, faqLd, itemListLd } from '@/lib/seo'
import { versusSlug } from '@/lib/slug'
import { formatDate } from '@/lib/utils'

export const revalidate = 86400

/** Editorial one-liners for the headline picks (real positioning, not templated). */
const PICK_NOTES: Record<string, string> = {
  coolify: 'The most popular self-hosted PaaS — a polished web UI deploys apps, databases and services from Git with near one-click ease. The default choice for most teams.',
  dokploy: 'A fast-rising, Coolify-style platform: open-source, Docker/Compose-native, with a clean UI and built-in databases. The one to watch.',
  caprover: 'Battle-tested and lightweight — a CLI + web UI PaaS that runs comfortably on a single small VPS. Less flashy, very stable.',
  dokku: 'The closest thing to self-hosted Heroku: git-push deploys via buildpacks, minimal and scriptable — a bit more hands-on to set up (difficulty 4).',
}
const PICK_ORDER = ['coolify', 'dokploy', 'caprover', 'dokku']

const FAQS = [
  { q: 'What is the best open-source Heroku alternative?', a: 'For most people, Coolify — it gives you a Heroku-like web UI to deploy apps and databases from Git, and installs with effectively one command (difficulty 2). If you want the closest match to Heroku’s git-push-to-deploy workflow specifically, Dokku is it, at the cost of a more manual setup. CapRover and Dokploy are excellent middle grounds.' },
  { q: 'Can a self-hosted PaaS really replace Render or Vercel?', a: 'For most app + database + worker workloads, yes. Coolify and Dokploy deploy from a Git repo, manage databases, terminate TLS, and handle environment variables — the core of what Render/Vercel do — on a server you control. You give up the managed autoscaling and edge network, which only some apps need.' },
  { q: 'Coolify vs CapRover vs Dokku — which should I pick?', a: 'Coolify: the richest UI and the safest default. CapRover: leaner and rock-solid on a small VPS. Dokku: the most Heroku-like git-push flow, most hands-on. Dokploy: a newer Coolify-style option worth a look. All four are open-source and run on a cheap VPS.' },
  { q: 'Is self-hosting a PaaS hard?', a: 'Less than you’d think. Coolify, Dokploy, CapRover and 1Panel all score 2/5 on our difficulty scale — typically a single install script on a fresh VPS. The Kubernetes-based options (Devtron, Kubero, Qovery Engine) are 4–5 and meant for teams already running a cluster.' },
  { q: 'How much can I save versus Heroku or Render?', a: 'A Heroku Standard dyno + Standard Postgres runs well over $50/month; Render adds up similarly as you scale. A single $5–10/month VPS running Coolify can host several apps and their databases — so the software is free and the infrastructure is a flat, predictable cost.' },
]

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Best Self-Hosted PaaS: Open-Source Heroku & Render Alternatives (2026)',
    description:
      'The strongest open-source, self-hostable Platform-as-a-Service options that replace Heroku, Render and Vercel — each scored 1–5 for setup difficulty, with deploy methods, GitHub freshness, and head-to-head comparisons.',
    path: '/self-hosted-paas',
    ogSubtitle: 'Difficulty-scored Heroku/Render replacements',
  })
}

export default async function SelfHostedPaasPage() {
  const listings = await getListings({ categorySlug: 'paas-deploy', sort: 'easiest', limit: 30 })
  const bySlug = new Map(listings.map((l) => [l.slug, l]))
  const picks = PICK_ORDER.map((s) => bySlug.get(s)).filter(Boolean) as typeof listings
  const today = formatDate(new Date())

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
            { name: 'Self-hosted PaaS', path: '/self-hosted-paas' },
          ]),
          itemListLd(listings, 'Self-hosted PaaS / Heroku alternatives'),
          faqLd(FAQS),
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <span className="text-foreground">Self-hosted PaaS</span>
      </nav>

      <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
        Best Self-Hosted PaaS: Open-Source Heroku &amp; Render Alternatives (2026)
      </h1>

      <Tldr updated={today} sources="GitHub API (stars, last commit); difficulty scored against our rubric">
        <strong>Coolify</strong> is the best self-hosted Heroku alternative for most teams — a one-command install and a
        web UI to deploy apps and databases from Git (difficulty 2/5). <strong>Dokploy</strong> and <strong>CapRover</strong>{' '}
        are strong, lean alternatives; <strong>Dokku</strong> is the most Heroku-like git-push flow. All run on a $5–10/mo
        VPS and replace Heroku, Render and Vercel for most workloads.
      </Tldr>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        With Heroku now in “sustaining engineering” (maintained, not evolving) after killing its free tier and raising
        prices, developers are moving to self-hosted PaaS that bring git-push and one-click deploys to their own servers.
        Here are the {listings.length} strongest open-source options — each scored for how hard it is to actually run,
        not just listed. <Link href="/methodology" className="text-primary hover:underline">How we score →</Link>
      </p>

      {/* Headline picks */}
      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold">The picks</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {picks.map((l) => {
            const diff = difficultyInfo(l.selfHostDifficulty)
            return (
              <Card key={l.id} className="flex flex-col gap-2 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Server className="size-4 text-primary" />
                  <Link href={`/${l.slug}`} className="text-lg font-semibold hover:underline">{l.name}</Link>
                  {diff && <Badge variant="outline">Self-host: {diff.label}</Badge>}
                  <span className="text-xs text-muted-foreground tabular-nums">★ {l.githubStars.toLocaleString()}</span>
                </div>
                <p className="text-sm text-muted-foreground">{PICK_NOTES[l.slug]}</p>
                <div className="mt-1 flex gap-2">
                  <GoButton id={l.id} to="repo" label="Repo" icon={Github} variant="outline" size="sm" />
                  <Link href={`/${l.slug}`} className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Full guide <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Full comparison table */}
      <section className="mt-10">
        <div className="mb-3 flex items-end justify-between gap-4">
          <h2 className="text-lg font-semibold">Compare all {listings.length} self-hosted PaaS</h2>
          <span className="hidden text-xs text-muted-foreground sm:inline">Tap a column header to sort</span>
        </div>
        <ComparisonTable rows={rows} />
        <p className="mt-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">What to look for: </span>
          difficulty 2 options (Coolify, Dokploy, CapRover, 1Panel) install in one step; difficulty 4–5 options
          (Dokku, Kubero, Devtron, Qovery Engine) trade convenience for control or assume a Kubernetes cluster.
        </p>
      </section>

      {/* Head-to-head */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold">Head-to-head comparisons</h2>
        <p className="mt-1 text-sm text-muted-foreground">The matchups people actually search — compared on difficulty, deploy method, and freshness.</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {FEATURED_VS.map((v) => {
            const a = bySlug.get(v.a)
            const b = bySlug.get(v.b)
            if (!a || !b) return null
            return (
              <Link key={`${v.a}-${v.b}`} href={`/${versusSlug(v.a, v.b)}`} className="rounded-lg border p-4 hover:bg-accent">
                <div className="font-medium">{a.name} vs {b.name}</div>
                {v.hook && <p className="mt-1 text-xs text-muted-foreground">{v.hook}</p>}
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-primary">Compare <ArrowRight className="size-3.5" /></span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Savings angle */}
      <section className="mt-10">
        <Card className="border-primary/30 bg-accent/40 p-5">
          <h2 className="text-base font-semibold">The cost case</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            A Heroku Standard dyno plus Standard Postgres runs $50+/month; Render scales similarly. One $5–10/month VPS
            running Coolify hosts several apps and their databases at a flat, predictable price.
          </p>
          <Link href="/self-host-savings-calculator" className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            Estimate your savings <ArrowRight className="size-4" />
          </Link>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Self-hosted PaaS — frequently asked questions</h2>
        <Faq items={FAQS} />
      </section>

      {/* Internal links */}
      <section className="mt-12 border-t pt-8">
        <h2 className="text-base font-semibold">Keep exploring</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <Link href="/heroku-alternatives" className="rounded-md border px-3 py-1.5 hover:bg-accent">Heroku alternatives →</Link>
          <Link href="/render-alternatives" className="rounded-md border px-3 py-1.5 hover:bg-accent">Render alternatives →</Link>
          <Link href="/easiest-self-hosted-apps" className="rounded-md border px-3 py-1.5 hover:bg-accent">Easiest to self-host →</Link>
          <Link href="/methodology" className="rounded-md border px-3 py-1.5 hover:bg-accent">How we score →</Link>
        </div>
      </section>
    </div>
  )
}

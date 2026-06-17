import Link from 'next/link'
import type { Metadata } from 'next'
import { Cloud, Container, Rocket, Server } from 'lucide-react'
import { Faq } from '@/components/faq'
import { JsonLd } from '@/components/json-ld'
import { ListingCard } from '@/components/listing-card'
import { Card } from '@/components/ui/card'
import { DIFFICULTY_OPTIONS, difficultyInfo } from '@/lib/difficulty'
import { getCategories, getListings } from '@/lib/db/queries'
import { breadcrumbLd, buildMetadata, faqLd, howToLd } from '@/lib/seo'
import { absoluteUrl } from '@/lib/env'
import { formatDate } from '@/lib/utils'

export const revalidate = 86400

const FAQS = [
  { q: 'Is self-hosting hard for beginners?', a: 'It depends entirely on the app. Start with a project scored difficulty 1 — it offers one-click deploy or managed hosting, so there’s nothing to configure. Avoid difficulty 4–5 projects until you’re comfortable with Docker and a reverse proxy.' },
  { q: 'Do I need to know Linux or Docker?', a: 'Not for the easiest picks. A one-click platform (Railway, Render, PikaPods) handles the server for you. Once you want more control, learning basic Docker and a $5/mo VPS unlocks almost everything on this site.' },
  { q: 'How much does self-hosting cost?', a: 'Often less than one SaaS subscription. Managed one-click hosting starts around $1–5/mo; a small VPS that can run several apps is ~$5–10/mo. The software itself is free and open source.' },
  { q: 'What if a project gets abandoned?', a: 'We track last-commit dates and flag archived projects, so you can avoid dead software. Stick to actively maintained, well-starred projects and you’re safe.' },
]

const DEPLOY_PATHS = [
  { icon: Rocket, title: 'One-click platforms', text: 'Railway, Render, PikaPods, Elestio — pick the app, click deploy, done. No server, no terminal.' },
  { icon: Container, title: 'A single Docker command', text: 'On any cheap VPS, `docker run …` gets difficulty-2 apps online in one line.' },
  { icon: Server, title: 'docker-compose', text: 'Difficulty-3 apps ship a compose file that starts the app plus its database and cache together.' },
  { icon: Cloud, title: 'Managed hosting', text: 'Don’t want to run anything? Many projects offer official paid cloud hosting — open-source code, someone else’s servers.' },
]

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Self-Hosting for Beginners: Start Here (2026)',
    description: 'New to self-hosting? Learn how the 1–5 difficulty score works, the four ways to deploy (one-click to docker-compose), and the best beginner-friendly open-source apps to start with — no Linux required.',
    path: '/self-hosting-for-beginners',
    ogSubtitle: 'No server skills required',
  })
}

export default async function SelfHostingForBeginners() {
  const [easy, cats] = await Promise.all([
    getListings({ maxDifficulty: 2, sort: 'stars', limit: 200 }),
    getCategories(),
  ])
  // One beginner-friendly pick per category (most popular, easiest).
  const picks = cats
    .map((c) => easy.find((l) => l.category?.slug === c.slug))
    .filter(Boolean)
    .slice(0, 8) as NonNullable<(typeof easy)[number]>[]

  return (
    <div className="container max-w-4xl py-10">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Self-hosted', path: '/self-hosted' },
            { name: 'For beginners', path: '/self-hosting-for-beginners' },
          ]),
          faqLd(FAQS),
          howToLd({
            name: 'How to start self-hosting open-source software',
            description: 'Read the difficulty score, pick a deploy method, and start with a beginner-friendly app.',
            steps: [
              { name: 'Read the difficulty score', text: 'Every app is scored 1–5. As a beginner, stick to 1–2: one-click/managed or a single docker run.' },
              { name: 'Pick a deploy method', text: 'Use a one-click platform (Railway, Render, PikaPods) for zero terminal, or a $5/mo VPS with Docker for more control.' },
              { name: 'Start with a low-effort app', text: 'Choose a difficulty ≤2 pick from the list below and deploy it; scale up to harder apps once comfortable.' },
            ],
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Self-Hosting for Beginners',
            description: 'How to start self-hosting open-source software with no server experience.',
            url: absoluteUrl('/self-hosting-for-beginners'),
            datePublished: '2026-01-01',
            dateModified: new Date().toISOString().slice(0, 10),
          },
        ]}
      />

      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> /{' '}
        <Link href="/self-hosted" className="hover:text-foreground">Self-hosted</Link> /{' '}
        <span className="text-foreground">For beginners</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Self-Hosting for Beginners</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        You don’t need to be a sysadmin to own your tools. This is the short version: how to read our
        difficulty score, the four ways to deploy an app (from zero-terminal to full control), and the
        beginner-friendly projects to start with.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">Last updated {formatDate(new Date())}</p>

      {/* Difficulty rubric */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">First, what the difficulty score means</h2>
        <p className="mt-2 text-muted-foreground">
          Every app on this site is scored 1–5 for how hard it is to run. As a beginner, stick to 1–2.
        </p>
        <div className="mt-4 space-y-2">
          {DIFFICULTY_OPTIONS.map((d) => {
            const info = difficultyInfo(Number(d.value))!
            return (
              <Card key={d.value} className="flex items-start gap-3 p-4">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-accent text-sm font-bold text-accent-foreground">{info.score}</span>
                <div>
                  <div className="font-medium">{info.label}</div>
                  <div className="text-sm text-muted-foreground">{info.blurb}</div>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Deploy paths */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">The four ways to deploy</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {DEPLOY_PATHS.map((p) => (
            <Card key={p.title} className="p-4">
              <div className="flex items-center gap-2 font-medium"><p.icon className="size-4 text-primary" /> {p.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Beginner picks */}
      {picks.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Best beginner-friendly apps to start with</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            One popular, low-effort pick per category — all difficulty ≤ 2. See the full ranking on{' '}
            <Link href="/easiest-self-hosted-apps" className="text-primary hover:underline">easiest self-hosted apps</Link>.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {picks.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </section>
      )}

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Beginner FAQ</h2>
        <Faq items={FAQS} />
      </section>
    </div>
  )
}

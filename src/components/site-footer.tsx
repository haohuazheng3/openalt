import Link from 'next/link'
import { Boxes } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { getCategories } from '@/lib/db/queries'
import { CATEGORIES } from '@/data/categories'
import { alternativesSlug } from '@/data/proprietary-tools'

const POPULAR_ALTS = [
  ['notion', 'Notion'],
  ['airtable', 'Airtable'],
  ['zapier', 'Zapier'],
  ['google-analytics', 'Google Analytics'],
  ['slack', 'Slack'],
  ['1password', '1Password'],
  ['trello', 'Trello'],
  ['typeform', 'Typeform'],
] as const

export async function SiteFooter() {
  const dbCategories = await getCategories()
  const cats = (dbCategories.length ? dbCategories : CATEGORIES).slice(0, 8)

  return (
    <footer className="mt-20 border-t bg-muted/30">
      <div className="container grid gap-10 py-12 md:grid-cols-5">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-semibold">
            <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Boxes className="size-3.5" />
            </span>
            {SITE.name}
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{SITE.tagline}.</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Browse by category</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {cats.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="hover:text-foreground">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Popular alternatives</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {POPULAR_ALTS.map(([slug, name]) => (
              <li key={slug}>
                <Link href={`/${alternativesSlug(slug)}`} className="hover:text-foreground">
                  {name} alternatives
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Guides &amp; data</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/self-hosted" className="hover:text-foreground">Self-hosted directory</Link></li>
            <li><Link href="/open-source-alternatives" className="hover:text-foreground">Open-source alternatives</Link></li>
            <li><Link href="/easiest-self-hosted-apps" className="hover:text-foreground">Easiest to self-host</Link></li>
            <li><Link href="/self-hosting-for-beginners" className="hover:text-foreground">For beginners</Link></li>
            <li><Link href="/reports/self-host-difficulty-index" className="hover:text-foreground">Difficulty index</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Directory</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/search" className="hover:text-foreground">All projects</Link></li>
            <li><Link href="/reports/one-click-deploy-apps" className="hover:text-foreground">One-click deploy</Link></li>
            <li><Link href="/reports/archived-self-hosted-projects" className="hover:text-foreground">Projects to avoid</Link></li>
            <li><Link href="/submit" className="hover:text-foreground">Submit a project</Link></li>
            <li><Link href="/advertise" className="hover:text-foreground">Get featured</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All trademarks belong to their owners.
          </p>
          <p>Some deploy &amp; hosting links are affiliate links — we may earn a commission at no extra cost to you.</p>
        </div>
      </div>
    </footer>
  )
}

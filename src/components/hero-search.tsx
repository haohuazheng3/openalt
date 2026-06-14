import Link from 'next/link'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const POPULAR = [
  { label: 'Notion', href: '/notion-alternatives' },
  { label: 'Airtable', href: '/airtable-alternatives' },
  { label: 'Zapier', href: '/zapier-alternatives' },
  { label: 'Google Analytics', href: '/google-analytics-alternatives' },
  { label: 'Slack', href: '/slack-alternatives' },
  { label: '1Password', href: '/1password-alternatives' },
]

export function HeroSearch() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <form action="/search" className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <input
          name="q"
          autoComplete="off"
          aria-label="Search open-source alternatives"
          placeholder="Search a SaaS you want to replace — e.g. Notion, Airtable, Zapier"
          className="h-14 w-full rounded-xl border bg-background pl-12 pr-28 text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <Button type="submit" size="lg" className="absolute right-2 top-1/2 -translate-y-1/2">
          Search
        </Button>
      </form>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Popular:</span>
        {POPULAR.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="rounded-full border bg-background px-3 py-1 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            {t.label} alternatives
          </Link>
        ))}
      </div>
    </div>
  )
}

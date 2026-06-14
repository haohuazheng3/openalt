import Link from 'next/link'
import { Boxes, Plus, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE } from '@/lib/constants'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Boxes className="size-4" />
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>

        <nav className="ml-2 hidden items-center gap-1 text-sm text-muted-foreground md:flex">
          <Link href="/#categories" className="rounded-md px-3 py-2 hover:text-foreground">
            Categories
          </Link>
          <Link href="/#alternatives" className="rounded-md px-3 py-2 hover:text-foreground">
            By SaaS
          </Link>
          <Link href="/search" className="rounded-md px-3 py-2 hover:text-foreground">
            All projects
          </Link>
          <Link href="/advertise" className="rounded-md px-3 py-2 hover:text-foreground">
            Advertise
          </Link>
        </nav>

        <form action="/search" className="ml-auto hidden items-center sm:flex">
          <div className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              name="q"
              placeholder="Search alternatives…"
              aria-label="Search open-source alternatives"
              className="h-9 w-48 rounded-md border border-input bg-transparent pl-8 pr-3 text-sm shadow-sm transition-[width] placeholder:text-muted-foreground focus-visible:w-64 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:w-56"
            />
          </div>
        </form>

        <Button asChild size="sm" className="ml-auto sm:ml-0">
          <Link href="/submit">
            <Plus className="size-4" /> Submit
          </Link>
        </Button>
      </div>
    </header>
  )
}

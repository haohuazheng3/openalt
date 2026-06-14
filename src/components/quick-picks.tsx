import Link from 'next/link'
import { Cloud, Gauge, Rocket, TrendingUp, type LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import type { AlternativeGuide } from '@/data/alternative-guides'
import type { ListingWithCategory } from '@/lib/db/schema'

const SLOTS: { key: keyof AlternativeGuide['picks']; label: string; icon: LucideIcon }[] = [
  { key: 'easiest', label: 'Easiest to self-host', icon: Gauge },
  { key: 'mostPowerful', label: 'Most powerful', icon: Rocket },
  { key: 'mostActive', label: 'Most active', icon: TrendingUp },
  { key: 'bestManaged', label: 'Best managed option', icon: Cloud },
]

/** The "our picks" callout row at the top of a buyer guide. */
export function QuickPicks({
  picks,
  bySlug,
}: {
  picks: AlternativeGuide['picks']
  bySlug: Map<string, ListingWithCategory>
}) {
  const items = SLOTS.map((slot) => {
    const pick = picks[slot.key]
    const listing = pick ? bySlug.get(pick.slug) : null
    return pick && listing ? { ...slot, listing, reason: pick.reason } : null
  }).filter(Boolean) as { key: string; label: string; icon: LucideIcon; listing: ListingWithCategory; reason: string }[]

  if (items.length === 0) return null

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ key, label, icon: Icon, listing, reason }) => (
        <Card key={key} className="flex flex-col gap-2 p-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <Icon className="size-3.5 text-primary" /> {label}
          </div>
          <Link href={`/${listing.slug}`} className="text-lg font-bold leading-tight hover:text-primary">
            {listing.name}
          </Link>
          <p className="text-sm text-muted-foreground">{reason}</p>
        </Card>
      ))}
    </div>
  )
}

import Link from 'next/link'
import { Github, Rocket, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { DifficultyMeter } from '@/components/difficulty-meter'
import { GoButton } from '@/components/go-button'
import { ReplacesBadges } from '@/components/replaces-badges'
import { RepoStats } from '@/components/repo-stats'
import { isActivelyFeatured } from '@/lib/featured'
import { logoUrlFor } from '@/lib/utils'
import type { ListingWithCategory } from '@/lib/db/schema'

export function ListingCard({
  listing,
  rank,
  showCategory = true,
  showReplaces = true,
}: {
  listing: ListingWithCategory
  rank?: number
  showCategory?: boolean
  showReplaces?: boolean
}) {
  const featured = isActivelyFeatured(listing)
  const oneClick = listing.deployOptions.includes('One-Click')
  return (
    <Card
      className={
        'relative flex h-full flex-col gap-3 p-5 transition-shadow hover:shadow-md ' +
        (featured ? 'ring-1 ring-amber-300/70' : '')
      }
    >
      {featured && (
        <Badge variant="sponsored" className="absolute right-3 top-3 gap-1">
          <Sparkles className="size-3" /> Sponsored
        </Badge>
      )}

      <div className="flex items-start gap-3 pr-20">
        {typeof rank === 'number' && (
          <span className="mt-1 text-sm font-bold tabular-nums text-muted-foreground">{rank}.</span>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrlFor(listing)}
          alt=""
          width={40}
          height={40}
          loading="lazy"
          className="size-10 shrink-0 rounded-lg border bg-white object-contain p-1"
        />
        <div className="min-w-0">
          <Link href={`/${listing.slug}`} className="font-semibold leading-tight hover:underline">
            {listing.name}
          </Link>
          {showCategory && listing.category && (
            <div className="text-xs text-muted-foreground">{listing.category.name}</div>
          )}
        </div>
      </div>

      {showReplaces && listing.replaces.length > 0 && (
        <ReplacesBadges replaces={listing.replaces} max={3} />
      )}

      {listing.tagline && (
        <p className="line-clamp-2 text-sm text-muted-foreground">{listing.tagline}</p>
      )}

      <RepoStats listing={listing} />

      <div className="flex flex-wrap items-center gap-2">
        <DifficultyMeter score={listing.selfHostDifficulty} compact />
        {oneClick && (
          <Badge variant="success" className="gap-1">
            <Rocket className="size-3" /> 1-click
          </Badge>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-1">
        <Link href={`/${listing.slug}`} className="text-xs font-medium text-primary hover:underline">
          Details & deploy →
        </Link>
        <GoButton id={listing.id} to="repo" label="Repo" icon={Github} variant="outline" size="sm" />
      </div>
    </Card>
  )
}

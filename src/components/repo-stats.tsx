import { Archive, GitBranch, Scale, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Listing } from '@/lib/db/schema'
import { cn, formatStars, isStale, relativeFromNow } from '@/lib/utils'

type Stats = Pick<Listing, 'githubStars' | 'language' | 'license' | 'lastCommitAt' | 'status'>

/** Compact inline repo facts: stars · language · license · last updated. */
export function RepoStats({ listing, className }: { listing: Stats; className?: string }) {
  const stale = listing.status === 'archived' || isStale(listing.lastCommitAt)
  return (
    <div className={cn('flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground', className)}>
      <span className="inline-flex items-center gap-1 font-medium text-foreground">
        <Star className="size-3.5 text-amber-500" /> {formatStars(listing.githubStars)}
      </span>
      {listing.language && (
        <span className="inline-flex items-center gap-1">
          <span className="size-2.5 rounded-full bg-primary/60" /> {listing.language}
        </span>
      )}
      {listing.license && (
        <span className="inline-flex items-center gap-1">
          <Scale className="size-3.5" /> {listing.license}
        </span>
      )}
      {listing.lastCommitAt && (
        <span className={cn('inline-flex items-center gap-1', stale && 'text-rose-600')}>
          <GitBranch className="size-3.5" /> {relativeFromNow(listing.lastCommitAt)}
        </span>
      )}
      {listing.status === 'archived' && (
        <Badge variant="danger" className="gap-1">
          <Archive className="size-3" /> Archived
        </Badge>
      )}
    </div>
  )
}

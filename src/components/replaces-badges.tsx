import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { alternativesSlug, proprietaryBySlug } from '@/data/proprietary-tools'
import { cn } from '@/lib/utils'

/**
 * "Replaces Notion · Confluence" — each chip links to that product's
 * `/[slug]-alternatives` page (the high-intent SEO surface).
 */
export function ReplacesBadges({
  replaces,
  className,
  label = true,
  max,
}: {
  replaces: string[]
  className?: string
  label?: boolean
  max?: number
}) {
  const items = (max ? replaces.slice(0, max) : replaces)
    .map((slug) => ({ slug, tool: proprietaryBySlug(slug) }))
    .filter((x): x is { slug: string; tool: NonNullable<ReturnType<typeof proprietaryBySlug>> } => Boolean(x.tool))
  if (items.length === 0) return null
  const extra = max && replaces.length > max ? replaces.length - max : 0

  return (
    <div className={cn('flex flex-wrap items-center gap-1.5', className)}>
      {label && <span className="text-xs text-muted-foreground">Replaces</span>}
      {items.map(({ slug, tool }) => (
        <Link key={slug} href={`/${alternativesSlug(slug)}`}>
          <Badge variant="secondary" className="hover:bg-secondary/70">
            {tool.name}
          </Badge>
        </Link>
      ))}
      {extra > 0 && <span className="text-xs text-muted-foreground">+{extra}</span>}
    </div>
  )
}

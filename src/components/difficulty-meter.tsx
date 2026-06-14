import { difficultyInfo } from '@/lib/difficulty'
import { cn } from '@/lib/utils'

const FILL: Record<string, string> = {
  emerald: 'bg-emerald-500',
  lime: 'bg-lime-500',
  amber: 'bg-amber-500',
  orange: 'bg-orange-500',
  rose: 'bg-rose-500',
}
const TEXT: Record<string, string> = {
  emerald: 'text-emerald-700',
  lime: 'text-lime-700',
  amber: 'text-amber-700',
  orange: 'text-orange-700',
  rose: 'text-rose-700',
}

/**
 * The self-host difficulty score (1–5) as a five-segment meter with a label.
 * `compact` renders just the bars + number for cards; otherwise the label shows.
 */
export function DifficultyMeter({
  score,
  compact = false,
  className,
}: {
  score?: number | null
  compact?: boolean
  className?: string
}) {
  const info = difficultyInfo(score)
  if (!info) return null
  return (
    <div className={cn('flex items-center gap-2', className)} title={`Self-host difficulty ${info.score}/5 — ${info.label}: ${info.blurb}`}>
      <div className="flex items-center gap-0.5" aria-hidden>
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={cn('h-3 w-1.5 rounded-sm', n <= info.score ? FILL[info.tone] : 'bg-muted')}
          />
        ))}
      </div>
      {compact ? (
        <span className={cn('text-xs font-medium', TEXT[info.tone])}>{info.score}/5</span>
      ) : (
        <span className={cn('text-sm font-medium', TEXT[info.tone])}>
          {info.label} · {info.score}/5
        </span>
      )}
    </div>
  )
}

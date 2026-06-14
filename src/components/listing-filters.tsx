'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { DIFFICULTY_OPTIONS } from '@/lib/difficulty'
import { cn } from '@/lib/utils'

const SORTS = [
  { value: 'featured', label: 'Featured' },
  { value: 'stars', label: 'Most stars' },
  { value: 'easiest', label: 'Easiest to host' },
  { value: 'newest', label: 'Newest' },
  { value: 'name', label: 'Name (A–Z)' },
]

const selectClass =
  'h-9 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export function ListingFilters({
  deployOptions = [],
  licenses = [],
}: {
  deployOptions?: string[]
  licenses?: string[]
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const sort = searchParams.get('sort') ?? 'featured'
  const maxdiff = searchParams.get('maxdiff') ?? ''
  const deploy = searchParams.get('deploy') ?? ''
  const license = searchParams.get('license') ?? ''

  function update(next: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString())
    for (const [key, value] of Object.entries(next)) {
      if (!value) params.delete(key)
      else params.set(key, value)
    }
    const qs = params.toString()
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
  }

  const hasActiveFilter = Boolean(maxdiff) || Boolean(deploy) || Boolean(license) || sort !== 'featured'

  return (
    <div className="flex flex-wrap items-center gap-3">
      <label className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Sort</span>
        <select
          className={selectClass}
          value={sort}
          onChange={(e) => update({ sort: e.target.value === 'featured' ? null : e.target.value })}
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Max difficulty</span>
        <select className={selectClass} value={maxdiff} onChange={(e) => update({ maxdiff: e.target.value || null })}>
          <option value="">Any</option>
          {DIFFICULTY_OPTIONS.map((d) => (
            <option key={d.value} value={d.value}>
              ≤ {d.label}
            </option>
          ))}
        </select>
      </label>

      {deployOptions.length > 0 && (
        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Deploy</span>
          <select className={selectClass} value={deploy} onChange={(e) => update({ deploy: e.target.value || null })}>
            <option value="">Any</option>
            {deployOptions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
      )}

      {licenses.length > 0 && (
        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">License</span>
          <select className={selectClass} value={license} onChange={(e) => update({ license: e.target.value || null })}>
            <option value="">Any</option>
            {licenses.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>
      )}

      {hasActiveFilter && (
        <button
          type="button"
          onClick={() => router.push(pathname, { scroll: false })}
          className="text-sm text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
        >
          Reset
        </button>
      )}
    </div>
  )
}

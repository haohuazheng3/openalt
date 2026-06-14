import Link from 'next/link'
import { Check, Github, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { DifficultyMeter } from '@/components/difficulty-meter'
import { GoButton } from '@/components/go-button'
import { logoUrlFor, formatStars, relativeFromNow } from '@/lib/utils'
import { difficultyLabel } from '@/lib/difficulty'
import { proprietaryBySlug } from '@/data/proprietary-tools'
import type { ListingWithCategory } from '@/lib/db/schema'

function Bool({ value }: { value: boolean }) {
  return value ? (
    <Check className="size-5 text-emerald-600" aria-label="Yes" />
  ) : (
    <X className="size-5 text-muted-foreground" aria-label="No" />
  )
}

const ROWS: { label: string; render: (l: ListingWithCategory) => React.ReactNode }[] = [
  { label: 'Tagline', render: (l) => l.tagline ?? '—' },
  { label: 'Category', render: (l) => l.category?.name ?? '—' },
  {
    label: 'Replaces',
    render: (l) =>
      l.replaces.length
        ? l.replaces.map((s) => proprietaryBySlug(s)?.name ?? s).join(', ')
        : '—',
  },
  { label: 'GitHub stars', render: (l) => formatStars(l.githubStars) },
  { label: 'Language', render: (l) => l.language ?? '—' },
  { label: 'License', render: (l) => l.license ?? '—' },
  {
    label: 'Self-host difficulty',
    render: (l) =>
      l.selfHostDifficulty ? (
        <div className="flex flex-col gap-1">
          <DifficultyMeter score={l.selfHostDifficulty} compact />
          <span className="text-xs text-muted-foreground">{difficultyLabel(l.selfHostDifficulty)}</span>
        </div>
      ) : (
        '—'
      ),
  },
  {
    label: 'Deploy options',
    render: (l) => (
      <div className="flex flex-wrap gap-1">
        {l.deployOptions.length ? l.deployOptions.map((d) => <Badge key={d} variant="muted">{d}</Badge>) : '—'}
      </div>
    ),
  },
  { label: 'Managed hosting', render: (l) => <Bool value={l.hasManagedHosting} /> },
  { label: 'Last updated', render: (l) => (l.lastCommitAt ? relativeFromNow(l.lastCommitAt) : '—') },
]

export function CompareTable({ a, b }: { a: ListingWithCategory; b: ListingWithCategory }) {
  const cols = [a, b]
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b bg-muted/40">
            <th className="w-40 p-4 text-left align-bottom font-medium text-muted-foreground" />
            {cols.map((l) => (
              <th key={l.id} className="p-4 text-left align-bottom">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoUrlFor(l)}
                    alt=""
                    width={36}
                    height={36}
                    className="size-9 rounded-lg border bg-white object-contain p-1"
                  />
                  <Link href={`/${l.slug}`} className="text-base font-semibold hover:underline">
                    {l.name}
                  </Link>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.label} className="border-b last:border-0 align-top">
              <td className="p-4 font-medium text-muted-foreground">{row.label}</td>
              {cols.map((l) => (
                <td key={l.id} className="p-4">
                  {row.render(l)}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="p-4" />
            {cols.map((l) => (
              <td key={l.id} className="p-4">
                <GoButton id={l.id} to="repo" label="View repo" icon={Github} variant="outline" size="sm" />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

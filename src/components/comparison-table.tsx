'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpDown, Check, Github, Minus, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { DifficultyMeter } from '@/components/difficulty-meter'
import { GoButton } from '@/components/go-button'
import { difficultyLabel } from '@/lib/difficulty'
import { cn, formatStars, relativeFromNow } from '@/lib/utils'

export type CompareRow = {
  id: number
  slug: string
  name: string
  repoUrl: string
  stars: number
  difficulty: number | null
  deploy: string[]
  managed: boolean
  license: string | null
  language: string | null
  lastCommitISO: string | null
  featured: boolean
}

type SortKey = 'default' | 'stars' | 'difficulty' | 'updated'

function logo(repoUrl: string) {
  const owner = repoUrl.split('/')[3] ?? ''
  return `https://github.com/${owner}.png?size=64`
}

/** Sortable at-a-glance comparison of every alternative on a buyer-guide page. */
export function ComparisonTable({ rows }: { rows: CompareRow[] }) {
  const [sort, setSort] = useState<SortKey>('default')

  const sorted = [...rows]
  if (sort === 'stars') sorted.sort((a, b) => b.stars - a.stars)
  else if (sort === 'difficulty') sorted.sort((a, b) => (a.difficulty ?? 99) - (b.difficulty ?? 99) || b.stars - a.stars)
  else if (sort === 'updated')
    sorted.sort((a, b) => (Date.parse(b.lastCommitISO ?? '') || 0) - (Date.parse(a.lastCommitISO ?? '') || 0))

  const Th = ({ label, k }: { label: string; k: SortKey }) => (
    <th className="p-3 text-left font-medium">
      <button
        type="button"
        onClick={() => setSort(k)}
        className={cn('inline-flex items-center gap-1 hover:text-foreground', sort === k ? 'text-foreground' : 'text-muted-foreground')}
      >
        {label} <ArrowUpDown className="size-3" />
      </button>
    </th>
  )

  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full text-sm">
        <thead className="border-b bg-muted/40 text-xs uppercase tracking-wide">
          <tr>
            <th className="p-3 text-left font-medium text-muted-foreground">Project</th>
            <Th label="Stars" k="stars" />
            <Th label="Self-host" k="difficulty" />
            <th className="p-3 text-left font-medium text-muted-foreground">Deploy</th>
            <th className="p-3 text-left font-medium text-muted-foreground">Managed</th>
            <th className="p-3 text-left font-medium text-muted-foreground">License</th>
            <Th label="Updated" k="updated" />
            <th className="p-3" />
          </tr>
        </thead>
        <tbody>
          {sorted.map((r) => (
            <tr key={r.id} className="border-b align-middle last:border-0 hover:bg-muted/30">
              <td className="p-3">
                <div className="flex items-center gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo(r.repoUrl)} alt="" width={28} height={28} className="size-7 shrink-0 rounded-md border bg-white object-contain p-0.5" />
                  <div className="min-w-0">
                    <Link href={`/${r.slug}`} className="font-medium hover:underline">{r.name}</Link>
                    {r.featured && (
                      <Badge variant="sponsored" className="ml-1.5 gap-1 align-middle">
                        <Sparkles className="size-2.5" /> Sponsored
                      </Badge>
                    )}
                    {r.language && <div className="text-xs text-muted-foreground">{r.language}</div>}
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap p-3 tabular-nums">{formatStars(r.stars)} ★</td>
              <td className="p-3">
                {r.difficulty ? (
                  <div className="flex flex-col gap-0.5">
                    <DifficultyMeter score={r.difficulty} compact />
                    <span className="text-xs text-muted-foreground">{difficultyLabel(r.difficulty)}</span>
                  </div>
                ) : (
                  <Minus className="size-4 text-muted-foreground" />
                )}
              </td>
              <td className="p-3">
                <div className="flex flex-wrap gap-1">
                  {r.deploy.slice(0, 2).map((d) => (
                    <Badge key={d} variant="muted">{d}</Badge>
                  ))}
                  {r.deploy.length > 2 && <span className="text-xs text-muted-foreground">+{r.deploy.length - 2}</span>}
                </div>
              </td>
              <td className="p-3">
                {r.managed ? <Check className="size-4 text-emerald-600" /> : <Minus className="size-4 text-muted-foreground" />}
              </td>
              <td className="whitespace-nowrap p-3 text-muted-foreground">{r.license ?? '—'}</td>
              <td className="whitespace-nowrap p-3 text-muted-foreground">{r.lastCommitISO ? relativeFromNow(r.lastCommitISO) : '—'}</td>
              <td className="p-3">
                <GoButton id={r.id} to="repo" label="Repo" icon={Github} variant="outline" size="sm" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

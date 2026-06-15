'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Github, PiggyBank, Rocket } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { DifficultyMeter } from '@/components/difficulty-meter'
import { difficultyInfo } from '@/lib/difficulty'

export type CalcItem = {
  propSlug: string
  propName: string
  altName: string
  altSlug: string
  altId: number
  difficulty: number | null
  managed: boolean
  oneClick: boolean
}

/** Rough monthly self-hosting cost by difficulty (managed/one-click is cheapest). */
function selfHostCost(difficulty: number | null, managed: boolean, oneClick: boolean): number {
  if (oneClick || (managed && (difficulty ?? 5) <= 1)) return 5
  if ((difficulty ?? 5) <= 2) return 6
  if ((difficulty ?? 5) <= 3) return 8
  return 12
}

const money = (n: number) => `$${n.toLocaleString('en-US', { maximumFractionDigits: 0 })}`

export function SavingsCalculator({ items }: { items: CalcItem[] }) {
  const [slug, setSlug] = useState(items[0]?.propSlug ?? '')
  const [monthly, setMonthly] = useState(25)

  const item = useMemo(() => items.find((i) => i.propSlug === slug) ?? items[0], [items, slug])

  if (!item) return null
  const hostCost = selfHostCost(item.difficulty, item.managed, item.oneClick)
  const monthlySaving = Math.max(0, monthly - hostCost)
  const annualSaving = monthlySaving * 12
  const info = difficultyInfo(item.difficulty)

  const selectClass =
    'mt-1 h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Inputs */}
      <Card className="p-6">
        <label className="block text-sm font-medium">
          Which SaaS are you paying for?
          <select className={selectClass} value={slug} onChange={(e) => setSlug(e.target.value)}>
            {items.map((i) => (
              <option key={i.propSlug} value={i.propSlug}>{i.propName}</option>
            ))}
          </select>
        </label>

        <label className="mt-5 block text-sm font-medium">
          What do you pay per month? <span className="font-normal text-muted-foreground">(USD)</span>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-muted-foreground">$</span>
            <input
              type="number"
              min={0}
              value={monthly}
              onChange={(e) => setMonthly(Math.max(0, Number(e.target.value) || 0))}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <input
            type="range"
            min={0}
            max={500}
            step={5}
            value={monthly}
            onChange={(e) => setMonthly(Number(e.target.value))}
            className="mt-3 w-full accent-primary"
          />
        </label>
      </Card>

      {/* Result */}
      <Card className="flex flex-col gap-4 border-primary/30 bg-accent/30 p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <PiggyBank className="size-4" /> Switch to {item.altName} and you’d save
        </div>
        <div>
          <div className="text-4xl font-bold tabular-nums">{money(annualSaving)}<span className="text-lg font-normal text-muted-foreground">/year</span></div>
          <div className="text-sm text-muted-foreground">
            {money(monthly)}/mo {item.propName} − ~{money(hostCost)}/mo to self-host {item.altName}
          </div>
        </div>

        <div className="rounded-lg border bg-background p-4">
          <div className="flex items-center justify-between gap-2">
            <Link href={`/${item.altSlug}`} className="font-semibold hover:text-primary">{item.altName}</Link>
            {info && <span className="text-xs text-muted-foreground">Self-host: {info.label}</span>}
          </div>
          <div className="mt-2"><DifficultyMeter score={item.difficulty} compact /></div>
          <p className="mt-2 text-xs text-muted-foreground">
            Estimated hosting: ~{money(hostCost)}/mo {item.oneClick || (item.managed && (item.difficulty ?? 5) <= 1) ? '(managed / one-click)' : '(small VPS with Docker)'}.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={`/api/go/${item.altId}?to=railway`}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex h-8 items-center gap-1.5 rounded-md border px-3 text-xs font-medium hover:bg-accent"
            >
              <Rocket className="size-3.5" /> Deploy
            </a>
            <a
              href={`/api/go/${item.altId}?to=repo`}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex h-8 items-center gap-1.5 rounded-md border px-3 text-xs font-medium hover:bg-accent"
            >
              <Github className="size-3.5" /> Repo
            </a>
            <Link href={`/${item.propSlug}-alternatives`} className="inline-flex h-8 items-center gap-1 rounded-md px-2 text-xs text-primary hover:underline">
              All {item.propName} alternatives <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          Estimate only. Self-hosting cost depends on your provider and scale; the software itself is free and open source.
        </p>
      </Card>
    </div>
  )
}

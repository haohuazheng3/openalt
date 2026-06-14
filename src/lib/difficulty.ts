/**
 * Self-host difficulty scale. The score is the directory's signature
 * decision-data: "how hard is this to actually run?" — something an awesome-list
 * can't tell you.
 *
 *   1 = one-click deploy template or official managed hosting (just sign up)
 *   2 = a single `docker run`
 *   3 = docker-compose with multiple services
 *   4 = manual DB / reverse-proxy / dependency configuration
 *   5 = complex multi-component architecture and/or poor docs
 */
export type DifficultyInfo = {
  score: number
  label: string
  blurb: string
  /** Tailwind text/bg color hints. */
  tone: 'emerald' | 'lime' | 'amber' | 'orange' | 'rose'
}

const TABLE: Record<number, Omit<DifficultyInfo, 'score'>> = {
  1: { label: 'Effortless', blurb: 'One-click deploy or official managed hosting — no server skills needed.', tone: 'emerald' },
  2: { label: 'Easy', blurb: 'A single `docker run` gets it up and running.', tone: 'lime' },
  3: { label: 'Moderate', blurb: 'docker-compose with a few services (app, database, cache).', tone: 'amber' },
  4: { label: 'Involved', blurb: 'Manual setup: configure a database, reverse proxy and dependencies.', tone: 'orange' },
  5: { label: 'Advanced', blurb: 'Complex multi-component architecture and/or thin documentation.', tone: 'rose' },
}

export function difficultyInfo(score?: number | null): DifficultyInfo | null {
  if (!score || score < 1 || score > 5) return null
  return { score, ...TABLE[Math.round(score)] }
}

export const difficultyLabel = (score?: number | null): string =>
  difficultyInfo(score)?.label ?? 'Unknown'

/** Difficulty filter buckets used on category/search pages. */
export const DIFFICULTY_OPTIONS = [1, 2, 3, 4, 5].map((n) => ({
  value: String(n),
  label: `${n} · ${TABLE[n].label}`,
}))

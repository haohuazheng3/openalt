/**
 * Hand-picked open-source-vs-open-source matchups with real, verified search
 * demand — the "X vs Y" page type none of the directory competitors actually
 * build. Each slug here must exist in the catalogue (seed-listings) so the
 * /[a]-vs-[b] route resolves both sides to a listing and renders the full
 * head-to-head table.
 *
 * Kept deliberately small (drip, not blast) — we ship the highest-confidence
 * matchups first and expand once GSC shows traction. The PaaS cluster is the
 * fattest gap: SERPs for "Coolify vs CapRover" etc. are forum threads and
 * vendor blogs, with no structured comparison.
 */
export type FeaturedVs = {
  a: string
  b: string
  /** Short editorial hook shown on listing/cluster pages. */
  hook?: string
}

export const FEATURED_VS: FeaturedVs[] = [
  // ── Self-hosted PaaS (Heroku / Render / Vercel replacements) ──
  { a: 'coolify', b: 'dokploy', hook: 'The two modern, UI-first self-hosted PaaS — which to run.' },
  { a: 'coolify', b: 'caprover', hook: 'The all-in-one newcomer vs the battle-tested lightweight.' },
  { a: 'caprover', b: 'dokku', hook: 'Two lean, low-overhead PaaS for a single small VPS.' },
]

export const FEATURED_VS_TOPICS = ['paas'] as const

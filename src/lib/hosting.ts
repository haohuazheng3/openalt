import { env } from '@/lib/env'
import { parseRepo } from '@/lib/utils'

/**
 * Hosting platforms we send "one-click deploy / managed hosting" clicks to.
 *
 * This is the directory's primary affiliate surface: someone reading a listing
 * who clicks "Deploy on Railway" or "Get managed hosting on PikaPods" is the
 * highest-intent visitor we have. Every deploy button routes through
 * /api/go/[id]?to=<platformId>, which logs the click and 302s to the URL built
 * here — with the configured referral code appended when present.
 *
 * `kind`:
 *   paas     — push the repo to a Platform-as-a-Service (Railway, Render, DO)
 *   managed  — fully-managed hosting of the specific app (PikaPods, Elestio)
 *   selfhost — a platform you run yourself that deploys this app (Coolify)
 */
export type HostingKind = 'paas' | 'managed' | 'selfhost'

export type HostingPlatform = {
  id: string
  name: string
  kind: HostingKind
  blurb: string
  /** Build the outbound destination URL (referral code already applied). */
  build: (repoUrl: string) => string
}

function withParams(base: string, params: Record<string, string | undefined>): string {
  const entries = Object.entries(params).filter(([, v]) => Boolean(v)) as [string, string][]
  if (!entries.length) return base
  const sep = base.includes('?') ? '&' : '?'
  return base + sep + entries.map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')
}

export const HOSTING_PLATFORMS: HostingPlatform[] = [
  {
    id: 'railway',
    name: 'Railway',
    kind: 'paas',
    blurb: 'Deploy straight from the repo — usage-based, no server to manage.',
    build: () => withParams('https://railway.app/new', { referralCode: env.hosting.railwayReferral }),
  },
  {
    id: 'render',
    name: 'Render',
    kind: 'paas',
    blurb: 'One-click from a render.yaml / Dockerfile, with a free tier.',
    build: (repoUrl) => withParams('https://render.com/deploy', { repo: repoUrl }),
  },
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    kind: 'paas',
    blurb: 'App Platform deploys this repo onto managed infrastructure.',
    build: (repoUrl) =>
      withParams('https://cloud.digitalocean.com/apps/new', {
        repo: `${repoUrl.replace(/\/$/, '')}/tree/HEAD`,
        refcode: env.hosting.digitaloceanRef,
      }),
  },
  {
    id: 'pikapods',
    name: 'PikaPods',
    kind: 'managed',
    blurb: 'Fully-managed hosting of popular open-source apps from ~$1/mo.',
    build: (repoUrl) => {
      const repo = parseRepo(repoUrl)
      return withParams('https://www.pikapods.com/apps', {
        search: repo?.repo,
        ref: env.hosting.pikapodsRef,
      })
    },
  },
  {
    id: 'elestio',
    name: 'Elestio',
    kind: 'managed',
    blurb: 'Fully-managed, fully-updated open-source software on your cloud.',
    build: (repoUrl) => {
      const repo = parseRepo(repoUrl)
      const base = repo ? `https://elest.io/open-source/${repo.repo.toLowerCase()}` : 'https://elest.io/open-source'
      return withParams(base, { ref: env.hosting.elestioRef })
    },
  },
  {
    id: 'coolify',
    name: 'Coolify',
    kind: 'selfhost',
    blurb: 'Open-source PaaS you run on your own VPS — deploy this with a click.',
    build: () => withParams('https://coolify.io', { ref: env.hosting.coolifyRef }),
  },
]

export const hostingById = (id: string): HostingPlatform | undefined =>
  HOSTING_PLATFORMS.find((p) => p.id === id)

/** Destination URL for a deploy click, or null if the platform id is unknown. */
export function hostingDeployUrl(platformId: string, repoUrl: string): string | null {
  const platform = hostingById(platformId)
  if (!platform) return null
  try {
    return platform.build(repoUrl)
  } catch {
    return null
  }
}

/**
 * Which deploy options to surface for a listing, given its deployOptions.
 * PaaS platforms are shown when the project ships Docker/compose/one-click (the
 * common case); managed-hosting and self-host PaaS are always relevant to
 * someone who'd rather not run it themselves.
 */
export function deployPlatformsFor(deployOptions: string[]): HostingPlatform[] {
  const opts = new Set(deployOptions)
  const supportsContainers =
    opts.has('Docker') || opts.has('Docker Compose') || opts.has('One-Click') || opts.has('Kubernetes')
  return HOSTING_PLATFORMS.filter((p) => {
    if (p.kind === 'paas') return supportsContainers
    return true // managed + selfhost always shown
  })
}

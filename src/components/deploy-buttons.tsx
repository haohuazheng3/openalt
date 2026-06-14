import { Cloud, Rocket, Server } from 'lucide-react'
import { GoButton } from '@/components/go-button'
import { deployPlatformsFor, type HostingKind } from '@/lib/hosting'

const GROUPS: { kind: HostingKind; title: string; hint: string }[] = [
  { kind: 'paas', title: 'One-click deploy', hint: 'Push the repo to a managed platform — no server to run.' },
  { kind: 'managed', title: 'Fully-managed hosting', hint: 'Someone else runs and updates it for you.' },
  { kind: 'selfhost', title: 'Self-host it yourself', hint: 'Run it on your own VPS with an open-source PaaS.' },
]

const ICON: Record<HostingKind, typeof Rocket> = {
  paas: Rocket,
  managed: Cloud,
  selfhost: Server,
}

/**
 * The monetization centerpiece. Every "Deploy on <platform>" button routes
 * through /api/go/[id]?to=<platformId>, which 302s to the platform's deploy URL
 * with our affiliate / referral code attached. Highest-intent clicks on the site.
 */
export function DeployButtons({
  id,
  deployOptions,
}: {
  id: number
  deployOptions: string[]
}) {
  const platforms = deployPlatformsFor(deployOptions)
  if (platforms.length === 0) return null

  return (
    <div className="space-y-5">
      {GROUPS.map((group) => {
        const inGroup = platforms.filter((p) => p.kind === group.kind)
        if (inGroup.length === 0) return null
        const Icon = ICON[group.kind]
        return (
          <div key={group.kind}>
            <div className="flex items-center gap-1.5 text-sm font-semibold">
              <Icon className="size-4 text-primary" /> {group.title}
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">{group.hint}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {inGroup.map((p) => (
                <GoButton
                  key={p.id}
                  id={id}
                  to={p.id}
                  label={p.name}
                  variant="outline"
                  size="sm"
                />
              ))}
            </div>
          </div>
        )
      })}
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        Deploy links may be affiliate links — we may earn a commission from the hosting platform at
        no extra cost to you. The software itself is free and open source.
      </p>
    </div>
  )
}

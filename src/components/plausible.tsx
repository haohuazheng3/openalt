import Script from 'next/script'
import { env, isPlausibleConfigured } from '@/lib/env'

/**
 * Plausible analytics with outbound-link tracking. Renders nothing until a
 * NEXT_PUBLIC_PLAUSIBLE_DOMAIN is configured, so it's safe in all environments.
 * Outbound-link tracking captures every /api/go click as a goal.
 */
export function PlausibleAnalytics() {
  if (!isPlausibleConfigured()) return null
  return (
    <Script
      defer
      data-domain={env.plausibleDomain}
      src="https://plausible.io/js/script.outbound-links.js"
      strategy="afterInteractive"
    />
  )
}

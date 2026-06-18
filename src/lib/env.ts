/**
 * Centralized, build-safe access to environment variables.
 *
 * The site is designed to render and build even when optional integrations
 * (Clerk, Stripe, Plausible) are not configured. Helpers below let server code
 * branch on what's actually available instead of crashing.
 */

/**
 * Public base URL. Prefers an explicit NEXT_PUBLIC_APP_URL, then Vercel's
 * system-provided production / deployment domain, then localhost — so a Vercel
 * deploy gets correct canonical / OG / sitemap URLs with zero configuration.
 */
function resolveAppUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL
  if (explicit) return explicit.replace(/\/$/, '')
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
  if (vercel) return `https://${vercel.replace(/\/$/, '')}`
  return 'http://localhost:3000'
}

export const env = {
  appUrl: resolveAppUrl(),
  databaseUrl: process.env.DATABASE_URL ?? '',

  clerkPublishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '',
  clerkSecretKey: process.env.CLERK_SECRET_KEY ?? '',
  adminEmails: (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean),

  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? '',
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET ?? '',
  stripeFeaturedPriceId: process.env.NEXT_PUBLIC_STRIPE_FEATURED_PRICE_ID ?? '',

  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? '',

  // ── Hosting-platform affiliate / referral codes ─────────────────────────
  // Appended to "one-click deploy" links so the highest-intent clicks
  // (people ready to self-host) are monetized. All optional — links still work
  // without a code, they just won't carry your referral.
  hosting: {
    railwayReferral: process.env.RAILWAY_REFERRAL_CODE ?? '',
    coolifyRef: process.env.COOLIFY_AFFILIATE_REF ?? '',
    pikapodsRef: process.env.PIKAPODS_AFFILIATE_REF ?? '',
    elestioRef: process.env.ELESTIO_AFFILIATE_REF ?? '',
    digitaloceanRef: process.env.DIGITALOCEAN_REFERRAL_CODE ?? '',
  },
}

/**
 * Whether public pages read from the database. We force STATIC mode — read the
 * curated `seed-listings.ts` directly via the in-memory store — when
 * USE_STATIC_DATA=1, even if a DATABASE_URL is present. Vercel's Neon
 * integration re-injects DATABASE_URL, so deleting the env alone isn't reliable;
 * this switch makes the static catalogue the single source of truth, so every
 * seed update (weekly refresh, bulk expansion) goes live on the next deploy with
 * no DB re-seed. Flip it off (or unset) to go back to the database.
 */
export const isDatabaseConfigured = () =>
  process.env.USE_STATIC_DATA === '1' ? false : Boolean(env.databaseUrl)

export const isClerkConfigured = () =>
  Boolean(env.clerkPublishableKey) && Boolean(env.clerkSecretKey)

export const isStripeConfigured = () =>
  Boolean(env.stripeSecretKey) && Boolean(env.stripeFeaturedPriceId)

export const isStripeWebhookConfigured = () =>
  Boolean(env.stripeSecretKey) && Boolean(env.stripeWebhookSecret)

export const isPlausibleConfigured = () => Boolean(env.plausibleDomain)

/** Absolute URL helper for canonicals / OG / sitemap. */
export const absoluteUrl = (path = '') => {
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${env.appUrl}${clean === '/' ? '' : clean}`
}

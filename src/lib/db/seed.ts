import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config({ path: '.env' })

import { sql } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { CATEGORIES } from '@/data/categories'
import { PROPRIETARY_TOOLS } from '@/data/proprietary-tools'
import { SEED_LISTINGS } from '@/data/seed-listings'
import { categories, listings, proprietaryTools } from './schema'

const FEATURED_WINDOW_DAYS = 60

function toDate(value?: string | null): Date | null {
  if (!value) return null
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? null : d
}

async function main() {
  const url = process.env.DATABASE_URL
  if (!url) {
    console.error('✗ DATABASE_URL is not set. Add it to .env.local first.')
    process.exit(1)
  }
  const client = postgres(url, { max: 1 })
  const db = drizzle(client, { schema: { categories, listings, proprietaryTools } })

  // ── Categories ──────────────────────────────────────────────────────────
  console.log(`→ Upserting ${CATEGORIES.length} categories ...`)
  await db
    .insert(categories)
    .values(
      CATEGORIES.map((c) => ({
        slug: c.slug,
        name: c.name,
        description: c.description,
        sortOrder: c.sortOrder,
      })),
    )
    .onConflictDoUpdate({
      target: categories.slug,
      set: {
        name: sql`excluded.name`,
        description: sql`excluded.description`,
        sortOrder: sql`excluded.sort_order`,
      },
    })

  const catRows = await db.select({ id: categories.id, slug: categories.slug }).from(categories)
  const catMap = new Map(catRows.map((r) => [r.slug, r.id]))

  // ── Proprietary tools (the products being replaced) ─────────────────────
  console.log(`→ Upserting ${PROPRIETARY_TOOLS.length} proprietary tools ...`)
  await db
    .insert(proprietaryTools)
    .values(
      PROPRIETARY_TOOLS.map((p) => ({
        slug: p.slug,
        name: p.name,
        categoryId: catMap.get(p.categorySlug) ?? null,
        website: p.website,
        blurb: p.blurb,
        priceHook: p.priceHook,
      })),
    )
    .onConflictDoUpdate({
      target: proprietaryTools.slug,
      set: {
        name: sql`excluded.name`,
        categoryId: sql`excluded.category_id`,
        website: sql`excluded.website`,
        blurb: sql`excluded.blurb`,
        priceHook: sql`excluded.price_hook`,
      },
    })

  // ── Listings ────────────────────────────────────────────────────────────
  const now = new Date()
  const featuredUntil = new Date(now.getTime() + FEATURED_WINDOW_DAYS * 86_400_000)

  const values = SEED_LISTINGS.map((s) => ({
    slug: s.slug,
    name: s.name,
    tagline: s.tagline,
    descriptionMd: s.descriptionMd,
    repoUrl: s.repoUrl,
    websiteUrl: s.websiteUrl ?? null,
    demoUrl: s.demoUrl ?? null,
    affiliateUrl: s.affiliateUrl ?? null,
    affiliateNetwork: s.affiliateNetwork ?? null,
    logoUrl: s.logoUrl ?? null,
    categoryId: catMap.get(s.categorySlug) ?? null,
    replaces: s.replaces,
    license: s.license,
    language: s.language,
    githubStars: s.githubStars,
    lastCommitAt: toDate(s.lastCommitAt),
    selfHostDifficulty: s.selfHostDifficulty,
    deployOptions: s.deployOptions,
    hasManagedHosting: s.hasManagedHosting,
    featureGapMd: s.featureGapMd,
    tags: s.tags,
    featured: s.featured,
    featuredUntil: s.featured ? featuredUntil : null,
    featuredRank: s.featuredRank,
    status: (s.status ?? 'live') as 'live' | 'pending' | 'rejected' | 'archived',
    source: s.source,
    lastCheckedAt: now,
  }))

  console.log(`→ Upserting ${values.length} listings ...`)
  // On conflict we refresh CONTENT fields only. We intentionally do NOT overwrite
  // affiliateUrl, featured, featuredUntil, or status — those are managed by admin /
  // Stripe and must survive a re-seed (e.g. a weekly ingest refresh).
  await db
    .insert(listings)
    .values(values)
    .onConflictDoUpdate({
      target: listings.slug,
      set: {
        name: sql`excluded.name`,
        tagline: sql`excluded.tagline`,
        descriptionMd: sql`excluded.description_md`,
        repoUrl: sql`excluded.repo_url`,
        websiteUrl: sql`excluded.website_url`,
        demoUrl: sql`excluded.demo_url`,
        affiliateNetwork: sql`excluded.affiliate_network`,
        categoryId: sql`excluded.category_id`,
        replaces: sql`excluded.replaces`,
        license: sql`excluded.license`,
        language: sql`excluded.language`,
        githubStars: sql`excluded.github_stars`,
        lastCommitAt: sql`excluded.last_commit_at`,
        selfHostDifficulty: sql`excluded.self_host_difficulty`,
        deployOptions: sql`excluded.deploy_options`,
        hasManagedHosting: sql`excluded.has_managed_hosting`,
        featureGapMd: sql`excluded.feature_gap_md`,
        tags: sql`excluded.tags`,
        lastCheckedAt: sql`excluded.last_checked_at`,
        updatedAt: sql`now()`,
      },
    })

  const [{ count }] = await db.select({ count: sql<number>`count(*)::int` }).from(listings)
  console.log(`✓ Seed complete. ${Number(count)} listings in database.`)
  await client.end()
}

main().catch((err) => {
  console.error('✗ Seed failed:', err)
  process.exit(1)
})

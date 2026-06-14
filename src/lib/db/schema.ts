import { sql } from 'drizzle-orm'
import { relations } from 'drizzle-orm'
import {
  boolean,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core'

/** Lifecycle of a listing. `archived` marks projects whose repo is archived or long-dead. */
export const listingStatus = pgEnum('listing_status', ['live', 'pending', 'rejected', 'archived'])

/** Lifecycle of a user submission. */
export const submissionStatus = pgEnum('submission_status', ['pending', 'approved', 'rejected'])

/**
 * Categories, organized by the *kind of SaaS being replaced* (notes & docs,
 * databases, automation, CRM, …). The directory mirrors how a visitor searching
 * for "open source alternative to <X>" thinks.
 */
export const categories = pgTable(
  'categories',
  {
    id: serial('id').primaryKey(),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    description: text('description'),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => ({
    slugIdx: uniqueIndex('categories_slug_idx').on(t.slug),
  }),
)

/**
 * The proprietary / commercial products that open-source projects replace
 * (Notion, Airtable, Zapier, …). Each one powers a `/[slug]-alternatives`
 * aggregation page — the highest-intent SEO surface on the site.
 */
export const proprietaryTools = pgTable(
  'proprietary_tools',
  {
    id: serial('id').primaryKey(),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    categoryId: integer('category_id').references(() => categories.id, { onDelete: 'set null' }),
    website: text('website'),
    blurb: text('blurb'),
    priceHook: text('price_hook'),
  },
  (t) => ({
    slugIdx: uniqueIndex('proprietary_tools_slug_idx').on(t.slug),
    categoryIdx: index('proprietary_tools_category_idx').on(t.categoryId),
  }),
)

/**
 * A single open-source / self-hostable project — the unit of the directory and
 * of monetization. The deploy/visit buttons route through /api/go/[id]
 * (affiliate-first, hosting-platform affiliates on one-click deploy), and paid
 * "featured" placements are tracked via `featured` + `featuredUntil`.
 *
 * `replaces` holds proprietary_tools slugs (text[]) so the alternatives pages
 * and listing cards can resolve them without a join table.
 */
export const listings = pgTable(
  'listings',
  {
    id: serial('id').primaryKey(),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    tagline: text('tagline'),
    descriptionMd: text('description_md'),
    repoUrl: text('repo_url').notNull(),
    websiteUrl: text('website_url'),
    demoUrl: text('demo_url'),
    affiliateUrl: text('affiliate_url'),
    affiliateNetwork: text('affiliate_network'),
    logoUrl: text('logo_url'),
    categoryId: integer('category_id').references(() => categories.id, { onDelete: 'set null' }),
    /** proprietary_tools slugs this project replaces, e.g. {notion,confluence}. */
    replaces: text('replaces')
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    license: text('license'),
    language: text('language'),
    githubStars: integer('github_stars').notNull().default(0),
    lastCommitAt: timestamp('last_commit_at', { withTimezone: true }),
    /** 1 (one-click/managed) … 5 (complex multi-component / poor docs). */
    selfHostDifficulty: integer('self_host_difficulty'),
    /** e.g. {One-Click,Docker,"Docker Compose",Kubernetes,Manual}. */
    deployOptions: text('deploy_options')
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    hasManagedHosting: boolean('has_managed_hosting').notNull().default(false),
    /** Markdown: where this falls short of the proprietary original. */
    featureGapMd: text('feature_gap_md'),
    tags: text('tags')
      .array()
      .notNull()
      .default(sql`'{}'::text[]`),
    featured: boolean('featured').notNull().default(false),
    featuredUntil: timestamp('featured_until', { withTimezone: true }),
    featuredRank: integer('featured_rank'),
    status: listingStatus('status').notNull().default('live'),
    source: text('source'),
    // Stripe linkage for self-serve featured subscriptions.
    stripeCustomerId: text('stripe_customer_id'),
    stripeSubscriptionId: text('stripe_subscription_id'),
    lastCheckedAt: timestamp('last_checked_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => ({
    slugIdx: uniqueIndex('listings_slug_idx').on(t.slug),
    repoIdx: uniqueIndex('listings_repo_idx').on(t.repoUrl),
    categoryIdx: index('listings_category_idx').on(t.categoryId),
    statusIdx: index('listings_status_idx').on(t.status),
    featuredIdx: index('listings_featured_idx').on(t.featured),
    starsIdx: index('listings_stars_idx').on(t.githubStars),
    // GIN index makes `replaces @> array[...]` lookups fast.
    replacesIdx: index('listings_replaces_idx').using('gin', t.replaces),
  }),
)

/**
 * Outbound click log. Proof-of-traffic for sellers and the signal that justifies
 * affiliate revenue. `ref` records what was clicked (repo, deploy:railway, …).
 */
export const clickEvents = pgTable(
  'click_events',
  {
    id: serial('id').primaryKey(),
    listingId: integer('listing_id')
      .notNull()
      .references(() => listings.id, { onDelete: 'cascade' }),
    ts: timestamp('ts', { withTimezone: true }).notNull().defaultNow(),
    ref: text('ref'),
  },
  (t) => ({
    listingIdx: index('click_events_listing_idx').on(t.listingId),
    tsIdx: index('click_events_ts_idx').on(t.ts),
  }),
)

/**
 * Submissions from /submit (paste a repo → auto-prefill). Reviewed in /admin;
 * on approval a listing is created or set live.
 */
export const submissions = pgTable('submissions', {
  id: serial('id').primaryKey(),
  payload: jsonb('payload'),
  listingId: integer('listing_id').references(() => listings.id, { onDelete: 'set null' }),
  submitterUserId: text('submitter_user_id'),
  status: submissionStatus('status').notNull().default('pending'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})

export const listingsRelations = relations(listings, ({ one, many }) => ({
  category: one(categories, {
    fields: [listings.categoryId],
    references: [categories.id],
  }),
  clicks: many(clickEvents),
}))

export const categoriesRelations = relations(categories, ({ many }) => ({
  listings: many(listings),
  proprietaryTools: many(proprietaryTools),
}))

export const proprietaryToolsRelations = relations(proprietaryTools, ({ one }) => ({
  category: one(categories, {
    fields: [proprietaryTools.categoryId],
    references: [categories.id],
  }),
}))

export const clickEventsRelations = relations(clickEvents, ({ one }) => ({
  listing: one(listings, {
    fields: [clickEvents.listingId],
    references: [listings.id],
  }),
}))

export type Category = typeof categories.$inferSelect
export type NewCategory = typeof categories.$inferInsert
export type ProprietaryTool = typeof proprietaryTools.$inferSelect
export type NewProprietaryTool = typeof proprietaryTools.$inferInsert
export type Listing = typeof listings.$inferSelect
export type NewListing = typeof listings.$inferInsert
export type ClickEvent = typeof clickEvents.$inferSelect
export type Submission = typeof submissions.$inferSelect
export type NewSubmission = typeof submissions.$inferInsert

/** A listing joined with its category — the shape pages consume. */
export type ListingWithCategory = Listing & { category: Category | null }

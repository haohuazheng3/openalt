CREATE TYPE "public"."listing_status" AS ENUM('live', 'pending', 'rejected', 'archived');--> statement-breakpoint
CREATE TYPE "public"."submission_status" AS ENUM('pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "click_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"listing_id" integer NOT NULL,
	"ts" timestamp with time zone DEFAULT now() NOT NULL,
	"ref" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "listings" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"tagline" text,
	"description_md" text,
	"repo_url" text NOT NULL,
	"website_url" text,
	"demo_url" text,
	"affiliate_url" text,
	"affiliate_network" text,
	"logo_url" text,
	"category_id" integer,
	"replaces" text[] DEFAULT '{}'::text[] NOT NULL,
	"license" text,
	"language" text,
	"github_stars" integer DEFAULT 0 NOT NULL,
	"last_commit_at" timestamp with time zone,
	"self_host_difficulty" integer,
	"deploy_options" text[] DEFAULT '{}'::text[] NOT NULL,
	"has_managed_hosting" boolean DEFAULT false NOT NULL,
	"feature_gap_md" text,
	"tags" text[] DEFAULT '{}'::text[] NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"featured_until" timestamp with time zone,
	"featured_rank" integer,
	"status" "listing_status" DEFAULT 'live' NOT NULL,
	"source" text,
	"stripe_customer_id" text,
	"stripe_subscription_id" text,
	"last_checked_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "proprietary_tools" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"category_id" integer,
	"website" text,
	"blurb" text,
	"price_hook" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"payload" jsonb,
	"listing_id" integer,
	"submitter_user_id" text,
	"status" "submission_status" DEFAULT 'pending' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "click_events" ADD CONSTRAINT "click_events_listing_id_listings_id_fk" FOREIGN KEY ("listing_id") REFERENCES "public"."listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "listings" ADD CONSTRAINT "listings_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "proprietary_tools" ADD CONSTRAINT "proprietary_tools_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "submissions" ADD CONSTRAINT "submissions_listing_id_listings_id_fk" FOREIGN KEY ("listing_id") REFERENCES "public"."listings"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "categories_slug_idx" ON "categories" USING btree ("slug");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "click_events_listing_idx" ON "click_events" USING btree ("listing_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "click_events_ts_idx" ON "click_events" USING btree ("ts");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "listings_slug_idx" ON "listings" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "listings_repo_idx" ON "listings" USING btree ("repo_url");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "listings_category_idx" ON "listings" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "listings_status_idx" ON "listings" USING btree ("status");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "listings_featured_idx" ON "listings" USING btree ("featured");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "listings_stars_idx" ON "listings" USING btree ("github_stars");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "listings_replaces_idx" ON "listings" USING gin ("replaces");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "proprietary_tools_slug_idx" ON "proprietary_tools" USING btree ("slug");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "proprietary_tools_category_idx" ON "proprietary_tools" USING btree ("category_id");
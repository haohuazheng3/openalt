# OpenAlt — Open-Source / Self-Hosted Alternatives Directory

A production-grade directory of **open-source, self-hostable alternatives to popular SaaS**
(Notion, Airtable, Zapier, Google Analytics, …). It targets evergreen, high-intent search —
_"open source alternative to notion"_ — and wins on decision data an awesome-list can't give you:

- 🧮 **Self-host difficulty score (1–5)** per project, on a strict rubric
- 🚀 **One-click deploy buttons** that route through affiliate-laced hosting links (Railway, Render, DigitalOcean, PikaPods, Elestio, Coolify)
- 🔍 **Feature-gap comparison** vs the proprietary original — honest, not marketing
- ⭐ Live GitHub stars + freshness, with **archived/dead-repo detection**

Monetization is built in: hosting-platform affiliate on every deploy click, sponsored
"Featured" placements via Stripe, and full outbound click tracking.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind + shadcn/ui · Neon Postgres + Drizzle ·
Clerk (only `/submit` + `/admin`) · Stripe · Plausible · Vercel. Ingestion is a standalone
Python pipeline (GitHub API + Claude) run weekly by GitHub Actions.

---

## Quick start (local)

```bash
# 1. Install
npm install

# 2. Configure
cp .env.example .env.local
#   → set at least DATABASE_URL (Neon pooled string, or local Postgres)

# 3. Create the schema and load 150+ curated projects
npm run db:migrate
npm run db:seed

# 4. Run
npm run dev        # http://localhost:3000
```

Only `DATABASE_URL` is required to render the full site. Clerk, Stripe and Plausible all
degrade gracefully when unset (auth is bypassed locally, checkout shows a setup hint, etc.).

### Useful scripts

| Script | What it does |
| --- | --- |
| `npm run dev` / `build` / `start` | Next.js dev / production build / serve |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run db:generate` | Generate a Drizzle SQL migration from `schema.ts` |
| `npm run db:migrate` | Apply migrations in `./drizzle` |
| `npm run db:seed` | Upsert categories, proprietary tools, and `SEED_LISTINGS` |
| `npm run db:studio` | Drizzle Studio |

---

## Data model (Drizzle)

`src/lib/db/schema.ts` — five tables:

- **categories** — by the *kind of SaaS replaced* (notes & docs, databases, automation, CRM…)
- **proprietary_tools** — the commercial products being replaced (Notion, Airtable…). Each
  powers a `/[slug]-alternatives` page.
- **listings** — the projects. Key fields: `repoUrl`, `replaces` (`text[]` of proprietary
  slugs), `license`, `language`, `githubStars`, `lastCommitAt`, `selfHostDifficulty` (1–5),
  `deployOptions` (`text[]`), `hasManagedHosting`, `featureGapMd`, `featured`/`featuredUntil`,
  `status` (`live | pending | rejected | archived`).
- **click_events** — outbound click log (`ref` = `repo` / `deploy:railway` / …).
- **submissions** — `/submit` payloads, reviewed in `/admin`.

---

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Search · featured · "find an alternative to…" · categories · top projects |
| `/[proprietary]-alternatives` | **The money page** — every project that replaces e.g. Notion (`/notion-alternatives`) |
| `/[listing-slug]` | Detail: difficulty score, deploy buttons (affiliate), feature-gap table, repo stats |
| `/category/[slug]` | All projects in a category, filterable by difficulty / deploy / license |
| `/self-hosted/[category]` | Editorial "easiest to self-host" landing |
| `/[a]-vs-[b]` | Compare two projects, or open-source vs the proprietary original |
| `/search` | Full-text + faceted filters |
| `/advertise` · `/submit` · `/admin` | Stripe checkout · repo-prefill submit · review console |
| `/api/go/[id]` | Outbound redirector (affiliate-first, logs the click) |
| `/api/stripe/webhook` | Activates/deactivates featured placements |

`/[proprietary]-alternatives`, `/[listing]`, and `/[a]-vs-[b]` all resolve through the single
`src/app/[slug]/page.tsx` route (Next.js can't put a static suffix in a dynamic segment).

SEO: dynamic metadata + OG images, `sitemap.xml` (every listing / alternatives / category /
self-hosted / vs page), `robots.txt`, JSON-LD (`SoftwareApplication`, `BreadcrumbList`,
`ItemList`), canonical URLs, ISR (daily revalidate).

---

## Monetization

Every outbound link goes through `/api/go/[id]?to=<target>`, which logs the click and 302s:

- `to=railway|render|digitalocean|pikapods|elestio|coolify` → the hosting platform's deploy
  URL with your referral code (`src/lib/hosting.ts`). This is the **primary affiliate surface** —
  the highest-intent click on the site.
- `to=repo|website|demo` → the corresponding link.
- no `to` → affiliate URL first, then the repo.

Add your referral codes to `.env` (`RAILWAY_REFERRAL_CODE`, `PIKAPODS_AFFILIATE_REF`, …).
Sponsored placements: `/advertise` → Stripe Checkout → webhook sets `featured` + `featuredUntil`.

---

## Ingestion pipeline (`/ingest`)

Standalone Python. Discovers projects from the **GitHub Search API** (per-proprietary
`<x>-alternative` topics + self-hosted topics + category keywords) and **awesome-selfhosted**,
fetches each README, and uses **Claude** to extract `replaces`, `selfHostDifficulty` (strict
rubric), `deployOptions`, `hasManagedHosting`, `featureGapMd`, and the category. Dedupes by
repo URL; flips archived / >1-year-dead repos to `archived`. Without `ANTHROPIC_API_KEY` it
falls back to a deterministic heuristic.

```bash
cd ingest
python3 -m venv .venv && ./.venv/bin/pip install -r requirements.txt

# Discover only (writes nothing)
./.venv/bin/python run.py --source github --limit 20 --dry-run

# Full run — new projects land as `pending` for /admin review
DATABASE_URL=... GITHUB_TOKEN=... ANTHROPIC_API_KEY=... \
  ./.venv/bin/python run.py --source all --limit 80 --status pending
```

**Self-host difficulty rubric** (applied strictly by Claude):
`1` one-click/managed · `2` single `docker run` · `3` docker-compose · `4` manual DB/proxy/deps · `5` complex multi-component / poor docs.

The 150+ projects shipped in `src/data/seed-listings.ts` were produced by a multi-agent
curation pass and adversarially verified; the weekly ingester keeps them fresh and adds more.

---

## Deploy to Vercel

1. Push to GitHub and import the repo in Vercel.
2. Create a **Neon** Postgres database; copy the **pooled** connection string.
3. In Vercel → Project → Settings → Environment Variables, add everything from `.env.example`
   you want live (at minimum `DATABASE_URL` and `NEXT_PUBLIC_APP_URL`).
4. Run the schema + seed against the prod database (locally, with prod `DATABASE_URL`):
   ```bash
   DATABASE_URL="<prod>" npm run db:migrate && DATABASE_URL="<prod>" npm run db:seed
   ```
5. Deploy. Set the **Stripe webhook** endpoint to `https://yourdomain.com/api/stripe/webhook`
   and put its signing secret in `STRIPE_WEBHOOK_SECRET`. For Clerk, set the keys and add your
   email to `ADMIN_EMAILS`.

### Weekly auto-update (GitHub Actions)

`.github/workflows/weekly-ingest.yml` runs the ingester every Monday (and on-demand via
*Run workflow*). In **Repo → Settings → Secrets and variables → Actions**, add:

- `DATABASE_URL` (required), `ANTHROPIC_API_KEY` (optional — enables Claude),
- optionally `VERCEL_DEPLOY_HOOK_URL` to rebuild ISR pages right after each ingest.

New projects arrive as `pending`; approve them in `/admin`.

---

## Project layout

```
src/
  app/                # App Router pages + API routes
    [slug]/           # listing detail · /x-alternatives · /a-vs-b (one router)
    category/ self-hosted/ search/ advertise/ submit/ admin/ api/
  components/         # ui/* (shadcn) + deploy-buttons, difficulty-meter, repo-stats, …
  data/               # categories, proprietary-tools, seed-listings (curated)
  lib/                # db (schema/queries), hosting, difficulty, seo, stripe, auth, env
ingest/               # Python: GitHub + Claude pipeline (config, sources, extract, db, run)
drizzle/              # generated SQL migrations
```

## License

MIT for this directory's own code. Listed projects retain their own licenses; all trademarks
belong to their owners.

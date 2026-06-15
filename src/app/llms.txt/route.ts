import { CATEGORIES } from '@/data/categories'
import { PROPRIETARY_TOOLS, alternativesSlug } from '@/data/proprietary-tools'
import { SITE } from '@/lib/constants'
import { absoluteUrl, env } from '@/lib/env'

export const dynamic = 'force-static'
export const revalidate = 86400

/**
 * /llms.txt — the llmstxt.org convention. A curated, link-rich map of the site
 * for LLMs / answer engines, so they can find and cite our highest-value pages.
 * Pairs with robots.txt explicitly allowing AI crawlers.
 */
export function GET() {
  const u = (p: string) => absoluteUrl(p)

  const altLinks = PROPRIETARY_TOOLS.map(
    (p) => `- [${p.name} alternatives](${u('/' + alternativesSlug(p.slug))}): self-hostable open-source replacements for ${p.name}, scored by self-host difficulty.`,
  ).join('\n')

  const catLinks = CATEGORIES.map(
    (c) => `- [${c.name}](${u('/category/' + c.slug)}): ${c.description}`,
  ).join('\n')

  const body = `# ${SITE.name} — ${SITE.tagline}

> ${SITE.description} Every listing carries a strict 1–5 self-host difficulty score, one-click deploy paths, live GitHub stars and freshness, and an honest feature-gap vs the proprietary original. Data is sourced from the GitHub API and refreshed weekly.

## What makes this directory different
Unlike other open-source-alternative lists, every project here answers the questions a self-hoster actually has before installing:
- **Self-host difficulty (1–5)** on a consistent rubric: 1 = one-click/managed, 2 = single \`docker run\`, 3 = docker-compose, 4 = manual DB/reverse-proxy/deps, 5 = complex multi-component.
- **Deploy paths**: one-click templates and managed-hosting options (Railway, Render, PikaPods, Elestio, Coolify).
- **Feature gap vs the original**: what you give up by self-hosting.
- **Freshness**: live stars, last-commit date, and archived/abandoned detection so you don't pick a dead project.

## Find an open-source alternative to a SaaS (highest-intent pages)
${altLinks}

## Browse by category
${catLinks}

## Guides & data reports
- [Best self-hosted apps to run (master list)](${u('/self-hosted')}): all projects in one sortable comparison table.
- [All open-source alternatives](${u('/open-source-alternatives')}): every SaaS and its open-source replacements.
- [Easiest self-hosted apps](${u('/easiest-self-hosted-apps')}): ranked by self-host difficulty.
- [Self-hosting for beginners](${u('/self-hosting-for-beginners')}): start with the lowest-effort picks.
- [The Self-Host Difficulty Index](${u('/reports/self-host-difficulty-index')}): how hard each category is to self-host.
- [Archived self-hosted projects to avoid](${u('/reports/archived-self-hosted-projects')}): dead/abandoned projects other lists still recommend.
- [Self-hosted apps with one-click deploy](${u('/reports/one-click-deploy-apps')}): deploy in minutes, no server skills.

## Compare
- [Search all projects](${u('/search')})
- Project-vs-SaaS comparisons (e.g. ${u('/appflowy-vs-notion')}, ${u('/n8n-vs-zapier')}, ${u('/plausible-vs-google-analytics')}).

## About
${SITE.name} is at ${env.appUrl}. Trademarks belong to their owners; listed projects retain their own licenses.
`

  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=86400' },
  })
}

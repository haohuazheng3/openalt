import type { MetadataRoute } from 'next'
import { env } from '@/lib/env'

/**
 * robots.txt — explicitly WELCOMES AI crawlers (GEO strategy).
 *
 * Most directories block GPTBot/ClaudeBot/etc.; we do the opposite, because our
 * comparison-table + FAQ + sourced format is exactly what AI answers cite. We
 * only fence off the redirector, admin, and post-checkout pages.
 */

// Reputable AI / answer-engine crawlers we explicitly allow full access to.
const AI_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Amazonbot',
  'Meta-ExternalAgent',
  'cohere-ai',
]

export default function robots(): MetadataRoute.Robots {
  const disallow = ['/api/', '/admin', '/advertise/success']
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: '/', disallow })),
    ],
    sitemap: `${env.appUrl}/sitemap.xml`,
    host: env.appUrl,
  }
}

import type { MetadataRoute } from 'next'
import { CATEGORY_SLUGS } from '@/data/categories'
import { ALTERNATIVES_SUFFIX, PROPRIETARY_SLUGS } from '@/data/proprietary-tools'
import {
  getAllListingSlugs,
  getCategories,
  getComparePairs,
  getProprietaryVsPairs,
  getReplacedProprietarySlugs,
} from '@/lib/db/queries'
import { env } from '@/lib/env'

export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.appUrl
  const now = new Date()

  const [listingSlugs, comparePairs, vsProprietary, categories, propSlugs] = await Promise.all([
    getAllListingSlugs(),
    getComparePairs(3),
    getProprietaryVsPairs(2),
    getCategories(),
    getReplacedProprietarySlugs(),
  ])
  const catSlugs = categories.length ? categories.map((c) => c.slug) : CATEGORY_SLUGS
  const proprietary = propSlugs.length ? propSlugs : PROPRIETARY_SLUGS

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/search`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${base}/advertise`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/submit`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ]

  // Hub + data-report pages (high-value link targets).
  const hubPages: MetadataRoute.Sitemap = [
    { url: `${base}/self-hosted`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/open-source-alternatives`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/easiest-self-hosted-apps`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/self-hosting-for-beginners`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/self-host-savings-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/reports/self-host-difficulty-index`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/reports/archived-self-hosted-projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/reports/one-click-deploy-apps`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ]

  // The "X alternatives" pages are the highest-value SEO surface → highest priority.
  const alternativesPages: MetadataRoute.Sitemap = proprietary.map((slug) => ({
    url: `${base}/${slug}${ALTERNATIVES_SUFFIX}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.9,
  }))

  const categoryPages: MetadataRoute.Sitemap = catSlugs.flatMap((slug) => [
    { url: `${base}/category/${slug}`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/self-hosted/${slug}`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ])

  const listingPages: MetadataRoute.Sitemap = listingSlugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const comparePages: MetadataRoute.Sitemap = [...new Set([...comparePairs, ...vsProprietary])].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...hubPages,
    ...alternativesPages,
    ...categoryPages,
    ...listingPages,
    ...comparePages,
  ]
}

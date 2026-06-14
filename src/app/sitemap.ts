import type { MetadataRoute } from 'next'
import { CATEGORY_SLUGS } from '@/data/categories'
import { ALTERNATIVES_SUFFIX, PROPRIETARY_SLUGS } from '@/data/proprietary-tools'
import {
  getAllListingSlugs,
  getCategories,
  getComparePairs,
  getReplacedProprietarySlugs,
} from '@/lib/db/queries'
import { env } from '@/lib/env'

export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.appUrl
  const now = new Date()

  const [listingSlugs, comparePairs, categories, propSlugs] = await Promise.all([
    getAllListingSlugs(),
    getComparePairs(3),
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

  const comparePages: MetadataRoute.Sitemap = comparePairs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...alternativesPages, ...categoryPages, ...listingPages, ...comparePages]
}

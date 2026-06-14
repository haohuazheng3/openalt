import type { Metadata } from 'next'
import { absoluteUrl, env } from '@/lib/env'
import { SITE } from '@/lib/constants'
import type { ListingWithCategory } from '@/lib/db/schema'
import { stripMarkdown, truncate } from '@/lib/utils'

/** URL for the dynamic OG image route. */
export function ogImageUrl(title: string, subtitle?: string): string {
  const params = new URLSearchParams({ title })
  if (subtitle) params.set('subtitle', subtitle)
  return absoluteUrl(`/api/og?${params.toString()}`)
}

type BuildMetaArgs = {
  title: string
  description: string
  path: string
  /** Override the OG image (defaults to the dynamic branded image). */
  ogImage?: string
  noindex?: boolean
  ogSubtitle?: string
}

/** Construct full Next Metadata with canonical, OpenGraph, and Twitter cards. */
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  ogSubtitle,
  noindex,
}: BuildMetaArgs): Metadata {
  const url = absoluteUrl(path)
  const image = ogImage ?? ogImageUrl(title, ogSubtitle)
  const fullTitle = path === '/' ? `${SITE.name} — ${SITE.tagline}` : `${title} | ${SITE.name}`
  return {
    title: path === '/' ? fullTitle : title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description,
      siteName: SITE.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      site: SITE.twitter,
    },
  }
}

/** SoftwareApplication JSON-LD for a listing detail page (open-source software). */
export function softwareApplicationLd(listing: ListingWithCategory) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: listing.name,
    description: truncate(stripMarkdown(listing.descriptionMd) || listing.tagline || '', 300),
    applicationCategory: listing.category?.name ?? 'Open-source software',
    operatingSystem: 'Self-hosted, Web, Linux, Docker',
    url: absoluteUrl(`/${listing.slug}`),
    sameAs: [listing.repoUrl, listing.websiteUrl].filter(Boolean),
    ...(listing.license ? { license: listing.license } : {}),
    // Open-source: the software itself is free (managed hosting may cost extra).
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    ...(listing.githubStars
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: String(Math.max(1, Math.round(listing.githubStars / 100))),
          },
        }
      : {}),
  }
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  }
}

export function itemListLd(listings: { slug: string; name: string }[], name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: listings.length,
    itemListElement: listings.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: absoluteUrl(`/${l.slug}`),
      name: l.name,
    })),
  }
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: env.appUrl,
    description: SITE.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${env.appUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

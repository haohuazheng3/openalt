export const SITE = {
  name: 'OpenAlt',
  shortName: 'OpenAlt',
  tagline: 'Open-source alternatives to the SaaS you’re tired of paying for',
  description:
    'A directory of open-source, self-hostable alternatives to popular SaaS — Notion, Airtable, Zapier and more. Every listing has a self-host difficulty score, one-click deploy options, and an honest feature-gap comparison with the original.',
  twitter: '@openalt',
  keywords: [
    'open source alternatives',
    'self-hosted software',
    'self hosting',
    'open source SaaS alternatives',
    'selfhosted',
    'Notion alternative',
    'Airtable alternative',
    'Zapier alternative',
  ],
} as const

/** Pricing for the self-serve Featured placement, shown on /advertise. */
export const FEATURED = {
  priceLabel: '$79',
  interval: 'month',
  benefits: [
    'Top placement on your category and on the relevant “X alternatives” pages',
    'Highlighted card with a “Sponsored” badge across the site',
    'Affiliate-first deploy & visit buttons — we send self-hosters straight to you',
    'Monthly outbound-click reporting',
    'Cancel anytime from the billing portal',
  ],
} as const

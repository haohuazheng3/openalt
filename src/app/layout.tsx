import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/components/auth-provider'
import { JsonLd } from '@/components/json-ld'
import { PlausibleAnalytics } from '@/components/plausible'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThemeScript } from '@/components/theme-script'
import { SITE } from '@/lib/constants'
import { env } from '@/lib/env'
import { ogImageUrl, websiteLd } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(env.appUrl),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: env.appUrl,
    images: [{ url: ogImageUrl(SITE.tagline, 'Self-hostable, with difficulty scores & deploy guides') }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    site: SITE.twitter,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="min-h-screen bg-background font-sans">
          <ThemeScript />
          <PlausibleAnalytics />
          <JsonLd data={websiteLd()} />
          <SiteHeader />
          <main className="min-h-[60vh]">{children}</main>
          <SiteFooter />
        </body>
      </html>
    </AuthProvider>
  )
}

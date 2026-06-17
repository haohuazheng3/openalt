/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Lint runs separately in CI; don't block production builds on style warnings.
    ignoreDuringBuilds: true,
  },
  images: {
    // Logos come from third-party hosts (GitHub avatars, Google favicons, vendor CDNs).
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    // Serve modern formats and cache optimized images for a day.
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
  compress: true,
  async headers() {
    return [
      {
        // Outbound redirector must never be indexed.
        source: '/api/go/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]
  },
}

export default nextConfig

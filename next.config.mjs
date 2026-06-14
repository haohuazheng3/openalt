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
  },
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

import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/constants'

export const runtime = 'edge'

/** Dynamic, branded Open Graph image. Used by buildMetadata() for every page. */
export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = (searchParams.get('title') ?? SITE.tagline).slice(0, 110)
  const subtitle = (searchParams.get('subtitle') ?? '').slice(0, 140)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '70px',
          background: 'linear-gradient(135deg, #0f766e 0%, #15803d 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 30, fontWeight: 600 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: 'rgba(255,255,255,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
            }}
          >
            ▣
          </div>
          {SITE.name}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1 }}>{title}</div>
          {subtitle ? <div style={{ marginTop: 20, fontSize: 30, opacity: 0.9 }}>{subtitle}</div> : null}
        </div>

        <div style={{ fontSize: 26, opacity: 0.85 }}>Open-source alternatives, self-host scored.</div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}

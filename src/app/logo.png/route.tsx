import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const revalidate = 86400

/** 512×512 brand mark (PNG) — used as the Organization JSON-LD logo. */
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="320" height="320">
<rect width="64" height="64" rx="14" fill="#15803d"/>
<g fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round">
<rect x="13" y="13" width="16" height="16" rx="2.5"/><rect x="35" y="13" width="16" height="16" rx="2.5"/><rect x="24" y="35" width="16" height="16" rx="2.5"/>
</g></svg>`

export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img width="320" height="320" alt="OpenAlt" src={`data:image/svg+xml;utf8,${encodeURIComponent(MARK)}`} />
      </div>
    ),
    { width: 512, height: 512 },
  )
}

'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

/**
 * Shows the "self-host difficulty" badge + its README embed snippet with a copy
 * button. Shown to maintainers on listing pages — each embed is a backlink.
 */
export function BadgeEmbed({ badgeUrl, snippet }: { badgeUrl: string; snippet: string }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard?.writeText(snippet).then(
      () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      },
      () => {},
    )
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={badgeUrl} alt="Self-host difficulty badge" height={20} className="h-5" />
        <span className="text-xs text-muted-foreground">← add this to your README</span>
      </div>
      <div className="flex items-stretch gap-2">
        <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap rounded-md border bg-muted/50 px-2 py-1.5 text-[11px] text-muted-foreground">
          {snippet}
        </code>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy badge markdown"
          className="inline-flex shrink-0 items-center gap-1 rounded-md border px-2 text-xs hover:bg-accent"
        >
          {copied ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

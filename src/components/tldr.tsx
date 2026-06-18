import { Sparkles } from 'lucide-react'

/**
 * GEO building block: a one-sentence direct answer at the top of a page, plus
 * optional source + last-updated lines. This is the structure AI answer engines
 * (ChatGPT, Perplexity, Google AI Overview) lift most readily — a concise,
 * sourced, dated claim beats a promotional listicle for citation.
 */
export function Tldr({
  children,
  updated,
  sources,
}: {
  children: React.ReactNode
  updated?: string
  sources?: string
}) {
  return (
    <aside className="my-6 rounded-xl border border-primary/30 bg-accent/40 p-4">
      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
        <Sparkles className="size-3.5" /> TL;DR
      </div>
      <div className="mt-1.5 text-[15px] leading-relaxed text-foreground">{children}</div>
      {(updated || sources) && (
        <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 border-t border-primary/15 pt-2 text-xs text-muted-foreground">
          {updated && <span>Last updated {updated}</span>}
          {sources && <span>Sources: {sources}</span>}
        </div>
      )}
    </aside>
  )
}

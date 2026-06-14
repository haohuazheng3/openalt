import { ChevronDown } from 'lucide-react'

/**
 * Accessible FAQ accordion (native <details>, no JS needed). Pair with faqLd()
 * for FAQPage structured data so answers can win rich results / AI overviews.
 */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null
  return (
    <div className="divide-y rounded-xl border">
      {items.map((item, i) => (
        <details key={i} className="group px-5 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium">
            {item.q}
            <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
          </summary>
          <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  )
}

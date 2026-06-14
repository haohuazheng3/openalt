import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/utils'

/** Renders trusted markdown (listing descriptions, feature-gap notes) with house typography. */
export function Markdown({ children, className }: { children: string; className?: string }) {
  return (
    <div className={cn('prose-listing', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" />,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}

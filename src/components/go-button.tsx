import { type LucideIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ButtonProps } from '@/components/ui/button'

type GoButtonProps = {
  id: number
  /** What we're sending them to: repo | website | demo | a hosting platform id. Omit for the default (affiliate-first). */
  to?: string
  label: string
  icon?: LucideIcon
  className?: string
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
}

/**
 * The single outbound CTA primitive. Always routes through /api/go/[id], which
 * logs the click (proof-of-traffic / affiliate signal) and 302s to the right
 * destination — affiliate/deploy URL first. rel="sponsored nofollow" keeps us
 * compliant and protects SEO equity.
 */
export function GoButton({ id, to, label, icon: Icon, className, variant = 'default', size = 'default' }: GoButtonProps) {
  const href = to ? `/api/go/${id}?to=${encodeURIComponent(to)}` : `/api/go/${id}`
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      data-listing-id={id}
      data-go-to={to ?? 'default'}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {Icon && <Icon className="size-4" />}
      {label}
    </a>
  )
}

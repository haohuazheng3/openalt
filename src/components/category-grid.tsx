import Link from 'next/link'
import {
  Activity,
  BarChart3,
  Boxes,
  CalendarClock,
  ClipboardList,
  FileText,
  FolderSync,
  KanbanSquare,
  KeyRound,
  LifeBuoy,
  Mail,
  MessagesSquare,
  PieChart,
  Server,
  Table2,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { Card } from '@/components/ui/card'

const ICONS: Record<string, LucideIcon> = {
  'notes-docs': FileText,
  'database-spreadsheet': Table2,
  automation: Workflow,
  crm: Users,
  analytics: BarChart3,
  'password-manager': KeyRound,
  'email-newsletter': Mail,
  'project-management': KanbanSquare,
  'file-storage': FolderSync,
  'team-chat': MessagesSquare,
  'forms-surveys': ClipboardList,
  helpdesk: LifeBuoy,
  'bi-dashboards': PieChart,
  monitoring: Activity,
  scheduling: CalendarClock,
  'paas-deploy': Server,
}

type CategoryItem = {
  slug: string
  name: string
  description?: string | null
  count?: number
}

export function CategoryGrid({ categories }: { categories: CategoryItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c) => {
        const Icon = ICONS[c.slug] ?? Boxes
        return (
          <Link key={c.slug} href={`/category/${c.slug}`} className="group">
            <Card className="flex h-full items-start gap-4 p-5 transition-colors group-hover:border-primary/40">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold group-hover:text-primary">{c.name}</h3>
                  {typeof c.count === 'number' && c.count > 0 && (
                    <span className="text-xs text-muted-foreground">{c.count}</span>
                  )}
                </div>
                {c.description && (
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.description}</p>
                )}
              </div>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}

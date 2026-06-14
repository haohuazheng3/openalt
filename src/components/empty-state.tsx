import { Database } from 'lucide-react'
import { isDatabaseConfigured } from '@/lib/env'

/**
 * Shown when a list has no results. If the database isn't configured at all,
 * we surface a setup hint instead of a generic "nothing found".
 */
export function EmptyState({ message = 'No projects found.' }: { message?: string }) {
  const dbMissing = !isDatabaseConfigured()
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
      <Database className="mb-3 size-8 text-muted-foreground" />
      <p className="font-medium">{dbMissing ? 'Database not configured' : message}</p>
      {dbMissing ? (
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          Set <code className="rounded bg-muted px-1">DATABASE_URL</code> in your environment, then run{' '}
          <code className="rounded bg-muted px-1">npm run db:migrate</code> and{' '}
          <code className="rounded bg-muted px-1">npm run db:seed</code>.
        </p>
      ) : (
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          Try a different search or clear your filters.
        </p>
      )}
    </div>
  )
}

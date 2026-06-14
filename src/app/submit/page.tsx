import type { Metadata } from 'next'
import { CheckCircle2, TriangleAlert } from 'lucide-react'
import { isClerkConfigured } from '@/lib/env'
import { buildMetadata } from '@/lib/seo'
import { SubmitForm } from './submit-form'

export const dynamic = 'force-dynamic'

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: 'Submit an open-source project',
    description: 'Add a self-hostable open-source project to the directory — paste a GitHub repo to auto-fill. Reviewed before going live.',
    path: '/submit',
  })
}

export default function SubmitPage({
  searchParams,
}: {
  searchParams: { ok?: string; error?: string }
}) {
  return (
    <div className="container max-w-2xl py-12">
      <h1 className="text-3xl font-bold tracking-tight">Submit a project</h1>
      <p className="mt-2 text-muted-foreground">
        Add a self-hostable open-source project (or claim a listing). Paste a GitHub repo to auto-fill the details.
        Submissions are reviewed before they go live.
      </p>

      {!isClerkConfigured() && (
        <div className="mt-5 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" />
          <span>Login is disabled because Clerk isn’t configured — submissions are accepted anonymously in this environment.</span>
        </div>
      )}

      {searchParams.ok && (
        <div className="mt-5 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">
          <CheckCircle2 className="size-4" /> Thanks! Your submission is in review.
        </div>
      )}
      {searchParams.error && (
        <div className="mt-5 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-900">
          {searchParams.error === 'db'
            ? 'The database isn’t configured, so submissions can’t be saved yet.'
            : 'Please check the required fields (name and a valid GitHub repository URL).'}
        </div>
      )}

      <SubmitForm />
    </div>
  )
}

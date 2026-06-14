import 'server-only'
import { env, isClerkConfigured } from '@/lib/env'

/**
 * Auth helpers that degrade gracefully when Clerk isn't configured.
 *
 * When Clerk is absent (e.g. local dev), `isAdmin()` returns true so the admin
 * tools are usable locally. The /admin UI shows a warning banner in that case —
 * configure Clerk + ADMIN_EMAILS before deploying publicly.
 */

export async function getAuthUserId(): Promise<string | null> {
  if (!isClerkConfigured()) return null
  try {
    const { auth } = await import('@clerk/nextjs/server')
    const { userId } = await auth()
    return userId ?? null
  } catch {
    return null
  }
}

export async function getCurrentUserEmail(): Promise<string | null> {
  if (!isClerkConfigured()) return null
  try {
    const { currentUser } = await import('@clerk/nextjs/server')
    const user = await currentUser()
    return (
      user?.primaryEmailAddress?.emailAddress?.toLowerCase() ??
      user?.emailAddresses?.[0]?.emailAddress?.toLowerCase() ??
      null
    )
  } catch {
    return null
  }
}

export async function isAdmin(): Promise<boolean> {
  if (!isClerkConfigured()) return true // local/dev fallback — see note above
  const email = await getCurrentUserEmail()
  if (!email || env.adminEmails.length === 0) return false
  return env.adminEmails.includes(email)
}

export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) {
    throw new Error('Forbidden: admin access required.')
  }
}

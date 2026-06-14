import { ClerkProvider } from '@clerk/nextjs'
import { isClerkConfigured } from '@/lib/env'

/**
 * Wraps the app in ClerkProvider only when Clerk keys are present. Browsing the
 * directory requires no auth, so the site builds and runs without Clerk; only
 * /submit and /admin need it.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  if (!isClerkConfigured()) return <>{children}</>
  return <ClerkProvider>{children}</ClerkProvider>
}

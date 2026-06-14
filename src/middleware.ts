import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse, type NextFetchEvent, type NextRequest } from 'next/server'

const hasClerk =
  Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) && Boolean(process.env.CLERK_SECRET_KEY)

// /submit and /admin require auth; the rest of the directory is public.
const isProtectedRoute = createRouteMatcher(['/submit(.*)', '/admin(.*)'])

const withClerk = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
})

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  // When Clerk isn't configured, let every request through (browsing needs no auth).
  if (!hasClerk) return NextResponse.next()
  return withClerk(req, event)
}

export const config = {
  matcher: [
    // Skip Next internals and static files, unless found in search params.
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpg|jpeg|gif|png|svg|ico|webp|woff2?|ttf|map)).*)',
    // Always run for API routes.
    '/(api|trpc)(.*)',
  ],
}

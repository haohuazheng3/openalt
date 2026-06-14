import { SignIn } from '@clerk/nextjs'
import { isClerkConfigured } from '@/lib/env'

export const dynamic = 'force-dynamic'

export const metadata = { robots: { index: false, follow: false } }

export default function SignInPage() {
  if (!isClerkConfigured()) {
    return (
      <div className="container max-w-md py-24 text-center text-muted-foreground">
        Authentication isn’t configured in this environment.
      </div>
    )
  }
  return (
    <div className="container flex justify-center py-16">
      <SignIn />
    </div>
  )
}

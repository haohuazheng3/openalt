import Link from 'next/link'
import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Payment successful',
  robots: { index: false, follow: false },
}

export default function AdvertiseSuccessPage() {
  return (
    <div className="container max-w-lg py-20">
      <Card className="p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-emerald-600" />
        <h1 className="mt-4 text-2xl font-bold">You’re all set 🎉</h1>
        <p className="mt-2 text-muted-foreground">
          Thanks for advertising with us. Your featured placement activates within a minute or two, once we confirm
          the payment. You’ll start appearing at the top of your category and the relevant “alternatives” pages.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild>
            <Link href="/">Back to directory</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/advertise">Advertise another project</Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}

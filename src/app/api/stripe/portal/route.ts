import { NextResponse, type NextRequest } from 'next/server'
import { getListingStripeCustomerId } from '@/lib/db/admin-queries'
import { env, isStripeConfigured } from '@/lib/env'
import { stripe } from '@/lib/stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Opens the Stripe billing portal for the advertiser of a given listing. */
export async function POST(req: NextRequest) {
  if (!stripe || !isStripeConfigured()) {
    return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 503 })
  }

  const form = await req.formData().catch(() => null)
  const listingId = form?.get('listingId') ? Number(form.get('listingId')) : NaN
  if (!Number.isInteger(listingId)) {
    return NextResponse.json({ error: 'listingId required.' }, { status: 400 })
  }

  const customerId = await getListingStripeCustomerId(listingId)
  if (!customerId) {
    return NextResponse.json({ error: 'No billing account found for this listing.' }, { status: 404 })
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${env.appUrl}/advertise`,
  })
  return NextResponse.redirect(session.url, 303)
}

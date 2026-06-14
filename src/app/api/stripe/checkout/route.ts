import { NextResponse, type NextRequest } from 'next/server'
import { env, isStripeConfigured } from '@/lib/env'
import { stripe } from '@/lib/stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Creates a Stripe Checkout subscription session for a Featured placement. */
export async function POST(req: NextRequest) {
  if (!stripe || !isStripeConfigured()) {
    return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 503 })
  }

  let listingId: string | null = null
  const contentType = req.headers.get('content-type') ?? ''
  if (contentType.includes('application/json')) {
    const body = await req.json().catch(() => ({}))
    listingId = body?.listingId != null ? String(body.listingId) : null
  } else {
    const form = await req.formData()
    const raw = form.get('listingId')
    listingId = raw != null ? String(raw) : null
  }

  if (!listingId || !/^\d+$/.test(listingId)) {
    return NextResponse.json({ error: 'A valid listingId is required.' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: env.stripeFeaturedPriceId, quantity: 1 }],
    client_reference_id: listingId,
    metadata: { listingId },
    subscription_data: { metadata: { listingId } },
    allow_promotion_codes: true,
    success_url: `${env.appUrl}/advertise/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.appUrl}/advertise?canceled=1`,
  })

  if (!session.url) {
    return NextResponse.json({ error: 'Failed to create checkout session.' }, { status: 500 })
  }
  return NextResponse.redirect(session.url, 303)
}

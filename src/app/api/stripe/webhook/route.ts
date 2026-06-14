import { NextResponse, type NextRequest } from 'next/server'
import type Stripe from 'stripe'
import {
  activateFeaturedFromStripe,
  deactivateFeaturedBySubscription,
} from '@/lib/db/admin-queries'
import { env, isStripeWebhookConfigured } from '@/lib/env'
import { stripe } from '@/lib/stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Subscription current_period_end, read defensively across SDK versions. */
function periodEndOf(sub: Stripe.Subscription): Date {
  const ts = (sub as unknown as { current_period_end?: number }).current_period_end
  return ts ? new Date(ts * 1000) : new Date(Date.now() + 30 * 86_400_000)
}

/**
 * Stripe webhook: turns paid Featured subscriptions on/off.
 *   checkout.session.completed     → activate featured + store stripe ids
 *   customer.subscription.updated  → refresh window, or deactivate if not active
 *   customer.subscription.deleted  → deactivate featured
 */
export async function POST(req: NextRequest) {
  if (!stripe || !isStripeWebhookConfigured()) {
    return NextResponse.json({ error: 'Stripe webhook not configured.' }, { status: 503 })
  }

  const signature = req.headers.get('stripe-signature')
  if (!signature) return NextResponse.json({ error: 'Missing signature.' }, { status: 400 })

  const rawBody = await req.text()
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, env.stripeWebhookSecret)
  } catch (err) {
    console.error('[stripe webhook] signature verification failed', err)
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const listingId = Number(session.metadata?.listingId ?? session.client_reference_id ?? NaN)
        const subscriptionId =
          typeof session.subscription === 'string' ? session.subscription : session.subscription?.id
        const customerId =
          typeof session.customer === 'string' ? session.customer : session.customer?.id
        if (listingId && subscriptionId && customerId) {
          const sub = await stripe.subscriptions.retrieve(subscriptionId)
          await activateFeaturedFromStripe({
            listingId,
            customerId,
            subscriptionId,
            periodEnd: periodEndOf(sub),
          })
        }
        break
      }

      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription
        const listingId = Number(sub.metadata?.listingId ?? NaN)
        const customerId = typeof sub.customer === 'string' ? sub.customer : sub.customer.id
        const active = sub.status === 'active' || sub.status === 'trialing'
        if (active && listingId) {
          await activateFeaturedFromStripe({
            listingId,
            customerId,
            subscriptionId: sub.id,
            periodEnd: periodEndOf(sub),
          })
        } else if (!active) {
          await deactivateFeaturedBySubscription(sub.id)
        }
        break
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        await deactivateFeaturedBySubscription(sub.id)
        break
      }

      default:
        break
    }
  } catch (err) {
    console.error('[stripe webhook] handler error', err)
    return NextResponse.json({ error: 'Handler error.' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}

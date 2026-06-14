import 'server-only'
import Stripe from 'stripe'
import { env } from '@/lib/env'

/**
 * Stripe client, or null when STRIPE_SECRET_KEY isn't set. We pin no apiVersion
 * so the installed SDK's default is used (kept current with the package).
 */
export const stripe: Stripe | null = env.stripeSecretKey
  ? new Stripe(env.stripeSecretKey, { typescript: true })
  : null

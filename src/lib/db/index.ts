import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { env } from '@/lib/env'
import * as schema from './schema'

/**
 * Postgres client + Drizzle instance.
 *
 * Uses postgres.js, which speaks the standard Postgres wire protocol and works
 * with both a local Postgres and Neon's pooled connection string. `prepare:false`
 * is required when connecting through Neon's pgbouncer (transaction) pooler.
 *
 * Importing this module never throws. If DATABASE_URL is missing, `db` becomes a
 * proxy that throws a clear error only when actually used — callers guard with
 * `isDatabaseConfigured()` first, so pages still build and render.
 */

const globalForDb = globalThis as unknown as {
  __pgClient?: ReturnType<typeof postgres>
}

function createClient() {
  if (!env.databaseUrl) return null
  const client =
    globalForDb.__pgClient ??
    postgres(env.databaseUrl, {
      max: 5,
      idle_timeout: 20,
      prepare: false,
    })
  if (process.env.NODE_ENV !== 'production') globalForDb.__pgClient = client
  return client
}

const client = createClient()

function unconfigured(): never {
  throw new Error(
    'DATABASE_URL is not set. Add your Neon (or Postgres) connection string to .env.local.',
  )
}

export const sqlClient = client

export const db: PostgresJsDatabase<typeof schema> = client
  ? drizzle(client, { schema })
  : (new Proxy({} as PostgresJsDatabase<typeof schema>, {
      get: () => unconfigured(),
      apply: () => unconfigured(),
    }) as PostgresJsDatabase<typeof schema>)

export { schema }

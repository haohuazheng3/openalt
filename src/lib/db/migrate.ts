import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config({ path: '.env' })

import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

async function main() {
  const url = process.env.DATABASE_URL
  if (!url) {
    console.error('✗ DATABASE_URL is not set. Add it to .env.local first.')
    process.exit(1)
  }
  const sql = postgres(url, { max: 1 })
  const db = drizzle(sql)
  console.log('→ Applying migrations from ./drizzle ...')
  await migrate(db, { migrationsFolder: './drizzle' })
  await sql.end()
  console.log('✓ Migrations applied.')
}

main().catch((err) => {
  console.error('✗ Migration failed:', err)
  process.exit(1)
})

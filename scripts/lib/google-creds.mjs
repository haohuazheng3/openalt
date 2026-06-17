/**
 * Load the Google service-account credential from (in priority order):
 *   1. GOOGLE_SERVICE_ACCOUNT_B64   — base64 of the JSON (preferred; the standard local var)
 *   2. GOOGLE_SERVICE_ACCOUNT_JSON  — raw JSON (used by the GitHub Action secret)
 *   3. ../../.env.local             — a GOOGLE_SERVICE_ACCOUNT_B64=… line there, else a legacy raw {…} blob
 *
 * Returns the parsed service account ({ client_email, private_key, project_id, … }).
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dir = dirname(fileURLToPath(import.meta.url))
const fromB64 = (s) => JSON.parse(Buffer.from(s.trim(), 'base64').toString('utf8'))

export function loadServiceAccount() {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_B64) return validate(fromB64(process.env.GOOGLE_SERVICE_ACCOUNT_B64))
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) return validate(JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON))

  const raw = readFileSync(join(__dir, '..', '..', '.env.local'), 'utf8')
  const b64 = raw.match(/^GOOGLE_SERVICE_ACCOUNT_B64=(.+)$/m)
  if (b64) return validate(fromB64(b64[1]))
  const start = raw.indexOf('{'), end = raw.lastIndexOf('}')
  if (start >= 0 && end >= 0) return validate(JSON.parse(raw.slice(start, end + 1)))
  throw new Error('No Google service account found (set GOOGLE_SERVICE_ACCOUNT_B64 or _JSON, or add it to .env.local)')
}

function validate(sa) {
  if (!sa?.client_email || !sa?.private_key?.includes('PRIVATE KEY'))
    throw new Error('service account is missing client_email / private_key')
  return sa
}

'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'
import { getAuthUserId } from '@/lib/auth'
import { db } from '@/lib/db'
import { submissions } from '@/lib/db/schema'
import { isDatabaseConfigured } from '@/lib/env'

const DEPLOY = ['One-Click', 'Docker', 'Docker Compose', 'Kubernetes', 'Manual']

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  repoUrl: z.string().url('A valid repository URL is required'),
  websiteUrl: z.string().url().optional().or(z.literal('').transform(() => undefined)),
  demoUrl: z.string().url().optional().or(z.literal('').transform(() => undefined)),
  tagline: z.string().optional(),
  descriptionMd: z.string().optional(),
  categorySlug: z.string().optional(),
  replaces: z.array(z.string()).optional(),
  license: z.string().optional(),
  language: z.string().optional(),
  selfHostDifficulty: z.number().int().min(1).max(5).optional(),
  deployOptions: z.array(z.string()).optional(),
  hasManagedHosting: z.boolean().optional(),
  featureGapMd: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

function field(form: FormData, key: string): string | undefined {
  const v = form.get(key)
  const s = v == null ? '' : String(v).trim()
  return s || undefined
}

function list(form: FormData, key: string): string[] {
  const v = form.get(key)
  if (!v) return []
  return String(v)
    .split(/[,\n]/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
}

/** Public submission/claim handler. Records a pending submission for /admin review. */
export async function submitListing(formData: FormData) {
  if (!isDatabaseConfigured()) redirect('/submit?error=db')

  const difficultyRaw = field(formData, 'selfHostDifficulty')
  const deployOptions = formData.getAll('deployOptions').map(String).filter((d) => DEPLOY.includes(d))

  const parsed = schema.safeParse({
    name: field(formData, 'name') ?? '',
    repoUrl: field(formData, 'repoUrl') ?? '',
    websiteUrl: field(formData, 'websiteUrl') ?? '',
    demoUrl: field(formData, 'demoUrl') ?? '',
    tagline: field(formData, 'tagline'),
    descriptionMd: field(formData, 'description'),
    categorySlug: field(formData, 'categorySlug'),
    replaces: list(formData, 'replaces'),
    license: field(formData, 'license'),
    language: field(formData, 'language'),
    selfHostDifficulty: difficultyRaw ? Number(difficultyRaw) : undefined,
    deployOptions,
    hasManagedHosting: formData.get('hasManagedHosting') === 'on',
    featureGapMd: field(formData, 'featureGapMd'),
    tags: list(formData, 'tags'),
  })

  if (!parsed.success) redirect('/submit?error=validation')

  const userId = await getAuthUserId()
  await db.insert(submissions).values({
    payload: parsed.data,
    submitterUserId: userId,
    status: 'pending',
  })

  redirect('/submit?ok=1')
}

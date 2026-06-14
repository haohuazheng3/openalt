'use server'

import { revalidatePath } from 'next/cache'
import { requireAdmin } from '@/lib/auth'
import {
  approveSubmission,
  rejectSubmission,
  setListingFeatured,
  setListingStatus,
  updateListingAffiliate,
  type ListingStatus,
} from '@/lib/db/admin-queries'

const STATUSES: ListingStatus[] = ['live', 'pending', 'rejected', 'archived']

/** Revalidate the public surfaces affected by an admin change. */
function revalidateAll() {
  revalidatePath('/', 'layout')
}

export async function toggleFeaturedAction(formData: FormData) {
  await requireAdmin()
  const id = Number(formData.get('id'))
  const featured = formData.get('featured') === '1'
  if (Number.isInteger(id)) await setListingFeatured(id, featured)
  revalidateAll()
}

export async function setStatusAction(formData: FormData) {
  await requireAdmin()
  const id = Number(formData.get('id'))
  const status = String(formData.get('status')) as ListingStatus
  if (Number.isInteger(id) && STATUSES.includes(status)) {
    await setListingStatus(id, status)
  }
  revalidateAll()
}

export async function updateAffiliateAction(formData: FormData) {
  await requireAdmin()
  const id = Number(formData.get('id'))
  const affiliateUrl = String(formData.get('affiliateUrl') ?? '').trim() || null
  const affiliateNetwork = String(formData.get('affiliateNetwork') ?? '').trim() || null
  if (Number.isInteger(id)) await updateListingAffiliate(id, { affiliateUrl, affiliateNetwork })
  revalidatePath('/admin')
}

export async function approveSubmissionAction(formData: FormData) {
  await requireAdmin()
  const id = Number(formData.get('id'))
  if (Number.isInteger(id)) await approveSubmission(id)
  revalidateAll()
}

export async function rejectSubmissionAction(formData: FormData) {
  await requireAdmin()
  const id = Number(formData.get('id'))
  if (Number.isInteger(id)) await rejectSubmission(id)
  revalidatePath('/admin')
}

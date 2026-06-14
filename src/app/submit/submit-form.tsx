'use client'

import { useState } from 'react'
import { Loader2, Wand2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CATEGORIES } from '@/data/categories'
import { PROPRIETARY_TOOLS } from '@/data/proprietary-tools'
import { submitListing } from './actions'

const DEPLOY_OPTIONS = ['One-Click', 'Docker', 'Docker Compose', 'Kubernetes', 'Manual']
const inputBase = 'mt-1'

type Prefill = {
  name: string
  tagline: string
  websiteUrl: string
  language: string
  license: string
  stars: number
}

/** Pull public repo metadata from the GitHub API (client-side, no token needed). */
async function fetchRepo(repoUrl: string): Promise<Prefill | null> {
  const m = repoUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/i)
  if (!m) return null
  const owner = m[1]
  const repo = m[2].replace(/\.git$/, '')
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: { Accept: 'application/vnd.github+json' },
  })
  if (!res.ok) return null
  const d = await res.json()
  return {
    name: d.name ?? repo,
    tagline: d.description ?? '',
    websiteUrl: d.homepage ?? '',
    language: d.language ?? '',
    license: d.license?.spdx_id && d.license.spdx_id !== 'NOASSERTION' ? d.license.spdx_id : '',
    stars: d.stargazers_count ?? 0,
  }
}

export function SubmitForm() {
  const [repoUrl, setRepoUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [prefill, setPrefill] = useState<Prefill | null>(null)
  const [error, setError] = useState('')

  async function handlePrefill() {
    setError('')
    setLoading(true)
    try {
      const data = await fetchRepo(repoUrl)
      if (!data) setError('Couldn’t read that repo. Check the GitHub URL, or fill the fields in manually.')
      else setPrefill(data)
    } catch {
      setError('GitHub request failed. Fill the fields in manually.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mt-8 p-6">
      {/* Repo prefill */}
      <div className="rounded-lg border bg-muted/30 p-4">
        <Label htmlFor="repoPrefill" className="text-sm font-semibold">
          Paste a GitHub repo to auto-fill
        </Label>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <Input
            id="repoPrefill"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/owner/repo"
          />
          <Button type="button" variant="secondary" onClick={handlePrefill} disabled={loading || !repoUrl}>
            {loading ? <Loader2 className="size-4 animate-spin" /> : <Wand2 className="size-4" />}
            Prefill
          </Button>
        </div>
        {error && <p className="mt-2 text-sm text-rose-600">{error}</p>}
        {prefill && (
          <p className="mt-2 text-sm text-emerald-700">
            Loaded {prefill.name} · {prefill.stars.toLocaleString()} ★ · {prefill.language || 'n/a'}{' '}
            {prefill.license ? `· ${prefill.license}` : ''}. Review the fields below and submit.
          </p>
        )}
      </div>

      <form action={submitListing} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Project name *</Label>
            <Input id="name" name="name" required defaultValue={prefill?.name ?? ''} key={`n-${prefill?.name}`} placeholder="AppFlowy" className={inputBase} />
          </div>
          <div>
            <Label htmlFor="repoUrl">Repository URL *</Label>
            <Input id="repoUrl" name="repoUrl" type="url" required defaultValue={repoUrl} key={`r-${repoUrl}`} placeholder="https://github.com/owner/repo" className={inputBase} />
          </div>
        </div>

        <div>
          <Label htmlFor="tagline">Tagline</Label>
          <Input id="tagline" name="tagline" defaultValue={prefill?.tagline ?? ''} key={`t-${prefill?.tagline}`} placeholder="One-line description of what it does" className={inputBase} />
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <Label htmlFor="categorySlug">Category</Label>
            <select id="categorySlug" name="categorySlug" defaultValue="" className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <option value="" disabled>Select a category…</option>
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="language">Language</Label>
            <Input id="language" name="language" defaultValue={prefill?.language ?? ''} key={`l-${prefill?.language}`} placeholder="TypeScript" className={inputBase} />
          </div>
          <div>
            <Label htmlFor="license">License</Label>
            <Input id="license" name="license" defaultValue={prefill?.license ?? ''} key={`li-${prefill?.license}`} placeholder="MIT" className={inputBase} />
          </div>
        </div>

        <div>
          <Label htmlFor="replaces">Replaces (which SaaS?)</Label>
          <Input id="replaces" name="replaces" list="proprietary-list" placeholder="notion, confluence (comma-separated slugs)" className={inputBase} />
          <datalist id="proprietary-list">
            {PROPRIETARY_TOOLS.map((p) => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
          </datalist>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" rows={4} placeholder="What does it do, and who is it for? Markdown supported." className={inputBase} />
        </div>

        <div>
          <Label htmlFor="featureGapMd">Feature gap vs the original</Label>
          <Textarea id="featureGapMd" name="featureGapMd" rows={3} placeholder="Where does it fall short of the proprietary product? Markdown bullets." className={inputBase} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="selfHostDifficulty">Self-host difficulty (1–5)</Label>
            <select id="selfHostDifficulty" name="selfHostDifficulty" defaultValue="" className="mt-1 h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <option value="">Unknown</option>
              <option value="1">1 · Effortless (one-click / managed)</option>
              <option value="2">2 · Easy (single docker run)</option>
              <option value="3">3 · Moderate (docker-compose)</option>
              <option value="4">4 · Involved (manual config)</option>
              <option value="5">5 · Advanced (complex stack)</option>
            </select>
          </div>
          <div>
            <Label htmlFor="demoUrl">Demo URL</Label>
            <Input id="demoUrl" name="demoUrl" type="url" placeholder="https://demo.example.com" className={inputBase} />
          </div>
        </div>

        <div>
          <Label>Deploy options</Label>
          <div className="mt-2 flex flex-wrap gap-3">
            {DEPLOY_OPTIONS.map((d) => (
              <label key={d} className="flex items-center gap-1.5 text-sm">
                <input type="checkbox" name="deployOptions" value={d} className="size-4 rounded border-input" />
                {d}
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="hasManagedHosting" className="size-4 rounded border-input" />
            Offers official managed hosting
          </label>
          <div className="flex-1">
            <Input name="tags" placeholder="tags: kanban, markdown, docker (comma-separated)" />
          </div>
        </div>

        <Button type="submit" size="lg">Submit for review</Button>
      </form>
    </Card>
  )
}

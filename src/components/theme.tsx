'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

/** Toggles the `dark` class on <html> and persists the choice. */
export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
    setMounted(true)
  }, [])

  function toggle() {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {}
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={
        'inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground ' +
        (className ?? '')
      }
    >
      {/* Avoid hydration mismatch: render a neutral icon until mounted. */}
      {mounted && dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}

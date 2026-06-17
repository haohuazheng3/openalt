'use client'

/**
 * Root error boundary (custom 500). Replaces Next's default error page so we
 * never serve a soft-404/blank on a runtime error. Must render <html>/<body>.
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#fff', color: '#0f172a' }}>
        <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontSize: '3rem', fontWeight: 800, color: '#15803d', margin: 0 }}>500</p>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '1rem' }}>Something went wrong</h1>
          <p style={{ color: '#64748b', marginTop: '0.5rem', maxWidth: 420 }}>
            An unexpected error occurred. Try again, or head back to the directory.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
            <button onClick={() => reset()} style={{ height: 40, padding: '0 1rem', borderRadius: 8, border: 'none', background: '#15803d', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
              Try again
            </button>
            <a href="/" style={{ height: 40, display: 'inline-flex', alignItems: 'center', padding: '0 1rem', borderRadius: 8, border: '1px solid #e2e8f0', color: '#0f172a', textDecoration: 'none', fontWeight: 600 }}>
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}

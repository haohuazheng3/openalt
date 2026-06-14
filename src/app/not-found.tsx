import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="container flex max-w-md flex-col items-center py-24 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-muted-foreground">
        We couldn’t find that project or page. Try searching or browse by category.
      </p>
      <div className="mt-6 flex gap-3">
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/search">Search projects</Link>
        </Button>
      </div>
    </div>
  )
}

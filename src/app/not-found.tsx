import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NotFoundIllustration } from '@/components/illustrations'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center bg-background p-4 text-center">
      <div className="flex flex-col items-center max-w-lg w-full">
        <NotFoundIllustration className="w-full h-auto" data-ai-hint="page not found"/>
        <h1 className="mt-8 font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          404 - Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}

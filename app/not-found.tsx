import Link from 'next/link';
import { Terminal, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
        <Terminal className="h-8 w-8" />
      </div>
      <h1 className="mt-6 font-mono text-6xl font-bold text-foreground">404</h1>
      <p className="mt-2 font-mono text-sm text-muted-foreground">
        $ m31a --find-page
      </p>
      <p className="mt-1 font-mono text-sm text-destructive">
        Page not found. The run state for this route does not exist.
      </p>
      <div className="mt-6">
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </main>
  );
}

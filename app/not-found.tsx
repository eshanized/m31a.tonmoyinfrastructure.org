import Link from 'next/link';
import { Home, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="text-center">
        <Terminal className="mx-auto mb-6 h-12 w-12 text-primary" />
        <div className="font-mono text-sm text-muted-foreground">m31a: error</div>
        <h1 className="mt-4 text-6xl font-bold tracking-tight">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The runtime could not find this path.
        </p>
        <div className="mt-8 font-mono text-sm text-muted-foreground">
          <span className="text-red-400">error[E0404]</span>: route not found
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Home className="h-4 w-4" />
          Return home
        </Link>
      </div>
    </div>
  );
}

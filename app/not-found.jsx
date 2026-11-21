import Link from 'next/link';
import { Compass, Home, BookOpen } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-16 bg-background">
      <Container size="narrow" className="text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-foreground-muted mb-4">
          <Compass className="w-6 h-6 text-foreground-subtle" />
        </div>

        <span className="text-xs font-mono font-medium text-accent-crimson bg-red-500/10 px-2.5 py-0.5 rounded-md border border-red-500/20 mb-2">
          Error 404
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Page Not Found
        </h1>

        <p className="mt-3 text-xs sm:text-sm text-foreground-muted max-w-md leading-relaxed">
          The requested route does not exist in the M31A documentation or application surface. Check the URL or return to home.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" icon={Home}>
            Return Home
          </Button>
          <Button href="/features" variant="outline" size="md" icon={BookOpen}>
            Explore Features
          </Button>
        </div>
      </Container>
    </div>
  );
}

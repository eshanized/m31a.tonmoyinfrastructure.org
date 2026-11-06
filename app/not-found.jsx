import Link from 'next/link';
import { Compass, ArrowLeft, Home, BookOpen } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20 bg-background">
      <Container size="narrow" className="text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-surface-muted border border-border flex items-center justify-center text-foreground-muted mb-6 shadow-xs">
          <Compass className="w-8 h-8 text-accent-crimson animate-pulse" />
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-crimson bg-red-50 px-3 py-1 rounded-full mb-3">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Page Not Found
        </h1>

        <p className="mt-4 text-sm sm:text-base text-foreground-muted max-w-md leading-relaxed">
          The requested route does not exist in the M31A documentation or application surface. Check the URL or return to home.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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

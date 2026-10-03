import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('font-mono font-bold tracking-tight', className)}>
      <span className="text-primary">M31</span>
      <span className="text-foreground">A</span>
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('h-8 w-8', className)}
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="28" height="28" rx="6" className="fill-card stroke-border" strokeWidth="1" />
      <path
        d="M8 22 L12 10 L16 18 L20 10 L24 22"
        className="stroke-primary"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="22" r="1.5" className="fill-primary" />
    </svg>
  );
}

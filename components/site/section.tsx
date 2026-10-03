import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={cn('max-w-2xl text-pretty text-muted-foreground', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 sm:py-24', className)}>
      {children}
    </section>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 sm:px-6', className)}>
      {children}
    </div>
  );
}

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const styles: Record<string, string> = {
    Available: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Experimental: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Planned: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    Internal: 'bg-muted text-muted-foreground border-border',
    Completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'In Progress': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Future: 'bg-muted text-muted-foreground border-border',
    Stable: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Development: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
        styles[status] ?? styles['Internal'],
        className
      )}
    >
      {status}
    </span>
  );
}

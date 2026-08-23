import { cn } from '@/lib/utils';
import type { RoadmapStatus } from '@/content/roadmap';
import { statusConfig } from '@/content/roadmap';

interface StatusBadgeProps {
  status: RoadmapStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs font-medium',
        config.className,
        className
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', config.dotClass)} />
      {config.label}
    </span>
  );
}

interface GenericBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info' | 'destructive';
  className?: string;
}

const genericVariants = {
  default: 'border-border bg-muted/40 text-muted-foreground',
  success: 'border-success/30 bg-success/10 text-success',
  warning: 'border-warning/30 bg-warning/10 text-warning',
  info: 'border-info/30 bg-info/10 text-info',
  destructive: 'border-destructive/30 bg-destructive/10 text-destructive',
};

export function GenericBadge({ children, variant = 'default', className }: GenericBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs font-medium',
        genericVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

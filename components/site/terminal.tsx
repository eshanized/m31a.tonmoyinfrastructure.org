import { cn } from '@/lib/utils';

interface TerminalProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
  showHeader?: boolean;
}

export function Terminal({
  title = 'm31a',
  className,
  children,
  showHeader = true,
}: TerminalProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-border bg-[hsl(220_20%_3%)] shadow-2xl',
        className
      )}
    >
      {showHeader && (
        <div className="flex items-center gap-2 border-b border-border/60 bg-[hsl(220_18%_5%)] px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive/80" />
            <span className="h-3 w-3 rounded-full bg-warning/80" />
            <span className="h-3 w-3 rounded-full bg-success/80" />
          </div>
          <span className="ml-2 font-mono text-xs text-muted-foreground">{title}</span>
        </div>
      )}
      <div className="overflow-x-auto p-4 font-mono text-xs leading-relaxed sm:text-sm">
        {children}
      </div>
    </div>
  );
}

interface TerminalLineProps {
  children: React.ReactNode;
  className?: string;
  prompt?: boolean;
}

export function TerminalLine({ children, className, prompt }: TerminalLineProps) {
  return (
    <div className={cn('whitespace-pre', className)}>
      {prompt && <span className="text-primary">$ </span>}
      {children}
    </div>
  );
}

export function TerminalCursor() {
  return (
    <span className="terminal-cursor inline-block h-4 w-2 translate-y-0.5 bg-primary align-middle" aria-hidden="true" />
  );
}

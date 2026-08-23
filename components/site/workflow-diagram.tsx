import { engineeringLoop } from '@/content/architecture';
import { cn } from '@/lib/utils';

export function WorkflowDiagram({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col items-center gap-0', className)}>
      {engineeringLoop.map((step, idx) => (
        <div key={step.id} className="flex flex-col items-center">
          <div className="group relative flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3 transition-colors hover:border-primary/40">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-xs font-bold text-primary">
              {idx + 1}
            </span>
            <div>
              <div className="font-mono text-sm font-semibold text-foreground">{step.label}</div>
              <div className="text-xs text-muted-foreground">{step.description}</div>
            </div>
          </div>
          {idx < engineeringLoop.length - 1 && (
            <div className="h-6 w-px bg-gradient-to-b from-border to-primary/30" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}

export function WorkflowDiagramHorizontal({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap items-center justify-center gap-2', className)}>
      {engineeringLoop.map((step, idx) => (
        <div key={step.id} className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 font-mono text-[10px] font-bold text-primary">
              {idx + 1}
            </span>
            <span className="font-mono text-xs font-medium text-foreground">{step.label}</span>
          </div>
          {idx < engineeringLoop.length - 1 && (
            <span className="text-muted-foreground/40" aria-hidden="true">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

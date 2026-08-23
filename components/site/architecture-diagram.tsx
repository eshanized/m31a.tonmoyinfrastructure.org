import { architectureLayers } from '@/content/architecture';
import { cn } from '@/lib/utils';

export function ArchitectureDiagram({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col items-center', className)}>
      {/* M31A core */}
      <div className="rounded-lg border-2 border-primary/40 bg-primary/10 px-8 py-3">
        <span className="font-sans text-lg font-bold tracking-wider text-primary">M31A</span>
      </div>

      {/* Connector */}
      <div className="h-6 w-px bg-border" aria-hidden="true" />

      {/* Top row: Interaction, Intelligence, Engineering */}
      <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
        {architectureLayers.slice(0, 3).map((layer) => (
          <div
            key={layer.id}
            className="rounded-lg border border-border bg-card/50 p-4 text-center transition-colors hover:border-primary/30"
          >
            <div className="font-sans text-sm font-semibold text-foreground">{layer.name}</div>
            <div className="mt-1 text-xs text-muted-foreground">{layer.description}</div>
          </div>
        ))}
      </div>

      {/* Connector */}
      <div className="h-6 w-px bg-border" aria-hidden="true" />

      {/* Middle row: Execution */}
      <div className="rounded-lg border border-border bg-card/50 px-6 py-3 text-center">
        <div className="font-sans text-sm font-semibold text-foreground">Execution</div>
        <div className="mt-1 text-xs text-muted-foreground">Agents · Tools · Shell · Git · MCP</div>
      </div>

      <div className="h-6 w-px bg-border" aria-hidden="true" />

      {/* Assurance */}
      <div className="rounded-lg border border-border bg-card/50 px-6 py-3 text-center">
        <div className="font-sans text-sm font-semibold text-foreground">Assurance</div>
        <div className="mt-1 text-xs text-muted-foreground">Tests · Verification · Security · Review</div>
      </div>

      <div className="h-6 w-px bg-border" aria-hidden="true" />

      {/* Memory */}
      <div className="rounded-lg border border-info/30 bg-info/5 px-6 py-3 text-center">
        <div className="font-sans text-sm font-semibold text-info">Memory</div>
        <div className="mt-1 text-xs text-muted-foreground">Sessions · Runs · Events · Artifacts · Learnings</div>
      </div>
    </div>
  );
}

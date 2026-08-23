'use client';

import { useState } from 'react';
import { tuiViews } from '@/content/architecture';
import { cn } from '@/lib/utils';

export function TuiShowcase() {
  const [active, setActive] = useState(1); // default to "Run" view

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-[hsl(220_20%_3%)] shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border/60 bg-[hsl(220_18%_5%)] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive/80" />
            <span className="h-3 w-3 rounded-full bg-warning/80" />
            <span className="h-3 w-3 rounded-full bg-success/80" />
          </div>
          <span className="ml-2 font-mono text-xs text-muted-foreground">M31A · RUN 84F2</span>
        </div>
        <span className="font-mono text-xs text-primary">● feature/rbac</span>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Navigation */}
        <div className="flex flex-row gap-1 border-b border-border/60 bg-[hsl(220_18%_4%)] p-2 md:flex-col md:border-b-0 md:border-r md:w-44">
          {tuiViews.map((view, idx) => (
            <button
              key={view.id}
              onClick={() => setActive(idx)}
              className={cn(
                'flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs transition-colors',
                'flex-1 md:flex-none md:text-left',
                active === idx
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              )}
            >
              <span
                className={cn(
                  'h-1.5 w-1.5 rounded-full',
                  active === idx ? 'bg-primary' : 'bg-muted-foreground/40'
                )}
              />
              {view.name}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="border-b border-border/60 px-4 py-2">
            <span className="font-mono text-xs text-muted-foreground">{tuiViews[active].description}</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-foreground/90 sm:text-sm">
            {tuiViews[active].content}
          </pre>
        </div>

        {/* Context panel */}
        <div className="border-t border-border/60 bg-[hsl(220_18%_4%)] p-3 md:border-t-0 md:border-l md:w-48">
          <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Context</div>
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">model</span>
              <span className="font-mono text-xs text-foreground/80">nemotron</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">tasks</span>
              <span className="font-mono text-xs text-foreground/80">5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">done</span>
              <span className="font-mono text-xs text-success">2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">running</span>
              <span className="font-mono text-xs text-info">1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">pending</span>
              <span className="font-mono text-xs text-muted-foreground/60">2</span>
            </div>
          </div>
          <div className="mt-3 border-t border-border/40 pt-3">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Evidence</div>
            <div className="mt-1.5 font-mono text-xs text-success">47 checks</div>
            <div className="font-mono text-xs text-destructive/80">0 failures</div>
          </div>
        </div>
      </div>

      {/* Command bar */}
      <div className="flex items-center gap-2 border-t border-border/60 bg-[hsl(220_18%_5%)] px-4 py-2.5">
        <span className="font-mono text-xs text-primary">{`>`}</span>
        <span className="font-mono text-xs text-muted-foreground">steer the run or inspect details...</span>
        <span className="terminal-cursor inline-block h-3.5 w-2 bg-primary" aria-hidden="true" />
      </div>
    </div>
  );
}

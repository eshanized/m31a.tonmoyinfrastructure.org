'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Cpu,
  Bot,
  Wrench,
  Terminal,
  Database,
  Radio,
  FileCode,
  Layers,
} from 'lucide-react';
import { ARCHITECTURE_LAYERS, ArchitectureLayerInfo, PRODUCT } from '@/lib/m31a/product';

const layerIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  L9: Terminal,
  L8: Bot,
  L7: CheckCircle2,
  L6: Cpu,
  L5: Workflow,
  L4: Layers,
  L3: Radio,
  L2: Wrench,
  L1: ShieldCheck,
  L0: Database,
};

export function InteractiveArchitecture() {
  const [selectedLayer, setSelectedLayer] = useState<ArchitectureLayerInfo>(ARCHITECTURE_LAYERS[1]); // Default to L8

  const IconComponent = layerIcons[selectedLayer.layer] || Cpu;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Visual Downward-Dependency Layer Stack */}
      <div className="lg:col-span-7 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1 pb-2">
          <span>HIGHER LAYERS (User Intent &amp; Scheduling)</span>
          <span>DOWNWARD DEPENDENCY ONLY</span>
        </div>

        {ARCHITECTURE_LAYERS.map((layer, idx) => {
          const isSelected = selectedLayer.layer === layer.layer;
          const LayerIcon = layerIcons[layer.layer] || Cpu;

          return (
            <div key={layer.layer} className="relative">
              <button
                type="button"
                onClick={() => setSelectedLayer(layer)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? `${layer.color} border-current shadow-lg shadow-black/40 scale-[1.01] ring-1 ring-primary/40`
                    : 'border-border/60 bg-card/40 hover:bg-card/80 hover:border-border text-foreground'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${
                      isSelected ? 'bg-primary/20 text-primary border-primary/40' : 'bg-secondary text-muted-foreground border-border'
                    }`}
                  >
                    {layer.layer}
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm truncate flex items-center gap-2">
                      <LayerIcon className="h-4 w-4 shrink-0" />
                      <span>{layer.name}</span>
                    </div>
                    <div className="text-xs text-muted-foreground truncate">{layer.subsystem}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline font-mono text-[11px] text-muted-foreground">
                    {layer.sourcePath.split(',')[0]}
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${isSelected ? 'translate-x-1 text-primary' : 'text-muted-foreground'}`}
                  />
                </div>
              </button>

              {idx < ARCHITECTURE_LAYERS.length - 1 && (
                <div className="flex justify-center -my-1 relative z-10 pointer-events-none">
                  <span className="text-[10px] text-border/80 font-mono">↓</span>
                </div>
              )}
            </div>
          );
        })}

        <div className="text-xs font-mono text-muted-foreground px-1 pt-1">
          <span>LOWER LAYERS (Kernel Invariants &amp; OS Confinement)</span>
        </div>
      </div>

      {/* Layer Detail Inspector Panel */}
      <div className="lg:col-span-5 sticky top-20">
        <div className="rounded-xl border border-border bg-[#0d1016] p-6 shadow-xl">
          <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                <IconComponent className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-primary">{selectedLayer.layer} SUBSYSTEM</span>
                <h3 className="text-lg font-bold text-foreground">{selectedLayer.name}</h3>
              </div>
            </div>
            <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground border border-border">
              Layer {selectedLayer.layer}
            </span>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <div className="text-xs font-mono uppercase text-muted-foreground mb-1">Architecture Subsystem</div>
              <div className="text-sm font-medium text-foreground">{selectedLayer.subsystem}</div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-muted-foreground mb-1">Responsibilities &amp; Guarantees</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedLayer.responsibilities}
              </p>
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-muted-foreground mb-1">Source Repository Paths</div>
              <div className="font-mono text-xs text-primary bg-primary/5 p-2 rounded border border-primary/20 break-all">
                {selectedLayer.sourcePath}
              </div>
            </div>

            <div className="pt-2 border-t border-border/60 flex flex-col gap-2">
              <a
                href={selectedLayer.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs text-foreground bg-secondary/80 hover:bg-secondary p-2.5 rounded transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <FileCode className="h-3.5 w-3.5 text-primary" />
                  <span>Inspect Source on GitHub</span>
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
              </a>

              <Link
                href="/docs/architecture"
                className="flex items-center justify-between text-xs text-primary hover:text-primary/80 p-2.5 rounded transition-colors"
              >
                <span>Read Full Layer Specification in Docs</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS } from '@/lib/m31a/product';
import { ChevronRight, ExternalLink, ShieldCheck, Lock, Layers } from 'lucide-react';

export function ArchitectureStack() {
  const [selectedLayer, setSelectedLayer] = useState<string>('L1');

  const current = ARCHITECTURE_LAYERS.find((l) => l.layer === selectedLayer) ?? ARCHITECTURE_LAYERS[8];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
      {/* Left: Minimal Vertical Architectural Stack */}
      <div className="lg:col-span-7 rounded-2xl border border-[#27272E] bg-[#111114] overflow-hidden divide-y divide-[#222227] shadow-xl">
        <div className="bg-[#141418] px-4 py-2.5 flex items-center justify-between text-xs font-mono text-[#65656E]">
          <span className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#E8523F]" />
            <span>LAYER STACK (L9 TO L0)</span>
          </span>
          <span>STRICT DOWNWARD FLOW</span>
        </div>

        {ARCHITECTURE_LAYERS.map((layer) => {
          const isSelected = layer.layer === selectedLayer;
          const isBoundary = layer.layer === 'L1' || layer.layer === 'L3';

          return (
            <button
              key={layer.layer}
              onClick={() => setSelectedLayer(layer.layer)}
              className={`group flex items-center justify-between py-3.5 px-4 transition-all text-left ${
                isSelected
                  ? 'bg-[#18181D] text-[#F4F4F6] border-l-4 border-l-[#E8523F] shadow-sm'
                  : 'hover:bg-[#141417] text-[#9E9EA8]'
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`font-mono text-sm font-bold w-7 ${
                    isSelected ? 'text-[#E8523F]' : 'text-[#65656E] group-hover:text-[#F4F4F6]'
                  }`}
                >
                  {layer.layer}
                </span>
                <div>
                  <span
                    className={`text-sm sm:text-base font-semibold tracking-tight ${
                      isSelected ? 'text-[#F4F4F6]' : 'text-[#9E9EA8] group-hover:text-[#F4F4F6]'
                    }`}
                  >
                    {layer.name}
                  </span>
                  <span className="hidden sm:inline-block ml-3 text-xs text-[#65656E]">
                    — {layer.subsystem}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {isBoundary && (
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-[#E8523F]/35 bg-[#E8523F]/10 text-[#E8523F] font-semibold">
                    Trust Boundary
                  </span>
                )}
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-[#E8523F] translate-x-1' : 'text-[#65656E]'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Right: Architectural Detail Inspector */}
      <div className="lg:col-span-5 sticky top-28 rounded-2xl border border-[#27272E] bg-[#111115] p-6 sm:p-8 shadow-2xl transition-all hover:border-[#E8523F]/30">
        <div className="flex items-center justify-between border-b border-[#222227] pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-[#E8523F] bg-[#E8523F]/10 border border-[#E8523F]/25 px-2.5 py-1 rounded shadow-sm">
              {current.layer}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#9E9EA8] font-semibold">
              Layer Details
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#3ECF8E] bg-[#3ECF8E]/10 px-2 py-0.5 rounded border border-[#3ECF8E]/20">
            Strict downward dependency
          </span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-[#F4F4F6]">
          {current.name}
        </h3>
        <p className="text-xs font-mono text-[#E8523F] mt-1 mb-4 font-semibold">
          {current.subsystem}
        </p>

        <p className="text-sm text-[#9E9EA8] leading-relaxed mb-6">
          {current.responsibilities}
        </p>

        <div className="space-y-3 border-t border-[#222227] pt-4 text-xs font-mono">
          <div className="flex justify-between py-1 border-b border-[#222227]/60">
            <span className="text-[#65656E]">Source Module:</span>
            <span className="text-[#F4F4F6]">{current.sourcePath}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#222227]/60">
            <span className="text-[#65656E]">Dependency Rule:</span>
            <span className="text-[#F4F4F6]">
              {current.layer === 'L0' ? 'Root Foundation' : `Only layers below ${current.layer}`}
            </span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-[#65656E]">Authority:</span>
            <span className={current.layer === 'L1' || current.layer === 'L0' ? 'text-[#E8523F] font-semibold' : 'text-[#3ECF8E]'}>
              {current.layer === 'L1' ? 'Gate Enforcement' : current.layer === 'L3' ? 'Untrusted Model' : 'Runtime Subsystem'}
            </span>
          </div>
        </div>

        <a
          href={current.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-[#27272E] bg-[#141418] hover:bg-[#1A1A20] hover:border-[#E8523F]/50 text-xs font-mono text-[#F4F4F6] transition-colors"
        >
          <span>View Source on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#E8523F]" />
        </a>
      </div>
    </div>
  );
}

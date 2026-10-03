'use client';

import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS } from '@/lib/m31a/product';
import { ChevronRight, ExternalLink } from 'lucide-react';

export function ArchitectureStack() {
  const [selectedLayer, setSelectedLayer] = useState<string>('L1');

  const current = ARCHITECTURE_LAYERS.find((l) => l.layer === selectedLayer) ?? ARCHITECTURE_LAYERS[8];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
      {/* Left: Minimal Vertical Architectural Stack */}
      <div className="lg:col-span-7 flex flex-col divide-y divide-[#222226] border-y border-[#222226]">
        {ARCHITECTURE_LAYERS.map((layer) => {
          const isSelected = layer.layer === selectedLayer;
          const isBoundary = layer.layer === 'L1' || layer.layer === 'L3';

          return (
            <button
              key={layer.layer}
              onClick={() => setSelectedLayer(layer.layer)}
              className={`group flex items-center justify-between py-3.5 px-3 transition-colors text-left ${
                isSelected
                  ? 'bg-[#18181B]/80 text-[#F0EDE8]'
                  : 'hover:bg-[#111113] text-[#A3A09B]'
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`font-mono text-sm font-semibold w-8 ${
                    isSelected ? 'text-[#E8523F]' : 'text-[#6B6965] group-hover:text-[#F0EDE8]'
                  }`}
                >
                  {layer.layer}
                </span>
                <div>
                  <span
                    className={`text-sm sm:text-base font-medium tracking-tight ${
                      isSelected ? 'text-[#F0EDE8]' : 'text-[#A3A09B] group-hover:text-[#F0EDE8]'
                    }`}
                  >
                    {layer.name}
                  </span>
                  <span className="hidden sm:inline-block ml-3 text-xs text-[#6B6965]">
                    — {layer.subsystem}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {isBoundary && (
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-[#E8523F]/30 bg-[#E8523F]/10 text-[#E8523F]">
                    Trust Boundary
                  </span>
                )}
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-[#E8523F] translate-x-1' : 'text-[#6B6965]'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Right: Architectural Detail Inspector */}
      <div className="lg:col-span-5 sticky top-28 rounded-2xl border border-[#222226] bg-[#111113] p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-[#222226] pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-[#E8523F] bg-[#E8523F]/10 px-2 py-0.5 rounded">
              {current.layer}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#A3A09B]">
              Layer Details
            </span>
          </div>
          <span className="text-xs text-[#6B6965]">
            Strict downward dependency
          </span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-[#F0EDE8]">
          {current.name}
        </h3>
        <p className="text-xs font-mono text-[#E8523F] mt-1 mb-4">
          {current.subsystem}
        </p>

        <p className="text-sm text-[#A3A09B] leading-relaxed mb-6">
          {current.responsibilities}
        </p>

        <div className="space-y-3 border-t border-[#222226] pt-4 text-xs font-mono">
          <div className="flex justify-between py-1 border-b border-[#222226]/50">
            <span className="text-[#6B6965]">Source Module:</span>
            <span className="text-[#F0EDE8]">{current.sourcePath}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#222226]/50">
            <span className="text-[#6B6965]">Dependency Rule:</span>
            <span className="text-[#F0EDE8]">
              {current.layer === 'L0' ? 'Root Foundation' : `Only layers below ${current.layer}`}
            </span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-[#6B6965]">Authority:</span>
            <span className={current.layer === 'L1' || current.layer === 'L0' ? 'text-[#E8523F]' : 'text-[#3ECF8E]'}>
              {current.layer === 'L1' ? 'Gate Enforcement' : current.layer === 'L3' ? 'Untrusted Model' : 'Runtime Subsystem'}
            </span>
          </div>
        </div>

        <a
          href={current.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-[#2C2C31] text-xs font-medium text-[#F0EDE8] hover:border-[#E8523F] hover:text-[#E8523F] transition-colors"
        >
          <span>View Source on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

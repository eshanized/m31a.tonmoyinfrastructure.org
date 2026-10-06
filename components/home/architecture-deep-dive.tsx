'use client';

import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS, ArchitectureLayerInfo } from '@/lib/m31a/product';
import { Container } from '@/components/site/section';
import { ArrowRight, ChevronRight, ExternalLink, ShieldAlert, Layers, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function ArchitectureDeepDive() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('L1');

  // Find layer info (or default to L1 Policy Gate)
  const current = ARCHITECTURE_LAYERS.find((l) => l.layer === selectedLayerId) ?? ARCHITECTURE_LAYERS[8];

  // Helper for trust boundary
  const getLayerClassification = (layer: string) => {
    if (layer === 'L3') return { label: 'UNTRUSTED MODEL', color: 'text-[#EF4444] bg-[#EF4444]/10 border-[#EF4444]/25' };
    if (layer === 'L1') return { label: 'TRUST BOUNDARY', color: 'text-[#E8523F] bg-[#E8523F]/15 border-[#E8523F]/30 font-bold' };
    if (layer === 'L0') return { label: 'KERNEL ROOT', color: 'text-[#9E9EA8] bg-[#18181D] border-[#27272E]' };
    if (layer === 'L2') return { label: 'SANDBOX BOUNDARY', color: 'text-[#EAB308] bg-[#EAB308]/10 border-[#EAB308]/25' };
    if (layer === 'L7') return { label: 'EVIDENCE VERIFIER', color: 'text-[#3ECF8E] bg-[#3ECF8E]/10 border-[#3ECF8E]/25' };
    return { label: 'RUNTIME CORE', color: 'text-[#9E9EA8] bg-[#18181D] border-[#27272E]' };
  };

  const getWhyItExists = (layer: string) => {
    switch (layer) {
      case 'L9':
        return 'Decouples user presentation (Ratatui TUI cockpit and CLI parser) as a pure reactive projection of underlying SQLite runtime state.';
      case 'L8':
        return 'Enforces the 12-stage mission execution loop and 10-dimensional budget model, detecting runaway loops before tokens or CPU exhaust.';
      case 'L7':
        return 'Guarantees that no task completion is admitted without empirical proof — multi-tier compiler checks, test passes, and SHA-256 evidence digests.';
      case 'L6':
        return 'Supervises subprocess trees and streaming output spools with hard memory caps so rogue tools never exhaust host resources.';
      case 'L5':
        return 'Decomposes intent into a petgraph-backed acyclic task graph, validating topological order to eliminate circular execution locks.';
      case 'L4':
        return 'Coordinates the 8 canonical agent roles (Planner, Verifier, Diagnostician, etc.) with strict context window compilers.';
      case 'L3':
        return 'Isolates the probabilistic LLM behind XML prompt trust envelopes and secret redaction, treating model outputs as untrusted proposals.';
      case 'L2':
        return 'Enforces process confinement (cgroups v2, POSIX rlimits) and strips ambient host secrets before any tool dispatch.';
      case 'L1':
        return 'Evaluates every single workspace mutation and tool dispatch through an 11-stage non-bypassable policy pipeline with Layer 0 safety vetoes.';
      case 'L0':
        return 'Provides domain-typed kernel IDs, SQLite migrations, and broadcast event buses with zero downward dependencies.';
      default:
        return 'Enforces architectural separation of concerns.';
    }
  };

  return (
    <section id="architecture" className="py-24 sm:py-32 border-b border-[#222227] bg-[#0C0C0E]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
              SYSTEMS ARCHITECTURE // L0 TO L9
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F4F6] leading-tight">
              Under the interface is a runtime built for control.
            </h2>
            <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed">
              Organized as a single high-assurance Rust crate with strict downward dependencies.
              Lower layers never import or depend on higher layers.
            </p>
          </div>

          <Link
            href="/architecture"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#27272E] bg-[#141418] hover:bg-[#1A1A20] hover:border-[#E8523F]/50 text-xs sm:text-sm font-mono text-[#F4F4F6] transition-all shrink-0"
          >
            <span>Full Architecture Map</span>
            <ArrowRight className="w-4 h-4 text-[#E8523F]" />
          </Link>
        </div>

        {/* ── Interactive Architecture Diagram ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Layer Stack (L9 down to L0) (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-[#27272E] bg-[#111114] overflow-hidden divide-y divide-[#222227] shadow-xl">
            <div className="bg-[#141418] px-4 py-2.5 flex items-center justify-between text-xs font-mono text-[#65656E]">
              <span>LAYER HIERARCHY (STRICT DOWNWARD FLOW)</span>
              <span>10 CONCURRENT TIERS</span>
            </div>

            {ARCHITECTURE_LAYERS.map((layer) => {
              const isSelected = layer.layer === selectedLayerId;
              const classification = getLayerClassification(layer.layer);

              return (
                <button
                  key={layer.layer}
                  onClick={() => setSelectedLayerId(layer.layer)}
                  className={`w-full flex items-center justify-between py-3.5 px-4 text-left transition-all ${
                    isSelected
                      ? 'bg-[#18181D] text-[#F4F4F6] border-l-4 border-l-[#E8523F]'
                      : 'hover:bg-[#141417] text-[#9E9EA8]'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold w-7 ${
                        isSelected ? 'text-[#E8523F]' : 'text-[#65656E]'
                      }`}
                    >
                      {layer.layer}
                    </span>

                    <div className="truncate">
                      <span
                        className={`text-sm font-semibold tracking-tight block sm:inline ${
                          isSelected ? 'text-[#F4F4F6]' : 'text-[#9E9EA8]'
                        }`}
                      >
                        {layer.name}
                      </span>
                      <span className="text-xs text-[#65656E] sm:ml-2 hidden sm:inline">
                        — {layer.subsystem}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${classification.color}`}
                    >
                      {classification.label}
                    </span>
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

          {/* Right: Layer Inspector (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 rounded-2xl border border-[#27272E] bg-[#111115] p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#222227] pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#E8523F] bg-[#E8523F]/10 border border-[#E8523F]/25 px-2.5 py-1 rounded">
                  {current.layer}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#9E9EA8] font-semibold">
                  Layer Specification
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#65656E]">
                Downward Only
              </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#F4F4F6] mb-1">
              {current.name}
            </h3>
            <p className="text-xs font-mono text-[#E8523F] mb-4">
              {current.subsystem}
            </p>

            {/* Responsibilities */}
            <div className="mb-6">
              <span className="text-xs font-mono uppercase text-[#65656E] block mb-1.5 font-semibold">
                Core Responsibilities
              </span>
              <p className="text-sm text-[#9E9EA8] leading-relaxed">
                {current.responsibilities}
              </p>
            </div>

            {/* Why it exists */}
            <div className="mb-6 p-4 rounded-xl border border-[#222227] bg-[#0A0A0C]">
              <span className="text-xs font-mono uppercase text-[#E8523F] block mb-1 font-semibold">
                Why this layer exists
              </span>
              <p className="text-xs text-[#9E9EA8] leading-relaxed">
                {getWhyItExists(current.layer)}
              </p>
            </div>

            {/* Metadata spec */}
            <div className="space-y-2.5 border-t border-[#222227] pt-4 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-[#222227]/50">
                <span className="text-[#65656E]">Source Module:</span>
                <span className="text-[#F4F4F6]">{current.sourcePath}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#222227]/50">
                <span className="text-[#65656E]">Dependency Rule:</span>
                <span className="text-[#F4F4F6]">
                  {current.layer === 'L0' ? 'Root (0 Dependencies)' : `Only layers below ${current.layer}`}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#65656E]">Authority Tier:</span>
                <span className={current.layer === 'L1' || current.layer === 'L0' ? 'text-[#E8523F] font-semibold' : 'text-[#3ECF8E]'}>
                  {current.layer === 'L1' ? 'Gate Enforcement' : current.layer === 'L3' ? 'Untrusted Model' : 'Authoritative Runtime'}
                </span>
              </div>
            </div>

            {/* GitHub source link */}
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
      </Container>
    </section>
  );
}

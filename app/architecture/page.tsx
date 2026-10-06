import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, ShieldCheck, Database, Terminal, Sparkles } from 'lucide-react';
import { Container } from '@/components/site/section';
import { ArchitectureStack } from '@/components/home/architecture-stack';
import { PRODUCT } from '@/lib/m31a/product';

export default function ArchitecturePage() {
  return (
    <div className="py-16 sm:py-24 relative overflow-hidden">
      {/* ── Atmospheric Radial Lighting & CAD Tech Grid ── */}
      <div 
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(232,82,63,0.12)_0%,rgba(14,14,18,0.3)_45%,transparent_70%)] blur-3xl opacity-80"
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[radial-gradient(#F4F4F6_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />

      {/* Top Precision Laser Edge Accent */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#E8523F]/50 to-transparent"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="border-b border-[#222227] pb-12 sm:pb-16 mb-16 relative z-10">
        <Container>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E8523F]/35 bg-[#161214] text-xs font-mono text-[#E8523F] mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8523F] animate-pulse" />
            <span>ARCHITECTURE &amp; SUBSYSTEMS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F4F4F6] max-w-3xl leading-tight">
            Ten Layers, One Direction:{' '}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#F4F4F6] to-[#E8523F] bg-clip-text text-transparent">
              Down.
            </span>
          </h1>

          <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed max-w-2xl">
            M31A is implemented as a single, high-assurance Rust crate organized into a strict L0 to L9
            hierarchy. Lower layers are strictly forbidden from importing or depending on higher layers.
          </p>
        </Container>
      </div>

      <Container className="relative z-10">
        {/* Architecture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-[#27272E] bg-[#111115] hover:border-[#E8523F]/40 transition-all shadow-lg hover:-translate-y-0.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/25 flex items-center justify-center text-[#E8523F] mb-4">
              <Layers className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-[#F4F4F6]">Strict Downward Dependency</h2>
            <p className="text-sm text-[#9E9EA8] mt-2 leading-relaxed">
              Presentation (L9) and mission orchestration (L8) depend on execution and policy (L1-L7),
              never the reverse. The UI is a pure projection of SQLite state.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#27272E] bg-[#111115] hover:border-[#E8523F]/40 transition-all shadow-lg hover:-translate-y-0.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/25 flex items-center justify-center text-[#E8523F] mb-4">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-[#F4F4F6]">Two Hard Trust Boundaries</h2>
            <p className="text-sm text-[#9E9EA8] mt-2 leading-relaxed">
              Layer 3 bounds external model provider SSE streams; Layer 1 enforces the 11-stage policy
              gate before any side effect reaches the OS.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-[#27272E] bg-[#111115] hover:border-[#E8523F]/40 transition-all shadow-lg hover:-translate-y-0.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8523F]/10 border border-[#E8523F]/25 flex items-center justify-center text-[#E8523F] mb-4">
              <Database className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-[#F4F4F6]">Single Crate Kernel</h2>
            <p className="text-sm text-[#9E9EA8] mt-2 leading-relaxed">
              Zero Node.js, Python, or GPU dependencies for runtime execution. Single standalone binary
              built with Rust {PRODUCT.rustVersion} (Edition {PRODUCT.edition}).
            </p>
          </div>
        </div>

        {/* Interactive L0-L9 Stack */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#F4F4F6]">
              The 10-Layer Hierarchy (L0–L9)
            </h2>
            <p className="text-sm text-[#9E9EA8] mt-1">
              Select any layer to inspect its subsystem purpose, source modules, and boundary rules.
            </p>
          </div>

          <ArchitectureStack />
        </div>

        {/* Persistence Architecture */}
        <div className="rounded-2xl border border-[#27272E] bg-[#111115] p-8 sm:p-12 mb-16 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E8523F] block mb-2">
              PERSISTENCE ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F4F6]">
              Hybrid Storage &amp; Checkpoints
            </h2>
            <p className="text-sm text-[#9E9EA8] mt-2 leading-relaxed">
              M31A stores state across four dedicated local channels inside the <code className="text-[#F4F4F6] font-mono bg-[#18181D] px-1.5 py-0.5 rounded">.m31a/</code> workspace directory:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-[#27272E] bg-[#0A0A0C]">
              <span className="font-mono text-xs text-[#E8523F] block mb-1 font-semibold">db.sqlite</span>
              <h3 className="font-semibold text-sm text-[#F4F4F6] mb-2">Compact Relational State</h3>
              <p className="text-xs text-[#9E9EA8] leading-relaxed">
                WAL mode, strict foreign keys, atomic transactions for mission, task, and policy grant records.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#27272E] bg-[#0A0A0C]">
              <span className="font-mono text-xs text-[#E8523F] block mb-1 font-semibold">telemetry/</span>
              <h3 className="font-semibold text-sm text-[#F4F4F6] mb-2">Append-Only NDJSON</h3>
              <p className="text-xs text-[#9E9EA8] leading-relaxed">
                Streaming execution logs with automated 5-tier secret scrubbing before serialization.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#27272E] bg-[#0A0A0C]">
              <span className="font-mono text-xs text-[#E8523F] block mb-1 font-semibold">artifacts/</span>
              <h3 className="font-semibold text-sm text-[#F4F4F6] mb-2">Immutable Blob Storage</h3>
              <p className="text-xs text-[#9E9EA8] leading-relaxed">
                Content-addressed storage indexed by SHA-256 digests for diffs, test logs, and patches.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#27272E] bg-[#0A0A0C]">
              <span className="font-mono text-xs text-[#E8523F] block mb-1 font-semibold">staging/</span>
              <h3 className="font-semibold text-sm text-[#F4F4F6] mb-2">Atomic Staging Buffer</h3>
              <p className="text-xs text-[#9E9EA8] leading-relaxed">
                Two-phase commit buffers ensuring no partial writes compromise crash recovery.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-[#222227] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <Link
            href="/security"
            className="inline-flex items-center gap-2 font-medium text-[#F4F4F6] hover:text-[#E8523F] transition-colors group"
          >
            <span>Read the Security Architecture</span>
            <ArrowRight className="w-4 h-4 text-[#E8523F] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/docs/architecture"
            className="inline-flex items-center gap-2 font-medium text-[#9E9EA8] hover:text-[#F4F4F6] transition-colors group"
          >
            <span>Read Architecture Reference Documentation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

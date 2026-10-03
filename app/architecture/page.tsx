import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, ShieldCheck, Database, Terminal } from 'lucide-react';
import { Container } from '@/components/site/section';
import { ArchitectureStack } from '@/components/home/architecture-stack';
import { PRODUCT } from '@/lib/m31a/product';

export default function ArchitecturePage() {
  return (
    <div className="py-16 sm:py-24">
      {/* Header */}
      <div className="border-b border-[#222226] pb-12 sm:pb-16 mb-16">
        <Container>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
            ARCHITECTURE &amp; SUBSYSTEMS
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-3xl">
            Ten Layers, One Direction: Down.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-2xl">
            M31A is implemented as a single, high-assurance Rust crate organized into a strict L0 to L9
            hierarchy. Lower layers are strictly forbidden from importing or depending on higher layers.
          </p>
        </Container>
      </div>

      <Container>
        {/* Architecture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl border border-[#222226] bg-[#111113]">
            <Layers className="w-5 h-5 text-[#E8523F] mb-3" />
            <h2 className="text-base font-bold text-[#F0EDE8]">Strict Downward Dependency</h2>
            <p className="text-sm text-[#A3A09B] mt-2 leading-relaxed">
              Presentation (L9) and mission orchestration (L8) depend on execution and policy (L1-L7),
              never the reverse. The UI is a pure projection of SQLite state.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#222226] bg-[#111113]">
            <ShieldCheck className="w-5 h-5 text-[#E8523F] mb-3" />
            <h2 className="text-base font-bold text-[#F0EDE8]">Two Hard Trust Boundaries</h2>
            <p className="text-sm text-[#A3A09B] mt-2 leading-relaxed">
              Layer 3 bounds external model provider SSE streams; Layer 1 enforces the 11-stage policy
              gate before any side effect reaches the OS.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#222226] bg-[#111113]">
            <Database className="w-5 h-5 text-[#E8523F] mb-3" />
            <h2 className="text-base font-bold text-[#F0EDE8]">Single Crate Kernel</h2>
            <p className="text-sm text-[#A3A09B] mt-2 leading-relaxed">
              Zero Node.js, Python, or GPU dependencies for runtime execution. Single standalone binary
              built with Rust {PRODUCT.rustVersion} (Edition 2024).
            </p>
          </div>
        </div>

        {/* Interactive L0-L9 Stack */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#F0EDE8]">
              The 10-Layer Hierarchy (L0–L9)
            </h2>
            <p className="text-sm text-[#A3A09B] mt-1">
              Select any layer to inspect its subsystem purpose, source modules, and boundary rules.
            </p>
          </div>

          <ArchitectureStack />
        </div>

        {/* Persistence Architecture */}
        <div className="rounded-2xl border border-[#222226] bg-[#111113] p-8 sm:p-12 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E8523F] block mb-2">
              PERSISTENCE ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F0EDE8]">
              Hybrid Storage &amp; Checkpoints
            </h2>
            <p className="text-sm text-[#A3A09B] mt-2 leading-relaxed">
              M31A stores state across four dedicated local channels inside the <code className="text-[#F0EDE8] font-mono">.m31a/</code> workspace directory:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-[#222226] bg-[#0A0A0B]">
              <span className="font-mono text-xs text-[#E8523F] block mb-1">db.sqlite</span>
              <h3 className="font-semibold text-sm text-[#F0EDE8] mb-2">Compact Relational State</h3>
              <p className="text-xs text-[#A3A09B] leading-relaxed">
                WAL mode, strict foreign keys, atomic transactions for mission, task, and policy grant records.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#222226] bg-[#0A0A0B]">
              <span className="font-mono text-xs text-[#E8523F] block mb-1">telemetry/</span>
              <h3 className="font-semibold text-sm text-[#F0EDE8] mb-2">Append-Only NDJSON</h3>
              <p className="text-xs text-[#A3A09B] leading-relaxed">
                Streaming execution logs with automated 5-tier secret scrubbing before serialization.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#222226] bg-[#0A0A0B]">
              <span className="font-mono text-xs text-[#E8523F] block mb-1">artifacts/</span>
              <h3 className="font-semibold text-sm text-[#F0EDE8] mb-2">Immutable Blob Storage</h3>
              <p className="text-xs text-[#A3A09B] leading-relaxed">
                Content-addressed storage indexed by SHA-256 digests for diffs, test logs, and patches.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#222226] bg-[#0A0A0B]">
              <span className="font-mono text-xs text-[#E8523F] block mb-1">staging/</span>
              <h3 className="font-semibold text-sm text-[#F0EDE8] mb-2">Atomic Staging Buffer</h3>
              <p className="text-xs text-[#A3A09B] leading-relaxed">
                Two-phase commit buffers ensuring no partial writes compromise crash recovery.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-[#222226] flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/security"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F0EDE8] hover:text-[#E8523F] transition-colors"
          >
            <span>Read the Security Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/docs/architecture"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#A3A09B] hover:text-[#F0EDE8] transition-colors"
          >
            <span>Read Architecture Reference Documentation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

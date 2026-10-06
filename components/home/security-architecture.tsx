'use client';

import React, { useState } from 'react';
import { Container } from '@/components/site/section';
import { ShieldCheck, Lock, Cpu, FolderLock, KeyRound, Network, RefreshCcw, ArrowRight, Check, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface SecurityNode {
  id: string;
  number: string;
  name: string;
  layer: string;
  category: string;
  summary: string;
  mechanism: string;
  invariant: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SECURITY_NODES: SecurityNode[] = [
  {
    id: 'policy-gate',
    number: '01',
    name: '11-Stage Policy Pipeline',
    layer: 'Layer 1',
    category: 'Access Control',
    summary: 'Monotonic evaluation across 10 authority layers. Safety vetoes cannot be weakened.',
    mechanism: 'Higher authority always overrules lower authority. Non-weakening merger semantics.',
    invariant: 'FAIL-CLOSED: Default decision is DENY. Unattended ASK converts to DENY.',
    icon: Lock,
  },
  {
    id: 'sandbox',
    number: '02',
    name: 'Process Confinement',
    layer: 'Layer 2',
    category: 'Isolation',
    summary: 'Linux cgroups v2 memory bounds, POSIX rlimits, and process group supervision.',
    mechanism: 'Hard ceilings on RSS memory, CPU seconds, and max open file descriptors.',
    invariant: 'cmd.env_clear() scrubs host environment to neutralize LD_PRELOAD vulnerabilities.',
    icon: Cpu,
  },
  {
    id: 'path-containment',
    number: '03',
    name: 'Path & Worktree Containment',
    layer: 'Layer 1 & 2',
    category: 'Filesystem',
    summary: 'Mutations pinned to workspace root or isolated Git worktrees. Traversal blocked.',
    mechanism: 'Lexical and canonical path resolution rejects symlink escapes and ../ traversals.',
    invariant: 'Production requires git.execution_isolation = "required" before writing.',
    icon: FolderLock,
  },
  {
    id: 'secrets',
    number: '04',
    name: '5-Tier Secret Redactor',
    layer: 'Layer 3',
    category: 'Data Protection',
    summary: 'Automatic scrubbing of NVIDIA, AWS, GitHub, OpenAI keys, JWTs, and passwords.',
    mechanism: 'High-entropy and regex scanners filter streams before persistence or display.',
    invariant: 'Raw credentials never enter SQLite WAL, NDJSON telemetry, or model context.',
    icon: KeyRound,
  },
  {
    id: 'ssrf',
    number: '05',
    name: 'Network Egress Filtering (SSRF)',
    layer: 'Layer 1',
    category: 'Network',
    summary: 'Pre-flight DNS validation blocks loopback, private subnets, and metadata endpoints.',
    mechanism: 'Async DNS resolution + redirect inspection up to 5 hops blocks DNS rebinding.',
    invariant: 'Agent actions cannot probe 127.0.0.1, 169.254.169.254, or internal VPC subnets.',
    icon: Network,
  },
  {
    id: 'evidence',
    number: '06',
    name: 'Cryptographic Evidence & Rollback',
    layer: 'Layer 7',
    category: 'Integrity',
    summary: 'Missions require empirical proof. Ambiguous states trigger atomic rollback seams.',
    mechanism: 'Two-phase staging buffers committed to SQLite WAL only when SHA-256 matches.',
    invariant: 'Corrupted or interrupted runs never auto-resume blindly without invariant verification.',
    icon: ShieldCheck,
  },
];

export function SecurityArchitecture() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('policy-gate');
  const active = SECURITY_NODES.find((n) => n.id === selectedNodeId) ?? SECURITY_NODES[0];

  return (
    <section id="security" className="py-24 sm:py-32 border-b border-[#222227] bg-[#0A0A0C] relative overflow-hidden">
      {/* ── Ambient Radial Lighting ── */}
      <div 
        className="pointer-events-none absolute top-1/4 left-10 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(232,82,63,0.08)_0%,transparent_70%)] blur-3xl opacity-70"
        aria-hidden="true" 
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E8523F]/30 bg-[#161214] text-xs font-mono text-[#E8523F] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8523F]" />
              <span>ZERO-TRUST RUNTIME BOUNDARIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F4F6] leading-tight">
              Security is part of execution, not an afterthought.
            </h2>
            <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed">
              M31A treats the model as an unprivileged, untrusted component outside the security boundary.
              Every proposed action passes through non-bypassable architectural gates before touching the host.
            </p>
          </div>

          <Link
            href="/security"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#27272E] bg-[#141418] hover:bg-[#1A1A20] hover:border-[#E8523F]/50 text-xs sm:text-sm font-mono text-[#F4F4F6] transition-all shrink-0 shadow-sm group"
          >
            <span>Read Security Model</span>
            <ArrowRight className="w-4 h-4 text-[#E8523F] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── Visual Defensive Architecture Diagram & Inspection ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Security Pipeline Flow Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="p-3.5 rounded-xl bg-[#141418] border border-[#27272E] flex items-center justify-between text-xs font-mono text-[#65656E] mb-2 shadow-sm">
              <span className="text-[#FF453A] font-bold">UNTRUSTED MODEL PROPOSAL</span>
              <span className="text-[#9E9EA8] hidden sm:inline">→ NON-BYPASSABLE RUNTIME PERIMETER →</span>
              <span className="text-[#3ECF8E] font-bold">VERIFIED REPO MUTATION</span>
            </div>

            {SECURITY_NODES.map((node) => {
              const isSelected = node.id === selectedNodeId;
              const Icon = node.icon;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`w-full p-4.5 rounded-xl border text-left transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'border-[#E8523F] bg-[#161214] ring-1 ring-[#E8523F]/40 shadow-[0_0_20px_rgba(232,82,63,0.15)]'
                      : 'border-[#27272E] bg-[#101013] hover:border-[#3A3A44] hover:bg-[#141418]'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl mt-0.5 shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#E8523F]/20 text-[#E8523F] shadow-[0_0_12px_rgba(232,82,63,0.3)]'
                        : 'bg-[#18181D] text-[#9E9EA8]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[11px] font-mono uppercase text-[#E8523F] font-semibold">
                        {node.layer} · {node.category}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-mono text-[#3ECF8E] font-bold bg-[#3ECF8E]/10 px-2 py-0.5 rounded border border-[#3ECF8E]/20">
                          ACTIVE INSPECTION
                        </span>
                      )}
                    </div>
                    <h3 className={`text-base font-bold tracking-tight ${isSelected ? 'text-[#F4F4F6]' : 'text-[#9E9EA8]'}`}>
                      {node.name}
                    </h3>
                    <p className="text-xs text-[#65656E] mt-1 leading-relaxed">
                      {node.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Security Inspector Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 rounded-2xl border border-[#27272E] bg-[#111115] p-6 sm:p-8 shadow-2xl transition-all hover:border-[#E8523F]/30">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#222227]">
              <div className="p-2.5 rounded-xl bg-[#E8523F]/15 text-[#E8523F] border border-[#E8523F]/25 shadow-sm">
                <active.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E8523F] font-semibold">
                  {active.layer} // {active.category}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#F4F4F6]">
                  {active.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#9E9EA8] leading-relaxed mb-6">
              {active.summary}
            </p>

            <div className="space-y-4 pt-4 border-t border-[#222227]">
              <div>
                <span className="text-xs font-mono uppercase text-[#65656E] block mb-1 font-semibold">
                  Enforcement Mechanism
                </span>
                <p className="text-xs sm:text-sm text-[#F4F4F6] font-medium leading-relaxed">
                  {active.mechanism}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-[#65656E] block mb-1.5 font-semibold">
                  Security Invariant Guarantee
                </span>
                <div className="p-3.5 rounded-xl border border-[#3ECF8E]/25 bg-[#3ECF8E]/5 font-mono text-xs text-[#3ECF8E] leading-relaxed shadow-sm">
                  ✓ {active.invariant}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#222227] flex items-center justify-between text-xs font-mono text-[#65656E]">
              <span>ASVS L1 Conformance</span>
              <span className="text-[#3ECF8E] font-medium bg-[#3ECF8E]/10 px-2 py-0.5 rounded border border-[#3ECF8E]/20">
                Verified Invariant
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

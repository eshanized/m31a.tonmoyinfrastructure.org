import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, ShieldCheck, Terminal, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/site/section';
import { SignatureVisual } from '@/components/site/signature-visual';
import { ProductStory } from '@/components/home/product-story';
import { ArchitectureStack } from '@/components/home/architecture-stack';
import { SecurityModel } from '@/components/home/security-model';
import { CliShowcase } from '@/components/home/cli-showcase';
import { CodeBlock } from '@/components/site/code-block';
import { PRODUCT, PLATFORMS_MATRIX } from '@/lib/m31a/product';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ─────────────────────────────────────────────────────────
          01 · BRAND / HERO SECTION (Editorial, Asymmetric)
          ───────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-24 sm:pt-20 sm:pb-32 border-b border-[#222226]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Editorial Typographic Statement */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2C2C31] bg-[#111113] text-xs font-mono text-[#A3A09B] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8523F]" />
                <span>M31A — M31 AUTONOMOUS</span>
                <span className="text-[#6B6965]">/</span>
                <span className="text-[#F0EDE8]">v{PRODUCT.version}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F0EDE8] leading-[1.05]">
                THE MODEL
                <br />
                PROPOSES.
                <br />
                <span className="text-[#E8523F]">THE RUNTIME</span>
                <br />
                DECIDES.
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-[#A3A09B] leading-relaxed max-w-xl font-normal">
                M31A is a Rust-native autonomous software-engineering runtime that brings planning,
                execution, verification, and recovery to the terminal while keeping runtime authority
                outside the model.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white font-medium text-sm transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download M31A</span>
                </Link>

                <Link
                  href="/architecture"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[#2C2C31] bg-[#111113] hover:bg-[#18181B] text-[#F0EDE8] font-medium text-sm transition-all"
                >
                  <Layers className="w-4 h-4 text-[#A3A09B]" />
                  <span>Explore Architecture</span>
                </Link>

                <Link
                  href="/security"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#A3A09B] hover:text-[#E8523F] transition-colors ml-2"
                >
                  <span>Read the security model</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Baseline Badges */}
              <div className="mt-12 pt-8 border-t border-[#222226] w-full grid grid-cols-3 gap-4 text-xs font-mono text-[#6B6965]">
                <div>
                  <span className="block text-[#A3A09B] font-semibold">FOUNDATION</span>
                  <span className="mt-0.5 block">Rust {PRODUCT.rustVersion}</span>
                </div>
                <div>
                  <span className="block text-[#A3A09B] font-semibold">QUALIFIED</span>
                  <span className="mt-0.5 block">Linux x86_64</span>
                </div>
                <div>
                  <span className="block text-[#A3A09B] font-semibold">DEPENDENCIES</span>
                  <span className="mt-0.5 block">Single Crate (Zero Foreign)</span>
                </div>
              </div>
            </div>

            {/* Right: Signature Sculptural Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <SignatureVisual />
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          02 · THE IDEA / PRINCIPLE
          ───────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[#222226] bg-[#0A0A0B]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-4">
                THE CORE PRINCIPLE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] leading-tight">
                INTELLIGENCE
                <br />
                IS NOT
                <br />
                AUTHORITY.
              </h2>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6 text-[#A3A09B] text-base sm:text-lg leading-relaxed">
              <p>
                Large language models reason, decompose problems, and draft code. But granting a
                non-deterministic model direct shell access, ambient credentials, and write privileges
                inevitably produces runaway loops, destroyed workspaces, and security compromises.
              </p>
              <p>
                M31A introduces a hard architectural boundary. The model proposes structured actions.
                The runtime evaluates policy, bounds memory and CPU time, executes tools inside sandboxes,
                and verifies evidence before any mission is admitted as complete.
              </p>
              <div className="pt-4 border-t border-[#222226] flex items-center gap-6 text-sm font-mono text-[#F0EDE8]">
                <div>
                  <span className="text-[#E8523F] font-bold">PROPOSAL</span> = Untrusted
                </div>
                <div>
                  <span className="text-[#3ECF8E] font-bold">RUNTIME</span> = Authoritative
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          03 · PRODUCT STORY (PLAN · EXECUTE · VERIFY · RECOVER)
          ───────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[#222226] bg-[#0D0D10]">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
              PRODUCT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0EDE8]">
              The Execution Lifecycle
            </h2>
            <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed">
              Every autonomous mission follows a deterministic four-phase progression.
              No step is skipped; no completion is accepted without evidence.
            </p>
          </div>

          <ProductStory />
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          04 · WARM-WHITE EDITORIAL SECTION (Visual Contrast Moment)
          ───────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#F5F0EB] text-[#141311]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8523F]">
                THE RUNTIME SEPARATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141311] leading-tight">
                A model can reason.
                <br />
                A runtime can enforce.
              </h2>
              <p className="mt-2 text-base text-[#524E48] leading-relaxed">
                By treating the LLM as an unprivileged component outside the trust boundary,
                M31A guarantees deterministic safety invariants that prompts alone cannot enforce.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-[#E0D9CF] bg-[#EDE7DF]/80">
                <span className="font-mono text-xs font-bold uppercase text-[#736E65] block mb-2">
                  THE MODEL (UPSTREAM)
                </span>
                <h3 className="text-lg font-bold text-[#141311] mb-2">Reasoning Engine</h3>
                <ul className="space-y-2 text-sm text-[#524E48]">
                  <li>• Decomposes high-level intent</li>
                  <li>• Synthesizes candidate code diffs</li>
                  <li>• Proposes structured tool calls</li>
                  <li>• Evaluates compiler diagnostics</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-[#E8523F]/30 bg-white shadow-sm">
                <span className="font-mono text-xs font-bold uppercase text-[#E8523F] block mb-2">
                  THE RUNTIME (AUTHORITY)
                </span>
                <h3 className="text-lg font-bold text-[#141311] mb-2">Deterministic Control</h3>
                <ul className="space-y-2 text-sm text-[#383530]">
                  <li>• 11-stage policy gate evaluation</li>
                  <li>• POSIX rlimits &amp; cgroups confinement</li>
                  <li>• 10-dimensional resource budgeting</li>
                  <li>• Multi-tier test &amp; lint verification</li>
                  <li>• Two-phase atomic SQLite commit</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          05 · RUNTIME ARCHITECTURE (L0–L9 Vertical Stack)
          ───────────────────────────────────────────────────────── */}
      <section id="architecture" className="py-24 sm:py-32 border-b border-[#222226] bg-[#0A0A0B]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
                L0 TO L9 ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0EDE8]">
                Ten Layers. One Direction: Down.
              </h2>
              <p className="mt-3 text-[#A3A09B] text-base leading-relaxed max-w-xl">
                A single Rust crate organized with strict downward dependencies. Lower layers never
                import or depend on higher layers.
              </p>
            </div>

            <Link
              href="/architecture"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E8523F] hover:underline"
            >
              <span>View Full Architecture Map</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ArchitectureStack />
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          06 · SECURITY
          ───────────────────────────────────────────────────────── */}
      <section id="security" className="py-24 sm:py-32 border-b border-[#222226] bg-[#0E0E10]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
                SECURITY ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0EDE8]">
                Security is Built into the Runtime.
              </h2>
              <p className="mt-3 text-[#A3A09B] text-base leading-relaxed max-w-xl">
                Non-bypassable policy gates, process confinement, path containment, and automated
                secret redaction. Fail-closed by construction.
              </p>
            </div>

            <Link
              href="/security"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E8523F] hover:underline"
            >
              <span>Read Full Security Model</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <SecurityModel />
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          07 · VERIFICATION
          ───────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[#222226] bg-[#0A0A0B]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F]">
                EVIDENCE-BASED INTEGRITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0EDE8]">
                Completion Requires Evidence.
              </h2>
              <p className="text-base text-[#A3A09B] leading-relaxed">
                M31A does not trust a model&apos;s assertion that a problem has been solved. Tasks are
                committed only when automated verification pipelines produce matching cryptographic
                SHA-256 evidence digests.
              </p>
              <div className="space-y-3 mt-2">
                {[
                  'Compiler & test suite execution in clean sandbox',
                  'Clippy static analysis and anti-fake-diff reviews',
                  'Strict git worktree attribution trailers',
                  'Cryptographic completion audit digests',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-[#F0EDE8]">
                    <CheckCircle2 className="w-4 h-4 text-[#3ECF8E] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl border border-[#222226] bg-[#111113] p-8">
              <div className="font-mono text-xs text-[#6B6965] uppercase tracking-wider mb-4">
                Verification Pipeline Sequence
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                {[
                  { step: '01', title: 'EXECUTE', sub: 'Sandboxed Tool' },
                  { step: '02', title: 'OBSERVE', sub: 'Spool Output' },
                  { step: '03', title: 'VERIFY', sub: 'Tests + Linters' },
                  { step: '04', title: 'CHECKPOINT', sub: 'Atomic SQLite' },
                ].map((s) => (
                  <div key={s.step} className="p-4 rounded-xl border border-[#222226] bg-[#18181B]/50">
                    <span className="font-mono text-xs text-[#E8523F] font-bold block">{s.step}</span>
                    <span className="font-bold text-sm text-[#F0EDE8] block mt-1">{s.title}</span>
                    <span className="text-[11px] text-[#A3A09B] block mt-0.5">{s.sub}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl border border-[#222226] bg-[#0A0A0B] text-xs font-mono text-[#A3A09B] flex items-center justify-between">
                <span>Completion Status:</span>
                <span className="text-[#3ECF8E] font-semibold">EVIDENCE REQUIRED [FAIL-CLOSED]</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          08 · CLI & TERMINAL EXPERIENCE
          ───────────────────────────────────────────────────────── */}
      <section id="cli" className="py-24 sm:py-32 border-b border-[#222226] bg-[#0D0D10]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
                OPERATOR SURFACE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0EDE8]">
                Terminal-Native Engineering.
              </h2>
              <p className="mt-3 text-[#A3A09B] text-base leading-relaxed max-w-xl">
                Real CLI commands, real diagnostic probes, and a Ratatui TUI cockpit built as a pure
                projection of authoritative SQLite runtime state.
              </p>
            </div>

            <Link
              href="/cli"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E8523F] hover:underline"
            >
              <span>Explore All CLI Commands</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <CliShowcase />
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          09 · DOCUMENTATION
          ───────────────────────────────────────────────────────── */}
      <section id="docs" className="py-24 sm:py-32 border-b border-[#222226] bg-[#0A0A0B]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
                TECHNICAL MANUAL
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F0EDE8]">
                Documentation &amp; Specifications
              </h2>
              <p className="mt-3 text-[#A3A09B] text-base leading-relaxed max-w-xl">
                Comprehensive technical manuals, subsystem documentation, and architectural invariants
                versioned directly with the runtime.
              </p>
            </div>

            <Link
              href="/docs"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E8523F] hover:underline"
            >
              <span>Open Complete Documentation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Getting Started',
                desc: 'Installation guides, API key configuration, and executing your first autonomous coding mission.',
                href: '/docs/quick-start',
                icon: Terminal,
              },
              {
                title: 'Architecture & Invariants',
                desc: 'Deep dives into the L0–L9 layered hierarchy, downward dependency rules, and persistence.',
                href: '/docs/architecture',
                icon: Layers,
              },
              {
                title: 'Security & ASVS L1',
                desc: '11 threat vectors, the 11-stage policy gate, and the NetworkDestinationPolicy SSRF defenses.',
                href: '/docs/security',
                icon: ShieldCheck,
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group p-8 rounded-2xl border border-[#222226] bg-[#111113] hover:border-[#E8523F]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <card.icon className="w-6 h-6 text-[#E8523F] mb-6" />
                  <h3 className="text-xl font-bold text-[#F0EDE8] group-hover:text-[#E8523F] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#A3A09B] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-mono font-medium text-[#A3A09B] group-hover:text-[#F0EDE8]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          10 · DOWNLOAD / RUN M31A LOCALLY
          ───────────────────────────────────────────────────────── */}
      <section id="download" className="py-24 sm:py-32 border-b border-[#222226] bg-[#0E0E10]">
        <Container>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
              INSTALLATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8]">
              Run M31A Locally.
            </h2>
            <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed">
              Install the standalone binary via automated one-liner scripts or download prebuilt
              release archives directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-xs font-mono text-[#A3A09B] uppercase tracking-wider mb-2">
                  Linux / macOS (One-Liner Install)
                </p>
                <CodeBlock language="bash" code={PRODUCT.installCurl} />
              </div>

              <div>
                <p className="text-xs font-mono text-[#A3A09B] uppercase tracking-wider mb-2">
                  Windows PowerShell (One-Liner Install)
                </p>
                <CodeBlock language="powershell" code={PRODUCT.installPowerShell} />
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-[#222226] bg-[#111113] p-6 sm:p-8">
              <h3 className="text-base font-bold text-[#F0EDE8] mb-4">
                Platform Qualification
              </h3>
              <div className="space-y-3 text-xs">
                {PLATFORMS_MATRIX.slice(0, 3).map((p) => (
                  <div key={p.targetTriple} className="flex items-center justify-between py-2 border-b border-[#222226]/50">
                    <div>
                      <span className="text-[#F0EDE8] font-medium block">{p.os} ({p.architecture})</span>
                      <span className="text-[#6B6965] font-mono text-[11px]">{p.targetTriple}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                      p.classification === 'SUPPORTED'
                        ? 'bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/20'
                        : 'bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/20'
                    }`}>
                      {p.classification}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/download"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white font-medium text-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>View All Platform Releases</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────
          11 · FINAL BRAND STATEMENT
          ───────────────────────────────────────────────────────── */}
      <section className="py-28 sm:py-36 bg-[#0A0A0B] text-center">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F0EDE8] leading-none mb-4">
              THE MODEL PROPOSES.
              <br />
              <span className="text-[#E8523F]">THE RUNTIME DECIDES.</span>
            </h2>

            <p className="font-mono text-sm uppercase tracking-widest text-[#6B6965] mt-6 mb-10">
              M31A — M31 AUTONOMOUS
            </p>

            <Link
              href="/download"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5" />
              <span>Download M31A</span>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

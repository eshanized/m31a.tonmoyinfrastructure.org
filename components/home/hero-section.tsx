'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/site/section';
import { GithubMark } from '@/components/site/logo';
import { PRODUCT, ARCHITECTURE_LAYERS, type ArchitectureLayerInfo } from '@/lib/m31a/product';
import { useLatestVersion } from '@/hooks/use-latest-version';

const OVERVIEW_LAYERS = ['L3', 'L1', 'L2', 'L7'] as const;

export function HeroSection() {
  const { displayVersion, releaseUrl } = useLatestVersion();
  const layers = OVERVIEW_LAYERS.map(
    (id) => ARCHITECTURE_LAYERS.find((layer) => layer.layer === id),
  ).filter((layer): layer is ArchitectureLayerInfo => layer !== undefined);

  return (
    <section className="relative isolate overflow-hidden border-b border-[#27272D]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_20%,rgba(232,82,63,0.12),transparent_42%),radial-gradient(ellipse_at_15%_65%,rgba(232,82,63,0.045),transparent_35%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        aria-hidden="true"
      />

      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="max-w-2xl">
            <a
              href={releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-[#34343B] bg-[#111114]/80 px-3.5 py-2 text-xs text-[#C3C1C0] transition-colors hover:border-[#E8523F]/55 hover:text-[#F5F0EB]"
            >
              <span className="inline-flex h-6 items-center rounded-full bg-[#E8523F]/12 px-2 font-mono font-semibold text-[#F07865]">
                {displayVersion}
              </span>
              <span className="truncate">M31A Autonomous Engineering Runtime</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#E8523F] transition-transform group-hover:translate-x-0.5" />
            </a>

            <p className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F07865]">
              Open-source autonomous AI coding agent
            </p>

            <h1 className="max-w-[15ch] text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#F5F0EB] sm:text-5xl lg:text-[4.2rem]">
              Terminal-native AI coding agent.
              <span className="mt-2 block bg-gradient-to-r from-[#F5F0EB] via-[#F5F0EB] to-[#E96B58] bg-clip-text pb-1 text-transparent">
                Linux-first. Runtime-governed.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#A9A6A5] sm:text-lg">
              M31A turns engineering goals into verified pull requests directly from your terminal. The model proposes changes; M31A’s Rust runtime confines execution in Linux cgroups v2, enforces non-bypassable policy gates, and requires compiler and test verification before work is accepted.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/download"
                className="group inline-flex min-h-12 items-center gap-2.5 rounded-lg bg-[#E8523F] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(232,82,63,0.16)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#F06450] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F07865]"
              >
                <Download className="h-4 w-4" />
                Get M31A
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/architecture"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-[#3A3A40] bg-[#101013]/70 px-5 py-3 text-sm font-medium text-[#F0EDE8] transition-colors hover:border-[#5A4744] hover:bg-[#181719]"
              >
                <BookOpen className="h-4 w-4 text-[#E96B58]" />
                Explore the architecture
              </Link>
              <a
                href={PRODUCT.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 px-2 py-3 text-sm font-medium text-[#AAA7A6] transition-colors hover:text-white"
              >
                <GithubMark className="h-4 w-4" />
                Source code
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-[#8E8E96]">
              <span className="text-[#65656E]">Evaluate:</span>
              <Link href="/alternatives" className="text-[#A9A6A5] hover:text-[#E8523F] transition-colors underline decoration-[#34343B] underline-offset-4">
                Alternatives Hub
              </Link>
              <span>·</span>
              <Link href="/alternatives/cursor" className="text-[#A9A6A5] hover:text-[#E8523F] transition-colors underline decoration-[#34343B] underline-offset-4">
                vs Cursor
              </Link>
              <span>·</span>
              <Link href="/alternatives/claude-code" className="text-[#A9A6A5] hover:text-[#E8523F] transition-colors underline decoration-[#34343B] underline-offset-4">
                vs Claude Code
              </Link>
              <span>·</span>
              <Link href="/terminal-coding-agent" className="text-[#A9A6A5] hover:text-[#E8523F] transition-colors underline decoration-[#34343B] underline-offset-4">
                Terminal Cockpit
              </Link>
              <span>·</span>
              <Link href="/ai-coding-agent-linux" className="text-[#A9A6A5] hover:text-[#E8523F] transition-colors underline decoration-[#34343B] underline-offset-4">
                Linux Confinement
              </Link>
            </div>

            <div className="mt-9 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-[#29292F] pt-6 sm:grid-cols-4">
              <Link href="/terminal-coding-agent" className="group">
                <p className="font-mono text-xs text-[#F07865] group-hover:underline">INTERFACE</p>
                <p className="mt-1.5 text-sm font-medium text-[#E8E4DF]">Ratatui TUI + CLI</p>
              </Link>
              <Link href="/security" className="group">
                <p className="font-mono text-xs text-[#F07865] group-hover:underline">GOVERNANCE</p>
                <p className="mt-1.5 text-sm font-medium text-[#E8E4DF]">11-stage policy gate</p>
              </Link>
              <Link href="/ai-coding-agent-linux" className="group">
                <p className="font-mono text-xs text-[#F07865] group-hover:underline">CONFINEMENT</p>
                <p className="mt-1.5 text-sm font-medium text-[#E8E4DF]">cgroups v2 + rlimits</p>
              </Link>
              <Link href="/free-ai-coding-agent" className="group">
                <p className="font-mono text-xs text-[#F07865] group-hover:underline">LICENSE</p>
                <p className="mt-1.5 text-sm font-medium text-[#E8E4DF]">MIT / Apache-2.0</p>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(232,82,63,0.09),transparent_68%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-[#34343A] bg-[#0B0C0F]/95 shadow-[0_30px_100px_rgba(0,0,0,0.32)]">
              <div className="flex items-center justify-between gap-4 border-b border-[#292A30] px-5 py-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F07865]">
                    System design
                  </p>
                  <h2 className="mt-1 text-sm font-semibold text-[#F4F0EB]">Authority is separated from intelligence.</h2>
                </div>
                <span className="rounded-md border border-[#37373D] px-2 py-1 font-mono text-[10px] text-[#8D8E96]">
                  ARCHITECTURE
                </span>
              </div>

              <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
                {layers.map((layer) => (
                  <div
                    key={layer.layer}
                    className={layer.layer === 'L1'
                      ? 'rounded-xl border border-[#E8523F]/55 bg-[#E8523F]/[0.075] p-4 transition-colors'
                      : 'rounded-xl border border-[#303137] bg-[#111216] p-4 transition-colors hover:border-[#49494F]'}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-semibold text-[#F07865]">
                        {layer.layer} / {layer.name}
                      </span>
                      {layer.layer === 'L1' && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#F3A094]">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          Policy boundary
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-medium text-[#ECE8E3]">{layer.subsystem}</p>
                    <p className="mt-1.5 text-xs leading-5 text-[#A4A2A4]">{layer.responsibilities}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#292A30] bg-[#0F1013] px-5 py-3">
                <p className="text-xs leading-5 text-[#85868E]">
                  Architectural reference built from M31A’s published layer definitions. This panel does not display runtime activity.
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#777982]">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#E96B58]" />
              <span>Explore the actual boundaries, subsystems, and source references.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

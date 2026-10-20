'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle2, Download, ExternalLink, GitBranch, ShieldCheck, Terminal } from 'lucide-react';
import { Container } from '@/components/site/section';
import { GithubMark } from '@/components/site/logo';
import { PRODUCT } from '@/lib/m31a/product';
import { useLatestVersion } from '@/hooks/use-latest-version';

const DEMO_STEPS = [
  { number: '01', title: 'Plan the change', detail: 'Break an engineering goal into reviewable tasks.', state: 'PLANNED' },
  { number: '02', title: 'Execute with boundaries', detail: 'Route tool actions through runtime policy.', state: 'GOVERNED' },
  { number: '03', title: 'Verify the result', detail: 'Require checks and evidence before completion.', state: 'VERIFIED' },
] as const;

export function HeroSection() {
  const { displayVersion, releaseUrl } = useLatestVersion();

  return (
    <section className="relative isolate overflow-hidden border-b border-[#27272D]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_20%,rgba(232,82,63,0.15),transparent_42%),radial-gradient(ellipse_at_15%_65%,rgba(232,82,63,0.055),transparent_35%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        aria-hidden="true"
      />

      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
          <div className="max-w-2xl">
            <a
              href={releaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-[#34343B] bg-[#111114]/80 px-3.5 py-2 text-xs text-[#C3C1C0] transition-colors hover:border-[#E8523F]/55 hover:text-[#F5F0EB]"
              aria-label={`Read the M31A ${displayVersion} release notes`}
            >
              <span className="inline-flex h-6 items-center rounded-full bg-[#E8523F]/12 px-2 font-mono font-semibold text-[#F07865]">
                {displayVersion}
              </span>
              <span className="truncate">Open-source autonomous engineering agent</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#E8523F] transition-transform group-hover:translate-x-0.5" />
            </a>

            <p className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F07865]">
              Built for engineers who want control
            </p>

            <h1 className="max-w-[15ch] text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#F5F0EB] sm:text-5xl lg:text-[4.15rem]">
              Give the agent a goal.
              <span className="mt-2 block bg-gradient-to-r from-[#F5F0EB] via-[#F5F0EB] to-[#E96B58] bg-clip-text pb-1 text-transparent">
                Keep the runtime in control.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#B7B3B1] sm:text-lg">
              M31A is an open-source, terminal-native coding agent. Its Rust runtime governs tool execution, keeps work isolated, and makes verification part of the completion path—so a model’s proposal is not treated as proof.
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
                href="/docs/quick-start"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-[#3A3A40] bg-[#101013]/70 px-5 py-3 text-sm font-medium text-[#F0EDE8] transition-colors hover:border-[#5A4744] hover:bg-[#181719]"
              >
                <BookOpen className="h-4 w-4 text-[#E96B58]" />
                Quick start
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
              <Link href="/alternatives" className="text-[#A9A6A5] underline decoration-[#34343B] underline-offset-4 transition-colors hover:text-[#E8523F]">Alternatives</Link>
              <span aria-hidden="true">·</span>
              <Link href="/alternatives/cursor" className="text-[#A9A6A5] underline decoration-[#34343B] underline-offset-4 transition-colors hover:text-[#E8523F]">vs Cursor</Link>
              <span aria-hidden="true">·</span>
              <Link href="/alternatives/claude-code" className="text-[#A9A6A5] underline decoration-[#34343B] underline-offset-4 transition-colors hover:text-[#E8523F]">vs Claude Code</Link>
              <span aria-hidden="true">·</span>
              <Link href="/terminal-coding-agent" className="text-[#A9A6A5] underline decoration-[#34343B] underline-offset-4 transition-colors hover:text-[#E8523F]">Terminal workflow</Link>
            </div>

            <div className="mt-9 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-[#29292F] pt-6 sm:grid-cols-4">
              <Link href="/terminal-coding-agent" className="group">
                <p className="font-mono text-xs text-[#F07865] group-hover:underline">INTERFACE</p>
                <p className="mt-1.5 text-sm font-medium text-[#E8E4DF]">Ratatui TUI + CLI</p>
              </Link>
              <Link href="/security" className="group">
                <p className="font-mono text-xs text-[#F07865] group-hover:underline">GOVERNANCE</p>
                <p className="mt-1.5 text-sm font-medium text-[#E8E4DF]">Policy-controlled actions</p>
              </Link>
              <Link href="/ai-coding-agent-linux" className="group">
                <p className="font-mono text-xs text-[#F07865] group-hover:underline">CONFINEMENT</p>
                <p className="mt-1.5 text-sm font-medium text-[#E8E4DF]">Platform-aware bounds</p>
              </Link>
              <Link href="/free-ai-coding-agent" className="group">
                <p className="font-mono text-xs text-[#F07865] group-hover:underline">SOFTWARE</p>
                <p className="mt-1.5 text-sm font-medium text-[#E8E4DF]">MIT licensed</p>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(232,82,63,0.14),transparent_68%)] blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-[#414047] bg-[#09090B]/95 shadow-[0_30px_100px_rgba(0,0,0,0.42)]">
              <div className="flex items-center justify-between gap-4 border-b border-[#292A30] bg-[#111114] px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F07865]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D6A65D]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#78D8A3]" />
                </div>
                <div className="min-w-0 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F07865]">Execution model</p>
                  <p className="mt-0.5 text-xs font-medium text-[#E8E4DF]">Proposal → policy → evidence</p>
                </div>
                <span className="rounded-md border border-[#37373D] px-2 py-1 font-mono text-[10px] text-[#A4A2A4]">OVERVIEW</span>
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8E8E96]">Mission workflow</p>
                    <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#F4F0EB] sm:text-xl">From engineering goal to verified result</h2>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#78D8A3]/30 bg-[#78D8A3]/[0.07] px-3 py-1.5 text-[11px] font-mono text-[#9AE6BC]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    GOVERNED FLOW
                  </span>
                </div>

                <div className="rounded-xl border border-[#34343B] bg-[#0E0E11] p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E8523F]/35 bg-[#E8523F]/10 text-[#F07865]">
                      <Terminal className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F07865]">Example objective</p>
                      <p className="mt-1 text-sm leading-6 text-[#E8E4DF]">“Find the regression, implement a fix, and prove it with tests.”</p>
                    </div>
                  </div>

                  <div className="my-4 ml-5 h-6 border-l border-dashed border-[#55525A]" aria-hidden="true" />

                  <ol className="space-y-3">
                    {DEMO_STEPS.map((step, index) => (
                      <li key={step.number} className="relative grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-start gap-3 rounded-lg border border-[#303037] bg-[#141418] p-3 sm:p-4">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#232126] font-mono text-xs font-semibold text-[#F07865]">{step.number}</span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[#F4F0EB]">{step.title}</p>
                          <p className="mt-1 text-xs leading-5 text-[#A9A6A5]">{step.detail}</p>
                        </div>
                        <span className={`mt-1 hidden rounded-md border px-2 py-1 font-mono text-[9px] tracking-wide sm:inline-flex ${index === 2 ? 'border-[#78D8A3]/30 text-[#9AE6BC]' : 'border-[#4A464B] text-[#BEB9BD'}`}>{step.state}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#303037] bg-[#111114] p-4">
                    <div className="flex items-center gap-2 text-[#F07865]">
                      <ShieldCheck className="h-4 w-4" />
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em]">Runtime authority</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#D4CFD1]">The model proposes an action. Runtime policy decides whether it may proceed.</p>
                  </div>
                  <div className="rounded-xl border border-[#303037] bg-[#111114] p-4">
                    <div className="flex items-center gap-2 text-[#F07865]">
                      <GitBranch className="h-4 w-4" />
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em]">Evidence before completion</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#D4CFD1]">Verification output—not a confident model response—determines whether work is accepted.</p>
                  </div>
                </div>
                <p className="mt-4 text-[11px] leading-5 text-[#777982]">
                  Conceptual product illustration. It explains the published workflow and does not represent a live M31A session or fabricated test output.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#292A30] bg-[#111114] px-4 py-3 sm:px-5">
                <span className="text-xs text-[#929098]">Inspect the implementation and release notes.</span>
                <a href={PRODUCT.repositoryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-[#F07865] transition-colors hover:text-[#F5F0EB]">
                  View source <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

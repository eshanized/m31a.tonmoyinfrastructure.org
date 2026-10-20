'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, Cpu, Coins, Scale, ExternalLink } from 'lucide-react';
import { Container } from '@/components/site/section';

const DISCOVERY_CARDS = [
  {
    badge: 'TERMINAL COCKPIT',
    badgeColor: 'text-[#E8523F]',
    title: 'Terminal-Native Autonomous Engineering',
    description:
      'Ratatui 0.30 interactive cockpit with RAII terminal raw-mode safety, petgraph task DAG visualizer, live tool spools, and headless UNIX pipeline execution.',
    href: '/terminal-coding-agent',
    cta: 'Explore Terminal Cockpit',
    icon: Terminal,
    tags: ['Ratatui 0.30', 'Headless CLI', 'Task DAG', 'Exit Codes 0–5'],
  },
  {
    badge: 'PLATFORM QUALIFICATION',
    badgeColor: 'text-[#3ECF8E]',
    title: 'Linux-First Kernel Confinement & Sandboxing',
    description:
      'Release-qualified on Linux x86_64. Tool dispatches are bounded by Linux cgroups v2 memory ceilings, POSIX rlimits, cmd.env_clear() secret stripping, and isolated Git worktrees.',
    href: '/ai-coding-agent-linux',
    cta: 'View Linux Subsystem Architecture',
    icon: Cpu,
    tags: ['cgroups v2', 'POSIX rlimits', 'env_clear()', 'Ubuntu/Debian/Fedora/RHEL'],
  },
  {
    badge: 'OPEN SOURCE ECONOMICS',
    badgeColor: 'text-[#EAB308]',
    title: 'Free & Open-Source Software vs. Inference Reality',
    description:
      '100% free software under dual MIT/Apache-2.0 licenses with zero seat subscriptions. Connect directly to NVIDIA NIM compute with client-side token and monetary dollar budget guards.',
    href: '/free-ai-coding-agent',
    cta: 'Understand True Software Freedom',
    icon: Coins,
    tags: ['MIT / Apache-2.0', '$0 Seat Fees', '--budget-tokens', '--budget-cost'],
  },
  {
    badge: 'COMPARISON MATRIX',
    badgeColor: 'text-[#E8523F]',
    title: 'AI Coding Agent Alternatives & Matchups',
    description:
      'Fact-checked architectural breakdown of desktop IDE forks, cloud CLI wrappers, and autonomous runtimes. Explore where M31A differs from Cursor, Claude Code, and OpenCode.',
    href: '/alternatives',
    cta: 'Browse Alternatives Directory',
    icon: Scale,
    sublinks: [
      { label: 'vs Cursor', href: '/alternatives/cursor' },
      { label: 'vs Claude Code', href: '/alternatives/claude-code' },
      { label: 'vs OpenCode', href: '/alternatives/opencode' },
    ],
    tags: ['Architecture Differences', 'Pricing Models', 'Sandboxing', 'Licensing'],
  },
];

export function DiscoveryPaths() {
  return (
    <section className="border-b border-[#27272D] py-20 sm:py-28 bg-[#09090C] relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(232,82,63,0.065)_0%,transparent_70%)] blur-3xl opacity-75"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="mb-14 max-w-3xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F07865]">
            Targeted discovery &amp; evaluation
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#F5F0EB] sm:text-4xl">
            Engineered for developers with specific constraints.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#A9A6A5] sm:text-base">
            Whether you need a terminal agent for remote Linux servers, an objective comparison with desktop IDEs like Cursor, or transparent accounting of open-source licensing vs. model inference costs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {DISCOVERY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#27272E] bg-[#111115] p-7 transition duration-200 hover:-translate-y-0.5 hover:border-[#E8523F]/45 hover:bg-[#141418] sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5 border-b border-[#222227] pb-4">
                    <span className={`font-mono text-xs font-bold tracking-wider uppercase ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E8523F]/20 bg-[#E8523F]/[0.08] text-[#F07865]">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#F5F0EB] group-hover:text-[#F07865] transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#A9A6A5]">
                    {card.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-[#2A2A32] bg-[#0E0E12] px-2 py-0.5 font-mono text-[11px] text-[#8E8E96]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {card.sublinks && (
                    <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#222227] pt-4 text-xs font-mono">
                      <span className="text-[#65656E]">Direct Matchups:</span>
                      {card.sublinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="rounded border border-[#303038] bg-[#16161C] px-2.5 py-1 text-[#C3C1C0] transition-colors hover:border-[#E8523F]/60 hover:text-white"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-5 border-t border-[#222227]">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#F07865] transition-transform group-hover:translate-x-0.5"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

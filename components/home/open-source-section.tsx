'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';
import { GithubMark } from '@/components/site/logo';
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, GitBranch, Terminal, Cpu, Database, Award } from 'lucide-react';
import Link from 'next/link';

type GitHubStats = {
  stars?: number;
  forks?: number;
  openIssues?: number;
};

export function OpenSourceSection() {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    let active = true;
    fetch('https://api.github.com/repos/eshanized/M31A', {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load repo stats');
        return res.json();
      })
      .then((data) => {
        if (active && typeof data.stargazers_count === 'number') {
          setStats({
            stars: data.stargazers_count,
            forks: data.forks_count,
            openIssues: data.open_issues_count,
          });
        }
      })
      .catch(() => {
        /* fallback to verified static data */
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="py-24 sm:py-32 border-b border-[#222227] bg-[#0C0C0E]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
              OPEN SOURCE &amp; VERIFIED SYSTEMS INTEGRITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F4F6] leading-tight">
              Engineered in the open.
            </h2>
            <p className="mt-4 text-[#9E9EA8] text-base sm:text-lg leading-relaxed">
              M31A is dual-licensed under MIT and Apache-2.0. Built with uncompromising standards
              for systems software, security policy, and deterministic execution.
            </p>
          </div>

          <a
            href={PRODUCT.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shrink-0"
          >
            <GithubMark className="w-4 h-4" />
            <span>View the source on GitHub →</span>
          </a>
        </div>

        {/* ── Technical Proof & Repository Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Core Repository Signals (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-[#27272E] bg-[#111115] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#222227]">
                <GithubMark className="w-7 h-7 text-[#F4F4F6]" />
                <div>
                  <h3 className="text-lg font-bold text-[#F4F4F6] tracking-tight">
                    eshanized / M31A
                  </h3>
                  <span className="text-xs font-mono text-[#E8523F]">
                    Production Release v{PRODUCT.version}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed mb-6">
                Single-crate high-assurance Rust repository. Built with strictly ordered module
                hierarchies, comprehensive ASVS L1 security controls, and non-bypassable policy gates.
              </p>

              {/* Verified Technical Metadata List */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-[#222227]/60">
                  <span className="text-[#65656E]">LANGUAGE:</span>
                  <span className="text-[#F4F4F6]">Rust {PRODUCT.rustVersion} ({PRODUCT.edition})</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#222227]/60">
                  <span className="text-[#65656E]">ARCHITECTURE:</span>
                  <span className="text-[#3ECF8E]">Single Crate (Zero Foreign)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#222227]/60">
                  <span className="text-[#65656E]">DUAL LICENSE:</span>
                  <span className="text-[#F4F4F6]">{PRODUCT.licenses.join(' / ')}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#222227]/60">
                  <span className="text-[#65656E]">PRIMARY TARGET:</span>
                  <span className="text-[#F4F4F6]">Linux x86_64 [Qualified]</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-[#65656E]">MAINTAINER:</span>
                  <span className="text-[#F4F4F6]">{PRODUCT.orgName}</span>
                </div>
              </div>
            </div>

            {/* GitHub Links */}
            <div className="mt-8 pt-6 border-t border-[#222227] flex items-center justify-between text-xs font-mono">
              <a
                href={PRODUCT.contributingUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#9E9EA8] hover:text-[#E8523F] transition-colors"
              >
                Contributing Guidelines ↗
              </a>
              <a
                href={PRODUCT.securityPolicyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#9E9EA8] hover:text-[#E8523F] transition-colors"
              >
                Security Policy ↗
              </a>
            </div>
          </div>

          {/* Right: Technical Proof Matrix (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-[#27272E] bg-[#111115] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#222227]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E8523F] font-semibold">
                  TECHNICAL ASSURANCE INVARIANTS
                </span>
                <span className="text-xs font-mono text-[#3ECF8E]">
                  100% Empirically Enforced
                </span>
              </div>

              {/* 6 Proof Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Cpu,
                    title: 'cgroups v2 Confinement',
                    desc: 'Hard RSS memory caps (default 512MB) and POSIX rlimits watchdog supervision prevent resource starvation.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Non-Bypassable Gates',
                    desc: '11 sequential evaluation stages across 10 authority layers. Layer 0 safety vetoes can never be weakened.',
                  },
                  {
                    icon: Database,
                    title: 'Two-Phase SQLite WAL',
                    desc: 'Verified task checkpoints commit atomically to local SQLite WAL storage. Zero risk of torn workspace writes.',
                  },
                  {
                    icon: Award,
                    title: 'SHA-256 Evidence Digests',
                    desc: 'Completion requires cryptographic proof from compiler exit codes and passing unit/integration test suites.',
                  },
                  {
                    icon: GitBranch,
                    title: 'Worktree Isolation',
                    desc: 'Mutations occur in isolated Git worktrees. Primary workspace branch is never edited directly without verification.',
                  },
                  {
                    icon: Terminal,
                    title: 'Terminal-Native Cockpit',
                    desc: 'Full Ratatui 0.30 interactive cockpit built as a pure projection of authoritative SQLite runtime state.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[#222227] bg-[#0A0A0C] flex flex-col justify-between"
                  >
                    <div>
                      <item.icon className="w-4 h-4 text-[#E8523F] mb-2" />
                      <h4 className="text-sm font-bold text-[#F4F4F6] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#9E9EA8] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#222227] flex items-center justify-between text-xs font-mono text-[#65656E]">
              <span>Deterministic Systems Invariants</span>
              <Link href="/docs/architecture" className="text-[#E8523F] hover:underline flex items-center gap-1">
                <span>Inspect Architectural Invariants</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

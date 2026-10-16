'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink, ShieldCheck, Database, GitBranch, Cpu, Lock, FileCheck2 } from 'lucide-react';
import { Container } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';
import { GithubMark } from '@/components/site/logo';
import { useLatestVersion } from '@/hooks/use-latest-version';

const ENGINEERING_FACTS = [
  {
    icon: ShieldCheck,
    title: 'Policy before side effects',
    detail: 'The runtime documents an 11-stage policy pipeline and a layered authority model.',
    href: '/security',
    link: 'Read the security model',
  },
  {
    icon: Cpu,
    title: 'Bounded process execution',
    detail: 'Linux cgroups v2, POSIX resource limits, and process supervision are part of the documented design.',
    href: '/architecture',
    link: 'Explore the architecture',
  },
  {
    icon: FileCheck2,
    title: 'Verification-oriented completion',
    detail: 'Compiler and test evidence, diff checks, and SHA-256 evidence digests are described in the runtime documentation.',
    href: '/docs',
    link: 'Read the documentation',
  },
  {
    icon: Database,
    title: 'Crash-aware persistence',
    detail: 'SQLite WAL storage and staged checkpoints support recovery and inspection of runtime state.',
    href: '/docs',
    link: 'Explore runtime concepts',
  },
];

export function OpenSourceSection() {
  const { displayVersion, releaseUrl } = useLatestVersion();

  return (
    <section className="border-b border-[#27272D] py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F07865]">
              Inspectable by design
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F0EB] sm:text-4xl">
              The product is the source—not a staged demo.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#A9A6A5] sm:text-base">
              Explore M31A through its repository, release notes, architecture references, and security documentation. This website explains the design; it does not pretend to run the agent in your browser.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={PRODUCT.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#F5F0EB] px-4 py-2.5 text-sm font-semibold text-[#111114] transition-colors hover:bg-white"
              >
                <GithubMark className="h-4 w-4" />
                Read the source
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={releaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#3A3A40] px-4 py-2.5 text-sm font-medium text-[#ECE8E3] transition-colors hover:border-[#E8523F]/60"
              >
                {displayVersion} release notes
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#29292F] pt-5 text-xs text-[#8E8E96]">
              <span className="inline-flex items-center gap-1.5"><GitBranch className="h-3.5 w-3.5 text-[#F07865]" />Open source</span>
              <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-[#F07865]" />MIT</span>
              <span className="inline-flex items-center gap-1.5"><ExternalLink className="h-3.5 w-3.5 text-[#F07865]" />Linked to primary sources</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {ENGINEERING_FACTS.map((fact) => {
              const Icon = fact.icon;
              return (
                <Link
                  key={fact.title}
                  href={fact.href}
                  className="group flex min-h-48 flex-col rounded-xl border border-[#303137] bg-[#101114] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#E8523F]/45 hover:bg-[#141417] sm:p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8523F]/20 bg-[#E8523F]/[0.08] text-[#F07865]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-[#F5F0EB]">{fact.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[#A9A6A5]">{fact.detail}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#F07865]">
                    {fact.link}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

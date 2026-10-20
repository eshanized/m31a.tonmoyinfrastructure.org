import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/m31a/seo';
import Link from 'next/link';
import { ArrowRight, BookOpen, Terminal, Layers, ShieldCheck, Wrench, GitBranch, Cpu, Database } from 'lucide-react';
import { Container } from '@/components/site/section';
import { DOC_SECTIONS, DOCS, PRODUCT } from '@/lib/m31a/product';
import { generateBreadcrumbJsonLd } from '@/lib/seo/metadata';

const SECTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'getting-started': Terminal,
  'concepts': Layers,
  'reference': BookOpen,
};

export const metadata: Metadata = createPageMetadata({
  title: "Documentation and Developer Guide",
  description: "Install and configure M31A, learn the terminal workflow, and reference its architecture, security model, tools, policies, and CLI commands.",
  path: "/docs",
  keywords: ['M31A documentation', 'coding agent manual', 'agent runtime docs', 'policy gate documentation', 'CLI docs'],
  absoluteTitle: false,
});

export default function DocsIndexPage() {
  const breadcrumbJson = generateBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Documentation', path: '/docs' },
  ]);

  return (
    <div className="py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      {/* Header */}
      <div className="border-b border-[#222226] pb-12 sm:pb-16 mb-16">
        <Container>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
            DOCUMENTATION &amp; SPECIFICATIONS
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-3xl">
            The Runtime Technical Manual.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-2xl">
            {DOCS.length} architectural chapters across getting started, system concepts, and the formal
            reference manual. Versioned with M31A v{PRODUCT.version}.
          </p>
        </Container>
      </div>

      <Container>
        <div className="space-y-16">
          {DOC_SECTIONS.map((section) => {
            const pages = DOCS.filter((d) => d.section === section.id).sort((a, b) => a.order - b.order);
            const Icon = SECTION_ICONS[section.id] ?? BookOpen;

            return (
              <div key={section.id}>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#222226]">
                  <Icon className="w-5 h-5 text-[#E8523F]" />
                  <h2 className="text-xl font-bold text-[#F0EDE8] tracking-tight">
                    {section.label}
                  </h2>
                  <span className="text-xs font-mono text-[#6B6965]">
                    ({pages.length} articles)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pages.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/docs/${page.slug}`}
                      className="group p-6 rounded-xl border border-[#222226] bg-[#111113] hover:border-[#E8523F]/50 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[11px] font-mono text-[#6B6965] uppercase block mb-1">
                          0{page.order} {'//'} {section.id}
                        </span>
                        <h3 className="text-base font-bold text-[#F0EDE8] group-hover:text-[#E8523F] transition-colors">
                          {page.title}
                        </h3>
                        <p className="text-xs text-[#A3A09B] leading-relaxed mt-2">
                          {page.description}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center gap-1.5 text-xs font-mono font-medium text-[#A3A09B] group-hover:text-[#F0EDE8]">
                        <span>Read chapter</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Runtime Intent & Discovery Pathways */}
        <div className="mt-16 pt-12 border-t border-[#222226]">
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-2">
              SPECIALIZED RUNTIME GUIDES
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#F0EDE8]">
              Workflow Guides &amp; Ecosystem Comparisons
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <Link
              href="/terminal-coding-agent"
              className="p-5 rounded-xl border border-[#222226] bg-[#111113] hover:border-[#E8523F]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[#E8523F] font-bold block mb-1">TERMINAL COCKPIT</span>
                <p className="font-sans font-medium text-[#F0EDE8] group-hover:text-[#E8523F] transition-colors mb-1">
                  Ratatui Cockpit Architecture
                </p>
                <p className="font-sans text-[#A3A09B] text-[11px] leading-relaxed">
                  9 interactive TUI surfaces, raw mode restoration, and headless automation.
                </p>
              </div>
              <span className="mt-4 text-[#E8523F] inline-flex items-center gap-1">Read Guide →</span>
            </Link>

            <Link
              href="/ai-coding-agent-linux"
              className="p-5 rounded-xl border border-[#222226] bg-[#111113] hover:border-[#3ECF8E]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[#3ECF8E] font-bold block mb-1">LINUX CONFINEMENT</span>
                <p className="font-sans font-medium text-[#F0EDE8] group-hover:text-[#3ECF8E] transition-colors mb-1">
                  cgroups v2 &amp; Process Bounds
                </p>
                <p className="font-sans text-[#A3A09B] text-[11px] leading-relaxed">
                  RSS memory ceilings, environment stripping, and distribution support.
                </p>
              </div>
              <span className="mt-4 text-[#3ECF8E] inline-flex items-center gap-1">Read Guide →</span>
            </Link>

            <Link
              href="/free-ai-coding-agent"
              className="p-5 rounded-xl border border-[#222226] bg-[#111113] hover:border-[#EAB308]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[#EAB308] font-bold block mb-1">INFERENCE ECONOMICS</span>
                <p className="font-sans font-medium text-[#F0EDE8] group-hover:text-[#EAB308] transition-colors mb-1">
                  Software Freedom vs Compute
                </p>
                <p className="font-sans text-[#A3A09B] text-[11px] leading-relaxed">
                  Dual MIT/Apache-2.0 runtime, $0 seat fees, and token/dollar budget caps.
                </p>
              </div>
              <span className="mt-4 text-[#EAB308] inline-flex items-center gap-1">Read Guide →</span>
            </Link>

            <Link
              href="/alternatives"
              className="p-5 rounded-xl border border-[#222226] bg-[#111113] hover:border-[#E8523F]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[#E8523F] font-bold block mb-1">ALTERNATIVES MATRIX</span>
                <p className="font-sans font-medium text-[#F0EDE8] group-hover:text-[#E8523F] transition-colors mb-1">
                  Compare Coding Assistants
                </p>
                <p className="font-sans text-[#A3A09B] text-[11px] leading-relaxed">
                  Cursor vs Claude Code vs OpenCode vs M31A architecture comparison.
                </p>
              </div>
              <span className="mt-4 text-[#E8523F] inline-flex items-center gap-1">Compare Matrix →</span>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-20 pt-8 border-t border-[#222226] flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/docs/introduction"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white text-xs font-medium transition-colors"
          >
            <span>Start with Introduction</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/cli"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#A3A09B] hover:text-[#F0EDE8] transition-colors"
          >
            <span>View CLI Command Register</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

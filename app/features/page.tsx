import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Bot,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Wrench,
  GitBranch,
  Workflow,
  Database,
  Activity,
  History,
  Network,
  Radio,
  GitFork,
  Lock,
  Sparkles,
  Layers,
  Cpu,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Section, Container, SectionHeader, StatusBadge } from '@/components/site/section';
import { FEATURES, TOOLS_CATALOG, PRODUCT } from '@/lib/m31a/product';

export const metadata: Metadata = {
  title: 'M31A Features — Architecture & Capabilities',
  description:
    'Comprehensive feature matrix for M31 Autonomous: 12-stage autonomy loop, non-bypassable policy gates, 28 core tools, process confinement, and two-phase atomic checkpoints.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Wrench,
  GitBranch,
  Workflow,
  Database,
  Activity,
  History,
  Network,
  Radio,
  GitFork,
  Lock,
  Sparkles,
  Layers,
  Cpu,
};

export default function FeaturesPage() {
  const categories = Array.from(new Set(FEATURES.map((f) => f.category)));

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-glow" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Capabilities &amp; Subsystems"
            title="The M31A Feature Matrix"
            description="Every capability presented here is verified against the M31A repository implementation. Status tags reflect current codebase evidence — not promotional speculation."
          />
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              17 Verified Subsystems
            </span>
            <span className="text-border">│</span>
            <span>28 Core Typed Tools</span>
            <span className="text-border">│</span>
            <span>15 Capability Families</span>
          </div>
        </Container>
      </Section>

      {/* Categorized Features */}
      {categories.map((category) => (
        <Section key={category} className="border-b border-border/40 py-12">
          <Container>
            <div className="flex items-center justify-between mb-6 border-b border-border/40 pb-3">
              <h3 className="font-mono text-sm uppercase tracking-wider text-primary font-bold">
                {category} Subsystems
              </h3>
              <span className="text-xs font-mono text-muted-foreground">
                {FEATURES.filter((f) => f.category === category).length} capabilities
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.filter((f) => f.category === category).map((feature) => {
                const Icon = iconMap[feature.icon] ?? Cpu;
                return (
                  <div
                    key={feature.id}
                    className="group rounded-xl border border-border/70 bg-card/40 p-6 transition-all hover:border-primary/40 hover:bg-card/70 flex flex-col justify-between"
                  >
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <StatusBadge status={feature.status} />
                      </div>
                      <h4 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                      {feature.details && (
                        <p className="mt-3 border-t border-border/40 pt-3 text-[11px] text-zinc-400 leading-relaxed font-sans">
                          {feature.details}
                        </p>
                      )}
                    </div>

                    {feature.sourceRef && (
                      <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-primary/80">
                        <span className="truncate">{feature.sourceRef}</span>
                        <a
                          href={`https://github.com/eshanized/M31A/blob/master/${feature.sourceRef.split(',')[0]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          <ExternalLink className="h-3 w-3 shrink-0 ml-1" />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      ))}

      {/* 28 Core Tools Catalog Section */}
      <Section className="border-b border-border/40">
        <Container>
          <SectionHeader
            eyebrow="Capability Catalog"
            title="The 28 Core Typed Tools"
            description="Every model tool invocation executes through strict parameter schema validation (schemars), policy evaluation, two-phase budget reservation, OS sandboxing, and output redaction."
          />

          <div className="mt-8 overflow-x-auto rounded-xl border border-border shadow-lg">
            <table className="w-full text-xs">
              <thead className="bg-[#11141b] text-muted-foreground border-b border-border font-mono">
                <tr>
                  <th className="px-4 py-3 text-left">Tool Name</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Risk Class</th>
                  <th className="px-4 py-3 text-left">Parameter Signature</th>
                  <th className="px-4 py-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 bg-[#0c0e12]">
                {TOOLS_CATALOG.map((tool) => (
                  <tr key={tool.id} className="hover:bg-secondary/20 transition-colors">
                    <td className="px-4 py-3 font-mono font-bold text-foreground">{tool.name}</td>
                    <td className="px-4 py-3 text-muted-foreground font-mono">{tool.category}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                          tool.riskClass === 'ReadOnly'
                            ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                            : tool.riskClass === 'WorkspaceMutation'
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                            : 'bg-red-500/10 text-red-400 border-red-500/30'
                        }`}
                      >
                        {tool.riskClass}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-zinc-400 text-[11px] max-w-xs truncate">
                      {tool.parameters}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{tool.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/docs/tools"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-mono hover:underline"
            >
              <span>Read complete tool schemas and error taxonomy in documentation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}

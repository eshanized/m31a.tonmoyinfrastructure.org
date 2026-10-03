import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  BookOpen,
  Terminal,
  Cpu,
  ShieldCheck,
  Wrench,
  GitBranch,
  CheckCircle2,
  Monitor,
  Settings2,
  Lock,
  Workflow,
  Radio,
  Layers,
  Database,
  Github,
} from 'lucide-react';
import { Section, Container, SectionHeader } from '@/components/site/section';
import { DOCS, DOC_SECTIONS } from '@/lib/m31a/product';

export const metadata: Metadata = {
  title: 'M31A Documentation — Runtime Guides & References',
  description:
    'Official documentation for M31 Autonomous (M31A): getting started, runtime architecture, 12-stage autonomy loop, 28 core tools, policy gates, verification, and CLI reference.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  introduction: FileText,
  installation: Terminal,
  'quick-start': BookOpen,
  'platform-support': Monitor,
  concepts: Cpu,
  architecture: Layers,
  'autonomy-loop': Workflow,
  'agent-swarm': Cpu,
  policies: ShieldCheck,
  tools: Wrench,
  models: Radio,
  'git-worktree': GitBranch,
  verification: CheckCircle2,
  checkpoints: Database,
  tui: Terminal,
  configuration: Settings2,
  'cli-reference': Terminal,
  security: Lock,
  contributing: Github,
};

export default function DocsIndexPage() {
  return (
    <>
      <Section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-glow" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Documentation Hub"
            title="M31A Systems Documentation"
            description="Authoritative operational guides, runtime architecture specifications, and API/CLI references for M31 Autonomous."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-12">
            {DOC_SECTIONS.map((section) => {
              const pages = DOCS.filter((d) => d.section === section.id).sort((a, b) => a.order - b.order);
              return (
                <div key={section.id}>
                  <h2 className="mb-4 font-mono text-sm uppercase tracking-wider text-primary font-bold">
                    {section.label}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {pages.map((page) => {
                      const Icon = iconMap[page.slug] ?? FileText;
                      return (
                        <Link
                          key={page.slug}
                          href={`/docs/${page.slug}`}
                          className="group rounded-xl border border-border bg-card/40 p-5 transition-all hover:border-primary/40 hover:bg-card/70"
                        >
                          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                            <Icon className="h-4.5 w-4.5 text-primary" />
                          </div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {page.title}
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {page.description}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}

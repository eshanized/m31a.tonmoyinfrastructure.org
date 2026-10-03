import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Radio,
  ExternalLink,
  GitBranch,
  Terminal,
  Database,
} from 'lucide-react';
import { Section, Container, SectionHeader } from '@/components/site/section';
import { InteractiveSecurityPipeline } from '@/components/security/interactive-security-pipeline';
import { PRODUCT } from '@/lib/m31a/product';

export const metadata: Metadata = {
  title: 'M31A Security — Non-Bypassable Policy Gates & ASVS L1',
  description:
    'Technical deep-dive into M31A security architecture: 11-stage policy gate, 11 ASVS L1 threat mitigations, 5-tier secret redaction, and SSRF prevention.',
};

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-glow" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Security Architecture"
            title="The Model Proposes. The Runtime Decides."
            description="Large language models are treated as untrusted reasoning components. Security boundaries live strictly below model intent and above operating system side effects."
          />
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="text-primary font-bold">11-Stage Policy Gate</span>
            <span className="text-border">│</span>
            <span>10-Tier Authority Stack</span>
            <span className="text-border">│</span>
            <span>OWASP ASVS L1 Hardened</span>
            <span className="text-border">│</span>
            <a
              href="https://github.com/eshanized/M31A/blob/master/docs/subsystems/SECURITY.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1"
            >
              <span>docs/subsystems/SECURITY.md</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </Container>
      </Section>

      {/* Central Security Principle */}
      <Section className="border-b border-border/40">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/30 bg-primary/5 p-8 sm:p-12 text-center shadow-xl">
            <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              THE MODEL PROPOSES.
              <br />
              THE RUNTIME DECIDES.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              This is not a marketing tagline. It is an architectural invariant enforced in code.
              Every file write, child process invocation, Git operation, and outbound network request passes through deterministic runtime governance before reaching the host.
            </p>
          </div>
        </Container>
      </Section>

      {/* Interactive 6-Stage Execution Pipeline & Threat Explorer */}
      <Section className="border-b border-border/40">
        <Container>
          <InteractiveSecurityPipeline />
        </Container>
      </Section>

      {/* Defense in Depth: Confinement, Redaction, Worktrees */}
      <Section className="border-b border-border/40">
        <Container>
          <SectionHeader
            eyebrow="Defense in Depth"
            title="Multi-Layered OS &amp; Network Confinement"
            description="Zero-trust isolation enforced across operating system sandboxes, output redaction boundaries, and Git worktrees."
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-[#0d1016] p-6 space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono font-bold text-sm">
                <Cpu className="h-4 w-4" />
                <span>Process Confinement</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Child processes execute under Linux cgroups v2 (<code className="text-foreground font-mono">cpu.max</code>, <code className="text-foreground font-mono">memory.max</code>) and POSIX rlimits. Subprocesses execute with an empty environment via <code className="text-foreground font-mono">env_clear()</code>, blocking <code className="text-foreground font-mono">LD_PRELOAD</code> and host tokens.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-[#0d1016] p-6 space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono font-bold text-sm">
                <Lock className="h-4 w-4" />
                <span>5-Tier Secret Redactor</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Deterministic scrubbing pipeline strips API keys (NVIDIA, AWS, GitHub, OpenAI), Bearer JWTs, database URLs with passwords, and RSA private keys before bytes hit SQLite, telemetry streams, or TUI display buffers.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-[#0d1016] p-6 space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono font-bold text-sm">
                <Radio className="h-4 w-4" />
                <span>Network SSRF Defense</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <code className="text-foreground font-mono text-[11px]">NetworkDestinationPolicy</code> blocks loopback, private subnets (RFC 1918), and cloud metadata (<code className="text-foreground font-mono">169.254.169.254</code>). Asynchronous DNS pre-validation and step-by-step redirect validation prevent DNS rebinding.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Precision in Security Claims Disclaimer */}
      <Section>
        <Container>
          <div className="rounded-xl border border-amber-500/30 bg-amber-950/15 p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-3 text-xs leading-relaxed">
                <h3 className="text-sm font-bold text-foreground">Precision in Security Claims</h3>
                <p className="text-muted-foreground">
                  M31A does <strong>NOT</strong> claim to be &quot;completely safe&quot;, &quot;zero risk&quot;, or &quot;unhackable&quot;. No software system operating on arbitrary codebases can make such absolute guarantees.
                </p>
                <p className="text-muted-foreground">
                  Instead, M31A drastically reduces attack surfaces by eliminating blind trust in LLM outputs, enforcing non-bypassable policy gates, isolating mutations in Git worktrees, bounding resources via OS primitives, and verifying evidence before completion.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <a
                    href={PRODUCT.securityReportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <span>Report a Vulnerability via GitHub Advisories</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <Link href="/docs/security" className="text-primary hover:underline">
                    Read Security Specification →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

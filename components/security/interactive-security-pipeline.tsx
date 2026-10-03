'use client';

import { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  Radio,
  ExternalLink,
  ChevronRight,
  Database,
  Terminal,
} from 'lucide-react';
import { PRODUCT } from '@/lib/m31a/product';

interface SecurityStage {
  id: string;
  name: string;
  decisionRule: string;
  subsystem: string;
  codeSource: string;
  description: string;
  invariants: string[];
}

const PIPELINE_STAGES: SecurityStage[] = [
  {
    id: 'stage-1',
    name: '1. Model Proposal Ingestion',
    decisionRule: 'Treat model intent as untrusted candidate reasoning',
    subsystem: 'L3 Intelligence Boundary',
    codeSource: 'src/model/provider/mod.rs',
    description: 'LLM emits structured tool call proposal (JSON). The runtime does NOT execute directly. Input parameters are unvalidated candidates.',
    invariants: [
      'Proposals are immutable candidates until authorized',
      'Untrusted evidence quarantined in XML TrustEnvelopes with escaped attributes',
      'No environment variables or host paths are bound at this stage',
    ],
  },
  {
    id: 'stage-2',
    name: '2. Path Canonicalization & Boundary Check',
    decisionRule: 'Strictly confine access to workspace root',
    subsystem: 'L2 LocalFileSystemProvider',
    codeSource: 'src/tools/mod.rs',
    description: 'Target paths are canonicalized, resolving symlinks and eliminating traversal sequences (../). Any path resolving outside workspace root fails closed immediately.',
    invariants: [
      'Eliminates symlink directory escapes and null-byte injection',
      'Blocks access to sensitive paths (/.ssh, /.aws, /.env, /etc)',
      'Fails closed with PermissionDenied on violation',
    ],
  },
  {
    id: 'stage-3',
    name: '3. 11-Stage Policy Gate Evaluation',
    decisionRule: 'Higher authority always wins. Lower layers cannot weaken vetoes.',
    subsystem: 'L1 Security & Policy Engine',
    codeSource: 'src/policy/matcher.rs',
    description: 'The proposed tool call traverses the 10-tier authority stack (Layer 0 BuiltInSafety to Layer 9 DeveloperDefaults). Computes ALLOW, DENY, ASK, or ESCALATE.',
    invariants: [
      'Layer 0 built-in safety rules can never be overridden or disabled',
      'Unattended execution strictly converts ASK to DENY fail-closed',
      'Egress requests evaluated against NetworkDestinationPolicy (SSRF defense)',
    ],
  },
  {
    id: 'stage-4',
    name: '4. Capability Check & Budget Pre-Allocation',
    decisionRule: 'Admission denied if quota or capability is unavailable',
    subsystem: 'L8 Autonomy Controller & BudgetEnforcer',
    codeSource: 'docs/subsystems/AUTONOMY.md',
    description: 'The agent role is verified to possess the declared capability. Two-phase budget reservation pre-allocates estimated tokens, memory, and step quotas before execution.',
    invariants: [
      'Eliminates race conditions across concurrent agent dispatches',
      'Hard bounds enforced on 10 resource dimensions',
      'If budget exhausted, execution transitions fail-fast without side effects',
    ],
  },
  {
    id: 'stage-5',
    name: '5. Sandboxed Tool Execution',
    decisionRule: 'Execute within strict OS confinement with clean environment',
    subsystem: 'L2 Process Confinement & Sandbox',
    codeSource: 'src/sandbox/limits.rs',
    description: 'Child processes execute via direct execve with env_clear(), dropping inherited host secrets. Clamped by Linux cgroups v2 (cpu.max, memory.max) and POSIX rlimits.',
    invariants: [
      'Independent process groups (setpgid) prevent orphan zombie processes',
      'SecretRedactor 5-tier pipeline scrubs API keys from output streams',
      'Stage 10 output contract disambiguates raw vs diagnostic vs audit evidence',
    ],
  },
  {
    id: 'stage-6',
    name: '6. Continuous Verification Gate',
    decisionRule: 'No completion confirmed without cryptographic evidence',
    subsystem: 'L7 Verification Engine',
    codeSource: 'src/verification/gate.rs',
    description: 'Executes automated test suites, typecheckers, linters, and anti-fake-diff reviews. Generates SHA-256 evidence digests required for completion gate clearance.',
    invariants: [
      'Rejects premature completions and unverified work',
      'Detects todo!() and unimplemented!() pattern bypasses',
      'All verification evidence committed with atomic two-phase checkpoints',
    ],
  },
];

export interface ThreatVector {
  id: string;
  vector: string;
  category: string;
  asvs: string;
  attackScenario: string;
  runtimeMitigation: string;
}

export const THREAT_VECTORS: ThreatVector[] = [
  {
    id: 'v1',
    vector: 'Vector 1: Path Traversal & Escape',
    category: 'Elevation of Privilege',
    asvs: 'V12.3 File Integrity',
    attackScenario: 'Model proposes ../../etc/shadow or creates symlinks to read host files outside workspace.',
    runtimeMitigation: 'LocalFileSystemProvider canonicalizes paths; strictly forbids traversal escapes, redundant dots, and symlinks resolving outside workspace root.',
  },
  {
    id: 'v2',
    vector: 'Vector 2: Command Injection & Environment Leakage',
    category: 'Tampering',
    asvs: 'V5.3 Command Injection',
    attackScenario: 'Malicious tool argument chains shell operators (; rm -rf /) or injects LD_PRELOAD.',
    runtimeMitigation: 'Direct execve execution (no shell parsing). EnvironmentBuilder strips dangerous loader hooks and environment secrets via env_clear().',
  },
  {
    id: 'v3',
    vector: 'Vector 3: Secret Leakage in Logs & Displays',
    category: 'Information Disclosure',
    asvs: 'V8.3 Sensitive Data',
    attackScenario: 'Model responses, tool stdout, or errors leak API keys, JWTs, or private keys into database or TUI.',
    runtimeMitigation: 'SecretRedactor 5-tier deterministic scrubbing pipeline (nvapi-*, ghp_*, sk-*, AKIA*, JWT, private keys) and sanitize_error prevent secret storage.',
  },
  {
    id: 'v4',
    vector: 'Vector 4: Prompt Injection & XML Smuggling',
    category: 'Tampering',
    asvs: 'V5.1 Input Validation',
    attackScenario: 'Untrusted repository files contain </untrusted_evidence> tags to hijack model reasoning context.',
    runtimeMitigation: 'TrustEnvelope::wrap_untrusted encapsulates data in XML boundaries with strict attribute escaping and tag neutralization (&lt;/...&gt;).',
  },
  {
    id: 'v5',
    vector: 'Vector 5: Unattended ASK Escalation',
    category: 'Elevation of Privilege',
    asvs: 'V4.1 Access Control',
    attackScenario: 'Headless CI run encounters interactive ASK policy and hangs or defaults to permissive execution.',
    runtimeMitigation: 'ApprovalCoordinator enforces fail-closed semantics: unresolved ASK requests strictly convert to DENY without executing side effects.',
  },
  {
    id: 'v6',
    vector: 'Vector 6: Malicious Plugin Tool Dispatches',
    category: 'Elevation of Privilege',
    asvs: 'V14.2 Component Security',
    attackScenario: 'Third-party plugin tool attempts to bypass policy gates and modify files directly.',
    runtimeMitigation: 'PluginToolAdapter subordinates all plugin dispatches under PolicyGate; plugins cannot execute without passing policy checks.',
  },
  {
    id: 'v7',
    vector: 'Vector 7: Terminal Escape Injection',
    category: 'Tampering',
    asvs: 'V5.2 Output Sanitization',
    attackScenario: 'Adversarial tool output emits ANSI cursor repositioning or OSC sequences to hide actions or deceive operator.',
    runtimeMitigation: 'sanitize_terminal_text strips non-printable control bytes, ANSI cursor moves, and OSC window title escapes before TUI rendering.',
  },
  {
    id: 'v8',
    vector: 'Vector 8: Process Cancellation & Zombie Leaks',
    category: 'Denial of Service',
    asvs: 'V8.1 Resource Management',
    attackScenario: 'Aborted mission leaves orphan compiler processes or background forkbombs consuming system resources.',
    runtimeMitigation: 'ProcessTreeController sets isolated process groups (setpgid), escalating SIGTERM -> SIGKILL to negative PID -pgid.',
  },
  {
    id: 'v9',
    vector: 'Vector 9: Checkpoint Tampering & State Corruption',
    category: 'Tampering',
    asvs: 'V14.1 Integrity Controls',
    attackScenario: 'Crash recovery encounters truncated SQLite WAL, missing artifacts, or forged manifest files.',
    runtimeMitigation: 'CheckpointIntegrityValidator verifies content-addressed SHA-256 digests; fails closed to Corrupt or Ambiguous instead of resuming blindly.',
  },
  {
    id: 'v10',
    vector: 'Vector 10: Future Schema Version Hijacking',
    category: 'Tampering',
    asvs: 'V14.1 Integrity Controls',
    attackScenario: 'Ingested configs declare future schema versions (e.g. version = 999) to exploit parser fallback gaps.',
    runtimeMitigation: 'Parsers reject unrecognized or future schema versions immediately (VersionTooNew), preventing schema tampering.',
  },
  {
    id: 'v11',
    vector: 'Vector 11: Resource Exhaustion & DoS',
    category: 'Denial of Service',
    asvs: 'V8.1 Resource Management',
    attackScenario: 'Runaway tool process emits gigabytes of output or infinite inference drains budget.',
    runtimeMitigation: 'StreamingQuotaWriter enforces single-artifact and cumulative mission byte limits; BudgetEnforcer enforces hard limits on 10 dimensions.',
  },
];

export function InteractiveSecurityPipeline() {
  const [selectedStage, setSelectedStage] = useState<SecurityStage>(PIPELINE_STAGES[2]); // Default to Policy Gate
  const [selectedThreat, setSelectedThreat] = useState<ThreatVector>(THREAT_VECTORS[0]);

  return (
    <div className="space-y-12">
      {/* 6-Stage Interactive Execution Pipeline */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-primary">Runtime Authority Chain</span>
          <h3 className="text-2xl font-bold tracking-tight text-foreground mt-1">
            The Non-Bypassable Execution Gate
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Every proposed side effect must successfully traverse all 6 sequential stages. Any failure immediately aborts fail-closed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
          {PIPELINE_STAGES.map((stage, idx) => {
            const isSelected = selectedStage.id === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setSelectedStage(stage)}
                className={`p-3 rounded-lg border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-primary bg-primary/10 shadow-lg shadow-primary/5 ring-1 ring-primary/40'
                    : 'border-border/60 bg-card/40 hover:bg-card/80 hover:border-border'
                }`}
              >
                <div>
                  <div className="font-mono text-[10px] text-muted-foreground mb-1">STAGE 0{idx + 1}</div>
                  <div className="font-semibold text-xs text-foreground line-clamp-2">{stage.name.replace(/^\d+\.\s*/, '')}</div>
                </div>
                <div className="mt-3 pt-2 border-t border-border/40 text-[10px] font-mono text-primary flex items-center justify-between">
                  <span>{isSelected ? 'ACTIVE' : 'INSPECT'}</span>
                  <span>→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="mt-4 rounded-xl border border-primary/30 bg-[#0d1016] p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
            <div>
              <span className="font-mono text-xs text-primary font-bold">{selectedStage.subsystem}</span>
              <h4 className="text-lg font-bold text-foreground">{selectedStage.name}</h4>
            </div>
            <div className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1 rounded border border-border">
              Source: <span className="text-foreground">{selectedStage.codeSource}</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-mono uppercase text-muted-foreground mb-1">Decision Rule</div>
              <div className="text-sm font-semibold text-foreground mb-3">{selectedStage.decisionRule}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{selectedStage.description}</p>
            </div>

            <div className="bg-[#11141b] rounded-lg p-4 border border-border/60">
              <div className="text-xs font-mono uppercase text-primary mb-2 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" />
                <span>Enforced Security Invariants</span>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {selectedStage.invariants.map((inv, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>{inv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ASVS L1 Threat Matrix Explorer */}
      <div className="pt-8 border-t border-border/60">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-primary">Threat Model &amp; Compliance</span>
          <h3 className="text-2xl font-bold tracking-tight text-foreground mt-1">
            ASVS L1 Coverage across 11 Threat Vectors
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Continuous automated security regressions validated in{' '}
            <code className="text-primary font-mono text-xs">tests/phase_12_security_hardening.rs</code>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-1.5 max-h-[460px] overflow-y-auto pr-1 scrollbar-thin">
            {THREAT_VECTORS.map((threat) => {
              const isSelected = selectedThreat.id === threat.id;
              return (
                <button
                  key={threat.id}
                  type="button"
                  onClick={() => setSelectedThreat(threat)}
                  className={`w-full text-left p-3 rounded-lg border transition-all text-xs flex items-center justify-between gap-2 ${
                    isSelected
                      ? 'border-primary/50 bg-primary/10 text-foreground font-semibold'
                      : 'border-border/60 bg-card/40 hover:bg-card/70 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="truncate">
                    <div className="font-mono text-[10px] text-primary">{threat.asvs}</div>
                    <div className="truncate font-medium">{threat.vector}</div>
                  </div>
                  <ChevronRight className={`h-4 w-4 shrink-0 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 rounded-xl border border-border bg-[#0d1016] p-6 shadow-xl sticky top-20">
            <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
              <div>
                <span className="font-mono text-xs font-bold text-primary">{selectedThreat.asvs}</span>
                <h4 className="text-base font-bold text-foreground">{selectedThreat.vector}</h4>
              </div>
              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                {selectedThreat.category}
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <div className="font-mono uppercase text-red-400 font-semibold mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span>Attack Scenario &amp; Risk</span>
                </div>
                <p className="text-muted-foreground bg-red-950/20 p-3 rounded border border-red-900/40 leading-relaxed">
                  {selectedThreat.attackScenario}
                </p>
              </div>

              <div>
                <div className="font-mono uppercase text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Runtime Mitigation &amp; Guarantee</span>
                </div>
                <p className="text-muted-foreground bg-emerald-950/20 p-3 rounded border border-emerald-900/40 leading-relaxed">
                  {selectedThreat.runtimeMitigation}
                </p>
              </div>

              <div className="pt-2 text-[11px] font-mono text-muted-foreground border-t border-border/40">
                Validated in: <span className="text-foreground">tests/phase_12_security_hardening.rs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

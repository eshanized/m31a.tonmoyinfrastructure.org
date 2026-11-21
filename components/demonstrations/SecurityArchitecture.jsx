'use client';

import { useState } from 'react';
import {
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Server,
  FolderGit2,
  Key,
  Network,
  Cpu,
} from 'lucide-react';

const SECURITY_LAYERS = [
  {
    id: 'execpolicy',
    name: '1. Prefix & AST ExecPolicy',
    icon: Lock,
    tag: 'crates/m31a-execpolicy',
    status: 'allow / prompt / deny',
    description: 'Evaluates commands against prefix rules, alternative token sets, and network destination filters before execution starts.',
    mechanisms: [
      'PatternToken::Alts tokenized evaluation',
      'Outbound network LAN block (blocks 192.168.0.0/16, 127.0.0.1 by default)',
      'Whitelist for standard registries (crates.io, npmjs.org)',
    ],
  },
  {
    id: 'guardian',
    name: '2. Guardian Safety Supervisor',
    icon: Shield,
    tag: 'crates/m31a-guardian',
    status: 'Sliding-window Circuit Breaker',
    description: 'Autonomous supervisor auditing tool operations, destructive shell commands, and patch blast radius.',
    mechanisms: [
      'Sliding window: AUTO_REVIEW_DENIAL_WINDOW_SIZE = 5',
      'Trips circuit breaker after MAX_DENIALS_BEFORE_TRIP = 3',
      'Halts execution immediately if runaway behavior is detected',
    ],
  },
  {
    id: 'bubblewrap',
    name: '3. Bubblewrap Linux Sandbox',
    icon: Server,
    tag: 'crates/m31a-sandbox',
    status: 'Unprivileged Namespaces',
    description: 'Linux-native kernel namespace containment isolating PID, IPC, UTS, Mount, and Network namespaces.',
    mechanisms: [
      'Read-only system root: / mounted as ro-bind',
      'Writable project workspace mounted at /workspace',
      'Air-gapped network mode via --unshare-net',
      'Linux-native. macOS and Windows sandboxing profiles planned on roadmap',
    ],
  },
  {
    id: 'masks',
    name: '4. Filesystem Protection Masks',
    icon: FolderGit2,
    tag: 'm31a-sandbox::masks',
    status: 'Strict Read-Only Overlay',
    description: 'Even within writable workspaces, sensitive credential and version control directories are permanently protected.',
    mechanisms: [
      '.git/ masked with read-only bind (protects commit tree and hooks)',
      '.env and .env.* masked with empty null file (prevents key theft)',
      '~/.ssh and ~/.gnupg completely excluded from container mount',
    ],
  },
  {
    id: 'trust',
    name: '5. Workspace Trust Boundary',
    icon: Key,
    tag: 'crates/m31a-trust',
    status: 'Explicit Developer Consent',
    description: 'Prevents automatic execution of untrusted workspace hooks, binaries, or config scripts without developer sign-off.',
    mechanisms: [
      'm31a trust audit command before session initialization',
      'Rejects poisoned local .m31a configs unless explicitly allowed',
      'Protects against clone-and-pwn prompt injection vectors',
    ],
  },
];

export default function SecurityArchitecture() {
  const [activeLayer, setActiveLayer] = useState(SECURITY_LAYERS[0]);

  return (
    <div className="w-full bg-surface rounded-xl border border-border p-5 md:p-8 space-y-6">
      {/* Visual Execution Pipeline Flow */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-foreground-subtle">
          Defense-in-Depth Gates
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 relative">
          {SECURITY_LAYERS.map((layer, index) => {
            const Icon = layer.icon;
            const isSelected = activeLayer.id === layer.id;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveLayer(layer)}
                className={`p-3.5 rounded-lg text-left transition-colors border relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-accent-subtle border-accent text-accent'
                    : 'bg-surface border-border hover:border-border-strong text-foreground-muted hover:text-foreground'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-foreground-subtle">
                      GATE 0{index + 1}
                    </span>
                    <div
                      className={`p-1 rounded ${
                        isSelected ? 'bg-accent text-white' : 'text-foreground-muted'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h4 className="text-xs font-medium text-foreground leading-snug">
                    {layer.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-border/50">
                  <span className="text-[10px] font-mono text-foreground-subtle block truncate">
                    {layer.status}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Inspection Card */}
      <div className="p-5 rounded-lg bg-surface-muted border border-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-border">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-medium text-accent bg-accent-subtle px-2 py-0.5 rounded border border-accent/20">
                Active Policy Gate
              </span>
              <h4 className="text-sm font-semibold text-foreground">
                {activeLayer.name}
              </h4>
            </div>
            <p className="text-xs font-mono text-foreground-muted mt-1">
              Source Crate: {activeLayer.tag}
            </p>
          </div>
          <span className="text-xs px-2 py-0.5 rounded bg-surface border border-border text-foreground font-mono self-start md:self-auto">
            {activeLayer.status}
          </span>
        </div>

        <div className="mt-3.5 space-y-3">
          <p className="text-xs sm:text-sm text-foreground leading-relaxed">
            {activeLayer.description}
          </p>

          <div className="space-y-1.5">
            <span className="text-xs font-medium text-foreground block">
              Enforcement Mechanisms:
            </span>
            <ul className="space-y-1">
              {activeLayer.mechanisms.map((mech, i) => (
                <li
                  key={i}
                  className="text-xs text-foreground-muted flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{mech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Linux Sandbox Notice */}
      <div className="p-3.5 rounded-lg bg-surface border border-border flex items-start gap-2.5 text-xs text-foreground-muted">
        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <p>
          <strong>Platform Isolation:</strong> Bubblewrap kernel namespace isolation requires a Linux host with unprivileged user namespaces enabled. On macOS and Windows, M31A enforces strict path filtering and Guardian supervision, while native seatbelt profiles (<code className="font-mono">sandbox-exec</code>) and Windows AppContainer isolation are scheduled for Phase 3.
        </p>
      </div>
    </div>
  );
}

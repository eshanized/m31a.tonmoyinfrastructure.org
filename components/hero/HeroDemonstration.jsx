'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Terminal, Cpu, Eye, CheckCircle2, Play, GitBranch, Shield, RefreshCw, Copy, Check } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const DEMO_MODES = [
  {
    id: 'execution',
    name: 'Autonomous Task',
    icon: Play,
    subtitle: 'Full-turn execution with reasoning and patch verification',
  },
  {
    id: 'vibe',
    name: 'Vibe Coding Loop',
    icon: RefreshCw,
    subtitle: 'Continuous filesystem watcher and automated compiler auto-repair',
  },
  {
    id: 'speculate',
    name: 'Speculative Arena',
    icon: GitBranch,
    subtitle: 'Parallel competing branches scored in isolated sandboxes',
  },
  {
    id: 'screenshot',
    name: 'Captured TUI',
    icon: Eye,
    subtitle: 'Genuine captured Ratatui terminal session',
  },
];

export default function HeroDemonstration() {
  const [activeTab, setActiveTab] = useState('execution');
  const [copied, setCopied] = useState(false);
  const [isReasoningExpanded, setIsReasoningExpanded] = useState(false);

  const handleCopyCommand = (text) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 lg:mt-12 relative z-10 text-left">
      {/* Terminal Container - Quiet chrome, zero neon glow */}
      <div className="relative rounded-xl bg-[#0b0d13] border border-[#222838] overflow-hidden text-gray-200">
        {/* Terminal Header Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#121622] border-b border-[#222838] gap-2">
          {/* Traffic light window dots */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#374151] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#374151] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#374151] inline-block" />
            <span className="ml-2 text-xs font-mono text-gray-400 hidden sm:inline">
              m31a-tui v0.1.15 — Rust 2024
            </span>
          </div>

          {/* Mode Tabs */}
          <div className="flex items-center gap-1 bg-[#0b0d13] p-1 rounded-md border border-[#222838] overflow-x-auto max-w-full min-w-0 w-full sm:w-auto">
            {DEMO_MODES.map((mode) => {
              const Icon = mode.icon;
              const isActive = activeTab === mode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveTab(mode.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#1c2232] text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon className="w-3.5 h-3.5 text-gray-400" />
                  <span>{mode.name}</span>
                </button>
              );
            })}
          </div>

          {/* Copy Command */}
          <button
            type="button"
            onClick={() => handleCopyCommand(siteConfig.installCommand)}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-200 transition-colors p-1"
            title="Copy install command"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            <span className="font-mono text-[11px] hidden md:inline">
              {copied ? 'Copied' : 'Copy CLI'}
            </span>
          </button>
        </div>

        {/* Viewport Content */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[360px]">
          {/* Tab 1: Autonomous Execution */}
          {activeTab === 'execution' && (
            <div className="space-y-3.5 animate-fade-in">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-emerald-400 font-medium">$</span>
                <span className="text-gray-100">
                  m31a "Refactor token bucket limiter to use SIMD atomic CAS and add test suite"
                </span>
                <span className="terminal-cursor text-emerald-400">_</span>
              </div>

              {/* Status Header */}
              <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded bg-[#121622] border border-[#222838] text-gray-400">
                <div className="flex items-center gap-3">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <Cpu className="w-3.5 h-3.5 text-gray-400" /> nvidia/nemotron-3.5-lightning-30b-a3b
                  </span>
                  <span>|</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <Shield className="w-3.5 h-3.5 text-gray-400" /> Bubblewrap: workspace-write
                  </span>
                </div>
                <span className="text-gray-500 hidden sm:inline tabular-nums">Thread: #019483ab-41c3</span>
              </div>

              {/* Collapsible Reasoning Block */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => setIsReasoningExpanded((prev) => !prev)}
                onKeyDown={(e) => e.key === 'Enter' && setIsReasoningExpanded((prev) => !prev)}
                className="p-3 rounded bg-[#121622] border border-[#222838] space-y-1.5 cursor-pointer hover:border-[#2f3950] transition-colors"
                title="Click to toggle reasoning path"
              >
                <div className="text-xs font-medium text-gray-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span>Thought Chain (DeepSeek R1 / Nemotron)</span>
                    <span className="text-[10px] text-gray-500">
                      ({isReasoningExpanded ? 'fold' : 'expand'})
                    </span>
                  </span>
                  <span className="text-[10px] bg-[#1a2030] text-gray-300 px-1.5 py-0.5 rounded border border-[#2b354c] tabular-nums">
                    284 tokens
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Examining crates/m31a-core/src/rate_limiter.rs... Replacing Mutex&lt;u64&gt; with AtomicU64 compare_exchange_weak to prevent thread contention during 100k req/s bursts. Checking blast radius against consumer crates...
                </p>
                {isReasoningExpanded && (
                  <div className="pt-2 text-xs text-gray-300 border-t border-[#222838] space-y-1 font-mono">
                    <div>1. Identified bottleneck: mutex lock acquired on every single token replenishment tick.</div>
                    <div>2. Verified target signature: pub fn acquire(&amp;self, count: u64) -&gt; Result&lt;(), RateLimitError&gt;.</div>
                    <div>3. Proposed patch AST blast radius: 0 consumer crate breakages. Safe to synthesize.</div>
                  </div>
                )}
              </div>

              {/* Tool Execution Card */}
              <div className="rounded bg-[#121622] border border-[#222838] p-3 space-y-2">
                <div className="flex items-center justify-between text-xs border-b border-[#222838] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Tool Dispatched:</span>
                    <span className="text-white font-medium">apply_patch</span>
                  </div>
                  <span className="text-emerald-400 text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Guardian Approved (ExecPolicy: allow)
                  </span>
                </div>

                {/* Diff Output */}
                <div className="font-mono text-xs bg-[#0b0d13] p-2.5 rounded border border-[#1d2332] space-y-0.5 text-gray-300">
                  <div className="text-gray-500">*** Update File: crates/m31a-core/src/rate_limiter.rs</div>
                  <div className="text-gray-500">@@ -14,6 +14,8 @@</div>
                  <div className="text-red-400 bg-red-950/20 px-1">- use std::sync::Mutex;</div>
                  <div className="text-emerald-400 bg-emerald-950/20 px-1">+ use std::sync::atomic::&#123;AtomicU64, Ordering&#125;;</div>
                  <div className="text-gray-400">  pub struct TokenBucket &#123;</div>
                  <div className="text-red-400 bg-red-950/20 px-1">-     tokens: Mutex&lt;u64&gt;,</div>
                  <div className="text-emerald-400 bg-emerald-950/20 px-1">+     tokens: AtomicU64,</div>
                </div>
              </div>

              {/* Verification Output */}
              <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verification passed: <code>cargo test -p m31a-core</code> (14 passed, 0 failed in 0.42s). Zero regressions.</span>
              </div>
            </div>
          )}

          {/* Tab 2: Vibe Coding Loop */}
          {activeTab === 'vibe' && (
            <div className="space-y-3.5 animate-fade-in font-mono text-xs">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-emerald-400 font-medium">$</span>
                <span className="text-white">m31a vibe --watch crates/m31a-tui</span>
              </div>

              <div className="p-3 rounded bg-[#121622] border border-[#222838] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Continuous Vibe Watcher Active (debounce: 400ms)
                  </span>
                  <span className="text-gray-400 text-[11px] tabular-nums">Watching 124 files</span>
                </div>
                <p className="text-xs text-gray-400">
                  Filesystem event detected: <code>crates/m31a-tui/src/screens.rs</code> modified by developer.
                </p>
              </div>

              <div className="p-3 rounded bg-red-950/15 border border-red-900/40 space-y-1">
                <div className="text-xs font-medium text-red-400">
                  Compiler Error Detected: Type Mismatch in MenuBar Widget
                </div>
                <p className="text-xs text-gray-400 font-mono">
                  error[E0308]: mismatched types: expected `bool`, found `Option&lt;bool&gt;`
                </p>
                <p className="text-[11px] text-gray-500 font-mono">
                  --&gt; crates/m31a-tui/src/screens.rs:114:28: expected `bool`, found `Option&lt;bool&gt;`
                </p>
              </div>

              <div className="p-3 rounded bg-emerald-950/15 border border-emerald-900/40 space-y-2">
                <div className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Autonomous Vibe Auto-Repair Dispatched
                </div>
                <p className="text-xs text-gray-300">
                  Synthesized Codex patch via <code>nvidia/nemotron-3.5-bolt-e4b</code> in 180ms. Applied <code>.unwrap_or(false)</code> fallback unwrapping.
                </p>
                <div className="text-xs text-emerald-400">
                  ✓ cargo check: 0 errors. Incremental compilation verified clean in 240ms. TUI session hot-reload resumed.
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Speculative Arena */}
          {activeTab === 'speculate' && (
            <div className="space-y-3.5 animate-fade-in font-mono text-xs">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-emerald-400 font-medium">$</span>
                <span className="text-white">m31a speculate "Optimize JSON parser" "SIMD-JSON" "FlatBuffers" --promote</span>
              </div>

              <div className="text-xs text-gray-400">
                Spawning 2 isolated ephemeral Bubblewrap sandbox worktrees concurrently...
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {/* Hypothesis A */}
                <div className="p-3 rounded bg-[#121622] border border-[#222838] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-200">Branch A: SIMD-JSON</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800 tabular-nums">
                      Score: 96 / 100
                    </span>
                  </div>
                  <ul className="text-xs space-y-1 text-gray-400">
                    <li className="text-emerald-400">✓ Compiler check: passed (0 warnings)</li>
                    <li className="text-emerald-400">✓ Test suite: 42/42 passed</li>
                    <li className="text-gray-300">⚡ Throughput: 4.8 GB/s (+380% vs baseline)</li>
                    <li className="text-gray-400">🛡️ Blast radius: 12 (Low impact)</li>
                  </ul>
                </div>

                {/* Hypothesis B */}
                <div className="p-3 rounded bg-[#121622] border border-[#222838] space-y-2 opacity-75">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-200">Branch B: FlatBuffers</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1c2232] text-gray-400 border border-[#2b354c] tabular-nums">
                      Score: 78 / 100
                    </span>
                  </div>
                  <ul className="text-xs space-y-1 text-gray-400">
                    <li className="text-emerald-400">✓ Compiler check: passed</li>
                    <li className="text-emerald-400">✓ Test suite: 42/42 passed</li>
                    <li className="text-gray-300">⚡ Throughput: 5.1 GB/s (+410%)</li>
                    <li className="text-amber-400">⚠️ Blast radius: 64 (Requires schema rewrite)</li>
                  </ul>
                </div>
              </div>

              <div className="p-2.5 rounded bg-[#121622] border border-[#222838] text-xs text-gray-300 flex items-center justify-between">
                <span>Winner Promoted: Branch A (SIMD-JSON) merged into working tree automatically.</span>
                <span className="font-mono text-[11px] text-gray-500 tabular-nums">Elapsed: 4.2s</span>
              </div>
            </div>
          )}

          {/* Tab 4: Captured TUI Screenshot */}
          {activeTab === 'screenshot' && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="text-gray-300">
                  Genuine Captured TUI Session (crates/m31a-tui in Ratatui/Crossterm)
                </span>
                <span className="text-gray-500 font-mono tabular-nums">1874 × 1006 native resolution</span>
              </div>
              <div className="relative rounded overflow-hidden border border-[#222838] bg-black">
                <Image
                  src="/images/m31a-tui-preview.png"
                  alt="M31A Ratatui Terminal User Interface Preview"
                  width={1874}
                  height={1006}
                  className="w-full h-auto object-cover rounded"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        {/* Terminal Footer Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-[#090b10] border-t border-[#222838] text-[11px] text-gray-400">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Runtime: Idle &amp; Ready
            </span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="hidden sm:inline text-gray-400">Provider: NVIDIA NIM (Dynamic Discovery)</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-gray-400">
            <span>Press <kbd className="px-1 py-0.5 rounded bg-[#161a26] border border-[#262e42] text-gray-300 text-[10px]">Tab</kbd> for modes</span>
            <span>•</span>
            <span><kbd className="px-1 py-0.5 rounded bg-[#161a26] border border-[#262e42] text-gray-300 text-[10px]">Ctrl+M</kbd> models</span>
          </div>
        </div>
      </div>
    </div>
  );
}

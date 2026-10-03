import Link from 'next/link';
import { SysSection } from '@/components/system/section-frame';
import { RuntimeTopology } from '@/components/system/runtime-topology';
import { RuntimeMonitor } from '@/components/system/runtime-monitor';
import { ArchitectureMap } from '@/components/system/architecture-map';
import { PolicyTrace } from '@/components/system/policy-trace';
import { SecurityBoundary } from '@/components/system/security-boundary';
import { ToolRegistry } from '@/components/system/tool-registry';
import { VerificationPipeline } from '@/components/system/verification-pipeline';
import { RecoveryMachine } from '@/components/system/recovery-machine';
import { CliConsole } from '@/components/system/cli-console';
import { DeploymentChannels, PlatformMatrix, ReleasePanel } from '@/components/system/ops-panels';
import { AutonomyLoop, RoleMatrix, DocumentationIndex } from '@/components/system/content-matrices';
import { PRODUCT } from '@/lib/m31a/product';

export default function HomePage() {
  return (
    <>
      {/* ═══ 01 · SYSTEM IDENTIFICATION — asymmetric, not a SaaS hero ═══ */}
      <div className="border-b border-[#2A2721]">
        <div className="mx-auto max-w-[1280px] px-4 pb-14 pt-10 sm:px-6 sm:pt-14">
          <div className="sys-grid">
            <div className="col-span-12 lg:col-span-7">
              <p className="meta text-[#FF6B4A]">M31A / M31 AUTONOMOUS — RUST-NATIVE SOFTWARE-ENGINEERING RUNTIME</p>
              <p className="mono-val mt-3 text-[12px] leading-relaxed text-[#6E6860]">
                VERSION {PRODUCT.version} · PRODUCTION · {PRODUCT.canonicalProvider}
                <br />
                LINUX x86_64 QUALIFIED · RUST {PRODUCT.rustVersion} · SINGLE CRATE
              </p>
              <h1 className="display-xl mt-6 text-[13vw] text-[#ECE7DC] sm:text-7xl lg:text-[5.6rem]">
                THE MODEL
                <br />
                PROPOSES.
                <br />
                <span className="text-[#FF4B2C]">THE RUNTIME</span>
                <br />
                DECIDES.
              </h1>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-[#A8A198]">
                M31A is an autonomous coding agent that lives in your terminal — but
                architecturally it is a governed runtime: model intelligence is upstream
                and untrusted; authority belongs to policy, sandbox, execution,
                verification, and checkpointing.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-2">
                <Link href="/#runtime" className="btn-primary">VIEW RUNTIME</Link>
                <Link href="/architecture" className="btn-ghost">EXPLORE ARCHITECTURE</Link>
                <Link href="/security" className="btn-quiet">READ SECURITY MODEL →</Link>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-[3px] border border-[#2A2721] bg-[#2A2721]">
                {[
                  ['MODEL', 'PROPOSES'],
                  ['RUNTIME', 'DECIDES'],
                  ['EVIDENCE', 'REQUIRED'],
                ].map(([k, v]) => (
                  <div key={k} className="bg-[#141311] px-3 py-2.5">
                    <p className="meta">{k}</p>
                    <p className="mono-val mt-0.5 text-[13px] text-[#ECE7DC]">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 mt-10 lg:col-span-5 lg:mt-0">
              <div className="lg:sticky lg:top-24">
                <RuntimeTopology />
                <p className="mono-val mt-2 text-right text-[11px] text-[#6E6860]">
                  MODEL ≠ AUTHORITY · RUNTIME → POLICY → SANDBOX → EXECUTION → VERIFICATION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ 02 · THE PROBLEM ═══ */}
      <SysSection
        index="02"
        id="overview"
        eyebrow="THE PROBLEM"
        title={<>Model intelligence ≠ execution authority.</>}
        lede="Most AI tools collapse reasoning and action into one step. M31A separates them with a governed runtime in between — every side effect must earn authorization."
        aside={
          <div className="flex flex-wrap gap-2">
            <Link href="/security" className="btn-ghost !text-xs">READ SECURITY MODEL</Link>
          </div>
        }
      >
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-[3px] border border-[#E5484D]/30 bg-[#141311] p-5">
            <p className="meta !text-[#E5484D]">TRADITIONAL AI TOOL — UNGOVERNED</p>
            <ol className="mt-4 space-y-0 font-mono text-sm">
              {['MODEL', '↓', 'ACTION'].map((s, i) => (
                <li key={i} className={s === '↓' ? 'py-1 pl-4 text-[#3B362C]' : 'rounded-[2px] border border-[#2A2721] px-3 py-2.5 tracking-wider text-[#A8A198]'}>
                  {s}
                </li>
              ))}
            </ol>
            <p className="mono-val mt-4 text-[12px] leading-relaxed text-[#6E6860]">
              Non-deterministic output holds direct write access. No boundary, no evidence, no rollback story.
            </p>
          </div>
          <div className="rounded-[3px] border border-[#4CC38A]/30 bg-[#141311] p-5">
            <p className="meta !text-[#4CC38A]">M31A — GOVERNED RUNTIME</p>
            <ol className="mt-4 space-y-1 font-mono text-[13px]">
              {['MODEL', 'PROPOSAL', 'RUNTIME CONTROL', 'POLICY', 'SANDBOX', 'EXECUTION', 'VERIFICATION'].map((s) => (
                <li key={s} className="flex items-center gap-2.5 rounded-[2px] border border-[#2A2721] bg-[#1B1A17] px-3 py-1.5 tracking-wider text-[#ECE7DC]">
                  <span className="h-1.5 w-1.5 rounded-[1px] bg-[#FF4B2C]" aria-hidden="true" />{s}
                </li>
              ))}
            </ol>
            <p className="mono-val mt-4 text-[12px] leading-relaxed text-[#6E6860]">
              Six runtime stages stand between a proposal and the workspace. Deny is the default.
            </p>
          </div>
        </div>
      </SysSection>

      {/* ═══ 03 · RUNTIME MONITOR ═══ */}
      <SysSection
        index="03"
        id="runtime"
        eyebrow="THE RUNTIME"
        title={<>A console, not a chatbot.</>}
        lede="State, scheduler, policy, tools, sandbox, verification, checkpointing, recovery, completion gates — one runtime owns them all. Step through a simulated mission below."
        aside={<p className="mono-val text-[11px] text-[#6E6860]">SUBSYSTEMS: 9 · SINGLE CRATE · ZERO FOREIGN RUNTIMES</p>}
      >
        <RuntimeMonitor />
      </SysSection>

      {/* ═══ 04 · AUTONOMY LOOP ═══ */}
      <SysSection
        index="04"
        id="loop"
        eyebrow="12-STAGE AUTONOMY LOOP"
        title={<>Twelve stages. Zero shortcuts.</>}
        lede="The deterministic lifecycle every mission follows. Select a stage to see its subsystem and where authority sits."
      >
        <AutonomyLoop />
      </SysSection>

      {/* ═══ 05 · AGENT ROLES ═══ */}
      <SysSection
        index="05"
        id="roles"
        eyebrow="AGENT ROLES"
        title={<>Agents operate inside the runtime.</>}
        lede="Eight canonical role state machines — planner to integrator — coordinated by the dispatcher. None of them can touch the machine directly."
      >
        <RoleMatrix />
      </SysSection>

      {/* ═══ 06 · SECURITY ═══ */}
      <SysSection
        index="06"
        id="security"
        eyebrow="SECURITY"
        title={<>Security is below the model.</>}
        lede="Four untrusted inputs enter from above; eight controls hold the boundary. Fail-closed everywhere, recovery-safe by construction."
        aside={
          <Link href="/security" className="btn-ghost !text-xs">OPEN SECURITY MODEL</Link>
        }
      >
        <SecurityBoundary />
      </SysSection>

      {/* ═══ 07 · POLICY ENGINE ═══ */}
      <SysSection
        index="07"
        id="policy"
        eyebrow="POLICY ENGINE"
        title={<>Every side effect earns execution.</>}
        lede="An 11-stage gate over a 10-tier authority stack. Simulate ALLOW / DENY / ASK / ESCALATE and inspect what each step controls."
      >
        <PolicyTrace />
      </SysSection>

      {/* ═══ 08 · TOOLS ═══ */}
      <SysSection
        index="08"
        id="tools"
        eyebrow="TOOL REGISTRY — 28 CORE TOOLS"
        title={<>A catalog, not a grab-bag.</>}
        lede="Each tool declares its capability family, side-effect class, and parameter schema. Filter the real registry."
        aside={<Link href="/cli" className="btn-quiet !p-0 !text-xs text-[#FF6B4A]">INSPECT VIA CLI →</Link>}
      >
        <ToolRegistry />
      </SysSection>

      {/* ═══ 09 · VERIFICATION ═══ */}
      <SysSection
        index="09"
        id="verification"
        eyebrow="VERIFICATION"
        title={<>M31A does not stop at generation.</>}
        lede="Plan → execute → observe → verify → settle → checkpoint. Six tiers of evidence before any mission may complete."
      >
        <VerificationPipeline />
      </SysSection>

      {/* ═══ 10 · RECOVERY ═══ */}
      <SysSection
        index="10"
        id="recovery"
        eyebrow="RECOVERY"
        title={<>Crash-resilient by protocol.</>}
        lede="Two-phase atomic checkpoints plus a startup scanner. Ambiguous and corrupt states fail closed — never blind auto-resume."
      >
        <RecoveryMachine />
      </SysSection>

      {/* ═══ 11 · ARCHITECTURE ═══ */}
      <SysSection
        index="11"
        id="architecture"
        eyebrow="ARCHITECTURE — L0 → L9"
        title={<>Ten layers, one direction.</>}
        lede="Strict downward dependencies from kernel to cockpit. Select a layer to inspect purpose, source, and boundaries."
        aside={<Link href="/architecture" className="btn-ghost !text-xs">OPEN FULL ARCHITECTURE</Link>}
      >
        <ArchitectureMap />
      </SysSection>

      {/* ═══ 12 · CLI ═══ */}
      <SysSection
        index="12"
        id="cli"
        eyebrow="TERMINAL / CLI"
        title={<>Terminal-first, evidence-backed.</>}
        lede="Real documented commands with illustrative output. The TUI cockpit is a pure projection of authoritative SQLite state."
        aside={<Link href="/cli" className="btn-ghost !text-xs">VIEW CLI REFERENCE</Link>}
      >
        <CliConsole />
      </SysSection>

      {/* ═══ 13 · DEPLOYMENT ═══ */}
      <SysSection
        index="13"
        id="deployment"
        eyebrow="DEPLOYMENT"
        title={<>Two channels. No cross-talk.</>}
        lede="Production m31a and development m31a-dev are compile-time identities with isolated state paths and a transactional installer."
      >
        <DeploymentChannels />
      </SysSection>

      {/* ═══ 14 · PLATFORM ═══ */}
      <SysSection
        index="14"
        id="platform"
        eyebrow="PLATFORM SUPPORT"
        title={<>Qualified, honestly.</>}
        lede="Only Linux x86_64 is release-qualified. Everything else is labelled exactly as it is — conditionally supported or compile-only."
      >
        <PlatformMatrix />
      </SysSection>

      {/* ═══ 15 · RELEASE ═══ */}
      <SysSection
        index="15"
        id="release"
        eyebrow="VERSION / RELEASE"
        title={<>Current release record.</>}
        lede="Only values pinned in website metadata are shown. Commit and checksum live with the GitHub release artifacts."
        aside={<Link href="/changelog" className="btn-quiet !p-0 !text-xs text-[#FF6B4A]">VIEW CHANGELOG →</Link>}
      >
        <ReleasePanel />
      </SysSection>

      {/* ═══ 16 · DOCS + FINAL ═══ */}
      <SysSection
        index="16"
        id="docs"
        eyebrow="DOCUMENTATION"
        title={<>A technical manual, indexed.</>}
        lede="Getting started, concepts and architecture, reference manual — versioned with the runtime."
        aside={<Link href="/docs" className="btn-ghost !text-xs">OPEN DOCUMENTATION</Link>}
      >
        <DocumentationIndex />
        <div className="tick-panel mt-6 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="meta">FINAL RECORD</p>
            <p className="display-lg mt-1 text-2xl text-white">INTELLIGENCE is upstream. AUTHORITY belongs to the runtime.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/download" className="btn-primary">DOWNLOAD M31A</Link>
            <Link href="/docs" className="btn-ghost">OPEN DOCUMENTATION</Link>
          </div>
        </div>
      </SysSection>
    </>
  );
}

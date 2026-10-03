import Link from 'next/link';
import { SecurityBoundary } from '@/components/system/security-boundary';
import { PolicyTrace } from '@/components/system/policy-trace';

export default function SecurityPage() {
  return (
    <>
      <div className="border-b border-[#2A2721]">
        <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14">
          <p className="meta text-[#FF6B4A]">[04] SECURITY</p>
          <h1 className="display-lg mt-3 max-w-3xl text-4xl text-[#ECE7DC] sm:text-5xl">
            Security is below the model.
          </h1>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[#A8A198]">
            The model, the repository, tool output, and network data are all untrusted
            inputs. Governance lives underneath them: an 11-stage policy gate, sandbox
            confinement, secret redaction, and fail-closed recovery. ASVS L1 coverage
            across 11 documented threat vectors.
          </p>
          <p className="mono-val mt-3 text-[11px] text-[#6E6860]">
            NO UNSUPPORTED CLAIMS MADE HERE — every control below maps to an implemented subsystem.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] space-y-0 px-4 py-10 sm:px-6">
        <p className="meta mb-3">FIG.S1 — TRUST BOUNDARY + CONTROLS</p>
        <SecurityBoundary />
        <div className="pt-12">
          <p className="meta mb-3">FIG.S2 — POLICY DECISION TRACE</p>
          <PolicyTrace />
        </div>
        <div className="mt-10 grid gap-3 border-t border-[#2A2721] pt-6 md:grid-cols-3">
          {[
            ['FAIL-CLOSED DEFAULT', 'ASK without an operator, ambiguous crash state, unverifiable worktree — all resolve to DENY. The runtime never guesses.'],
            ['SECRET HYGIENE', '5-tier scrubber runs before persistence, display, and logs. Error paths are sanitized so stack traces cannot leak credentials.'],
            ['EGRESS DISCIPLINE', 'Destination policy blocks loopback, private ranges, cloud metadata, and rebinding redirects before any connection.'],
          ].map(([t, d]) => (
            <div key={t} className="surf-01 p-4">
              <p className="font-mono text-xs font-bold tracking-wider text-[#ECE7DC]">{t}</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#A8A198]">{d}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 pt-8">
          <Link href="/docs/security" className="btn-ghost !text-xs">OPEN SECURITY DOC</Link>
          <a href="https://github.com/eshanized/M31A/blob/master/SECURITY.md" target="_blank" rel="noopener noreferrer" className="btn-quiet !text-xs">
            SECURITY POLICY ↗
          </a>
        </div>
      </div>
    </>
  );
}

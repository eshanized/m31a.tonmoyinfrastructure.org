import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, ExternalLink, ShieldCheck, Terminal, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/site/section';
import { CodeBlock } from '@/components/site/code-block';
import { PRODUCT, PLATFORMS_MATRIX } from '@/lib/m31a/product';

export default function DownloadPage() {
  return (
    <div className="py-16 sm:py-24">
      {/* Header */}
      <div className="border-b border-[#222226] pb-12 sm:pb-16 mb-16">
        <Container>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
            INSTALLATION &amp; RELEASES
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-3xl">
            Run M31A Locally.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-2xl">
            Release-qualified on Linux x86_64. Standalone pre-compiled binaries and one-liner installer
            scripts. No foreign runtime dependencies required.
          </p>
        </Container>
      </div>

      <Container>
        {/* Quick Install Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-[#E8523F]" />
                <h2 className="text-base font-bold text-[#F0EDE8]">Linux &amp; macOS (curl)</h2>
              </div>
              <CodeBlock language="bash" filename="terminal" code={PRODUCT.installCurl} />
              <p className="text-xs text-[#A3A09B] mt-2">
                Detects host architecture, verifies SHA-256 checksum, and installs binary to <code className="text-[#F0EDE8] font-mono">/usr/local/bin</code> or <code className="text-[#F0EDE8] font-mono">~/.local/bin</code>.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-[#E8523F]" />
                <h2 className="text-base font-bold text-[#F0EDE8]">Windows (PowerShell)</h2>
              </div>
              <CodeBlock language="powershell" filename="PowerShell" code={PRODUCT.installPowerShell} />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-[#E8523F]" />
                <h2 className="text-base font-bold text-[#F0EDE8]">Build from Source with Cargo</h2>
              </div>
              <CodeBlock
                language="bash"
                filename="terminal"
                code={`git clone https://github.com/eshanized/M31A.git\ncd M31A\ncargo build --release   # Requires Rust ${PRODUCT.rustVersion} (Edition 2024)\ncargo install --path .`}
              />
            </div>
          </div>

          {/* Release Record Card */}
          <div className="lg:col-span-5 rounded-2xl border border-[#222226] bg-[#111113] p-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E8523F] block mb-2">
              CURRENT RELEASE
            </span>
            <h3 className="text-2xl font-bold text-[#F0EDE8]">
              v{PRODUCT.version}
            </h3>
            <p className="text-xs text-[#6B6965] font-mono mt-1 mb-6">
              Released {PRODUCT.releaseDate} · Channel: Production
            </p>

            <div className="space-y-3 border-t border-[#222226] pt-4 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-[#222226]/50">
                <span className="text-[#6B6965]">Canonical Model:</span>
                <span className="text-[#F0EDE8] truncate max-w-[180px]">{PRODUCT.canonicalModelId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#222226]/50">
                <span className="text-[#6B6965]">Provider:</span>
                <span className="text-[#F0EDE8]">{PRODUCT.canonicalProvider}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#222226]/50">
                <span className="text-[#6B6965]">Rust Edition:</span>
                <span className="text-[#F0EDE8]">{PRODUCT.edition} ({PRODUCT.rustVersion})</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#6B6965]">License:</span>
                <span className="text-[#F0EDE8]">{PRODUCT.licenses.join(' / ')}</span>
              </div>
            </div>

            <div className="mt-8 space-y-2.5">
              <a
                href={PRODUCT.releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white text-xs font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Assets on GitHub</span>
              </a>

              <Link
                href="/docs/installation"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-[#2C2C31] text-xs font-medium text-[#F0EDE8] hover:border-[#E8523F] hover:text-[#E8523F] transition-colors"
              >
                <span>Read Detailed Installation Manual</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Platform Support Matrix */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[#F0EDE8]">
              Platform Support Matrix
            </h2>
            <p className="text-sm text-[#A3A09B] mt-1">
              Honest platform qualification criteria according to <code className="text-[#F0EDE8] font-mono">docs/PLATFORM-SUPPORT.md</code>.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#222226] bg-[#111113]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#18181B] border-b border-[#222226] text-[#A3A09B] font-mono uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">OS / Architecture</th>
                  <th className="py-3.5 px-4 font-semibold">Target Triple</th>
                  <th className="py-3.5 px-4 font-semibold">Qualification</th>
                  <th className="py-3.5 px-4 font-semibold">Details &amp; Evidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222226]">
                {PLATFORMS_MATRIX.map((p) => (
                  <tr key={p.targetTriple} className="hover:bg-[#18181B]/50 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-[#F0EDE8]">
                      {p.os} ({p.architecture})
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#A3A09B]">
                      {p.targetTriple}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                        p.classification === 'SUPPORTED'
                          ? 'bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/20'
                          : p.classification === 'CONDITIONALLY SUPPORTED'
                          ? 'bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/20'
                          : 'bg-[#18181B] text-[#A3A09B] border border-[#2C2C31]'
                      }`}>
                        {p.classification}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#A3A09B] max-w-md">
                      {p.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deployment Channels */}
        <div className="rounded-2xl border border-[#222226] bg-[#111113] p-8 sm:p-12 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E8523F] block mb-2">
              DEPLOYMENT CHANNELS
            </span>
            <h2 className="text-2xl font-bold text-[#F0EDE8]">
              Compile-Time Artifact Identity
            </h2>
            <p className="text-sm text-[#A3A09B] mt-2 leading-relaxed">
              M31A enforces strict separation between production (<code className="text-[#F0EDE8] font-mono">m31a</code>) and development (<code className="text-[#F0EDE8] font-mono">m31a-dev</code>) channels. Channel is baked into the binary at compile time with completely isolated state paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-[#222226] bg-[#0A0A0B]">
              <span className="font-mono text-xs text-[#3ECF8E] font-bold block mb-1">
                PRODUCTION CHANNEL (DEFAULT)
              </span>
              <h3 className="text-lg font-bold text-[#F0EDE8] mb-2">Binary: m31a</h3>
              <p className="text-xs text-[#A3A09B] leading-relaxed mb-4">
                Strict qualification rules. Worktree isolation required. Stable SQLite schema migrations. Pointing to production endpoints.
              </p>
              <div className="font-mono text-xs text-[#6B6965]">
                State path: ~/.config/m31a/
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[#222226] bg-[#0A0A0B]">
              <span className="font-mono text-xs text-[#EAB308] font-bold block mb-1">
                DEVELOPMENT CHANNEL
              </span>
              <h3 className="text-lg font-bold text-[#F0EDE8] mb-2">Binary: m31a-dev</h3>
              <p className="text-xs text-[#A3A09B] leading-relaxed mb-4">
                Built with <code className="text-[#F0EDE8]">--features development</code>. Isolated persistence so experiments never compromise production state.
              </p>
              <div className="font-mono text-xs text-[#6B6965]">
                State path: ~/.config/m31a-dev/
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-[#222226] flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/changelog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F0EDE8] hover:text-[#E8523F] transition-colors"
          >
            <span>Read Version Changelog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/docs/quick-start"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#A3A09B] hover:text-[#F0EDE8] transition-colors"
          >
            <span>Quick Start Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

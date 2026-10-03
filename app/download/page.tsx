import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Github, Terminal, Package, CheckCircle2, Copy, Shield, AlertTriangle, Cpu } from 'lucide-react';
import { Section, Container, SectionHeader } from '@/components/site/section';
import { CodeBlock } from '@/components/site/code-block';
import { PRODUCT, PLATFORMS_MATRIX } from '@/lib/m31a/product';

export const metadata: Metadata = {
  title: 'M31A Download — Install Autonomous Runtime',
  description:
    'Download prebuilt standalone binaries or build M31A from source with Cargo. Linux x86_64 supported, macOS conditionally supported, SHA-256 verification.',
};

export default function DownloadPage() {
  return (
    <>
      {/* Header */}
      <Section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 radial-glow" />
        <Container className="relative">
          <SectionHeader
            eyebrow="Download &amp; Installation"
            title={`Get M31A v${PRODUCT.version}`}
            description="Install standalone release binaries with verified checksums, or compile directly from source using Cargo. The runtime is a single Rust crate with no foreign dependencies."
          />
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Latest Stable: <strong className="text-foreground">v{PRODUCT.version}</strong> ({PRODUCT.releaseDate})
            </span>
            <span className="text-border">│</span>
            <span>MSRV: <strong className="text-foreground">Rust {PRODUCT.rustVersion}</strong> (Edition {PRODUCT.edition})</span>
            <span className="text-border">│</span>
            <a
              href={PRODUCT.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1"
            >
              <span>GitHub Release Assets</span>
              <span>→</span>
            </a>
          </div>
        </Container>
      </Section>

      {/* 1. Quick One-Liner Install Commands */}
      <Section className="border-b border-border/40">
        <Container>
          <SectionHeader
            eyebrow="Fastest Path"
            title="One-Liner Install Scripts"
            description="Automated installer scripts detect host architecture, download the release archive, verify the SHA-256 checksum, and install the standalone binary to /usr/local/bin or ~/.local/bin."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-foreground">
                <Terminal className="h-4 w-4 text-primary" />
                <span>Linux &amp; macOS (Bash)</span>
              </div>
              <CodeBlock
                language="bash"
                filename="terminal"
                code={PRODUCT.installCurl}
              />
              <p className="mt-2 text-xs text-muted-foreground">
                Downloads <code className="text-foreground font-mono">m31a-linux-x64.tar.gz</code> or Darwin equivalent, verifies checksum, and checks PATH.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold text-foreground">
                <Terminal className="h-4 w-4 text-primary" />
                <span>Windows (PowerShell)</span>
              </div>
              <CodeBlock
                language="powershell"
                filename="PowerShell"
                code={PRODUCT.installPowerShell}
              />
              <p className="mt-2 text-xs text-muted-foreground">
                Downloads Windows standalone zip, verifies hash, and places binary in user PATH.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Platform Qualification & Prebuilt Binaries */}
      <Section className="border-b border-border/40">
        <Container>
          <SectionHeader
            eyebrow="Authoritative Matrix"
            title="Platform Support &amp; Release Archives"
            description="M31A strictly classifies platform qualification based on native test evidence. Compilation alone is not treated as supported."
          />

          <div className="mt-8 overflow-x-auto rounded-xl border border-border shadow-lg">
            <table className="w-full text-xs">
              <thead className="bg-[#11141b] text-muted-foreground border-b border-border font-mono">
                <tr>
                  <th className="px-4 py-3 text-left">Operating System</th>
                  <th className="px-4 py-3 text-left">Target Triple</th>
                  <th className="px-4 py-3 text-left">Classification</th>
                  <th className="px-4 py-3 text-left">Release Archive</th>
                  <th className="px-4 py-3 text-left">Checksum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 bg-[#0c0e12]">
                {PLATFORMS_MATRIX.map((p) => {
                  const archiveUrl = `https://github.com/eshanized/M31A/releases/download/v${PRODUCT.version}/${p.archiveName}`;
                  const checksumUrl = `${archiveUrl}.sha256`;

                  return (
                    <tr key={p.targetTriple} className="hover:bg-secondary/20 transition-colors">
                      <td className="px-4 py-3 font-semibold text-foreground">
                        {p.os} <span className="font-normal text-muted-foreground">({p.architecture})</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-muted-foreground">{p.targetTriple}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                            p.classification === 'SUPPORTED'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : p.classification === 'CONDITIONALLY SUPPORTED'
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                              : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                          }`}
                        >
                          {p.classification}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono">
                        <a
                          href={archiveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-1.5"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span>{p.archiveName}</span>
                        </a>
                      </td>
                      <td className="px-4 py-3 font-mono text-muted-foreground">
                        <a
                          href={checksumUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-foreground hover:underline"
                        >
                          .sha256
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-lg border border-border/80 bg-[#11141b]/60 text-xs text-muted-foreground space-y-2">
            <div className="font-semibold text-foreground flex items-center gap-1.5">
              <AlertTriangle className="h-4 w-4 text-amber-400" />
              <span>Platform Qualification Notes &amp; Capability Gaps:</span>
            </div>
            <p>
              • <strong>Linux x86_64:</strong> Full tier-1 support. Native runtime, parity, security, CI, and release evidence all verified. Enforces hard cgroups v2 memory and CPU ceilings.
            </p>
            <p>
              • <strong>macOS:</strong> Conditionally supported. Implemented; Seatbelt isolation is Degraded (never full sandbox); native re-verification pending dedicated runner.
            </p>
            <p>
              • <strong>Windows:</strong> Windows has no file-descriptor limit, no filesystem isolation, and no network namespace isolation. Requests requiring them fail closed with typed errors — never silently.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Build from Source */}
      <Section className="border-b border-border/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <SectionHeader
                eyebrow="Compile-Time Control"
                title="Build from Source with Cargo"
                description="Compile directly from source for complete control over deployment channel features, target optimization, and binary identity."
              />
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <span><strong>Single Crate Architecture:</strong> No complex multi-repo orchestration. Simply clone and run <code className="text-foreground font-mono">cargo build</code>.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <span><strong>Zero Foreign Runtime Dependencies:</strong> Core runtime requires no Node.js, Python, or GPU. Pure native Rust.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <span><strong>Mutual Exclusion:</strong> Production and Development channels are mutually exclusive at compile time to prevent channel confusion.</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs font-mono text-muted-foreground mb-1">Production Channel (default)</div>
                <CodeBlock
                  language="bash"
                  filename="terminal"
                  code={`# Clone authoritative repository
git clone https://github.com/eshanized/M31A.git
cd M31A

# Build optimized production binary
cargo build --release

# Install binary to ~/.cargo/bin
cargo install --path .

# Binary outputs: m31a (v${PRODUCT.version})`}
                />
              </div>

              <div>
                <div className="text-xs font-mono text-muted-foreground mb-1">Development Channel (isolated state)</div>
                <CodeBlock
                  language="bash"
                  filename="terminal"
                  code={`# Build development binary with isolated m31a-dev paths
cargo build --release --features development

# Produces m31a-dev binary using .m31a-dev state directory`}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Checksum Verification */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Cryptographic Integrity"
            title="Verifying Release Artifacts"
            description="Always compute and verify SHA-256 digests before executing downloaded binaries on your machine."
          />

          <div className="mt-6">
            <CodeBlock
              language="bash"
              filename="checksum verification"
              code={`# Verify against published signature
sha256sum -c m31a-linux-x64.tar.gz.sha256

# On macOS without sha256sum:
shasum -a 256 -c m31a-darwin-x64.tar.gz.sha256

# Verify binary version and doctor health
m31a --version
m31a doctor`}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}

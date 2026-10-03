import Link from 'next/link';
import { CodeBlock } from '@/components/site/code-block';
import { DeploymentChannels, PlatformMatrix, ReleasePanel } from '@/components/system/ops-panels';
import { PRODUCT } from '@/lib/m31a/product';

export default function DownloadPage() {
  return (
    <>
      <div className="border-b border-[#2A2721]">
        <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14">
          <p className="meta text-[#FF6B4A]">[10] DOWNLOAD — GET M31A {PRODUCT.version}</p>
          <h1 className="display-lg mt-3 max-w-3xl text-4xl text-[#ECE7DC] sm:text-5xl">
            Install the runtime.
          </h1>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[#A8A198]">
            Release-qualified on Linux x86_64. Other targets are published exactly as
            qualified in the support matrix — check before you install.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
        <div className="sys-grid">
          <div className="col-span-12 lg:col-span-7">
            <p className="meta mb-2">INSTALL — LINUX / MACOS</p>
            <CodeBlock
              filename="install.sh"
              language="bash"
              code={PRODUCT.installCurl}
            />
            <div className="mt-3">
              <CodeBlock
                filename="install.ps1 — Windows"
                language="powershell"
                code={PRODUCT.installPowerShell}
              />
            </div>
            <p className="meta mb-2 mt-8">BUILD FROM SOURCE</p>
            <CodeBlock
              filename="cargo"
              language="bash"
              code={`git clone https://github.com/eshanized/M31A.git\ncd M31A\ncargo build --release   # requires Rust ${PRODUCT.rustVersion}`}
            />
            <div className="mt-8">
              <p className="meta mb-2">PLATFORM MATRIX</p>
              <PlatformMatrix />
            </div>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-5 lg:mt-0">
            <ReleasePanel />
            <div className="mt-4">
              <DeploymentChannels />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={PRODUCT.releasesUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !text-xs">
                GITHUB RELEASES ↗
              </a>
              <Link href="/docs/installation" className="btn-ghost !text-xs">INSTALLATION DOC</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

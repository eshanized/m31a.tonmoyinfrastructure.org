import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Container } from '@/components/site/section';
import { PRODUCT } from '@/lib/m31a/product';

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      {/* Header */}
      <div className="border-b border-[#222226] pb-12 sm:pb-16 mb-16">
        <Container>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E8523F] block mb-3">
            ABOUT M31A
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F0EDE8] max-w-3xl">
            M31 Autonomous, by {PRODUCT.orgName}.
          </h1>
          <p className="mt-4 text-[#A3A09B] text-base sm:text-lg leading-relaxed max-w-2xl">
            The high-assurance runtime underneath the intelligence.
          </p>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-[#A3A09B] text-base sm:text-lg leading-relaxed">
            <p>
              {PRODUCT.longDescription}
            </p>
            <p>
              M31A was created on a single uncompromising premise: <strong className="text-[#F0EDE8] font-semibold">&quot;The model proposes. The runtime decides.&quot;</strong> Most modern agentic tooling allows probabilistic models to hold shell and file access directly. M31A rejects this paradigm in favor of systems governance, deterministic policy gates, and empirical verification.
            </p>
            <p>
              Production inference strictly and exclusively uses NVIDIA NIM (<code className="text-[#F0EDE8] font-mono text-sm">{PRODUCT.canonicalModelId}</code>). Retired provider IDs are rejected deterministically before any credentials can be attached.
            </p>

            <div className="pt-6 flex flex-wrap gap-4">
              <a
                href={PRODUCT.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E8523F] hover:bg-[#D4432F] text-white text-sm font-medium transition-colors"
              >
                <span>View Source Repository</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                href="/docs/introduction"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#2C2C31] bg-[#111113] hover:bg-[#18181B] text-[#F0EDE8] text-sm font-medium transition-colors"
              >
                <span>Read Introduction</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-[#222226] bg-[#111113] p-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E8523F] block mb-2">
              PROJECT IDENTITY
            </span>
            <h3 className="text-xl font-bold text-[#F0EDE8] mb-6">
              Specification Details
            </h3>

            <div className="space-y-3.5 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-[#222226]/50">
                <span className="text-[#6B6965]">Product Name</span>
                <span className="text-[#F0EDE8] font-semibold">{PRODUCT.fullName} ({PRODUCT.name})</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#222226]/50">
                <span className="text-[#6B6965]">Runtime Version</span>
                <span className="text-[#F0EDE8]">v{PRODUCT.version}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#222226]/50">
                <span className="text-[#6B6965]">Language / Edition</span>
                <span className="text-[#F0EDE8]">Rust {PRODUCT.rustVersion} (Edition {PRODUCT.edition})</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#222226]/50">
                <span className="text-[#6B6965]">Canonical Provider</span>
                <span className="text-[#F0EDE8]">{PRODUCT.canonicalProvider}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#222226]/50">
                <span className="text-[#6B6965]">Organization</span>
                <span className="text-[#F0EDE8]">{PRODUCT.orgName}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[#6B6965]">Dual License</span>
                <span className="text-[#F0EDE8]">{PRODUCT.licenses.join(' / ')}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

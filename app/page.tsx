import React from 'react';
import { HeroSection } from '@/components/home/hero-section';
import { ProductWorkflow } from '@/components/home/product-workflow';
import { WhyM31A } from '@/components/home/why-m31a';
import { ManifestoPhilosophy } from '@/components/home/manifesto-philosophy';
import { RepositoryCapabilities } from '@/components/home/repository-capabilities';
import { ArchitectureDeepDive } from '@/components/home/architecture-deep-dive';
import { SecurityArchitecture } from '@/components/home/security-architecture';
import { TerminalNative } from '@/components/home/terminal-native';
import { InstallationSection } from '@/components/home/installation-section';
import { OpenSourceSection } from '@/components/home/open-source-section';
import { FinalCta } from '@/components/home/final-cta';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 01 · Hero Section (Product-first + Centerpiece Terminal Visualization) */}
      <HeroSection />

      {/* 02 · Product Demonstration / How M31A Works (INTENT → PLAN → EXECUTE → OBSERVE → VERIFY → RECOVER → COMPLETE) */}
      <ProductWorkflow />

      {/* 03 · Why M31A? (4 Differentiated Editorial Modules) */}
      <WhyM31A />

      {/* 04 · Signature Manifesto / Philosophy (THE MODEL PROPOSES. THE RUNTIME DECIDES.) */}
      <ManifestoPhilosophy />

      {/* 05 · Real Engineering Workflows (Built for repositories, not conversations) */}
      <RepositoryCapabilities />

      {/* 06 · Architecture Deep Dive (Under the interface is a runtime built for control: L0 to L9) */}
      <ArchitectureDeepDive />

      {/* 07 · Security Architecture (Security is part of execution, not an afterthought) */}
      <SecurityArchitecture />

      {/* 08 · Terminal-Native Experience (Real CLI commands and keyboard workflows) */}
      <TerminalNative />

      {/* 09 · Installation & Platform Qualification (curl, powershell, source, matrix) */}
      <InstallationSection />

      {/* 10 · Open Source & Technical Proof (View source on GitHub) */}
      <OpenSourceSection />

      {/* 11 · Final Conversion Moment */}
      <FinalCta />
    </div>
  );
}

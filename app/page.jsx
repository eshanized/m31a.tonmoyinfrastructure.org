import HeroSection from '@/components/hero/HeroSection';
import Introduction from '@/components/sections/Introduction';
import ProductSurfaces from '@/components/sections/ProductSurfaces';
import ExecutionWorkflow from '@/components/sections/ExecutionWorkflow';
import FeatureShowcase from '@/components/sections/FeatureShowcase';
import SecuritySection from '@/components/sections/SecuritySection';
import UseCases from '@/components/sections/UseCases';
import SDKSection from '@/components/sections/SDKSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import LatestUpdates from '@/components/sections/LatestUpdates';
import CommunitySection from '@/components/sections/CommunitySection';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata = {
  title: 'M31A — Autonomous Engineering Beyond Assistance',
  description:
    'M31A is an open-source autonomous coding system built from first principles as a modular 39-crate Rust workspace. Powered by NVIDIA NIM frontier intelligence and Linux Bubblewrap isolation.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Product Introduction: Meet M31A */}
      <Introduction />

      {/* 3. Product Surfaces */}
      <ProductSurfaces />

      {/* 4. Autonomous Engineering: Execution Lifecycle */}
      <ExecutionWorkflow />

      {/* 5. Autonomous Capabilities */}
      <FeatureShowcase />

      {/* 6. M31A Security Architecture */}
      <SecuritySection />

      {/* 7. Practical Engineering Use Cases */}
      <UseCases />

      {/* 8. SDK Ecosystem */}
      <SDKSection />

      {/* 9. Technology Foundation & 39 Crates */}
      <ArchitectureSection />

      {/* 10. Latest Releases & Updates */}
      <LatestUpdates />

      {/* 11. Open Source Community */}
      <CommunitySection />

      {/* 12. Final Call-to-Action */}
      <FinalCTA />
    </div>
  );
}

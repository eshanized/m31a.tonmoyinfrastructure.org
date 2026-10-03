import Link from 'next/link';
import { RoadmapMatrix } from '@/components/system/content-matrices';

export default function RoadmapPage() {
  return (
    <>
      <div className="border-b border-[#2A2721]">
        <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14">
          <p className="meta text-[#FF6B4A]">[08] ROADMAP — ENGINEERING PLAN</p>
          <h1 className="display-lg mt-3 max-w-3xl text-4xl text-[#ECE7DC] sm:text-5xl">
            Completed is distinct from planned.
          </h1>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[#A8A198]">
            Phase, status, objective, deliverables, dependencies. Statuses below are
            stated as they are — no startup-style timeline inflation.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6">
        <RoadmapMatrix />
        <div className="mt-8 flex flex-wrap gap-2 border-t border-[#2A2721] pt-6">
          <Link href="/changelog" className="btn-ghost !text-xs">VIEW CHANGELOG</Link>
          <a href="https://github.com/eshanized/M31A/issues" target="_blank" rel="noopener noreferrer" className="btn-quiet !text-xs">
            PROPOSE WORK VIA ISSUES ↗
          </a>
        </div>
      </div>
    </>
  );
}

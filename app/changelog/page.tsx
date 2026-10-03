import Link from 'next/link';
import { ChangelogTimeline, RoadmapMatrix } from '@/components/system/content-matrices';

export default function ChangelogPage() {
  return (
    <>
      <div className="border-b border-[#2A2721]">
        <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14">
          <p className="meta text-[#FF6B4A]">[07] CHANGELOG — RELEASE HISTORY</p>
          <h1 className="display-lg mt-3 max-w-3xl text-4xl text-[#ECE7DC] sm:text-5xl">
            What shipped, and what it changed.
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6">
        <ChangelogTimeline />
        <div className="mt-8 flex flex-wrap gap-2">
          <Link href="/roadmap" className="btn-ghost !text-xs">VIEW ROADMAP</Link>
          <Link href="/download" className="btn-quiet !text-xs">GET CURRENT RELEASE →</Link>
        </div>
      </div>
    </>
  );
}

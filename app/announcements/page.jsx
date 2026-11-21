import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import AnnouncementsList from '@/components/announcements/AnnouncementsList';
import announcementsData from '@/announcements.json';
import { Megaphone } from 'lucide-react';

export const metadata = {
  title: 'Announcements & Dispatches',
  description:
    'Official news, architectural dispatches, ecosystem partnerships, and release milestones for M31A.',
};

export default function AnnouncementsPage() {
  return (
    <div className="w-full bg-background py-12 md:py-16">
      <Container size="default">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="default" icon={Megaphone}>
              Official Dispatches
            </Badge>
            <Badge variant="default">
              M31A Ecosystem
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Announcements &amp; Dispatches
          </h1>

          <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
            Official announcements, release breakthroughs, security advisories, and ecosystem updates across the M31A autonomous runtime.
          </p>
        </div>

        {/* Dynamic Announcements Grid */}
        <AnnouncementsList announcements={announcementsData} />
      </Container>
    </div>
  );
}

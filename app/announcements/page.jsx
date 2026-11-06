import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import AnnouncementsList from '@/components/announcements/AnnouncementsList';
import announcementsData from '@/announcements.json';
import { Megaphone, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Announcements & Dispatches',
  description:
    'Official news, architectural dispatches, ecosystem partnerships, and release milestones for M31A.',
};

export default function AnnouncementsPage() {
  return (
    <div className="w-full bg-background py-16 md:py-24">
      <Container size="default">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="accent" icon={Megaphone}>
              Official Dispatches
            </Badge>
            <Badge variant="default" icon={Sparkles}>
              M31A Ecosystem
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground text-balance">
            Announcements &amp; Dispatches
          </h1>

          <p className="mt-6 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
            Official announcements, major release breakthroughs, security advisories, and developer ecosystem developments across the M31A autonomous runtime.
          </p>
        </div>

        {/* Dynamic Announcements Grid */}
        <AnnouncementsList announcements={announcementsData} />
      </Container>
    </div>
  );
}

import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import SecurityArchitecture from '@/components/demonstrations/SecurityArchitecture';

export default function SecuritySection() {
  return (
    <Section id="security" spacing="spacious" background="soft">
      <div className="max-w-3xl mb-12 md:mb-16">
        <Badge variant="crimson" className="mb-4">
          Non-Bypassable Containment
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground text-balance">
          Autonomy with boundaries.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance">
          Autonomous systems must not accidentally overwrite repository history, leak developer secrets, or corrupt parent host files. M31A enforces a defense-in-depth security model before, during, and after every tool invocation.
        </p>
      </div>

      <SecurityArchitecture />
    </Section>
  );
}

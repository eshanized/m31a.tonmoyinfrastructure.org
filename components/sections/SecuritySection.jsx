import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import SecurityArchitecture from '@/components/demonstrations/SecurityArchitecture';

export default function SecuritySection() {
  return (
    <Section id="security" spacing="default" background="soft">
      <div className="max-w-3xl mb-10 md:mb-12">
        <Badge variant="default" className="mb-3">
          Containment
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
          Autonomy with boundaries.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-foreground-muted leading-relaxed text-balance">
          Autonomous engineering requires non-bypassable constraints. M31A enforces a defense-in-depth security model before, during, and after every tool invocation.
        </p>
      </div>

      <SecurityArchitecture />
    </Section>
  );
}

import { home } from '../../data/content';
import { images } from '../../data/images';
import { Button } from '../ui/Button';
import { Picture } from '../ui/Picture';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function Story() {
  const { story } = home;

  return (
    <Section tone="paper">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <Picture src={images[story.image]} alt={story.imageAlt} ratio="aspect-[4/5]" radius="rounded-[var(--radius-xl)] rounded-tr-[140px]" zoom data-reveal />
          <div className="absolute -bottom-6 -right-2 rounded-lg bg-forest px-6 py-5 text-cream shadow-lift sm:right-8" data-reveal data-reveal-delay="150">
            <p className="font-display text-display-md leading-none">15</p>
            <p className="mt-1 text-caption text-cream/70">years at the tandoor</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Our story" title={story.title} text={story.text} />
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {story.points.map((point, index) => (
              <div key={point.title} data-reveal data-reveal-delay={index * 60} className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                <dt className="font-display text-display-sm text-forest">{point.title}</dt>
                <dd className="text-small text-muted">{point.text}</dd>
              </div>
            ))}
          </dl>
          <Button href={story.cta.href} variant="secondary" className="mt-8" arrow>
            {story.cta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}

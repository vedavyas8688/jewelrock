import { home } from '../../data/content';
import { gallery } from '../../data/pages';
import { Button } from '../ui/Button';
import { Picture } from '../ui/Picture';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

/** 3×2 editorial mosaic pulled from the gallery data (first six items). */
export function Moments() {
  const { moments } = home;
  const tiles = gallery.items.slice(0, 6);

  return (
    <Section className="overflow-hidden">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--spacing-header)+2rem)] lg:self-start">
          <SectionHeading eyebrow="A feast for the eyes" title={moments.title} text={moments.text} />
          <Button href={moments.cta.href} className="mt-6 sm:mt-8" arrow>
            {moments.cta.label}
          </Button>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {tiles.map((tile, index) => (
            <li
              key={tile.alt}
              data-reveal
              data-reveal-delay={index * 60}
              className={index === 0 ? 'col-span-2 sm:col-span-1 sm:row-span-2' : index === 5 ? 'col-span-2 sm:col-span-1' : undefined}
            >
              <a href="/gallery" className="block">
                <Picture
                  src={tile.src}
                  alt={tile.alt}
                  ratio={index === 0 ? 'aspect-[16/10] sm:aspect-[4/5]' : 'aspect-[4/3] sm:aspect-[4/5]'}
                  radius="rounded-md sm:rounded-lg"
                  zoom
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

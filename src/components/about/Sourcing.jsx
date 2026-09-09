import { about } from '../../data/content';
import { images } from '../../data/images';
import { useTilt } from '../../hooks/useTilt';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

/** Four 3D-tilt cards with a moving glare and image reveal on hover. */
export function Sourcing() {
  const { sourcing } = about;
  const tilt = useTilt(7);

  return (
    <Section tone="paper">
      <SectionHeading eyebrow={sourcing.eyebrow} title={sourcing.title} text={sourcing.text} align="center" />
      <ul className="tilt-grid mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {sourcing.items.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={item.title} data-reveal data-reveal-delay={index * 80} className="tilt-card group relative aspect-[3/4] overflow-hidden rounded-xl bg-forest text-cream shadow-soft" {...tilt}>
              <img src={images[item.image]} alt="" loading="lazy" className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-700 ease-out-soft group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/70 to-forest/25 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-forest-deep/55 to-transparent" />
              <span className="tilt-glare pointer-events-none absolute inset-0" aria-hidden="true" />

              <div className="relative flex h-full flex-col p-7">
                <span className="grid size-12 place-items-center rounded-pill border border-line-dark text-gold-light transition-[transform,background-color] duration-500 group-hover:-translate-y-1 group-hover:bg-forest-deep/60">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="mt-auto">
                  <span className="block text-caption text-cream/50">0{index + 1}</span>
                  <h3 className="mt-2 text-display-sm text-cream">{item.title}</h3>
                  <p className="mt-3 text-small text-cream/75">{item.text}</p>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

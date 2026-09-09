import { Leaf, Soup, Users } from 'lucide-react';
import { about } from '../../data/content';
import { images } from '../../data/images';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import './philosophy.css';

const pointIcons = [Leaf, Soup, Users];

const ingredientNotes = [
  { image: 'spices', className: 'left-[52%] top-[0%]' },
  { image: 'farm', className: 'left-[67%] top-[25%]' },
  { image: 'spices', className: 'left-[57%] top-[56%]' },
];

export function Philosophy() {
  const { philosophy } = about;

  return (
    <Section tone="paper" className="relative overflow-hidden">
      <div className="relative grid items-center gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-4 xl:gap-8">
        <div>
          <div className="max-w-fit" data-reveal="up">
            <Eyebrow className="ph-eyebrow">How we cook</Eyebrow>
          </div>

          <h2
            className="mt-6 max-w-[13ch] font-display text-[clamp(2.25rem,3.7vw,3.65rem)] font-bold leading-[1.04] text-forest"
            data-reveal="up"
            data-reveal-delay={80}
          >
            {philosophy.title}
          </h2>

          <p className="mt-5 max-w-[31rem] text-base leading-7 text-muted" data-reveal="up" data-reveal-delay={160}>
            {philosophy.text}
          </p>

          <ol className="mt-8 grid max-w-lg gap-6">
            {philosophy.points.map((point, index) => {
              const Icon = pointIcons[index] ?? Leaf;

              return (
                <li
                  key={point.title}
                  data-reveal="up"
                  data-reveal-delay={240 + index * 110}
                  className="ph-point group grid grid-cols-[62px_1px_minmax(0,1fr)] items-center gap-x-5 sm:grid-cols-[70px_1px_minmax(0,1fr)]"
                >
                  <span className="ph-icon grid aspect-square w-full place-items-center rounded-full border border-gold/65 text-gold">
                    <Icon
                      size={30}
                      strokeWidth={1.35}
                      aria-hidden="true"
                      className="transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-105"
                    />
                  </span>
                  <span
                    className="ph-rule h-full min-h-[84px] w-px bg-gold/55"
                    style={{ '--ph-delay': `${500 + index * 150}ms` }}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <h3 className="font-display text-[1.32rem] font-bold leading-tight text-forest">{point.title}</h3>
                    <p className="mt-1.5 max-w-[34ch] text-small leading-6 text-muted">{point.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div
          className="relative mx-auto w-full lg:ml-auto lg:mr-0 lg:translate-x-[4%]"
          style={{ maxWidth: 'min(100%, 82vh, 720px)' }}
          data-reveal="scale"
        >
          <div className="relative aspect-square w-full">
            <span className="ph-ring absolute left-[-0.5%] top-[1%] aspect-square w-[86%] rounded-full border-2 border-gold/65" aria-hidden="true" />

            <div className="ph-photo absolute left-[3%] top-[4%] z-0 aspect-square w-[78%] overflow-hidden rounded-full">
              <img
                src={images[philosophy.image]}
                alt={philosophy.imageAlt}
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute inset-0 bg-gradient-to-tr from-forest/15 via-transparent to-transparent" aria-hidden="true" />
            </div>

            {ingredientNotes.map((note, index) => (
              <div
                key={`${note.image}-${index}`}
                className={`ph-note absolute flex w-[25%] items-center ${note.className}`}
                data-reveal="right"
                data-reveal-delay={300 + index * 120}
              >
                <span className="ph-medallion aspect-square w-full shrink-0 overflow-hidden rounded-full border-[7px] border-paper bg-paper">
                  <img src={images[note.image]} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </span>
              </div>
            ))}

            <p className="ph-sign absolute left-[4%] top-[89%] z-20 w-[48%] rotate-[-8deg] whitespace-nowrap font-display text-[clamp(1rem,1.65vw,1.45rem)] font-bold leading-[0.95] text-gold">
              From Our Land
              <span className="block pl-[18%]">to Your Table</span>
              <svg className="ph-underline ml-[50%] mt-1 block h-2 w-[32%] text-gold" viewBox="0 0 120 8" fill="none" aria-hidden="true">
                <path d="M2 5 C 30 2, 70 6, 118 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

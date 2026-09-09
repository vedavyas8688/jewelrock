import { useState } from 'react';
import { home } from '../../data/content';
import { images } from '../../data/images';
import { formatPrice } from '../../lib/format';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { cx } from '../../lib/cx';

/**
 * Expanding panels: five tall photo strips; the active one grows to show copy.
 * Hover on desktop, tap on touch. Stacks to full-width rows on mobile.
 */
export function BarSpotlight() {
  const { bar } = home;
  const [active, setActive] = useState(0);

  return (
    <Section tone="night" id="bar-spotlight">
      <SectionHeading
        eyebrow={bar.eyebrow}
        title={bar.title}
        text={bar.text}
        light
        align="split"
        action={
          <Button href={bar.cta.href} light variant="secondary" arrow>
            {bar.cta.label}
          </Button>
        }
      />

      <ul className="expand-panels mt-12 flex flex-col gap-3 lg:h-[520px] lg:flex-row" data-reveal>
        {bar.items.map((item, index) => {
          const open = index === active;
          return (
            <li
              key={item.name}
              className={cx('expand-panel relative overflow-hidden rounded-xl', open && 'is-open')}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <button type="button" onClick={() => setActive(index)} aria-expanded={open} className="absolute inset-0 z-20 h-full w-full text-left" aria-label={`Show ${item.name}`}>
                <span className="sr-only">{item.name}</span>
              </button>
              <img src={images[item.image]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out-soft" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-forest-deep/10" />

              {/* Collapsed label (vertical on desktop) */}
              <span className={cx('panel-label absolute left-5 top-5 z-10 flex items-center gap-3 text-cream transition-opacity duration-300 lg:left-1/2 lg:top-auto lg:bottom-6 lg:-translate-x-1/2', open && 'lg:opacity-0')}>
                <span className="font-display text-display-sm lg:[writing-mode:vertical-rl] lg:rotate-180">{item.name}</span>
              </span>

              {/* Expanded copy */}
              <div className={cx('panel-copy absolute inset-x-0 bottom-0 z-10 p-6 transition-all duration-500 ease-out-soft lg:p-8', open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 lg:pointer-events-none')}>
                <p className="text-caption font-medium uppercase tracking-[0.16em] text-gold-light">{item.base}</p>
                <h3 className="mt-2 text-display-md text-cream">{item.name}</h3>
                <p className="mt-3 max-w-[40ch] text-small text-cream/75">{item.note}</p>
                <p className="mt-4 font-display text-display-sm text-gold-light">{formatPrice(item.price)}</p>
              </div>

              <span className="absolute right-5 top-5 z-10 font-display text-caption text-cream/50">0{index + 1}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

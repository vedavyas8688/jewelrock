import { useEffect, useRef, useState } from 'react';
import { home } from '../../data/content';
import { images } from '../../data/images';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { cx } from '../../lib/cx';

/**
 * Tabbed occasions: pill tabs with a sliding indicator, image cross-fade + Ken Burns,
 * copy that swaps with a soft slide. Keyboard: arrow keys move between tabs.
 */
export function Occasions() {
  const { occasions } = home;
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const current = occasions.items[active];

  useEffect(() => {
    const measure = () => {
      const tab = tabRefs.current[active];
      if (tab) setIndicator({ left: tab.offsetLeft, width: tab.offsetWidth });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active]);

  const onKeyDown = (event) => {
    const total = occasions.items.length;
    if (event.key === 'ArrowRight') setActive((index) => (index + 1) % total);
    if (event.key === 'ArrowLeft') setActive((index) => (index - 1 + total) % total);
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      requestAnimationFrame(() => tabRefs.current[active]?.focus());
    }
  };

  return (
    <Section tone="deep" id="occasions">
      <SectionHeading eyebrow={occasions.eyebrow} title={occasions.title} text={occasions.text} align="center" />

      {/* Tabs */}
      <div className="mt-10 flex justify-center" data-reveal>
        <div role="tablist" aria-label="Occasions" onKeyDown={onKeyDown} className="relative inline-flex max-w-full gap-1 overflow-x-auto rounded-pill border border-line bg-paper p-1 hide-scrollbar">
          <span
            aria-hidden="true"
            className="absolute top-1 bottom-1 rounded-pill bg-forest transition-[left,width] duration-300 ease-out-soft"
            style={{ left: indicator.left, width: indicator.width }}
          />
          {occasions.items.map((item, index) => {
            const Icon = item.icon;
            const selected = index === active;
            return (
              <button
                key={item.id}
                ref={(node) => (tabRefs.current[index] = node)}
                role="tab"
                type="button"
                id={`occasion-tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`occasion-panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                className={cx(
                  'relative z-10 inline-flex items-center gap-2 whitespace-nowrap rounded-pill px-4 py-2.5 text-small font-medium transition-colors duration-300',
                  selected ? 'text-cream' : 'text-muted hover:text-forest',
                )}
              >
                <Icon size={15} strokeWidth={1.8} aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Panel */}
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16" data-reveal data-reveal-delay="100">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-xl)] rounded-bl-[140px] bg-cream-deep shadow-lift">
          {occasions.items.map((item, index) => (
            <img
              key={item.id}
              src={images[item.image]}
              alt={index === active ? item.imageAlt : ''}
              loading="lazy"
              className={cx('absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out-soft', index === active ? 'kenburns opacity-100' : 'opacity-0')}
            />
          ))}
          <span className="absolute left-6 top-6 rounded-pill bg-cream/90 px-4 py-2 text-caption font-medium text-forest backdrop-blur">
            {current.label}
          </span>
        </div>

        <div key={current.id} id={`occasion-panel-${current.id}`} role="tabpanel" aria-labelledby={`occasion-tab-${current.id}`} className="tab-swap">
          <h3 className="text-display-md">{current.title}</h3>
          <p className="mt-5 max-w-prose text-body text-muted">{current.text}</p>
          <p className="mt-8 text-caption font-medium uppercase tracking-[0.16em] text-gold">The table usually orders</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {current.picks.map((pick, index) => (
              <li key={pick} className="tab-swap-item rounded-pill border border-line bg-paper px-4 py-2 text-small text-forest" style={{ '--i': index }}>
                {pick}
              </li>
            ))}
          </ul>
          <Button href={occasions.cta.href} className="mt-10" arrow>
            {occasions.cta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}

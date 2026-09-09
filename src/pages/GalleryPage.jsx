import { useCallback, useMemo, useState } from 'react';
import { gallery } from '../data/pages';
import { PageHero } from '../components/ui/PageHero';
import { Picture } from '../components/ui/Picture';
import { Button } from '../components/ui/Button';
import { Lightbox } from '../components/gallery/Lightbox';
import { cx } from '../lib/cx';

const spanClass = {
  large: 'col-span-2 row-span-2',
  wide: 'col-span-2',
  tall: 'row-span-2',
};

export function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(-1);

  const items = useMemo(() => (filter === 'all' ? gallery.items : gallery.items.filter((item) => item.category === filter)), [filter]);
  const step = useCallback((delta) => setOpen((current) => (current + delta + items.length) % items.length), [items.length]);
  const close = useCallback(() => setOpen(-1), []);

  return (
    <>
      <PageHero eyebrow="Gallery" title={gallery.title} text={gallery.text} />

      <section className="container-site pb-section">
        <div className="hide-scrollbar -mx-[var(--spacing-gutter)] flex gap-2 overflow-x-auto px-[var(--spacing-gutter)] pb-2" role="group" aria-label="Filter gallery">
          {gallery.filters.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={filter === option.id}
              onClick={() => setFilter(option.id)}
              className={cx(
                'shrink-0 rounded-pill border px-4 py-2 text-small transition-colors duration-150',
                filter === option.id ? 'border-forest bg-forest text-cream' : 'border-line text-ink/80 hover:border-forest hover:text-forest',
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        <ul key={filter} className="mt-8 grid grid-flow-dense auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:auto-rows-[220px]">
          {items.map((item, index) => (
            <li key={item.alt} data-reveal data-reveal-delay={(index % 6) * 50} className={cx(filter === 'all' && spanClass[item.span])}>
              <button type="button" onClick={() => setOpen(index)} className="group block h-full w-full text-left" aria-label={`Open ${item.alt}`}>
                <Picture src={item.src} alt={item.alt} ratio="h-full" radius="rounded-lg" zoom className="h-full">
                </Picture>
              </button>
            </li>
          ))}
        </ul>

        {items.length === 0 ? <p className="mt-10 text-center text-muted">No photos in this category yet.</p> : null}
      </section>

      <section className="bg-forest py-section-tight text-cream on-dark">
        <div className="container-site flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-display-md text-cream">{gallery.cta.title}</h2>
            <p className="mt-2 text-body text-cream/75">{gallery.cta.text}</p>
          </div>
          <Button href={gallery.cta.href} light size="lg" arrow>
            {gallery.cta.label}
          </Button>
        </div>
      </section>

      <Lightbox items={items} index={open} onClose={close} onStep={step} />
    </>
  );
}

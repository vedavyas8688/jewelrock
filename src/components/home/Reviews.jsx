import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { home } from '../../data/content';
import { images } from '../../data/images';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Stars } from '../ui/Stars';
import { cx } from '../../lib/cx';

export function Reviews() {
  const { reviews } = home;
  const [index, setIndex] = useState(0);
  const total = reviews.items.length;
  const perView = 2;
  const pages = Math.ceil(total / perView);
  const go = (delta) => setIndex((current) => (current + delta + pages) % pages);

  useEffect(() => {
    if (pages < 2) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % pages);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [pages]);

  return (
    <Section tone="forest">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[1fr_minmax(0,1.4fr)] lg:gap-16">
        <div className="relative hidden overflow-hidden rounded-[var(--radius-xl)] rounded-br-[180px] lg:block">
          <img src={images.occasion} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-forest-deep/35" />
          <p className="absolute bottom-10 left-8 max-w-[10ch] font-display text-display-lg text-cream/90">Good food, brighter people.</p>
        </div>

        <div className="min-w-0">
          <SectionHeading
            eyebrow="Our guests say"
            title={reviews.title}
            text={reviews.text}
            light
            align="split"
            action={
              <div className="flex gap-2">
                <button type="button" onClick={() => go(-1)} aria-label="Previous reviews" className="grid size-11 place-items-center rounded-pill border border-line-dark text-cream transition hover:border-gold-light hover:text-gold-light">
                  <ChevronLeft size={18} />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next reviews" className="grid size-11 place-items-center rounded-pill bg-cream text-forest transition hover:bg-white">
                  <ChevronRight size={18} />
                </button>
              </div>
            }
          />

          <div className="mt-10 overflow-hidden">
            <ul
              className="flex transition-transform duration-700 ease-out-soft"
              style={{ transform: `translateX(-${index * 100}%)` }}
              aria-live="polite"
            >
              {Array.from({ length: pages }).map((_, pageIndex) => (
                <li key={pageIndex} className="grid w-full shrink-0 gap-4 pr-4 sm:grid-cols-2" aria-hidden={pageIndex !== index}>
                  {reviews.items.slice(pageIndex * perView, pageIndex * perView + perView).map((review) => (
                    <blockquote key={review.name} className="flex min-h-[234px] flex-col rounded-lg bg-paper p-6 text-ink shadow-soft">
                      <div className="flex items-center gap-3">
                        <img src={images[review.avatar]} alt="" width={40} height={40} loading="lazy" className="size-10 rounded-pill object-cover" />
                        <Stars count={review.rating} />
                      </div>
                      <p className="mt-5 text-body leading-7 text-ink/85">"{review.text}"</p>
                      <footer className="mt-auto pt-6 text-small">
                        <span className="font-semibold text-forest">- {review.name}</span>
                        <span className="text-muted">, {review.place}</span>
                      </footer>
                    </blockquote>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex gap-2" aria-hidden="true">
            {Array.from({ length: pages }).map((_, dot) => (
              <span key={dot} className={cx('h-1.5 rounded-pill transition-all duration-300', dot === index ? 'w-6 bg-gold-light' : 'w-1.5 bg-cream/30')} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

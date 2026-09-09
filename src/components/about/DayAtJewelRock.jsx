import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { about } from '../../data/content';
import { images } from '../../data/images';
import { Picture } from '../ui/Picture';
import { SectionHeading } from '../ui/SectionHeading';
import { cx } from '../../lib/cx';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const travelEnd = 0.86;
const edgeGap = 0;

export function DayAtJewelRock() {
  const { day } = about;
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const updateActive = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / scrollable, 0, 1);
      const travelProgress = clamp(progress / travelEnd, 0, 1);
      const nextActive = Math.round(travelProgress * (day.items.length - 1));
      const viewport = viewportRef.current;
      const track = trackRef.current;
      const cards = track ? Array.from(track.children) : [];
      const last = cards[cards.length - 1];

      if (viewport && last) {
        const maxOffset = Math.max(0, last.offsetLeft + last.offsetWidth - viewport.clientWidth + edgeGap);
        setOffset(maxOffset * travelProgress);
      }

      setActive(nextActive);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [day.items.length]);

  const goTo = (index) => {
    const section = sectionRef.current;
    if (!section) return;

    const safeIndex = clamp(index, 0, day.items.length - 1);
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const step = ((section.offsetHeight - window.innerHeight) * travelEnd) / Math.max(1, day.items.length - 1);
    window.scrollTo({ top: sectionTop + step * safeIndex, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-forest text-cream on-dark"
      style={{ minHeight: `${day.items.length * 70}vh` }}
    >
      <div className="sticky top-header flex h-[calc(100svh-var(--spacing-header))] flex-col justify-center overflow-hidden py-5 sm:py-8 lg:py-10">
        <div className="container-site">
          <SectionHeading
            eyebrow={day.eyebrow}
            title={day.title}
            text={day.text}
            light
            align="split"
            action={
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => goTo(active - 1)}
                  aria-label="Previous"
                  className="grid size-11 place-items-center rounded-pill border border-line-dark text-cream hover:border-gold-light hover:text-gold-light"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(active + 1)}
                  aria-label="Next"
                  className="grid size-11 place-items-center rounded-pill bg-cream text-forest hover:bg-white"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            }
          />
        </div>

        <div ref={viewportRef} className="mt-6 overflow-hidden sm:mt-8 lg:mt-10">
          <ol
            ref={trackRef}
            className="day-track flex gap-5 px-5 pb-1 transition-transform duration-slow ease-out-soft sm:px-8 lg:px-[max(20px,calc((100vw-var(--container-site))/2))]"
            style={{
              transform: `translateX(-${offset}px)`,
            }}
          >
            {day.items.map((item, index) => (
              <li
                key={item.time}
                onClick={() => goTo(index)}
                className={cx('day-card w-[calc(100vw-40px)] shrink-0 cursor-pointer sm:w-[360px]', index === active && 'is-active')}
              >
                <div className="day-card-inner h-[312px] overflow-hidden rounded-xl bg-forest-deep shadow-lift min-[400px]:h-[332px] sm:h-[388px]">
                  <div className="day-card-media">
                    <Picture
                      src={images[item.image]}
                      alt=""
                      ratio=""
                      radius="rounded-none"
                      className="h-full w-full"
                      imgClassName="day-card-image"
                    />
                  </div>
                  <div className="day-card-copy p-4 sm:p-5">
                    <p className="font-display text-display-sm text-gold-light">
                      {item.time}
                    </p>
                    <h3 className="mt-2 font-body text-body font-semibold text-cream">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-small text-cream/70">{item.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

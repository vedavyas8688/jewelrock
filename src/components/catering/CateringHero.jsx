import { ArrowRight } from 'lucide-react';
import { images } from '../../data/images';

export function CateringHero() {
  return (
    <section className="catering-hero relative min-h-[calc(100svh-var(--spacing-header))] overflow-hidden bg-forest text-cream on-dark lg:h-[calc(100svh-var(--spacing-header))] lg:min-h-[620px]">
      <img
        src={images.cateringBuffetHero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,43,36,0.96)_0%,rgba(8,43,36,0.9)_48%,rgba(8,43,36,0.42)_100%)] sm:bg-[linear-gradient(90deg,rgba(8,43,36,0.95)_0%,rgba(8,43,36,0.86)_28%,rgba(8,43,36,0.38)_52%,rgba(8,43,36,0.08)_100%)]" />

      <div className="container-site relative z-10 flex min-h-[calc(100svh-var(--spacing-header))] items-center py-8 sm:py-10 lg:h-full lg:py-12">
        <div className="w-full max-w-[39rem]">
          <p className="text-[0.62rem] font-bold uppercase leading-none tracking-[0.24em] text-gold-light sm:text-eyebrow sm:tracking-[0.28em]">
            A feast for every mood
          </p>

          <h1 className="mt-4 font-display text-[clamp(3rem,15vw,4.6rem)] font-semibold leading-[0.9] text-cream sm:mt-6 sm:text-[clamp(3.6rem,6.4vw,7rem)]">
            The
            <span className="block text-gold-light">Buffet</span>
            <span className="block">Experience</span>
          </h1>

          <span className="mt-5 block h-1 w-20 bg-gold-light sm:mt-6 sm:w-28" aria-hidden="true" />

          <p className="mt-5 max-w-[28rem] text-[clamp(1rem,4.6vw,1.25rem)] leading-snug text-cream sm:mt-7 sm:max-w-[31rem] sm:text-[clamp(1.15rem,1.45vw,1.5rem)]">
            A world of flavours. Endless choices.
            <span className="block">One unforgettable experience.</span>
          </p>

          <a
            href="/reservations"
            className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-pill bg-gold-light px-6 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-forest shadow-lift transition hover:bg-cream sm:mt-8 sm:min-h-14 sm:px-8 sm:text-[0.9rem] sm:tracking-[0.16em]"
          >
            Reserve a table
            <ArrowRight size={18} aria-hidden="true" />
          </a>

          <dl className="mt-7 grid max-w-[37rem] grid-cols-1 gap-4 text-cream min-[460px]:grid-cols-3 min-[460px]:items-start min-[460px]:gap-0 min-[460px]:text-center sm:mt-9">
            <div className="px-0 min-[460px]:px-2 min-[460px]:text-left sm:px-3">
              <dt className="font-display text-[clamp(1.25rem,7vw,1.7rem)] leading-none sm:text-[clamp(1.55rem,2.4vw,2.25rem)]">50+</dt>
              <dd className="mt-1.5 text-[0.72rem] leading-tight sm:mt-2 sm:text-body">Curated Dishes</dd>
            </div>
            <div className="border-t border-cream/30 px-0 pt-4 min-[460px]:border-x min-[460px]:border-t-0 min-[460px]:px-2 min-[460px]:pt-0 sm:px-3">
              <dt className="font-display text-[clamp(1.25rem,7vw,1.7rem)] leading-none sm:text-[clamp(1.55rem,2.4vw,2.25rem)]">Live</dt>
              <dd className="mt-1.5 text-[0.72rem] leading-tight sm:mt-2 sm:text-body">Culinary Stations</dd>
            </div>
            <div className="border-t border-cream/30 px-0 pt-4 min-[460px]:border-t-0 min-[460px]:px-2 min-[460px]:pt-0 sm:px-3">
              <dt className="font-display text-[clamp(1.25rem,7vw,1.7rem)] leading-none sm:text-[clamp(1.55rem,2.4vw,2.25rem)]">Premium</dt>
              <dd className="mt-1.5 text-[0.72rem] leading-tight sm:mt-2 sm:text-body">Dining Ambience</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

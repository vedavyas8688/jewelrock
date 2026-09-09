import { ArrowRight, Award, ChefHat } from 'lucide-react';
import { images } from '../../data/images';
import { site } from '../../data/site';
import { Eyebrow } from '../ui/Eyebrow';

export function HeroSection({ config, id = 'home' }) {
  const { brand, hero, images } = config;
  const brandLetters = brand.name.toUpperCase().split('');

  return (
    <section id={id} className="relative overflow-hidden bg-[var(--color-background)] lg:h-[calc(100vh-84px)] lg:min-h-[720px]">
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-line" aria-hidden="true" />
      <div className="relative grid w-full min-w-0 gap-10 px-5 pb-14 pt-12 sm:px-8 sm:pt-16 lg:h-full lg:min-h-0 lg:grid-cols-[46vw_minmax(540px,1fr)_150px] lg:gap-0 lg:px-0 lg:py-0">
        <div className="hero-copy-column flex min-w-0 flex-col justify-between lg:h-full lg:min-h-0 lg:pb-[5.8vh] lg:pl-[max(var(--spacing-gutter),calc((100vw-var(--container-site))/2))] lg:pr-12 lg:pt-[14.5vh]">
          <div
            data-reveal="left"
            className="mobile-copy-lock w-full min-w-0 max-w-[690px]"
          >
            <div className="mb-8 flex items-center gap-8">
              <Eyebrow>
                {hero.eyebrow}
              </Eyebrow>
            </div>
            <h1
              aria-label={hero.title}
              className="max-w-full font-body text-[clamp(2.45rem,11vw,3.65rem)] font-bold leading-[1.06] text-[var(--color-primary)] lg:text-[64px] 2xl:text-[70px]"
            >
              {hero.titleLines.map((line) => (
                <span key={line} className="block lg:whitespace-nowrap" aria-hidden="true">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mobile-copy-lock mt-6 w-full max-w-[650px] text-base leading-7 text-[var(--color-ink)] sm:mt-8 sm:text-[20px] sm:leading-9">
              {hero.description}
            </p>
            <a href="/reservations" className="primary-button mt-10 min-h-[44px] px-6 text-sm sm:px-6">
              {hero.cta}
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mobile-copy-lock grid gap-8 pt-9 md:grid-cols-2 lg:pt-7">
            {hero.stats.map((stat) => (
              <article
                key={stat.title}
                data-reveal="left"
                className="grid min-w-0 grid-cols-[48px_minmax(0,1fr)] gap-5"
              >
                <div className="grid size-12 place-items-center border border-[var(--color-primary)] text-[var(--color-primary)]">
                  <stat.icon size={24} strokeWidth={1.6} />
                </div>
                <div className="min-w-0">
                  <h2 className="font-body text-lg font-bold leading-7 text-[var(--color-primary)]">
                    {stat.title}
                  </h2>
                  <p className="mt-3 max-w-[280px] text-sm leading-6 text-[var(--color-ink)]">
                    {stat.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          data-reveal="scale"
          data-reveal-delay="120ms"
          className="relative flex min-w-0 items-start lg:h-full lg:min-h-0"
        >
          <img
            src={images.hero}
            alt="Vegetarian plate in the JewelRock dining room"
            className="hero-media image-zoom relative z-10 h-[340px] w-full object-cover [border-top-left-radius:96px] sm:h-[500px] sm:[border-top-left-radius:150px] lg:h-[calc(100vh-84px)] lg:min-h-0 lg:[border-top-left-radius:300px]"
          />
        </div>

        <aside
          data-reveal="right"
          data-reveal-delay="220ms"
          className="hidden h-full min-h-0 flex-col items-center justify-center px-7 text-[var(--color-primary)] lg:flex"
          aria-label={`${brand.name} brand mark`}
        >
          <div className="font-display text-[54px] font-bold leading-[0.98]" aria-hidden="true">
            {brandLetters.map((letter, index) => (
              <span key={`${letter}-${index}`} className="block text-center">
                {letter}
              </span>
            ))}
          </div>
          <span className="my-5 h-10 w-px bg-[var(--color-primary)]" aria-hidden="true" />
          <p className="grid gap-2 text-center text-sm font-bold uppercase leading-5">
            {brand.railTagline.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </p>
        </aside>
      </div>
    </section>
  );
}

export function AboutHero() {
  const config = {
    brand: {
      name: site.name,
      railTagline: ['Since', '1990', 'Mysuru'],
    },
    hero: {
      eyebrow: 'Mysuru dining since 1990',
      title: 'A True Jewel for Mysoreans',
      titleLines: ['A True Jewel', 'for Mysoreans'],
      description: 'JewelRock opened its doors on August 15, 1990, bringing North Indian, Chinese and tandoor favourites together with a well-stocked mezzanine bar.',
      cta: 'Reserve a Table',
      stats: [
        { icon: Award, title: 'Serving Since 1990', text: 'A long-loved dining room built for Mysuru families, regulars and celebrations.' },
        { icon: ChefHat, title: 'Multi-Cuisine Specialists', text: 'North Indian, Chinese, tandoor, cocktails and mocktails under one JewelRock roof.' },
      ],
    },
    images: {
      hero: images.hero,
    },
  };

  return (
    <div
      style={{
        '--color-background': 'var(--color-cream)',
        '--color-primary': 'var(--color-forest)',
        '--color-accent': 'var(--color-gold)',
      }}
    >
      <HeroSection config={config} id="about-hero" />
    </div>
  );
}

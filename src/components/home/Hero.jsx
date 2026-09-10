import { home } from '../../data/content';
import { images } from '../../data/images';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';

export function Hero() {
  const { hero } = home;

  return (
    <section className="relative overflow-hidden bg-cream" aria-labelledby="hero-title">
      <div className="container-site grid items-center gap-10 py-10 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:py-0">
        <div className="hero-in relative z-10 lg:py-24">
          <Eyebrow className="mb-6">{hero.eyebrow}</Eyebrow>
          <h1 id="hero-title" className="text-display-xl max-w-[12ch]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[52ch] text-lede text-muted">{hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href} size="lg" arrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} size="lg" variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Photo: curved on the inside edge, bleeds to the right on desktop */}
        <div className="relative lg:-mr-[calc((100vw-var(--container-site))/2)] lg:min-h-[640px] lg:h-[calc(100svh-var(--spacing-header))] lg:max-h-[820px]">
          <div className="hero-in relative h-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-xl)] sm:aspect-[16/10] lg:absolute lg:inset-0 lg:aspect-auto lg:rounded-none lg:rounded-l-[220px]">
              <img
                src={images[hero.image]}
                alt={hero.imageAlt}
                fetchPriority="high"
                decoding="sync"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-cream/40 lg:via-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

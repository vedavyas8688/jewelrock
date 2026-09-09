import { images } from '../../data/images';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { Section } from '../ui/Section';

/**
 * Dark call-to-action card with a curved photo.
 * Reused on Home, About and Gallery.
 */
export function ReserveBanner({ eyebrow = 'Ready for a great meal?', title, text, primaryCta, secondaryCta, image, imageAlt }) {
  return (
    <Section tight>
      <div data-reveal className="on-dark grid overflow-hidden rounded-[var(--radius-xl)] bg-forest text-cream lg:grid-cols-[1fr_0.9fr]">
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-[14ch] text-display-lg text-cream">{title}</h2>
          <p className="mt-5 max-w-prose text-lede text-cream/75">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primaryCta.href} light size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} light variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
        <div className="relative min-h-[260px] overflow-hidden lg:min-h-0 lg:rounded-l-[180px]">
          <img src={images[image]} alt={imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </Section>
  );
}

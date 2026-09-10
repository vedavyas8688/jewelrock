import { Eyebrow } from './Eyebrow';
import { Picture } from './Picture';
import { cx } from '../../lib/cx';

/**
 * Standard inner-page opener: eyebrow, H1, lede, optional image on the right.
 * With image → split layout. Without → centred text.
 */
export function PageHero({ eyebrow, title, text, image, imageAlt, children, tone = 'cream' }) {
  const hasImage = Boolean(image);

  return (
    <section className={cx(tone === 'cream' ? 'bg-cream' : 'bg-cream-deep', 'pt-8 pb-section-tight sm:pt-12 md:pt-16')}>
      <div
        className={cx(
          'container-site hero-in',
          hasImage ? 'grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16' : 'mx-auto max-w-3xl text-center',
        )}
      >
        <div className={cx(!hasImage && 'flex flex-col items-center')}>
          {eyebrow ? <Eyebrow className="mb-5">{eyebrow}</Eyebrow> : null}
          <h1 className="text-display-xl">{title}</h1>
          {text ? <p className="mt-6 max-w-prose text-lede text-muted">{text}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        {hasImage ? (
          <Picture src={image} alt={imageAlt} ratio="aspect-[5/4] lg:aspect-[4/3]" radius="rounded-[var(--radius-xl)] lg:rounded-tl-[160px]" priority />
        ) : null}
      </div>
    </section>
  );
}

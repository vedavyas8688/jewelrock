import { ArrowRight } from 'lucide-react';
import { home } from '../../data/content';
import { images } from '../../data/images';
import { formatPrice } from '../../lib/format';
import { Button } from '../ui/Button';
import { DietDot } from '../ui/DietDot';
import { Picture } from '../ui/Picture';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function Signature() {
  const { signature } = home;
  const { featured } = signature;

  return (
    <Section id="signature">
      <SectionHeading
        title={signature.title}
        text={signature.text}
        align="split"
        action={
          <Button href={signature.cta.href} variant="secondary" arrow>
            {signature.cta.label}
          </Button>
        }
      />

      <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[1.4fr_minmax(0,1fr)]">
        {/* Featured */}
        <article data-reveal className="grid min-w-0 overflow-hidden rounded-xl bg-paper shadow-soft md:grid-cols-[minmax(0,1fr)_1.1fr]">
          <div className="flex min-w-0 flex-col p-6 sm:p-8 md:p-10">
            <p className="flex items-center gap-2 text-caption font-medium text-muted">
              <DietDot diet={featured.diet} size="sm" />
              {featured.category}
            </p>
            <h3 className="mt-4 text-display-md">{featured.name}</h3>
            <p className="mt-4 text-small text-muted">{featured.text}</p>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
              <span className="font-display text-display-sm text-gold">{formatPrice(featured.price)}</span>
              <Button href="/reservations" size="sm" arrow>
                Reserve
              </Button>
            </div>
          </div>
          <Picture src={images[featured.image]} alt={featured.imageAlt} ratio="aspect-[4/3] md:aspect-auto md:min-h-full" radius="rounded-none" zoom />
        </article>

        {/* Rows */}
        <ul className="flex min-w-0 flex-col divide-y divide-line rounded-xl border border-line bg-paper px-5 shadow-soft">
          {signature.items.map((item, index) => (
            <li key={item.name} data-reveal data-reveal-delay={index * 70}>
              <a href="/menu" className="group flex items-center gap-4 py-4">
                <Picture src={images[item.image]} alt="" ratio="aspect-square" radius="rounded-md" className="w-20 shrink-0 md:w-24" zoom />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 text-caption text-muted">
                    <DietDot diet={item.diet} size="sm" />
                    {item.category}
                  </span>
                  <span className="mt-1 block font-display text-display-sm text-forest">{item.name}</span>
                  <span className="mt-1 block text-small font-medium text-gold">{formatPrice(item.price)}</span>
                </span>
                <ArrowRight size={18} className="shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-forest" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

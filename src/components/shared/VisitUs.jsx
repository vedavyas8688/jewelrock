import { Clock, MapPin, Phone } from 'lucide-react';
import { site } from '../../data/site';
import { images } from '../../data/images';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

/** Location / hours / phone split with angled photo. Used on Home and Contact. */
export function VisitUs({ title, text, image, imageAlt, cta = 'Get directions', tone = 'paper' }) {
  const rows = [
    { icon: MapPin, label: site.address.lines.join(', ') },
    { icon: Clock, label: site.hoursShort },
    { icon: Phone, label: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, '')}` },
  ];

  return (
    <Section tone={tone} bleed>
      <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">
        <div className="lg:py-12 lg:pr-16">
          <SectionHeading eyebrow="Visit us" title={title} text={text} />
          <ul className="mt-10 space-y-5">
            {rows.map((row) => {
              const Icon = row.icon;
              const content = (
                <>
                  <span className="grid size-10 shrink-0 place-items-center rounded-pill border border-line text-forest">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <span className="text-body text-ink/85">{row.label}</span>
                </>
              );
              return (
                <li key={row.label}>
                  {row.href ? (
                    <a href={row.href} className="flex items-center gap-4 hover:text-forest">
                      {content}
                    </a>
                  ) : (
                    <span className="flex items-center gap-4">{content}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <Button href={site.address.mapsUrl} target="_blank" rel="noreferrer" className="mt-10" arrow>
            {cta}
          </Button>
        </div>

        <div className="relative min-h-[300px] overflow-hidden rounded-[var(--radius-xl)] lg:min-h-[520px] lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)] lg:rounded-none lg:rounded-r-[var(--radius-xl)]">
          <img src={images[image]} alt={imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </Section>
  );
}

import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { contact } from '../data/pages';
import { images } from '../data/images';
import { site } from '../data/site';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ContactForm } from '../components/contact/ContactForm';

export function ContactPage() {
  const cards = [
    { icon: MapPin, title: 'Find us', lines: site.address.lines, action: { label: 'Get directions', href: site.address.mapsUrl, external: true } },
    { icon: Phone, title: 'Call', lines: [site.phone], action: { label: 'Call now', href: `tel:${site.phone.replace(/[^+\d]/g, '')}` } },
    { icon: Mail, title: 'Write', lines: [site.email], action: { label: 'Send email', href: `mailto:${site.email}` } },
    { icon: Clock, title: 'Hours', lines: site.hours.map((row) => `${row.days}: ${row.time}`) },
  ];

  return (
    <>
      <PageHero eyebrow={contact.eyebrow} title={contact.title} text={contact.text} image={images[contact.image]} imageAlt={contact.imageAlt} />

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:gap-16">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <li key={card.title} data-reveal data-reveal-delay={index * 60} className="flex gap-4 rounded-lg border border-line bg-cream p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-pill bg-forest text-cream">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-body text-body font-semibold text-forest">{card.title}</h2>
                    {card.lines.map((line) => (
                      <p key={line} className="mt-1 text-small text-muted">
                        {line}
                      </p>
                    ))}
                    {card.action ? (
                      <Button href={card.action.href} variant="link" size="sm" className="mt-2 text-small" arrow {...(card.action.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                        {card.action.label}
                      </Button>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>

          <ContactForm />
        </div>
      </Section>

      <section className="relative">
        <iframe
          title="JewelRock on Google Maps"
          src="https://www.google.com/maps?q=Jewel+Rock+2720+Sri+Harsha+Rd+Lashkar+Mohalla+Mandi+Mohalla+Mysuru+Karnataka+570001&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[360px] w-full grayscale-[0.4] sepia-[0.2] md:h-[440px]"
        />
      </section>
    </>
  );
}

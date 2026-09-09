import { Phone } from 'lucide-react';
import { faq } from '../data/pages';
import { site } from '../data/site';
import { PageHero } from '../components/ui/PageHero';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';

export function FaqPage() {
  return (
    <>
      <PageHero eyebrow={faq.eyebrow} title={faq.title} text={faq.text} />

      <section className="container-site pb-section">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
          <nav aria-label="FAQ sections" className="hidden lg:block lg:sticky lg:top-[calc(var(--spacing-header)+2rem)] lg:self-start">
            <ul className="space-y-1 border-l border-line">
              {faq.groups.map((group) => (
                <li key={group.id}>
                  <a href={`#faq-${group.id}`} className="-ml-px block border-l-2 border-transparent py-2 pl-5 text-small text-muted hover:border-gold hover:text-forest">
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16">
            {faq.groups.map((group, index) => (
              <section key={group.id} id={`faq-${group.id}`} aria-labelledby={`faq-${group.id}-title`} data-reveal data-reveal-delay={index * 60}>
                <h2 id={`faq-${group.id}-title`} className="text-display-md">
                  {group.title}
                </h2>
                <Accordion items={group.items} defaultOpen={index === 0 ? 0 : -1} className="mt-6" />
              </section>
            ))}
          </div>
        </div>
      </section>

      <Section tone="forest" tight>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-display-md text-cream">{faq.support.title}</h2>
            <p className="mt-2 max-w-prose text-body text-cream/75">{faq.support.text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} light variant="secondary" size="lg">
              <Phone size={16} aria-hidden="true" /> {site.phone}
            </Button>
            <Button href={faq.support.primaryCta.href} light size="lg" arrow>
              {faq.support.primaryCta.label}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

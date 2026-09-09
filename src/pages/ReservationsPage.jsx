import { CalendarCheck, Clock, Users } from 'lucide-react';
import { reservations } from '../data/pages';
import { images } from '../data/images';
import { site } from '../data/site';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Section } from '../components/ui/Section';
import { ReservationForm } from '../components/reservations/ReservationForm';

const perkIcons = [Users, CalendarCheck, Clock];

export function ReservationsPage() {
  return (
    <>
      <section className="on-dark relative overflow-hidden bg-forest-deep text-cream">
        <div className="grid lg:grid-cols-[1fr_1fr]">
          <div className="hero-in container-site py-16 lg:w-auto lg:max-w-none lg:py-24 lg:pl-[max(var(--spacing-gutter),calc((100vw-var(--container-site))/2))] lg:pr-16">
            <Eyebrow light className="mb-5">{reservations.eyebrow}</Eyebrow>
            <h1 className="max-w-[12ch] text-display-xl text-cream">{reservations.title}</h1>
            <p className="mt-6 max-w-prose text-lede text-cream/75">{reservations.text}</p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-3">
              {reservations.perks.map((perk, index) => {
                const Icon = perkIcons[index];
                return (
                  <li key={perk.title} className="border-t border-line-dark pt-4">
                    <Icon size={20} strokeWidth={1.5} className="text-gold-light" aria-hidden="true" />
                    <h3 className="mt-3 font-body text-body font-semibold text-cream">{perk.title}</h3>
                    <p className="mt-1 text-small text-cream/65">{perk.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative min-h-[300px] lg:min-h-0">
            <img src={images[reservations.image]} alt={reservations.imageAlt} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent lg:bg-gradient-to-r lg:from-forest-deep lg:via-forest-deep/20 lg:to-transparent" />
          </div>
        </div>
      </section>

      <Section id="book">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
          <ReservationForm />

          <aside className="space-y-10 lg:pt-4">
            <div>
              <h2 className="text-display-sm">Opening hours</h2>
              <ul className="mt-4 divide-y divide-line border-y border-line text-small">
                {site.hours.map((row) => (
                  <li key={row.days} className="flex justify-between gap-4 py-3">
                    <span className="text-ink">{row.days}</span>
                    <span className="text-muted">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-display-sm">{reservations.info.title}</h2>
              <ul className="mt-4 space-y-3 text-small text-muted">
                {reservations.info.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-pill bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-cream-deep p-6">
              <p className="text-small text-muted">Groups over 25 or same-day bookings?</p>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="mt-1 block font-display text-display-sm text-forest hover:text-gold">
                {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

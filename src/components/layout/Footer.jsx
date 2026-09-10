import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { SocialIcon } from '../ui/SocialIcon';
import { site } from '../../data/site';
import { Button } from '../ui/Button';

export function Footer() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | error | done

  const subscribe = (event) => {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setState('error');
    setState('done');
  };

  return (
    <footer className="on-dark bg-forest text-cream">
      <div className="container-site py-section-tight">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_0.7fr] lg:gap-10">
          {/* Brand + newsletter */}
          <div>
            <a href="/" className="inline-flex items-center gap-3" aria-label={`${site.name} home`}>
              <img src={site.logo} alt="" width={64} height={52} className="h-12 w-auto object-contain" />
              <span className="font-display text-2xl">{site.name}</span>
            </a>
            <p className="mt-2 text-small text-cream/60">{site.tagline}</p>

            <h2 className="mt-8 font-display text-display-md text-cream">Stay close to good food.</h2>
            <p className="mt-3 max-w-sm text-small text-cream/70">
              Seasonal specials, new cocktails and the occasional recipe, once a month. No spam.
            </p>

            {state === 'done' ? (
              <p className="mt-5 text-small text-gold-light" role="status">
                You’re on the list. See you at the table.
              </p>
            ) : (
              <form onSubmit={subscribe} noValidate className="mt-5 flex max-w-md flex-col gap-2 sm:flex-row">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (state === 'error') setState('idle');
                  }}
                  placeholder="Your email address"
                  aria-invalid={state === 'error' || undefined}
                  aria-describedby={state === 'error' ? 'footer-email-error' : undefined}
                  className="min-h-12 flex-1 rounded-pill border border-line-dark bg-forest px-5 text-body text-cream placeholder:text-cream/45 focus:border-gold-light focus:outline-none"
                />
                <Button type="submit" light>
                  Subscribe
                </Button>
                {state === 'error' ? (
                  <p id="footer-email-error" className="text-small text-gold-light sm:basis-full" role="alert">
                    Enter a valid email address.
                  </p>
                ) : null}
              </form>
            )}
          </div>

          {/* Location */}
          <div>
            <h3 className="font-body text-small font-semibold text-cream">Location</h3>
            <address className="mt-4 text-small not-italic leading-relaxed text-cream/70">
              {site.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-small font-medium text-gold-light hover:text-cream"
            >
              <MapPin size={14} aria-hidden="true" />
              View on Google Maps
            </a>

            <h3 className="mt-8 font-body text-small font-semibold text-cream">Get in touch</h3>
            <ul className="mt-4 space-y-1.5 text-small text-cream/70">
              <li>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="hover:text-cream">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-cream">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-body text-small font-semibold text-cream">Opening hours</h3>
            <ul className="mt-4 space-y-3 text-small text-cream/70">
              {site.hours.map((row) => (
                <li key={row.days}>
                  <span className="block text-cream/90">{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-body text-small font-semibold text-cream">Quick links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-small text-cream/70 lg:grid-cols-1">
              {site.nav
                .filter((item) => item.slug !== 'home')
                .map((item) => (
                  <li key={item.slug}>
                    <a href={item.href} className="hover:text-cream">
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-line-dark pt-6 text-caption text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <ul className="flex items-center gap-2">
            {site.socials.map((social) => {
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-pill border border-line-dark text-cream/80 transition-colors duration-150 hover:border-gold-light hover:text-gold-light"
                  >
                    <SocialIcon name={social.icon} size={16} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

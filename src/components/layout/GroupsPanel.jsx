import { ArrowRight, ExternalLink, MapPin, X } from 'lucide-react';
import { groups } from '../../data/groups';
import { groupImages } from '../../data/groupImages';
import { cx } from '../../lib/cx';

export function GroupsPanel({ open, onClose }) {
  return (
    <div
      role="dialog"
      aria-modal={open ? 'true' : undefined}
      aria-labelledby="groups-panel-title"
      className={cx(
        'fixed inset-0 z-[80] grid place-items-center bg-forest-deep/82 p-3 text-cream backdrop-blur-sm transition-[opacity,transform] duration-300 ease-out-soft sm:p-5',
        open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(200,160,77,0.18),transparent_32%)]" aria-hidden="true" />
      <div className="relative z-10 grid h-[92dvh] w-[94vw] max-w-[88rem] grid-rows-[auto_1fr] overflow-hidden border border-gold/35 bg-forest-deep shadow-lift sm:h-[90dvh] sm:w-[90vw] lg:grid-cols-[17rem_1fr] lg:grid-rows-none xl:grid-cols-[20rem_1fr]">
        <button
          type="button"
          className="absolute right-0 top-0 z-30 grid size-12 place-items-center bg-gold-light text-forest transition hover:bg-cream"
          aria-label="Close groups"
          tabIndex={open ? 0 : -1}
          onClick={onClose}
        >
          <X size={24} aria-hidden="true" />
        </button>

        <aside className="relative flex min-h-0 flex-col items-center justify-center border-b border-gold/30 bg-forest-deep px-5 py-5 pr-14 text-center sm:px-6 sm:py-8 lg:border-b-0 lg:border-r lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,160,77,0.12),transparent_62%)]" aria-hidden="true" />
          <h2 id="groups-panel-title" className="relative max-w-[9ch] text-[clamp(1.65rem,8vw,3.15rem)] font-bold uppercase leading-[0.92] text-cream">
            SAN Group of Hotels
          </h2>
          <p className="relative mt-4 max-w-[13rem] text-[0.72rem] font-bold uppercase leading-4 text-gold-light sm:mt-7 sm:text-small sm:leading-5">
            {groups.eyebrow}
          </p>
          <div className="relative mt-4 h-24 w-24 sm:mt-8 sm:h-48 sm:w-48">
            <img
              src={groupImages.sanLogo}
              alt=""
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <a
            href={groups.href}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
            className="relative mt-4 inline-flex min-h-9 items-center justify-center gap-2 border border-gold px-4 text-[0.72rem] font-bold uppercase tracking-[0.05em] text-gold-light transition hover:bg-gold-light hover:text-forest sm:mt-8 sm:min-h-11 sm:px-6 sm:text-small"
          >
            {groups.cta}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </aside>

        <div className="hide-scrollbar grid min-h-0 grid-cols-2 content-start gap-3 overflow-y-auto p-3 sm:p-5 lg:grid-cols-3 lg:content-center xl:gap-4">
          {groups.cards.map((item) => (
            <article
              key={item.name}
              className="group flex min-h-[11.6rem] flex-col rounded-sm border border-gold/35 bg-forest/45 p-2 shadow-lift backdrop-blur-sm transition hover:border-gold-light sm:min-h-[14.5rem] sm:p-3 xl:min-h-[16rem] xl:p-4"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xs border border-gold/20 bg-forest-deep sm:aspect-[16/8.2]">
                <img
                  src={item.image}
                  alt=""
                  className={cx(
                    'h-full w-full transition duration-700 group-hover:scale-105',
                    item.logoCard ? 'object-contain p-6' : 'object-cover',
                  )}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="mt-3 font-display text-[0.92rem] font-semibold uppercase leading-[1.05] text-gold-light sm:mt-4 sm:text-[1.25rem] xl:text-[1.45rem]">
                {item.name}
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-[0.68rem] font-semibold leading-4 text-gold-light sm:mt-3 sm:gap-2 sm:text-small">
                <MapPin size={13} aria-hidden="true" />
                {item.location}
              </p>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                tabIndex={open && item.available ? 0 : -1}
                className={cx(
                  'mt-auto inline-flex min-h-8 items-center justify-center gap-1.5 border border-gold px-2 text-[0.64rem] font-bold uppercase tracking-[0.04em] transition sm:min-h-10 sm:gap-2 sm:px-4 sm:text-[0.78rem] sm:tracking-[0.06em]',
                  item.available ? 'text-gold-light hover:bg-gold-light hover:text-forest' : 'pointer-events-none bg-gold/10 text-gold-light/70',
                )}
              >
                {item.status}
                {item.available ? <ExternalLink size={15} aria-hidden="true" /> : null}
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

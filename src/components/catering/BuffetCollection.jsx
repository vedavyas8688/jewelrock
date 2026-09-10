import { ArrowRight, CakeSlice, ChefHat, CupSoda, Leaf, Soup, UtensilsCrossed } from 'lucide-react';
import { images } from '../../data/images';

// Sequential 01-06. Nothing about number or colour is hardcoded per item -
// both are derived from position, so the row can never fall out of sequence.
const buffetCollection = [
  { title: 'Starters', text: 'A flavourful beginning', image: images.platter, Icon: Leaf },
  { title: 'Main Courses', text: 'Gravies & regional delights', image: images.cateringMainCourse, Icon: UtensilsCrossed },
  { title: 'Live Stations', text: 'Freshly prepared, just for you', image: images.chef, Icon: ChefHat },
  { title: 'Regional Specialties', text: 'A taste of tradition', image: images.cateringRegionalSpecialty, Icon: Soup },
  { title: 'Desserts', text: 'Sweet endings, happier moments', image: images.dessert, Icon: CakeSlice },
  { title: 'Beverages', text: 'Refreshing possibilities', image: images.cateringBeverages, Icon: CupSoda },
];

const toneStyles = {
  dark: {
    card: 'bg-forest',
    desktopCard: 'lg:bg-forest',
    number: 'text-cream/65',
    desktopNumber: 'lg:text-cream/65',
    title: 'text-cream',
    desktopTitle: 'lg:text-cream',
    text: 'text-cream/70',
    desktopText: 'lg:text-cream/70',
    icon: 'border border-gold bg-forest text-gold',
    desktopIcon: 'lg:border lg:border-gold lg:bg-forest lg:text-gold',
  },
  light: {
    card: 'bg-cream',
    desktopCard: 'lg:bg-cream',
    number: 'text-forest/55',
    desktopNumber: 'lg:text-forest/55',
    title: 'text-forest',
    desktopTitle: 'lg:text-forest',
    text: 'text-forest/65',
    desktopText: 'lg:text-forest/65',
    icon: 'bg-gold text-cream',
    desktopIcon: 'lg:bg-gold lg:text-cream',
  },
};

function CollectionCard({ item, index }) {
  const { Icon } = item;
  const mobileTone = Math.floor(index / 2) % 2 === 0
    ? (index % 2 === 0 ? 'dark' : 'light')
    : (index % 2 === 0 ? 'light' : 'dark');
  const desktopTone = index % 2 === 0 ? 'dark' : 'light';
  const mobile = toneStyles[mobileTone];
  const desktop = toneStyles[desktopTone];
  const number = String(index + 1).padStart(2, '0');

  return (
    <article
      data-reveal
      data-reveal-delay={index * 90}
      className={`relative flex h-[20rem] flex-col overflow-hidden rounded-full shadow-[0_26px_70px_-48px_rgba(35,24,20,0.55)] ring-1 ring-gold/20 min-[480px]:h-[23rem] sm:h-[27rem] lg:h-[min(30rem,68vh)] ${mobile.card} ${desktop.desktopCard} ${
        index % 2 === 0 ? 'lg:-translate-y-6' : 'lg:translate-y-6'
      }`}
    >
      {/* Fixed-height copy block: number, rule, title and image seam land on the
          same baseline across all six cards, whether the title wraps or not. */}
      <div className="flex h-[10.15rem] shrink-0 flex-col items-center px-3 pt-4.5 text-center sm:h-[11.25rem] sm:px-5 sm:pt-7 lg:h-[12.25rem] lg:px-5 lg:pt-8 xl:h-[12.5rem] xl:px-6">
        <p className={`font-display text-[0.9rem] leading-none tracking-[0.1em] sm:text-[1.05rem] ${mobile.number} ${desktop.desktopNumber}`}>
          {number}
        </p>
        <span className="mt-2.5 block h-px w-6 bg-gold sm:mt-3 sm:w-7" aria-hidden="true" />
        <h3
          className={`mt-2.5 flex min-h-[2.45rem] items-start justify-center font-display text-[0.98rem] font-semibold leading-[1.12] sm:mt-4 sm:min-h-[3.4rem] sm:text-[1.32rem] sm:leading-[1.2] ${mobile.title} ${desktop.desktopTitle}`}
        >
          {item.title}
        </h3>
        <p className={`mt-0.5 max-w-[8rem] text-[0.66rem] leading-[1.25] sm:mt-1.5 sm:max-w-[10rem] sm:text-[0.8rem] sm:leading-snug ${mobile.text} ${desktop.desktopText}`}>{item.text}</p>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <img
          src={item.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <span
        className={`absolute left-1/2 top-[10.15rem] grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full sm:top-[11.25rem] sm:size-14 lg:top-[12.25rem] xl:top-[12.5rem] ${mobile.icon} ${desktop.desktopIcon}`}
        aria-hidden="true"
      >
        <Icon size={18} strokeWidth={1.6} className="sm:size-[22px]" />
      </span>
    </article>
  );
}

export function BuffetCollection() {
  return (
    <section className="relative overflow-hidden bg-cream py-12 text-forest sm:py-16 lg:flex lg:min-h-[calc(100svh-var(--spacing-header))] lg:items-center lg:py-12">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
        <span className="absolute left-[38%] top-0 h-full w-px rotate-12 bg-gold/10" />
        <span className="absolute left-[61%] top-0 h-full w-px -rotate-12 bg-gold/10" />
        <span className="absolute left-[78%] top-0 h-full w-px rotate-12 bg-gold/10" />
      </div>

      <div className="relative mx-auto w-[90%] max-w-[1680px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(17rem,21rem)_1fr] lg:items-center lg:gap-10 xl:gap-16">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold sm:text-eyebrow sm:tracking-[0.28em]">
              The buffet collection
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.65rem,13vw,4rem)] font-semibold leading-[0.9] sm:mt-6 sm:text-[clamp(3.05rem,5vw,5.45rem)] sm:leading-[0.92]">
              Flavours
              <span className="block">Without</span>
              <span className="block text-gold">Limits</span>
            </h2>
            <span className="mt-5 block h-1 w-20 bg-gold sm:mt-7 sm:w-24" aria-hidden="true" />
            <p className="mt-5 max-w-[22rem] text-small leading-6 text-muted sm:mt-7 sm:max-w-[19rem] sm:text-lede sm:leading-relaxed">
              From timeless classics to global inspirations, our buffet brings together a diverse selection crafted to satisfy every craving.
            </p>
            <a
              href="/menu"
              className="mt-7 inline-flex items-center gap-4 text-[0.7rem] font-bold uppercase leading-[1.55] tracking-[0.2em] text-forest sm:mt-9 sm:gap-5 sm:text-[0.78rem] sm:tracking-[0.24em]"
            >
              <span className="grid size-12 place-items-center rounded-full border border-gold text-gold sm:size-16">
                <ArrowRight size={20} aria-hidden="true" className="sm:size-6" />
              </span>
              <span>
                Explore
                <span className="block">The Collection</span>
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-2.5 xl:gap-3.5">
            {buffetCollection.map((item, index) => (
              <CollectionCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-muted/55 sm:mt-10 sm:flex-row sm:items-end sm:justify-between sm:text-[0.72rem] sm:tracking-[0.26em] lg:mt-8">
          <p className="border-t border-gold/35 pt-4">
            Good food <span className="text-gold">-</span>
            <span className="block">Brighter moments</span>
          </p>
          <p className="text-left before:mr-3 before:inline-block before:h-px before:w-10 before:translate-y-[-0.25rem] before:bg-gold sm:text-right sm:before:w-12">
            A curated experience
            <span className="block">on every plate</span>
          </p>
        </div>
      </div>
    </section>
  );
}

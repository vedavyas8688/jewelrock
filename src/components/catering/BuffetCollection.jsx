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
    number: 'text-cream/65',
    title: 'text-cream',
    text: 'text-cream/70',
    icon: 'border border-gold bg-forest text-gold',
  },
  light: {
    card: 'bg-[#EFE7D8]',
    number: 'text-forest/55',
    title: 'text-forest',
    text: 'text-forest/65',
    icon: 'bg-gold text-cream',
  },
};

function CollectionCard({ item, index }) {
  const { Icon } = item;
  const s = toneStyles[index % 2 === 0 ? 'dark' : 'light'];
  const number = String(index + 1).padStart(2, '0');

  return (
    <article
      className={`relative flex h-[24rem] flex-col overflow-hidden rounded-full shadow-[0_26px_70px_-48px_rgba(23,63,55,0.55)] ring-1 ring-gold/20 min-[480px]:h-[27rem] lg:h-[min(30rem,68vh)] ${s.card} ${
        index % 2 === 0 ? 'lg:-translate-y-6' : 'lg:translate-y-6'
      }`}
    >
      {/* Fixed-height copy block: number, rule, title and image seam land on the
          same baseline across all six cards, whether the title wraps or not. */}
      <div className="flex h-[11.25rem] shrink-0 flex-col items-center px-5 pt-7 text-center lg:h-[12.25rem] lg:px-5 lg:pt-8 xl:h-[12.5rem] xl:px-6">
        <p className={`font-display text-[1.05rem] leading-none tracking-[0.1em] ${s.number}`}>
          {number}
        </p>
        <span className="mt-3 block h-px w-7 bg-gold" aria-hidden="true" />
        <h3
          className={`mt-4 flex min-h-[3.4rem] items-start justify-center font-display text-[1.32rem] font-semibold leading-[1.2] ${s.title}`}
        >
          {item.title}
        </h3>
        <p className={`mt-1.5 max-w-[10rem] text-[0.8rem] leading-snug ${s.text}`}>{item.text}</p>
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
        className={`absolute left-1/2 top-[11.25rem] grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full lg:top-[12.25rem] xl:top-[12.5rem] ${s.icon}`}
        aria-hidden="true"
      >
        <Icon size={22} strokeWidth={1.6} />
      </span>
    </article>
  );
}

export function BuffetCollection() {
  return (
    <section className="relative overflow-hidden bg-cream py-14 text-forest sm:py-16 lg:flex lg:min-h-[calc(100svh-var(--spacing-header))] lg:items-center lg:py-12">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
        <span className="absolute left-[38%] top-0 h-full w-px rotate-12 bg-gold/10" />
        <span className="absolute left-[61%] top-0 h-full w-px -rotate-12 bg-gold/10" />
        <span className="absolute left-[78%] top-0 h-full w-px rotate-12 bg-gold/10" />
      </div>

      <div className="relative mx-auto w-[90%] max-w-[1680px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(17rem,21rem)_1fr] lg:items-center lg:gap-10 xl:gap-16">
          <div>
            <p className="text-eyebrow font-bold uppercase tracking-[0.28em] text-gold">
              The buffet collection
            </p>
            <h2 className="mt-6 font-display text-[clamp(3.05rem,5vw,5.45rem)] font-semibold leading-[0.92]">
              Flavours
              <span className="block">Without</span>
              <span className="block text-gold">Limits</span>
            </h2>
            <span className="mt-7 block h-1 w-24 bg-gold" aria-hidden="true" />
            <p className="mt-7 max-w-[19rem] text-lede leading-relaxed text-muted">
              From timeless classics to global inspirations, our buffet brings together a diverse selection crafted to satisfy every craving.
            </p>
            <a
              href="/menu"
              className="mt-9 inline-flex items-center gap-5 text-[0.78rem] font-bold uppercase leading-[1.55] tracking-[0.24em] text-forest"
            >
              <span className="grid size-16 place-items-center rounded-full border border-gold text-gold">
                <ArrowRight size={24} aria-hidden="true" />
              </span>
              <span>
                Explore
                <span className="block">The Collection</span>
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-2.5 xl:gap-3.5">
            {buffetCollection.map((item, index) => (
              <CollectionCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 text-[0.72rem] font-bold uppercase tracking-[0.26em] text-muted/55 sm:flex-row sm:items-end sm:justify-between lg:mt-8">
          <p className="border-t border-gold/35 pt-4">
            Good food <span className="text-gold">-</span>
            <span className="block">Brighter moments</span>
          </p>
          <p className="text-right before:mr-3 before:inline-block before:h-px before:w-12 before:translate-y-[-0.25rem] before:bg-gold">
            A curated experience
            <span className="block">on every plate</span>
          </p>
        </div>
      </div>
    </section>
  );
}

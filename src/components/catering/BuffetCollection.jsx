import { ArrowRight, CakeSlice, ChefHat, CupSoda, Leaf, Soup, UtensilsCrossed } from 'lucide-react';
import { images } from '../../data/images';

const buffetCollection = [
  {
    number: '01',
    title: 'Starters',
    text: 'A flavourful beginning',
    image: images.platter,
    Icon: Leaf,
    tone: 'dark',
  },
  {
    number: '02',
    title: 'Main Courses',
    text: 'Gravies & regional delights',
    image: images.cateringMainCourse,
    Icon: UtensilsCrossed,
    tone: 'light',
  },
  {
    number: '03',
    title: 'Live Stations',
    text: 'Freshly prepared, just for you',
    image: images.chef,
    Icon: ChefHat,
    tone: 'split',
  },
  {
    number: '04',
    title: 'Regional Specialties',
    text: 'A taste of tradition',
    image: images.cateringRegionalSpecialty,
    Icon: Soup,
    tone: 'dark',
  },
  {
    number: '05',
    title: 'Desserts',
    text: 'Sweet endings, happier moments',
    image: images.dessert,
    Icon: CakeSlice,
    tone: 'light',
  },
  {
    number: '06',
    title: 'Beverages',
    text: 'Refreshing possibilities',
    image: images.cateringBeverages,
    Icon: CupSoda,
    tone: 'dark',
  },
];

export function BuffetCollection() {
  return (
    <section className="relative overflow-hidden bg-cream py-14 text-forest sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
        <span className="absolute left-[38%] top-0 h-full w-px rotate-12 bg-gold/10" />
        <span className="absolute left-[61%] top-0 h-full w-px -rotate-12 bg-gold/10" />
        <span className="absolute left-[78%] top-0 h-full w-px rotate-12 bg-gold/10" />
      </div>

      <div className="relative mx-auto w-[90%] max-w-[1680px]">
        <div className="buffet-collection-grid">
          <div className="buffet-collection-intro">
            <p className="text-eyebrow font-bold uppercase tracking-[0.28em] text-gold">
              The buffet collection
            </p>
            <h2 className="mt-6 font-display text-[clamp(3.05rem,5.1vw,5.9rem)] font-semibold leading-[0.92]">
              Flavours
              <span className="block">Without</span>
              <span className="block text-gold">Limits</span>
            </h2>
            <span className="mt-7 block h-1 w-24 bg-gold" aria-hidden="true" />
            <p className="mt-8 max-w-[19rem] text-lede leading-relaxed text-muted">
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

          <div className="buffet-collection-cards">
            {buffetCollection.map((item) => {
              const Icon = item.Icon;

              return (
                <article key={item.number} className={`collection-card collection-card-${item.tone}`}>
                  <img src={item.image} alt="" className="collection-card-image" loading="lazy" decoding="async" />

                  <div className="collection-card-content">
                    <p className="collection-card-number">{item.number}</p>
                    <span className="collection-card-rule" aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <span className="collection-card-icon" aria-hidden="true">
                    <Icon size={27} strokeWidth={1.6} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 text-[0.72rem] font-bold uppercase tracking-[0.26em] text-muted/55 sm:flex-row sm:items-end sm:justify-between">
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

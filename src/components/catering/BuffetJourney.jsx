import { images } from '../../data/images';

const buffetJourney = [
  {
    title: 'Buffet Setup',
    text: 'Warm counters, clean service flow.',
    image: images.plates,
  },
  {
    title: 'Menu Spread',
    text: 'Kababs, gravies, rice and breads.',
    image: images.platter,
  },
  {
    title: 'Live Counter',
    text: 'Fresh plates finished to order.',
    image: images.chef,
  },
  {
    title: 'Main Feast',
    text: 'A generous spread for every table.',
    image: images.hero,
  },
  {
    title: 'Sweet Finale',
    text: 'Desserts served for a polished finish.',
    image: images.dessert,
  },
];

export function BuffetJourney() {
  return (
    <section className="bg-cream py-16 text-forest sm:py-20 lg:py-24">
      <div className="mx-auto w-[90%] max-w-[1500px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-eyebrow font-bold uppercase tracking-[0.28em] text-gold">
            The buffet journey
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.35rem,5vw,4.65rem)] font-semibold leading-tight">
            From First Look to Last Bite
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lede leading-snug text-muted">
            A thoughtfully curated experience, designed to delight you at every step.
          </p>
        </div>

        <ol className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-10">
          {buffetJourney.map((item, index) => (
            <li key={item.title} className="buffet-step relative text-center">
              <div className="relative mx-auto aspect-square w-[min(72vw,13.5rem)] rounded-full border border-gold/70 p-1.5 shadow-soft sm:w-[13.5rem] lg:w-[min(100%,13rem)] xl:w-[14rem]">
                <div className="h-full w-full overflow-hidden rounded-full border-[6px] border-paper bg-cream-deep">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="absolute bottom-[-1.05rem] left-1/2 grid size-12 -translate-x-1/2 place-items-center rounded-full bg-gold-light font-display text-xl font-bold text-white shadow-soft">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-9 font-display text-[clamp(1.7rem,3vw,2.25rem)] font-semibold leading-tight">
                {item.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[13.5rem] text-body leading-snug text-muted">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { images } from '../../data/images';
import { cx } from '../../lib/cx';

const buffetJourney = [
  {
    title: 'Buffet Setup',
    text: 'Warm counters, clean service flow.',
    image: images.cateringBuffetHero,
  },
  {
    title: 'Menu Spread',
    text: 'Kababs, gravies, rice and breads.',
    image: images.plates,
  },
  {
    title: 'Live Counter',
    text: 'Fresh plates finished to order.',
    image: images.chef,
  },
  {
    title: 'Main Feast',
    text: 'A generous spread for every table.',
    image: images.cateringRegionalSpecialty,
  },
  {
    title: 'Sweet Finale',
    text: 'Desserts served for a polished finish.',
    image: images.dessert,
  },
];

export function BuffetJourney() {
  return (
    <section className="bg-cream py-12 text-forest sm:py-18 lg:py-20">
      <div className="mx-auto w-[90%] max-w-[1500px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold sm:text-eyebrow sm:tracking-[0.28em]">
            The buffet journey
          </p>
          <h2 className="mx-auto mt-4 max-w-[11ch] font-display text-[clamp(2.25rem,10vw,3.25rem)] font-semibold leading-[1.02] sm:mt-5 sm:max-w-none sm:text-[clamp(2.35rem,5vw,4.65rem)] sm:leading-tight">
            From First Look to Last Bite
          </h2>
          <p className="mx-auto mt-4 max-w-[28rem] text-small leading-6 text-muted sm:max-w-2xl sm:text-lede sm:leading-snug">
            A thoughtfully curated experience, designed to delight you at every step.
          </p>
        </div>

        <ol className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-5 lg:gap-x-10">
          {buffetJourney.map((item, index) => {
            const reversed = index % 2 === 1;

            return (
            <li
              key={item.title}
              data-reveal
              data-reveal-delay={index * 90}
              className={cx(
                'buffet-step relative grid items-center gap-4 rounded-lg border border-line bg-paper p-3 shadow-soft sm:block sm:border-0 sm:bg-transparent sm:p-0 sm:text-center sm:shadow-none',
                reversed ? 'grid-cols-[1fr_5.7rem] text-right' : 'grid-cols-[5.7rem_1fr] text-left',
              )}
            >
              <div className={cx('relative mx-auto aspect-square w-full rounded-full border border-gold/70 p-1 shadow-soft sm:w-[13.5rem] sm:p-1.5 lg:w-[min(100%,12.5rem)] xl:w-[13.5rem]', reversed && 'order-2 sm:order-none')}>
                <div className="h-full w-full overflow-hidden rounded-full border-[6px] border-paper bg-cream-deep">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="absolute bottom-[-0.45rem] left-1/2 grid size-8 -translate-x-1/2 place-items-center rounded-full bg-gold-light font-display text-sm font-bold text-white shadow-soft sm:bottom-[-1.05rem] sm:size-12 sm:text-xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className={cx(reversed && 'order-1 sm:order-none')}>
                <h3 className="font-display text-[1.28rem] font-semibold leading-tight sm:mt-9 sm:text-[clamp(1.7rem,3vw,2.25rem)]">
                  {item.title}
                </h3>
                <p className={cx('mt-2 max-w-[18rem] text-[0.84rem] leading-5 text-muted sm:mx-auto sm:mt-3 sm:max-w-[13.5rem] sm:text-body sm:leading-snug', reversed && 'ml-auto sm:ml-0')}>
                  {item.text}
                </p>
              </div>
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

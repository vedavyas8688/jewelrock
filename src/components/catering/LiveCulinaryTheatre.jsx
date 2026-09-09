import { images } from '../../data/images';

const liveStationImages = [
  { src: images.plates },
  { src: images.cateringMainCourse },
  { src: images.cateringRegionalSpecialty },
];

export function LiveCulinaryTheatre() {
  return (
    <section className="relative min-h-[calc(100svh-var(--spacing-header))] overflow-hidden bg-forest text-cream on-dark lg:h-[calc(100svh-var(--spacing-header))] lg:min-h-[660px]">
      <img
        src={images.cateringLiveTheatreBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,35,29,0.98)_0%,rgba(4,35,29,0.92)_34%,rgba(4,35,29,0.5)_58%,rgba(4,35,29,0.18)_100%)]" aria-hidden="true" />

      <div className="relative z-10 grid min-h-[calc(100svh-var(--spacing-header))] lg:h-full lg:min-h-[660px] lg:grid-cols-[1fr_27vw]">
        <div className="flex items-center px-[var(--spacing-gutter)] py-14 sm:py-16 lg:py-20">
          <div className="max-w-[36rem]">
            <p className="text-eyebrow font-bold uppercase tracking-[0.28em] text-gold-light">
              Live culinary theatre
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.7rem,13vw,5.3rem)] font-semibold leading-[0.96] text-cream sm:mt-7">
              Crafted Live.
              <span className="block">Served with</span>
              <span className="block text-gold-light">Passion.</span>
            </h2>
            <span className="mt-7 block h-1 w-24 bg-gold-light" aria-hidden="true" />
            <p className="mt-6 max-w-[34rem] text-lede leading-relaxed text-cream/82 sm:mt-8">
              Our live buffet counters bring the kitchen into the room, with chefs finishing kababs, grills, breads and signature plates fresh for your guests.
            </p>
          </div>
        </div>

        <div className="grid min-h-0 border-t-4 border-cream bg-cream sm:grid-cols-3 lg:min-h-0 lg:grid-cols-1 lg:grid-rows-3 lg:border-l-4 lg:border-t-0">
          {liveStationImages.map((item, index) => (
            <div key={`${item.src}-${index}`} className="relative min-h-[150px] overflow-hidden border-b-4 border-cream bg-forest-deep last:border-b-0 sm:border-b-0 sm:border-r-4 sm:last:border-r-0 lg:min-h-0 lg:border-b-4 lg:border-r-0 lg:last:border-b-0">
              <img
                src={item.src}
                alt=""
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

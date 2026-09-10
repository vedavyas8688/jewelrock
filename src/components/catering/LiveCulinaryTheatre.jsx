import { images } from '../../data/images';

const liveStationImages = [
  { src: images.plates },
  { src: images.cateringMainCourse },
  { src: images.cateringRegionalSpecialty },
];

export function LiveCulinaryTheatre() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream on-dark lg:h-[calc(100svh-var(--spacing-header))] lg:min-h-[660px]">
      <img
        src={images.cateringLiveTheatreBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,24,20,0.98)_0%,rgba(35,24,20,0.92)_34%,rgba(35,24,20,0.5)_58%,rgba(35,24,20,0.18)_100%)]" aria-hidden="true" />

      <div className="relative z-10 grid lg:h-full lg:min-h-[660px] lg:grid-cols-[1fr_27vw]">
        <div className="flex items-center px-[var(--spacing-gutter)] py-12 sm:py-16 lg:py-20">
          <div className="max-w-[32rem] sm:max-w-[36rem]">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold-light sm:text-eyebrow sm:tracking-[0.28em]">
              Live culinary theatre
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.7rem,14vw,4.4rem)] font-semibold leading-[0.92] text-cream sm:mt-7 sm:text-[clamp(2.7rem,13vw,5.3rem)] sm:leading-[0.96]">
              Crafted Live.
              <span className="block">Served with</span>
              <span className="block text-gold-light">Passion.</span>
            </h2>
            <span className="mt-5 block h-1 w-20 bg-gold-light sm:mt-7 sm:w-24" aria-hidden="true" />
            <p className="mt-5 max-w-[29rem] text-small leading-6 text-cream/82 sm:mt-8 sm:max-w-[34rem] sm:text-lede sm:leading-relaxed">
              Our live buffet counters bring the kitchen into the room, with chefs finishing kababs, grills, breads and signature plates fresh for your guests.
            </p>
          </div>
        </div>

        <div className="grid min-h-0 grid-cols-2 gap-1 border-t-4 border-cream bg-cream p-1 lg:grid-cols-1 lg:grid-rows-3 lg:gap-0 lg:border-l-4 lg:border-t-0 lg:p-0">
          {liveStationImages.map((item, index) => (
            <div key={`${item.src}-${index}`} className="relative min-h-[132px] overflow-hidden bg-forest-deep first:col-span-2 first:min-h-[210px] sm:min-h-[170px] lg:min-h-0 lg:border-b-4 lg:border-cream lg:first:col-span-1 lg:last:border-b-0">
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

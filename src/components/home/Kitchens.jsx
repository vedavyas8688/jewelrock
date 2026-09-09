import { ArrowRight } from 'lucide-react';
import { home } from '../../data/content';
import { images } from '../../data/images';
import { Section } from '../ui/Section';

const kitchenImages = ['spices', 'chef', 'platter', 'occasion', 'dessert'];

export function Kitchens() {
  const { kitchens } = home;

  return (
    <Section tone="cream" tight className="overflow-hidden">
      <div className="mx-auto max-w-5xl text-center">
        <p className="inline-flex items-center gap-5 text-[0.82rem] font-medium uppercase leading-none tracking-[0.48em] text-ink/80">
          <span className="h-px w-14 bg-gold/75" aria-hidden="true" />
          Our kitchens
          <span className="h-px w-14 bg-gold/75" aria-hidden="true" />
        </p>
        <h2 className="mt-7 text-display-lg font-semibold text-forest">{kitchens.title}</h2>
        <p className="mx-auto mt-5 max-w-4xl text-lede leading-8 text-muted">{kitchens.text}</p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-4">
        {kitchens.items.map((item, index) => {
          const Icon = item.icon;

          return (
            <li key={item.title} data-reveal data-reveal-delay={index * 70}>
              <a
                href={item.href}
                className="group flex h-full min-h-[430px] flex-col overflow-hidden rounded-t-[999px] rounded-b-sm border border-line bg-paper text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/55 hover:shadow-lift focus-visible:border-gold sm:min-h-[500px] lg:min-h-[520px]"
              >
                <div className="relative mx-4 mt-4 overflow-hidden rounded-t-[999px] rounded-b-[44%] bg-cream-deep pt-[74%]">
                  <img
                    src={images[kitchenImages[index]]}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute inset-0 bg-forest/10 transition duration-300 group-hover:bg-transparent" aria-hidden="true" />
                </div>

                <div className="-mt-8 flex flex-1 flex-col items-center px-5 pb-6 sm:-mt-9 sm:px-6">
                  <span className="relative z-10 grid size-20 place-items-center rounded-full bg-paper text-gold shadow-[0_0_0_12px_var(--color-paper)] transition duration-300 group-hover:text-forest">
                    <Icon size={36} strokeWidth={1.45} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 max-w-[12ch] font-display text-[clamp(1.65rem,2.3vw,2.15rem)] font-semibold leading-[1.05] text-forest">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-[24ch] text-small leading-6 text-muted sm:mt-5 sm:text-body sm:leading-7">{item.text}</p>
                  <span className="mt-auto grid size-14 place-items-center rounded-full border border-gold text-gold transition duration-300 group-hover:-translate-y-2 group-hover:bg-gold group-hover:text-forest-deep">
                    <ArrowRight size={23} strokeWidth={1.8} aria-hidden="true" />
                    <span className="sr-only">View menu</span>
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

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
        <p className="inline-flex max-w-full items-center gap-3 text-[0.68rem] font-medium uppercase leading-none tracking-[0.32em] text-ink/80 sm:gap-5 sm:text-[0.82rem] sm:tracking-[0.48em]">
          <span className="h-px w-9 bg-gold/75 sm:w-14" aria-hidden="true" />
          Our kitchens
          <span className="h-px w-9 bg-gold/75 sm:w-14" aria-hidden="true" />
        </p>
        <h2 className="mx-auto mt-5 max-w-[13ch] text-[clamp(1.75rem,9vw,2.35rem)] font-semibold leading-[1.05] text-forest sm:mt-7 sm:max-w-none sm:text-display-lg">
          {kitchens.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[30ch] text-small leading-6 text-muted sm:mt-5 sm:max-w-4xl sm:text-lede sm:leading-8">
          {kitchens.text}
        </p>
      </div>

      <ul className="mx-auto mt-8 grid max-w-[38rem] grid-cols-2 gap-3 sm:mt-10 sm:max-w-none sm:gap-4 lg:grid-cols-5 lg:gap-3 xl:gap-4">
        {kitchens.items.map((item, index) => {
          const Icon = item.icon;

          return (
            <li
              key={item.title}
              data-reveal
              data-reveal-delay={index * 70}
              className={index === kitchens.items.length - 1 ? 'col-span-2 mx-auto w-[calc(50%-0.375rem)] lg:col-span-1 lg:w-auto' : undefined}
            >
              <a
                href={item.href}
                className="group flex h-full min-h-[310px] flex-col overflow-hidden rounded-t-[999px] rounded-b-sm border border-line bg-paper text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/55 hover:shadow-lift focus-visible:border-gold min-[430px]:min-h-[340px] sm:min-h-[500px] lg:min-h-[520px]"
              >
                <div className="relative mx-2.5 mt-2.5 overflow-hidden rounded-t-[999px] rounded-b-[34%] bg-cream-deep pt-[76%] min-[430px]:mx-3 min-[430px]:mt-3 sm:mx-4 sm:mt-4 sm:rounded-b-[44%] sm:pt-[74%]">
                  <img
                    src={images[kitchenImages[index]]}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute inset-0 bg-forest/10 transition duration-300 group-hover:bg-transparent" aria-hidden="true" />
                </div>

                <div className="-mt-6 flex flex-1 flex-col items-center px-3 pb-4 min-[430px]:px-4 sm:-mt-9 sm:px-6 sm:pb-6">
                  <span className="relative z-10 grid size-12 place-items-center rounded-full bg-paper text-gold shadow-[0_0_0_8px_var(--color-paper)] transition duration-300 group-hover:text-forest min-[430px]:size-14 sm:size-20 sm:shadow-[0_0_0_12px_var(--color-paper)]">
                    <Icon size={22} strokeWidth={1.45} aria-hidden="true" className="min-[430px]:size-6 sm:size-9" />
                  </span>
                  <h3 className="mt-4 max-w-[11ch] font-display text-[1.02rem] font-semibold leading-tight text-forest min-[430px]:text-[1.12rem] sm:mt-6 sm:max-w-[12ch] sm:text-[clamp(1.65rem,2.3vw,2.15rem)] sm:leading-[1.05]">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[18ch] text-[0.72rem] leading-5 text-muted min-[430px]:text-[0.78rem] sm:mt-5 sm:max-w-[24ch] sm:text-body sm:leading-7">{item.text}</p>
                  <span className="mt-auto grid size-9 place-items-center rounded-full border border-gold text-gold transition duration-300 group-hover:-translate-y-2 group-hover:bg-gold group-hover:text-forest-deep min-[430px]:size-10 sm:size-14">
                    <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" className="sm:size-[23px]" />
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

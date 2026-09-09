import { about } from '../../data/content';
import { useInView } from '../../hooks/useInView';
import { CountUp } from '../ui/CountUp';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

/** Four counters that tick up on scroll, on a ruled grid. */
export function Numbers() {
  const { numbers } = about;
  const [ref, inView] = useInView({ threshold: 0.35 });

  return (
    <Section>
      <SectionHeading eyebrow={numbers.eyebrow} title={numbers.title} size="md" />
      <dl ref={ref} className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
        {numbers.items.map((item, index) => (
          <div key={item.label} data-reveal data-reveal-delay={index * 80} className="group relative bg-paper p-8 transition-colors duration-300 hover:bg-cream lg:p-10">
            <dd className="font-display text-display-xl leading-none text-forest">
              <CountUp value={item.value} suffix={item.suffix} start={inView} duration={1400 + index * 250} />
            </dd>
            <dt className="mt-4 max-w-[18ch] text-small text-muted">{item.label}</dt>
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-[width] duration-500 ease-out-soft group-hover:w-full" aria-hidden="true" />
          </div>
        ))}
      </dl>
    </Section>
  );
}

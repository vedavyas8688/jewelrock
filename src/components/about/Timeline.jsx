import { about } from '../../data/content';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export function Timeline() {
  const { timeline } = about;

  return (
    <Section tone="forest">
      <div data-reveal="fade">
        <SectionHeading title={timeline.title} light align="center" />
      </div>
      <ol data-reveal="timeline" className="timeline-list mt-14">
        {timeline.items.map((item, index) => (
          <li
            key={`${item.year}-${item.title}`}
            data-reveal="fade"
            data-reveal-delay={180 + index * 140}
            className="timeline-item"
          >
            <span className="timeline-dot" aria-hidden="true" />
            <p className="font-display text-[2.45rem] leading-none text-gold-light sm:text-display-md">
              {item.year}
            </p>
            <h3 className="mt-4 font-body text-body font-bold text-cream">{item.title}</h3>
            <p className="mt-3 max-w-[28ch] text-small leading-7 text-cream/72">{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

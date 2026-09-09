import { useEffect, useState } from 'react';
import { about } from '../../data/content';
import { useInView } from '../../hooks/useInView';
import { Eyebrow } from '../ui/Eyebrow';
import { Section } from '../ui/Section';
import { cx } from '../../lib/cx';

export function Manifesto() {
  const { manifesto } = about;
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [active, setActive] = useState(0);
  const statements = manifesto.statements ?? [manifesto.lines];
  const lines = statements[active];
  let wordIndex = 0;

  useEffect(() => {
    if (statements.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % statements.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [statements.length]);

  return (
    <Section tone="deep" tight className="py-12 sm:py-14 lg:py-16">
      <div
        ref={ref}
        className={cx('word-reveal mx-auto max-w-4xl text-center', inView && 'is-visible')}
      >
        <Eyebrow className="mb-6 justify-center">{manifesto.eyebrow}</Eyebrow>
        <p
          key={active}
          className="tab-swap mx-auto grid max-w-[760px] gap-2 font-display text-[clamp(1.75rem,3.1vw,3.15rem)] leading-[1.12] text-forest"
        >
          {lines.map((line) => (
            <span key={line} className="block">
              {line.split(' ').map((word, index) => {
                const delay = wordIndex++ * 38;
                return (
                  <span
                    key={`${active}-${word}-${index}`}
                    className="word mr-[0.22em] last:mr-0"
                    style={{ '--d': `${delay}ms` }}
                  >
                    {word}
                  </span>
                );
              })}
            </span>
          ))}
        </p>
        <p className="word mt-6 text-small text-muted" style={{ '--d': `${wordIndex * 38 + 120}ms` }}>
          {manifesto.sign}
        </p>
      </div>
    </Section>
  );
}

import { about } from '../data/content';
import { AboutHero } from '../components/about/AboutHero';
import { Manifesto } from '../components/about/Manifesto';
import { Timeline } from '../components/about/Timeline';
import { Numbers } from '../components/about/Numbers';
import { Philosophy } from '../components/about/Philosophy';
import { DayAtJewelRock } from '../components/about/DayAtJewelRock';
import { Sourcing } from '../components/about/Sourcing';
import { Team } from '../components/about/Team';
import { ReserveBanner } from '../components/shared/ReserveBanner';

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <Manifesto />
      <Timeline />
      <Numbers />
      <Sourcing />
      <Philosophy />
      <DayAtJewelRock />
      <Team />
      <ReserveBanner {...about.cta} />
    </>
  );
}

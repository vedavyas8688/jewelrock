import { home } from '../data/content';
import { Hero } from '../components/home/Hero';
import { Ticker } from '../components/home/Ticker';
import { Kitchens } from '../components/home/Kitchens';
import { Signature } from '../components/home/Signature';
import { Occasions } from '../components/home/Occasions';
import { Story } from '../components/home/Story';
import { BarSpotlight } from '../components/home/BarSpotlight';
import { Moments } from '../components/home/Moments';
import { Reviews } from '../components/home/Reviews';
import { JournalTeaser } from '../components/home/JournalTeaser';
import { ReserveBanner } from '../components/shared/ReserveBanner';
import { VisitUs } from '../components/shared/VisitUs';

export function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Kitchens />
      <Signature />
      <Occasions />
      <Story />
      <BarSpotlight />
      <Moments />
      <Reviews />
      <JournalTeaser />
      <ReserveBanner {...home.reserve} />
      <VisitUs {...home.visit} cta={home.visit.cta.label} />
    </>
  );
}

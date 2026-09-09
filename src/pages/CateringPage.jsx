import { CateringHero } from '../components/catering/CateringHero';
import { BuffetJourney } from '../components/catering/BuffetJourney';
import { LiveCulinaryTheatre } from '../components/catering/LiveCulinaryTheatre';
import { BuffetCollection } from '../components/catering/BuffetCollection';

export function CateringPage() {
  return (
    <>
      <CateringHero />
      <BuffetJourney />
      <LiveCulinaryTheatre />
      <BuffetCollection />
    </>
  );
}

import Contact from '@/components/landing/contact';
import Hero from '@/components/landing/hero';
import NearbyCoworkingSpaces from '@/components/landing/nearbyCoworkingSpaces';
import NeedsSection from '@/components/landing/needsSection';
import QuoteSection from '@/components/landing/quoteSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <NeedsSection />
      <QuoteSection />
      <NearbyCoworkingSpaces />
      <Contact />
    </div>
  );
}

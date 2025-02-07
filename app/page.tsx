import HeroSection from '@/components/home/hero-section';
import ServicesSection from '@/components/home/services-section';
import SocialProof from '@/components/home/social-proof';
import PricingSection from '@/components/home/pricing-section';

export const metadata = {
  title: 'BY1.net - Your Growth, Piece by Piece',
  description: 'Not All Businesses Can Afford Perfection—But Everyone Deserves Progress. BY1.net helps you grow one practical step at a time.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section with core brand promise */}
      <HeroSection />

      {/* Services section showing the step-by-step approach */}
      <ServicesSection />

      {/* Social proof showing real results */}
      <SocialProof />

      {/* Transparent pricing section */}
      <PricingSection />
    </main>
  );
}

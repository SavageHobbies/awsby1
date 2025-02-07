import HeroSection from '@/components/home/hero-section';
import ServicesSection from '@/components/home/services/services-section';
import WhyChooseSection from '@/components/home/why-choose/why-choose-section';
import CaseStudiesSection from '@/components/home/case-studies/case-studies-section';
import ProcessSection from '@/components/home/process/process-section';
import TechnologiesSection from '@/components/home/technologies/technologies-section';
import ContactSection from '@/components/home/contact/contact-section';
import StatsSection from '@/components/home/stats/stats-section';
import LeadMagnet from '@/components/home/lead-magnet';
import StickyCTA from '@/components/ui/sticky-cta';

export const metadata = {
  alternates: {
    canonical: 'https://by1.net',
  },
  openGraph: {
    type: 'website',
    url: 'https://by1.net',
    title: 'AI & Automation Solutions for Business Transformation',
    description: 'Discover how BY1.net\'s AI and automation solutions can transform your business operations. Get started with a free consultation today.',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'BY1.net - AI & Automation Solutions',
      },
    ],
  },
};

import Seo from '@/components/seo/seo';

const slides = [
  {
    title: 'AI Solutions for Your Business',
    description: 'Discover how our AI solutions can transform your business and drive growth.',
    imageSrc: '/images/ai-slide.jpg',
    buttonText: 'Explore AI Services',
    buttonLink: '/services/ai-implementation',
  },
  {
    title: 'Custom Software Development',
    description: 'Get tailor-made software solutions to meet your specific business needs.',
    imageSrc: '/images/software-development.jpg',
    buttonText: 'Learn More',
    buttonLink: '/services/custom-development',
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="AI & Automation Solutions for Business Transformation"
        description="Discover how BY1.net's AI and automation solutions can transform your business operations. Get started with a free consultation today."
        canonicalUrl="https://by1.net"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Home',
          description: 'BY1.net Homepage',
          url: 'https://by1.net'
        }}
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <LeadMagnet />
      <WhyChooseSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TechnologiesSection />
      <ContactSection />
      <StickyCTA />
    </>
  );
}

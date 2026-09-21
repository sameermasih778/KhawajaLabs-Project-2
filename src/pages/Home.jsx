import React from 'react';
import Hero from '../components/Hero';
import ProductOverview from '../components/ProductOverview';
import FeatureShowcase from '../components/FeatureShowcase';
import Benefits from '../components/Benefits';
import Pricing from '../components/Pricing';
import ProgressAndTools from '../components/ProgressAndTools';
import BlogsSection from '../components/BlogsSection';
import OurTeam from '../components/OurTeam';
import GlobalPresence from '../components/GlobalPresence';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import FreeTrialSection from '../components/FreeTrialSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductOverview />
      <FeatureShowcase />
      <Benefits />
      <Pricing />
      <ProgressAndTools />
      <BlogsSection />
      <OurTeam />
      <GlobalPresence />
      <TestimonialsSection />
      <FAQSection />
      <FreeTrialSection />
    </main>
  );
}








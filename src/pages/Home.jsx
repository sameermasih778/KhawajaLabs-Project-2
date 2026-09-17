import React from 'react';
import Hero from '../components/Hero';
import ProductOverview from '../components/ProductOverview';
import FeatureShowcase from '../components/FeatureShowcase';
import FeatureGrid from '../components/FeatureGrid';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductOverview />
      <FeatureShowcase />
      <FeatureGrid />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
  );
}

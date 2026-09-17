import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 bg-grid-pattern min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact Team"
          title="We'd love to hear from you"
          description="Ready to transform your project management? Reach out to our product specialists."
        />
        <ContactForm />
      </div>
    </main>
  );
}

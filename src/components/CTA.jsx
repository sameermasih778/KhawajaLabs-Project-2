import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './Button';

export default function CTA() {
  return (
    <section className="py-24 bg-dark-1 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-dark-3 to-dark-2 border border-white/15 rounded-3xl p-10 sm:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-xs font-semibold text-grey-5 border border-white/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-white" /> Ready for faster launches?
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Start building your roadmap <br />
            with Suprema today.
          </h2>

          <p className="text-base sm:text-lg text-grey-4 max-w-xl mx-auto mb-10">
            Join thousands of modern product teams shipping faster with automated task assignment and real-time SLA tracking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Get Started for Free
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Book a Team Demo
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

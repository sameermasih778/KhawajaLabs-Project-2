import React from 'react';
import { motion } from 'framer-motion';
import { FolderPlus, Sliders, Rocket } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Import & Connect Workspace',
      description: 'Connect your repositories, Figma designs, and communication tools in under 2 minutes.',
      icon: FolderPlus,
    },
    {
      step: '02',
      title: 'Set AI Priority Rules',
      description: 'Define roadmap milestones and let Suprema organize backlog tasks automatically based on team capacity.',
      icon: Sliders,
    },
    {
      step: '03',
      title: 'Guide & Launch Smoothly',
      description: 'Track real-time progress, eliminate blockers early, and deliver products on target every single time.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 bg-dark-1 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple Setup"
          title="From setup to launch in three easy steps"
          description="Getting your entire organization aligned on Suprema requires zero complex configuration."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-dark-2/50 border border-white/10 p-8 rounded-2xl relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-extrabold text-white/20 font-tight">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-grey-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

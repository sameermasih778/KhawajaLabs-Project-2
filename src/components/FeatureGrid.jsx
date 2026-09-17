import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trash2, GitBranch, Users2, LineChart, Shield, Bell } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function FeatureGrid() {
  const cards = [
    {
      icon: Trash2,
      title: 'Workspace Auto-Cleanup',
      description: 'Automatically archive finished tasks and keep your boards clutter-free so teams stay focused on active priorities.',
    },
    {
      icon: GitBranch,
      title: 'Seamless Integrations',
      description: 'Connect directly with GitHub, Figma, Slack, Jira, and Notion for automated sync without leaving your tools.',
    },
    {
      icon: Users2,
      title: 'Real-time Collaboration',
      description: 'Multi-user editing, instant comments, audio huddles, and live cursors for frictionless team alignment.',
    },
    {
      icon: LineChart,
      title: 'Predictive Velocity Analytics',
      description: 'AI forecasts project completion dates based on historical velocity, pull request merge speeds, and team load.',
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'SOC2 Type II certified, end-to-end encrypted data at rest and in transit, with custom role-based access control (RBAC).',
    },
    {
      icon: Bell,
      title: 'Contextual Smart Notifications',
      description: 'Zero spam. Only receive alerts for blocked tasks, critical SLA risks, or direct mentions when you need them.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-dark-2/60 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything you need to ship faster"
          description="Built from the ground up for modern engineering and product management teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl relative group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-grey-4 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

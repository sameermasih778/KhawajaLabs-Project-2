import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Chen',
      role: 'VP of Product at Hyperion',
      content: 'Suprema eliminated 4 hours of sprint planning every single week. The AI task auto-prioritization is scary accurate.',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    },
    {
      name: 'Marcus Vance',
      role: 'CTO at Apex Global',
      content: 'The cleanest task management dashboard we have ever used. Our developers actually enjoy updating their task statuses now.',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    {
      name: 'Elena Rostova',
      role: 'Lead Designer at Pulse',
      content: 'Figma and GitHub integration works flawlessly. Suprema connects design handoffs straight into actionable developer tasks.',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-24 bg-dark-1 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Wall of Love"
          title="Loved by teams delivering world-class software"
          description="See how product leaders use Suprema to streamline execution and accelerate launch schedules."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark-2/70 border border-white/10 p-8 rounded-2xl flex flex-col justify-between relative group hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-center gap-1 mb-6 text-yellow-400">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-grey-5 mb-8 leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <div className="text-sm font-bold text-white">{rev.name}</div>
                  <div className="text-xs text-grey-4">{rev.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

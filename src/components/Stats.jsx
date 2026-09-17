import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { label: 'Active Teams', value: '10,000+' },
    { label: 'Tasks Auto-Completed', value: '2.5M+' },
    { label: 'Average Time Saved', value: '38%' },
    { label: 'Platform Uptime', value: '99.99%' },
  ];

  return (
    <section className="py-16 bg-dark-3/60 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-tight mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-grey-4">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

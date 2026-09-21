import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

// Enhanced Dotted Pyramid Mesh Background Graphic
function PyramidDots() {
  const rows = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
  
  return (
    <div className="absolute top-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[6px] pointer-events-none opacity-35 select-none z-0">
      {rows.map((dotCount, rIdx) => {
        const rowOpacity = Math.max(0.25, 1 - rIdx * 0.07);

        return (
          <div key={rIdx} className="flex items-center gap-[6px]">
            {Array.from({ length: dotCount }).map((_, dIdx) => {
              const distFromCenter = Math.abs(dIdx - (dotCount - 1) / 2);
              const dotOpacity = Math.max(0.15, rowOpacity - distFromCenter * 0.06);

              return (
                <span
                  key={dIdx}
                  className="w-[2.5px] h-[2.5px] rounded-full bg-white transition-opacity"
                  style={{ opacity: dotOpacity }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default function Benefits() {
  const cards = [
    {
      id: 'increased-efficiency',
      title: 'Increased Efficiency',
      description: 'Streamline processes to save time and resources.',
      renderIcon: () => (
        <svg className="w-7 h-7 text-white fill-white" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      id: 'enhanced-collaboration',
      title: 'Enhanced Collaboration',
      description: 'Foster teamwork with seamless communication tools.',
      renderIcon: () => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      ),
    },
    {
      id: 'custom-workflows',
      title: 'Custom Workflows',
      description: "Tailor workflows to fit your team's unique needs.",
      renderIcon: () => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none">
          <rect x="9" y="3" width="6" height="5" rx="1" fill="white" />
          <rect x="3" y="16" width="6" height="5" rx="1" fill="white" />
          <rect x="15" y="16" width="6" height="5" rx="1" fill="white" />
          <path d="M12 8v4M6 12h12v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'real-time-insights',
      title: 'Real-Time Insights',
      description: 'Access live data to make informed decisions.',
      renderIcon: () => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9.5" fill="white" />
          <path d="M12 6.5v5.5l4 2.5" stroke="black" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'task-accountability',
      title: 'Task Accountability',
      description: 'Assign tasks clearly to ensure ownership and responsibility.',
      renderIcon: () => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="6.5" cy="6.5" r="3.2" />
          <circle cx="17.5" cy="6.5" r="3.2" />
          <circle cx="6.5" cy="17.5" r="3.2" />
          <circle cx="17.5" cy="17.5" r="3.2" />
        </svg>
      ),
    },
    {
      id: 'flexible-integration',
      title: 'Flexible Integration',
      description: 'Connect with existing tools for a unified experience.',
      renderIcon: () => (
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="5.5" height="5.5" rx="1" fill="white" />
          <rect x="15.5" y="3" width="5.5" height="5.5" rx="1" fill="white" />
          <rect x="3" y="15.5" width="5.5" height="5.5" rx="1" fill="white" />
          <rect x="15.5" y="15.5" width="5.5" height="5.5" rx="1" fill="white" />
          <path d="M8.5 5.75h7M5.75 8.5v7M18.25 8.5v7M8.5 18.25h7" stroke="white" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: '76%', label: 'Pro Users' },
    { number: '12M+', label: 'Tasks Organized' },
    { number: '600+', label: 'Team Members' },
  ];

  return (
    <section id="benefits" className="py-24 md:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background Top Ambient Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 mb-5 shadow-lg"
          >
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Benefits</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 font-tight leading-[1.15]"
          >
            Unlock Your Team's Potential
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Maximize efficiency, enhance collaboration, and achieve project goals with Suprema's powerful management tools.
          </motion.p>
        </div>

        {/* 3x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#050505] border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden group flex flex-col items-center text-center shadow-2xl hover:border-white/30 hover:bg-[#08080a] transition-all min-h-[350px] justify-between"
            >
              {/* Top Accent Light Notch Line */}
              <div className="w-10 h-[2.5px] bg-white/80 rounded-full mx-auto relative z-10" />

              {/* Top Center Spotlight Cone */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-44 bg-gradient-to-b from-white/25 via-white/5 to-transparent blur-2xl pointer-events-none" />

              {/* Pyramid Dotted Mesh Background Graphic */}
              <PyramidDots />

              {/* Corner Clip Brackets */}
              <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-white/25" />
              <div className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-white/25" />
              <div className="absolute bottom-3 left-3 w-2 h-2 border-b-2 border-l-2 border-white/25" />
              <div className="absolute bottom-3 right-3 w-2 h-2 border-b-2 border-r-2 border-white/25" />

              {/* Larger Center Icon */}
              <div className="my-auto relative z-10 pt-8 pb-4">
                <div className="w-16 h-16 rounded-2xl bg-zinc-950/90 border border-white/20 flex items-center justify-center text-white mx-auto shadow-2xl group-hover:scale-110 group-hover:border-white/40 transition-all backdrop-blur-md">
                  {card.renderIcon()}
                </div>
              </div>

              {/* Larger Heading & Description */}
              <div className="relative z-10 space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal max-w-xs mx-auto">
                  {card.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-10 border-t border-white/10"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-baseline justify-center gap-3">
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-tight">
                {stat.number}
              </span>
              <span className="text-sm sm:text-base font-semibold text-zinc-400">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

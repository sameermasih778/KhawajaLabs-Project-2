import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function GlobalPresence() {
  const stats = [
    {
      number: '100%',
      label: 'Increase in Progress Tracking',
    },
    {
      number: '50%',
      label: 'Faster Project Completion Rates',
    },
    {
      number: '90%',
      label: 'Satisfaction Rate Among Users',
    },
  ];

  return (
    <section id="global-presence" className="py-24 md:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background Top Ambient Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top 3D Globe Sphere Graphic with Orbit Rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-48 h-48 sm:w-60 sm:h-60 mx-auto mb-8 flex items-center justify-center"
        >
          {/* Outer Glowing Orbit Ring */}
          <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-white/15 animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Main Dark Globe Sphere */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-b from-zinc-800 via-zinc-950 to-black border border-white/20 shadow-2xl relative overflow-hidden flex items-center justify-center">
            
            {/* Globe Grid Mesh Pattern */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1.5px, transparent 1.5px)`,
                backgroundSize: '12px 12px',
                maskImage: 'radial-gradient(circle at 50% 40%, black 50%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 50%, transparent 90%)',
              }}
            />

            {/* Inner Globe Continent Shading & Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/15 blur-sm" />
            
            {/* Glowing Accent Dots representing Global Nodes */}
            <div className="absolute top-10 left-12 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
            <div className="absolute top-16 right-12 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse delay-300" />
            <div className="absolute bottom-12 left-16 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse delay-700" />
          </div>

          {/* Central Pill Badge overlapping Globe Bottom */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-950 border border-white/20 text-xs font-semibold text-emerald-400 shadow-xl backdrop-blur-md">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Global Presence</span>
            </div>
          </div>
        </motion.div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 font-tight max-w-3xl mx-auto pt-4"
        >
          Connecting Worldwide Teams
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal max-w-xl mx-auto mb-20"
        >
          Empowering teams across the globe to collaborate seamlessly, driving innovation and success everywhere.
        </motion.p>

        {/* 3 Stats Column with Dividers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 max-w-5xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="py-6 md:py-0 md:px-8 text-center space-y-2">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-tight">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-400 max-w-xs mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

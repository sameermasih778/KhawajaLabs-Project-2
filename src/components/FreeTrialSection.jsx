import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function FreeTrialSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const stats = [
    { number: '76%', label: 'Pro Users' },
    { number: '12M+', label: 'Task Organized' },
    { number: '600+', label: 'Team Members' },
    { number: '20+', label: 'Pro Users' },
  ];

  return (
    <section id="free-trial" className="py-16 sm:py-24 md:py-32 bg-black text-white relative overflow-hidden border-t border-white/10 scroll-mt-28">
      
      {/* Background Top Ambient Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] sm:h-[500px] bg-emerald-500/5 blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Free Trial Card Box */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-[#050505] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 text-center max-w-8xl mx-auto shadow-2xl relative overflow-hidden backdrop-blur-2xl"
        >
          {/* Subtle Dotted Background Pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
              backgroundSize: '16px 16px',
            }}
          />

          {/* Top Ambient Glow Cone */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-28 sm:h-36 bg-gradient-to-b from-white/15 via-white/5 to-transparent blur-2xl pointer-events-none" />

          {/* Top Pill Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm font-semibold text-emerald-400 mb-4 sm:mb-6 relative z-10"
          >
            <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>Free Trial</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4 font-tight leading-[1.15] relative z-10"
          >
            Start your 7-day free trial
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-lg mx-auto mb-6 sm:mb-8 font-normal leading-relaxed relative z-10 px-2"
          >
            Start your free trial now to experience seamless project management without any commitment!
          </motion.p>

          {/* Email Subscription Form Box */}
          <motion.form
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            onSubmit={handleSubmit}
            className="relative z-10 max-w-lg mx-auto mb-6 sm:mb-7 px-2"
          >
            <div className="bg-zinc-950 border border-white/15 rounded-2xl sm:rounded-full p-1.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 shadow-xl">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent px-4 sm:px-6 py-2.5 sm:py-2 text-xs sm:text-sm text-white placeholder-zinc-500 outline-none flex-grow w-full rounded-xl sm:rounded-full"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-white text-black font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-full hover:bg-zinc-200 transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                {submitted ? 'Joined!' : 'Get Started'}
              </motion.button>
            </div>
          </motion.form>

          {/* Features Checkpoints Row */}
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-200 font-medium mb-8 sm:mb-12 relative z-10 px-2"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              Free 7-day trial
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              Cancel anytime
            </span>
          </motion.div>

          {/* Bottom 4 Stat Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10 pt-2 sm:pt-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-zinc-950/90 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-lg hover:border-white/20 transition-all backdrop-blur-md"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-300 tracking-tight font-tight mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm pt-1 sm:pt-3 font-medium text-zinc-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}

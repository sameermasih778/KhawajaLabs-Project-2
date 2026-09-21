import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Check } from 'lucide-react';

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
    <section id="free-trial" className="py-24 md:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background Top Ambient Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Free Trial Card Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#050505] border border-white/15 rounded-3xl p-8 sm:p-12 lg:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-36 bg-gradient-to-b from-white/15 via-white/5 to-transparent blur-2xl pointer-events-none" />

          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-6 relative z-10">
            <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>Free Trial</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 font-tight leading-[1.15] relative z-10">
            Start your 7-day free trial
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-lg mx-auto mb-8 font-normal leading-relaxed relative z-10">
            Start your free trial now to experience seamless project management without any commitment!
          </p>

          {/* Email Subscription Form Box */}
          <form onSubmit={handleSubmit} className="relative z-10 max-w-md mx-auto mb-6">
            <div className="bg-zinc-950 border border-white/15 rounded-2xl p-1.5 flex items-center shadow-xl">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent px-4 py-2 text-sm text-white placeholder-zinc-500 outline-none flex-grow w-full"
              />
              <button
                type="submit"
                className="bg-white text-black font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-zinc-200 transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
              >
                {submitted ? 'Joined!' : 'Get Started'}
              </button>
            </div>
          </form>

          {/* Features Checkpoints Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-300 font-medium mb-12 relative z-10">
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
          </div>

          {/* Bottom 4 Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10 pt-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-zinc-950/90 border border-white/10 rounded-2xl p-5 text-center shadow-lg hover:border-white/20 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-tight mb-1">
                  {stat.number}
                </div>
                <div className="text-xs font-medium text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}

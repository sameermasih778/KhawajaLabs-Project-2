import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info, Zap, Command, Layers, SlidersHorizontal } from 'lucide-react';
import LogoStrip from './LogoStrip';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 md:pt-36 pb-8 md:pb-12 overflow-hidden bg-black text-white min-h-screen flex flex-col justify-between">
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top & Side Vignette Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        
        {/* Floating Cards Canvas Layout */}
        <div className="relative py-2 min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex flex-col items-center justify-center my-auto">


          {/* ==================== LEFT FLOATING CARDS ==================== */}

          {/* Top Left Card: Keyboard-first design */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: -20 }}
            animate={{ opacity: 0.85, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block absolute left-0 top-0 w-64 bg-zinc-950/80 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400">
                <Command className="w-4 h-4" />
              </div>
              <div className="flex gap-1">
                <span className="px-2 py-1 rounded bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">⌘</span>
                <span className="px-2 py-1 rounded bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">K</span>
              </div>
            </div>
            <h4 className="text-sm font-bold text-white mb-1">Keyboard-first design</h4>
            <p className="text-xs text-zinc-400">Shortcuts for everything - no mouse required</p>
          </motion.div>

          {/* Middle Left Card: Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: -60, y: 20 }}
            animate={{ opacity: 0.8, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden xl:block absolute -left-12 top-40 w-80 bg-zinc-950/80 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
          >
            <div className="text-[11px] font-semibold text-zinc-400 mb-3 uppercase tracking-wider">Activity</div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 flex-shrink-0" />
                <p><span className="text-white font-medium">mode</span> created the issue • <span className="text-zinc-500">8 days ago</span></p>
              </div>
              <div className="flex items-start gap-2 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                <p><span className="text-white font-medium">mode</span> changed status from <span className="text-zinc-300">Todo</span> to <span className="text-emerald-400">In Progress</span></p>
              </div>
              <div className="flex items-start gap-2 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                <p><span className="text-white font-medium">mode</span> set priority to <span className="text-yellow-400 font-semibold">Urgent</span></p>
              </div>
              <div className="flex items-start gap-2 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <p><span className="text-white font-medium">mode</span> self-assigned the issue</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Left Card: Productivity Reports Radial Gauges */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 50 }}
            animate={{ opacity: 0.9, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden md:block absolute left-4 bottom-2 w-80 bg-zinc-950/90 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white">Productivity Reports</span>
              <div className="flex items-center gap-1 bg-zinc-900 border border-white/10 rounded-lg px-2 py-0.5 text-[10px] text-zinc-400">
                <SlidersHorizontal className="w-3 h-3" /> View
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="5" className="text-zinc-800" fill="transparent" />
                    <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="5" className="text-emerald-400" strokeDasharray="163" strokeDashoffset="33" strokeLinecap="round" fill="transparent" />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-sm font-extrabold text-white">80%</span>
                  </div>
                </div>
                <span className="text-[10px] font-medium text-zinc-400 mt-1">Productivity</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="5" className="text-zinc-800" fill="transparent" />
                    <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="5" className="text-emerald-400" strokeDasharray="163" strokeDashoffset="57" strokeLinecap="round" fill="transparent" />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-sm font-extrabold text-white">65%</span>
                  </div>
                </div>
                <span className="text-[10px] font-medium text-zinc-400 mt-1">Productivity</span>
              </div>
            </div>
          </motion.div>


          {/* ==================== RIGHT FLOATING CARDS ==================== */}

          {/* Top Right Card: My Workspace Sidebar Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -20 }}
            animate={{ opacity: 0.85, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block absolute right-8 top-0 w-60 bg-zinc-950/80 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                My Workspace
              </div>
              <span className="text-[10px] text-zinc-500">▼</span>
            </div>
            <div className="space-y-1 text-xs text-zinc-400">
              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-zinc-900 text-white font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white" /> Issues
              </div>
              <div className="pl-6 text-zinc-400 py-0.5">Active</div>
              <div className="pl-6 text-zinc-400 py-0.5">Backlog</div>
              <div className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-zinc-900/50">
                <Layers className="w-3.5 h-3.5" /> Projects
              </div>
            </div>
          </motion.div>

          {/* Middle Right Card: Instantly Fast */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 20 }}
            animate={{ opacity: 0.9, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:block absolute right-12 top-36 w-64 bg-zinc-950/90 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
          >
            <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white mb-2 shadow-md">
              <Zap className="w-4 h-4 fill-white text-white" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-amber-400 fill-amber-400" /> Instantly fast
            </h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Designed in pursuit of high-speed performance
            </p>
          </motion.div>

          {/* Bottom Right Card: Productivity Reports Line Chart */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 50 }}
            animate={{ opacity: 0.85, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden lg:block absolute right-4 bottom-2 w-80 bg-zinc-950/90 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-white">Productivity Reports</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">+18%</span>
            </div>

            <div className="h-20 w-full relative flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60">
                <path
                  d="M0,45 L30,35 L60,42 L90,15 L120,38 L150,10 L180,30 L200,8"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="30" cy="35" r="2.5" fill="#10b981" />
                <circle cx="60" cy="42" r="2.5" fill="#10b981" />
                <circle cx="90" cy="15" r="2.5" fill="#10b981" />
                <circle cx="120" cy="38" r="2.5" fill="#10b981" />
                <circle cx="150" cy="10" r="2.5" fill="#10b981" />
                <circle cx="180" cy="30" r="2.5" fill="#10b981" />
                <circle cx="200" cy="8" r="2.5" fill="#10b981" />
              </svg>
            </div>
            <div className="flex justify-between text-[9px] text-zinc-500 mt-1 font-mono">
              <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span>
            </div>
          </motion.div>


          {/* ==================== CENTER HERO CONTENT ==================== */}

          <div className="text-center max-w-2xl mx-auto z-20 py-4">
            {/* Top Badge Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-zinc-900/90 border border-white/15 text-xs font-medium text-white mb-6 hover:border-white/30 transition-all cursor-pointer shadow-lg backdrop-blur-md"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-white relative overflow-hidden flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-black absolute -top-0.5 -right-0.5" />
              </div>
              <span>Manage projects end-to-end</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.1] font-tight"
            >
              Plan and navigate <br />
              from idea to launch.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-400 max-w-lg mx-auto mb-7 leading-relaxed font-normal"
            >
              Create a clear roadmap, track progress, and smoothly guide your project from idea to successful launch.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-2.5"
            >
              <a href="#pricing">
                <button className="px-7 py-3 text-sm font-bold text-black bg-white hover:bg-zinc-200 transition-all rounded-xl shadow-xl shadow-white/10 active:scale-95 cursor-pointer">
                  Get Started For Free
                </button>
              </a>

              <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-medium pt-0.5">
                <Info className="w-3 h-3 text-zinc-500" />
                <span>No credit card required</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Embedded Logo Strip at bottom of Hero fold */}
        <div className="mt-2">
          <LogoStrip />
        </div>
      </div>
    </section>
  );
}

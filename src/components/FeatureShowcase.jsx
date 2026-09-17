import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Target, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function FeatureShowcase() {
  const features = [
    {
      id: 'smart-assignment',
      badge: 'Workload Intelligence',
      title: 'Smart Task Assignment Based on Team Strengths',
      description: 'Suprema automatically balances team capacity, matches task requirements with developer skill sets, and avoids bottlenecking critical paths.',
      icon: UserCheck,
      details: [
        'Skill-matrix matching algorithms',
        'Real-time team bandwidth detection',
        'Automatic task re-routing on delay signals',
      ],
      mockup: (
        <div className="bg-dark-2 rounded-2xl border border-white/10 p-5 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-xs font-semibold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" /> AI Assignment Engine
            </span>
            <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full">Active</span>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-dark-3 rounded-xl border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 text-xs font-bold">
                  SK
                </div>
                <div>
                  <div className="text-xs font-medium text-white">Sameer Khokhar</div>
                  <div className="text-[10px] text-grey-4">Frontend Lead • 85% Load</div>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-1 rounded border border-emerald-800/40">Assigned +2 Tasks</span>
            </div>

            <div className="p-3 bg-dark-3 rounded-xl border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-300 text-xs font-bold">
                  AL
                </div>
                <div>
                  <div className="text-xs font-medium text-white">Alex Morgan</div>
                  <div className="text-[10px] text-grey-4">Backend Specialist • 40% Load</div>
                </div>
              </div>
              <span className="text-xs text-blue-400 font-semibold bg-blue-950/40 px-2 py-1 rounded border border-blue-800/40">Available</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'task-prioritization',
      badge: 'Goal Alignment',
      title: 'Automated Task Prioritization & Deadline Safeguards',
      description: 'Never miss a deadline again. Suprema predicts timeline risks and dynamically updates priority rankings before blockers derail your launch.',
      icon: Target,
      details: [
        'Predictive risk score calculation',
        'Customizable SLA warning thresholds',
        'Automated dependency mapping',
      ],
      mockup: (
        <div className="bg-dark-2 rounded-2xl border border-white/10 p-5 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-xs font-semibold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-yellow-400" /> Deadline Protection
            </span>
            <span className="text-[10px] bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 px-2 py-0.5 rounded-full">Safe</span>
          </div>

          <div className="space-y-2">
            <div className="p-3 bg-dark-3 rounded-xl border border-yellow-500/20 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-white">API Authentication Rewrite</div>
                <div className="text-[10px] text-yellow-400">Risk level: Low • SLA 48h</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-white">P1 Urgent</div>
                <div className="text-[10px] text-grey-4">Due Oct 14</div>
              </div>
            </div>

            <div className="p-3 bg-dark-3 rounded-xl border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-xs font-medium text-white">Stripe Webhook Handlers</div>
                <div className="text-[10px] text-grey-4">Risk level: Minimal</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium text-grey-3">P2 Normal</div>
                <div className="text-[10px] text-grey-4">Due Oct 18</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'progress-tracking',
      badge: 'Real-time Metrics',
      title: 'Progress Tracking & Live Milestone Visibility',
      description: 'Clear, zero-fluff dashboards showing sprint velocity, completed epic percentages, and team productivity trends in real-time.',
      icon: TrendingUp,
      details: [
        'Live velocity metrics & burndown charts',
        'Cross-platform integrations (GitHub, Figma, Slack)',
        'One-click executive status report exports',
      ],
      mockup: (
        <div className="bg-dark-2 rounded-2xl border border-white/10 p-5 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <span className="text-xs font-semibold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" /> Sprint #14 Velocity
            </span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">+14.2%</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-dark-3 rounded-xl border border-white/5">
              <div className="text-[10px] text-grey-4">Completed Tasks</div>
              <div className="text-xl font-bold text-white mt-1">142 / 150</div>
              <div className="w-full bg-dark-5 rounded-full h-1.5 mt-2">
                <div className="bg-emerald-400 h-full rounded-full w-[94%]" />
              </div>
            </div>

            <div className="p-3 bg-dark-3 rounded-xl border border-white/5">
              <div className="text-[10px] text-grey-4">Cycle Time</div>
              <div className="text-xl font-bold text-white mt-1">1.4 days</div>
              <div className="text-[10px] text-emerald-400 mt-1">32% faster than avg</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-dark-1 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflow Mastery"
          title="Designed for high-output product teams"
          description="Transform raw tasks into structured, high-velocity output with intelligent task management features."
        />

        <div className="space-y-24">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={feature.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Left / Right */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-grey-5 border border-white/10 mb-4">
                    <feature.icon className="w-3.5 h-3.5" />
                    {feature.badge}
                  </span>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-base text-grey-4 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-grey-5">
                        <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-grey-4 transition-colors group"
                  >
                    Learn more about {feature.badge}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>

                {/* Mockup Left / Right */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="relative p-2 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-xl">
                    {feature.mockup}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

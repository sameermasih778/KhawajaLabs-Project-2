import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import team1 from '../assets/Team/1.avif';
import team2 from '../assets/Team/2.avif';
import team3 from '../assets/Team/3.avif';
import team4 from '../assets/Team/4.avif';

export default function OurTeam() {
  const teamMembers = [
    {
      id: 'michael-brown-1',
      name: 'Michael Brown',
      role: 'Founder & CEO',
      image: team1,
      xUrl: 'https://x.com',
    },
    {
      id: 'sarah-white',
      name: 'Sarah White',
      role: 'UI UX Designer',
      image: team2,
      xUrl: 'https://x.com',
    },
    {
      id: 'michael-brown-2',
      name: 'Michael Brown',
      role: 'Founder & CEO',
      image: team3,
      xUrl: 'https://x.com',
    },
    {
      id: 'michael-brown-3',
      name: 'Michael Brown',
      role: 'Founder & CEO',
      image: team4,
      xUrl: 'https://x.com',
    },
  ];


  return (
    <section id="team" className="py-24 md:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      
      {/* Top Ambient Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          {/* Top Pill Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-4"
          >
            <Users className="w-6 h-6 text-amber-400" />
            <span className='text-lg font-semibold'>Our Team</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white font-tight"
          >
            Our Team Members
          </motion.h2>
        </div>

        {/* 4 Team Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden group hover:border-white/25 transition-all shadow-2xl flex flex-col justify-between"
            >
              {/* Image Container with Dotted Mesh Backdrop */}
              <div className="h-72 bg-black relative overflow-hidden flex items-end justify-center">
                
                {/* Dotted Mesh Backdrop */}
                <div 
                  className="absolute inset-0 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                    backgroundSize: '14px 14px',
                  }}
                />

                {/* Team Member Portrait Photo */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>

              {/* Bottom Info Bar */}
              <div className="bg-[#09090b] border-t border-white/5 px-5 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-normal mt-0.5">
                    {member.role}
                  </p>
                </div>

                {/* Social Icon (X) */}
                <a
                  href={member.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-zinc-900 border border-black/10 flex items-center justify-center text-white text-xl font-bold hover:bg-white hover:text-black transition-all flex-shrink-0"
                  aria-label={`${member.name} on X`}
                >
                  𝕏
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

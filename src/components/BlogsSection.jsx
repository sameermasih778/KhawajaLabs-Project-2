import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function BlogsSection() {
  const blogs = [
    {
      id: 'workflow-efficiency',
      bannerTitle: 'Workflow\nEfficiency',
      category: 'Efficiency',
      categoryColor: 'text-emerald-400',
      date: 'Nov 30, 2024',
      title: 'Enhance Workflow Efficiency with Custom Filters',
      link: '#',
    },
    {
      id: 'time-management',
      bannerTitle: 'Mastering Time\nManagement',
      category: 'Productivity',
      categoryColor: 'text-amber-400',
      date: 'Oct 23, 2024',
      title: 'Mastering Time Management for Maximum Efficiency',
      link: '#',
    },
    {
      id: 'task-management-tips',
      bannerTitle: 'Task Management\nTips',
      category: 'Collaboration',
      categoryColor: 'text-blue-400',
      date: 'Oct 22, 2024',
      title: 'Boost Team Collaboration with Effective Task Management',
      link: '#',
    },
  ];

  return (
    <section id="blogs" className="py-24 md:py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background Top Ambient Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-4"
          >
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>Our Blogs</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-tight"
          >
            News, insights and more
          </motion.h2>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#050505] border border-white/10 rounded-3xl p-5 flex flex-col justify-between group hover:border-white/20 transition-all shadow-2xl cursor-pointer"
            >
              <div>
                {/* Banner Graphic Card Container */}
                <div className="h-56 bg-gradient-to-b from-[#161619] via-[#0d0d0f] to-[#070709] rounded-2xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center text-center p-6 mb-5 group-hover:border-white/20 transition-all shadow-inner">
                  
                  {/* Top Spotlight Beam */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-white/15 via-white/5 to-transparent blur-xl pointer-events-none" />
                  
                  {/* Subtle Background Mesh Grid Pattern */}
                  <div 
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                      backgroundSize: '16px 16px',
                    }}
                  />

                  {/* Center Shield Badge Icon with Suprema Moon */}
                  <div className="flex items-center justify-center text-white mb-4 relative z-10 group-hover:scale-110 transition-transform">
                    <img src={logoImg} alt="Suprema Logo" className="h-12 w-auto object-contain" />
                  </div>

                  {/* Overlay Banner Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight relative z-10 font-tight whitespace-pre-line">
                    {blog.bannerTitle}
                  </h3>
                </div>

                {/* Meta Category & Date Line */}
                <div className="flex items-center gap-2 text-xs mb-3 px-1">
                  <span className={`font-semibold ${blog.categoryColor}`}>
                    {blog.category}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-400 font-normal">
                    {blog.date}
                  </span>
                </div>

                {/* Article Post Title */}
                <h4 className="text-base sm:text-lg font-bold text-white leading-snug mb-4 px-1 group-hover:text-zinc-200 transition-colors">
                  {blog.title}
                </h4>
              </div>

              {/* Read Full Blog Link */}
              <div className="pt-2 px-1">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                  Read Full Blog
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

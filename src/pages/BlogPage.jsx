import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ChevronRight, Users, Sparkles, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { blogPosts, authors } from '../data/blogData';
import logoImg from '../assets/small logo.svg';
import smallLogo from '../assets/small logo.svg';
import FreeTrialSection from '../components/FreeTrialSection';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Efficiency', 'Productivity', 'Collaboration', 'Task Management'];

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPosts = blogPosts.filter((p) => p.featured);

  return (
    <div className="bg-black text-white min-h-screen pt-28 sm:pt-36 pb-16 overflow-hidden">
      
      {/* Background Ambient Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ==================== 1. HERO & SEARCH HEADER ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20 text-center">
        
        {/* Top Suprema Shield Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-20 h-24 sm:w-24 sm:h-28 flex items-center justify-center mb-6"
        >
          {/* Background Ambient Spotlight behind Shield */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          {/* Dot Grid around Shield */}
          <div 
            className="absolute -inset-10 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
              backgroundSize: '14px 14px',
              maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)'
            }}
          />

          

          {/* Center Suprema Moon Inside Shield */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={smallLogo} alt="Suprema Shield" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
          </div>
        </motion.div>

        {/* Top Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-s font-semibold text-purple-400 mb-5 shadow-sm"
        >
          <BookOpen className="w-5 h-5 text-purple-400" />
          <span>Our Blogs</span>
        </motion.div>

        {/* Main Title with Radiant White Ambient Glow */}
        <div className="relative max-w-4xl mx-auto mb-7">
          {/* Subtle Ambient Glow behind Title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[100px] bg-white/[0.07] rounded-full blur-3xl pointer-events-none" />
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-4.5xl font-bold tracking-tight text-white font-tight leading-[1.08] relative z-10"
          >
            News, insights and more
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed font-normal"
        >
          Dive into our blog for expert insights, tips, and industry trends to elevate your project management journey.
        </motion.p>

        {/* Search & Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-2xl mx-auto flex flex-col gap-4 items-center"
        >
          {/* Search Box */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for updates"
              className="w-full bg-[#0a0b0e] border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-all shadow-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>
      </section>


      {/* ==================== 2. FEATURED BLOGS SECTION ==================== */}
      {selectedCategory === 'All' && !searchQuery && (
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 mb-24">
          {/* Centered Divider with Text */}
          <div className="relative max-w-2xl mx-auto my-10 flex items-center justify-center">
            <div className="w-full border-t border-white/10" />
            <span className="absolute px-4 bg-black text-s text-zinc-400 font-medium whitespace-nowrap">
              Our Featured Blogs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            {featuredPosts.map((blog, idx) => (
              <motion.article
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#08080a] border border-white/10 rounded-3xl p-5 flex flex-col justify-between group hover:border-white/25 transition-all shadow-2xl"
              >
                <Link to={`/blog/${blog.slug}`} className="block">
                  {/* Banner Graphic Card */}
                  <div className="h-56 bg-gradient-to-b from-[#181920] via-[#0d0d12] to-[#070709] rounded-2xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center text-center p-6 mb-5 group-hover:border-white/25 transition-all shadow-inner">
                    {/* Top Spotlight Beam */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-white/15 via-white/5 to-transparent blur-xl pointer-events-none" />
                    
                    {/* Subtle Dot Pattern */}
                    <div 
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                        backgroundSize: '16px 16px',
                      }}
                    />

                    {/* Logo Icon */}
                    <div className="flex items-center justify-center text-white mb-4 relative z-10 group-hover:scale-110 transition-transform">
                      <img src={logoImg} alt="Suprema Logo" className="h-12 w-auto object-contain" />
                    </div>

                    {/* Banner Title */}
                    <h3 className="text-xl sm:text-4xl font-bold text-white tracking-tight leading-tight relative z-10 font-tight whitespace-pre-line">
                      {blog.bannerTitle}
                    </h3>
                  </div>

                  {/* Meta Category & Date */}
                  <div className="flex items-center gap-2 text-s mb-3 px-1">
                    <span className={`font-semibold ${blog.categoryColor}`}>
                      {blog.category}
                    </span>
                    <span className="text-zinc-700">•</span>
                    <span className="text-zinc-400 font-semibold">{blog.date}</span>
             
                  </div>

                  {/* Article Title */}
                  <h4 className="text-lg font-semibold text-white leading-snug mb-2 px-1 group-hover:text-zinc-200 transition-colors">
                    {blog.title}
                  </h4>

              
        
                </Link>

                {/* Read Full Blog Link */}
                <div className="pt-3 px-1 border-t border-white/5">
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-1.5 text-s font-semibold text-zinc-400 group-hover:text-white transition-colors"
                  >
                    <span>Read Full Blog</span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}


      {/* ==================== 3. ALL BLOGS COLLECTION (HORIZONTAL CARDS) ==================== */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
        {/* Centered Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-s font-semibold text-amber-300 mb-5 shadow-sm">
            <span>★</span>
            <span>All Blogs</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white font-tight">
            Discover Our Blog Collection
          </h2>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-zinc-950/60 border border-white/10 rounded-3xl p-8">
            <p className="text-lg text-zinc-400 mb-4">No articles found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPosts.map((blog, idx) => (
              <motion.article
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="bg-[#08080a] border border-white/10 hover:border-white/25 rounded-3xl p-4 sm:p-5 transition-all shadow-2xl group"
              >
                <Link
                  to={`/blog/${blog.slug}`}
                  className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8"
                >
                  {/* Left Side: Wide Banner Thumbnail */}
                  <div className="w-full md:w-[380px] lg:w-[420px] h-52 sm:h-56 bg-gradient-to-b from-[#181920] via-[#0d0d12] to-[#070709] rounded-2xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center text-center p-6 flex-shrink-0 group-hover:border-white/25 transition-all shadow-inner">
                    {/* Top Spotlight Beam */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-xl pointer-events-none" />
                    
                    {/* Subtle Dot Grid Pattern */}
                    <div 
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                        backgroundSize: '16px 16px',
                      }}
                    />

                    {/* Shield Logo Badge */}
                    <div className="flex items-center justify-center text-white mb-3.5 relative z-10 group-hover:scale-110 transition-transform">
                      <img src={logoImg} alt="Suprema Logo" className="h-11 w-auto object-contain" />
                    </div>

                    {/* Banner Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight relative z-10 font-tight whitespace-pre-line">
                      {blog.bannerTitle}
                    </h3>
                  </div>

                  {/* Right Side: Article Details & Link */}
                  <div className="flex-1 flex flex-col justify-center py-2 text-left w-full">
                    {/* Category & Date */}
                    <div className="flex items-center gap-2 text-s mb-2.5">
                      <span className={`font-semibold ${blog.categoryColor}`}>
                        {blog.category}
                      </span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-zinc-400 font-normal">
                        {blog.date}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h3 className="text-xl sm:text-xl font-bold text-zinc-300 leading-snug mb-4 group-hover:text-zinc-200 transition-colors font-tight">
                      {blog.title}
                    </h3>

                    {/* Read Full Blog Action Link */}
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1 text-s font-semibold text-zinc-400 group-hover:text-white transition-colors">
                        <span>Read Full Blog</span>
                        <span className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-transform">›</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </section>


      {/* ==================== 4. OUR AUTHORS SECTION ==================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-7 mb-24 md:mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-s font-semibold text-zinc-200 mb-4 shadow-sm">
            <span>🎓</span>
            <span>Our Authors</span>
          </div>
          <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white font-tight">
            Meet Our Expert Authors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author, idx) => (
            <motion.div
              key={author.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#08080a] border border-white/10 hover:border-white/25 rounded-2xl p-6 transition-all shadow-xl flex flex-col justify-between group relative"
            >
              {/* Top Card Accent Tab */}
              <div className="w-10 h-[2px] bg-white/10 rounded-full mx-auto -mt-6 mb-5 group-hover:bg-white/20 transition-colors" />

              <div>
                {/* Header: Avatar + Info */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/15 group-hover:scale-105 transition-transform flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white font-tight">{author.name}</h3>
                    <p className="text-s text-zinc-500">{author.role}</p>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-s sm:text-s text-zinc-400 leading-relaxed mb-6 font-normal">
                  {author.bio}
                </p>
              </div>

              {/* Bottom: Twitter/X Pill */}
              <div className="pt-1">
                <a
                  href={`https://x.com/${author.handle.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 hover:border-white/25 text-xs text-zinc-300 hover:text-white transition-all cursor-pointer shadow-sm group-hover:bg-zinc-800"
                >
                  <span className="font-bold text-2xl text-white">𝕏</span>
                  <span className="font-bold text-sm text-zinc-400">{author.handle}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ==================== 5. FREE TRIAL CTA SECTION ==================== */}
      <FreeTrialSection />

    </div>
  );
}

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Blogs', href: '#blogs', isRoute: false },
    { name: 'Changelog', href: '#changelog', isRoute: false },
    { name: 'Waitlist', href: '#waitlist', isRoute: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 flex justify-center pointer-events-none">
      <div className="pointer-events-auto max-w-5xl w-full bg-black/90 border border-white/10 rounded-2xl p-2 sm:p-2.5 backdrop-blur-xl shadow-2xl flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center gap-2 pl-3 group">
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white relative overflow-hidden group-hover:scale-105 transition-transform">
            {/* Suprema Moon / Crescent icon matching screenshot */}
            <div className="w-5 h-5 rounded-full bg-white relative">
              <div className="w-3 h-3 rounded-full bg-black absolute -top-0.5 -right-0.5" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold tracking-tight text-white font-tight">Suprema</span>
            <span className="text-[10px] font-semibold text-grey-4 uppercase">UI</span>
          </div>
        </Link>

        {/* Center: Segmented Navigation Pills */}
        <nav className="hidden md:flex items-center bg-zinc-900/90 border border-white/10 rounded-xl p-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href || (item.name === 'Home' && location.pathname === '/');
            
            return item.isRoute ? (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`relative px-5 py-1.5 text-sm font-medium transition-all rounded-lg ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-zinc-800 rounded-lg border border-white/10 shadow-sm"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`relative px-5 py-1.5 text-sm font-medium transition-all rounded-lg ${
                  activeTab === item.name ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {activeTab === item.name && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-zinc-800 rounded-lg border border-white/10 shadow-sm"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Contact Us Button */}
        <div className="flex items-center">
          <Link to="/contact">
            <button className="px-6 py-3 text-lg font-bold text-black bg-white hover:bg-zinc-200 transition-all rounded-xl shadow-lg active:scale-95 cursor-pointer">
              Contact us
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
}

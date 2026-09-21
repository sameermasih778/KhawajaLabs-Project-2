import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Blogs', href: '#blogs', isRoute: false },
    { name: 'Changelog', href: '#changelog', isRoute: false },
    { name: 'Waitlist', href: '#waitlist', isRoute: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-3 sm:px-4 flex justify-center pointer-events-none">
      <div className="pointer-events-auto max-w-5xl w-full bg-black/95 border border-white/10 rounded-2xl p-2 sm:p-2.5 backdrop-blur-xl shadow-2xl flex flex-col transition-all">
        
        <div className="flex items-center justify-between w-full">
          {/* Left: Brand Logo */}
          <Link to="/" className="flex items-center gap-2 pl-2 sm:pl-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white relative overflow-hidden group-hover:scale-105 transition-transform">
              {/* Suprema Moon / Crescent icon */}
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white relative">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-black absolute -top-0.5 -right-0.5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white font-tight">Suprema</span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase">UI</span>
            </div>
          </Link>

          {/* Center: Segmented Navigation Pills (Desktop) */}
          <nav className="hidden md:flex items-center bg-zinc-900/90 border border-white/10 rounded-xl p-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href || (item.name === 'Home' && location.pathname === '/');
              
              return item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`relative px-4 lg:px-5 py-1.5 text-sm font-medium transition-all rounded-lg ${
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
                  className={`relative px-4 lg:px-5 py-1.5 text-sm font-medium transition-all rounded-lg ${
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

          {/* Right: Contact Us Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2">
            <Link to="/contact">
              <button className="px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base font-bold text-black bg-white hover:bg-zinc-200 transition-all rounded-xl shadow-lg active:scale-95 cursor-pointer whitespace-nowrap">
                Contact us
              </button>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden pt-3 border-t border-white/10 mt-2"
            >
              <div className="flex flex-col gap-1 p-1 bg-zinc-950/90 rounded-xl border border-white/10">
                {navItems.map((item) => (
                  item.isRoute ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => {
                        setActiveTab(item.name);
                        setMobileMenuOpen(false);
                      }}
                      className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setActiveTab(item.name);
                        setMobileMenuOpen(false);
                      }}
                      className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                    </a>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}


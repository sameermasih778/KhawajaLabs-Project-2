import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="w-full max-w-xl mx-auto bg-[#08080a] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/8 to-transparent blur-2xl pointer-events-none rounded-full" />

      {submitted ? (
        <div className="text-center py-8 sm:py-10 space-y-3 relative z-10">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white font-tight">Message sent</h3>
          <p className="text-sm text-zinc-400 max-w-sm mx-auto">
            Thanks for reaching out. We’ll get back to{' '}
            <span className="text-white font-medium">{formData.email}</span> shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', message: '' });
            }}
            className="mt-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <label className="block text-left">
            <span className="block text-sm font-medium text-white mb-2">Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-[#5f636c] focus:outline-none focus:border-white/30 transition-all"
            />
          </label>

          <label className="block text-left">
            <span className="block text-sm font-medium text-white mb-2">Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-[#5f636c] focus:outline-none focus:border-white/30 transition-all"
            />
          </label>

          <label className="block text-left">
            <span className="block text-sm font-medium text-white mb-2">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-[#5f636c] focus:outline-none focus:border-white/30 transition-all resize-none"
            />
          </label>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-white text-black font-bold text-sm py-3.5 rounded-xl hover:bg-zinc-200 transition-all shadow-lg active:scale-[0.98] cursor-pointer"
          >
            Send your message
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}
    </motion.div>
  );
}

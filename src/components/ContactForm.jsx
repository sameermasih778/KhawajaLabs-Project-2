import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import Button from './Button';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Sales Inquiry',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Contact Info Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-5 bg-dark-2/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-8"
      >
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Get in touch</h3>
          <p className="text-sm text-grey-4 leading-relaxed">
            Have questions about enterprise deployments, custom AI model integrations, or pricing? Our team responds within 2 hours.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-grey-4 uppercase tracking-wider">Email Us</div>
              <div className="text-sm font-medium text-white mt-1">support@suprema.app</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-grey-4 uppercase tracking-wider">Headquarters</div>
              <div className="text-sm font-medium text-white mt-1">548 Market St, San Francisco, CA 94104</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-grey-4 uppercase tracking-wider">Phone</div>
              <div className="text-sm font-medium text-white mt-1">+1 (800) 555-SUPREMA</div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5">
          <div className="p-4 bg-dark-3 rounded-2xl border border-white/5 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-grey-4">Support agents currently online</span>
          </div>
        </div>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 bg-dark-2/90 border border-white/10 rounded-3xl p-8 sm:p-10"
      >
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
            <p className="text-sm text-grey-4 max-w-md mx-auto">
              Thank you for contacting Suprema. A solutions specialist will reach out to <span className="text-white font-medium">{formData.email}</span> shortly.
            </p>
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', company: '', subject: 'Sales Inquiry', message: '' });
              }}
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-grey-4 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-dark-3 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-grey-3 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-grey-4 uppercase tracking-wider mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-dark-3 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-grey-3 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-grey-4 uppercase tracking-wider mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-dark-3 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-grey-3 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-grey-4 uppercase tracking-wider mb-2">
                  Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-dark-3 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all cursor-pointer"
                >
                  <option value="Sales Inquiry">Sales & Enterprise Pricing</option>
                  <option value="Product Demo">Request a Personal Demo</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership">Partnership Opportunities</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-grey-4 uppercase tracking-wider mb-2">
                Message *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your team size, current workflow, and what you're looking to achieve with Suprema..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-dark-3 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-grey-3 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none"
              />
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Submit Inquiry
              <Send className="w-4 h-4 ml-1" />
            </Button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

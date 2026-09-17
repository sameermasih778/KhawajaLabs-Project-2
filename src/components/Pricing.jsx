import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      priceMonthly: '$0',
      priceAnnual: '$0',
      description: 'Perfect for small side projects and individual builders looking to get organized.',
      popular: false,
      features: [
        'Up to 5 team members',
        'Basic Kanban & List boards',
        '100 AI task assignment actions/mo',
        'Community support',
        'GitHub integration',
      ],
      cta: 'Start Free',
      variant: 'outline',
    },
    {
      name: 'Pro',
      priceMonthly: '$29',
      priceAnnual: '$24',
      description: 'Ideal for growing product teams demanding AI automation and live velocity tracking.',
      popular: true,
      features: [
        'Unlimited team members',
        'Unlimited AI task actions',
        'Real-time SLA deadline alerts',
        'Workspace Auto-Cleanup',
        'Priority 24/7 support',
        'Custom GitHub, Slack, Figma sync',
      ],
      cta: 'Get Started Pro',
      variant: 'primary',
    },
    {
      name: 'Enterprise',
      priceMonthly: '$99',
      priceAnnual: '$79',
      description: 'For scaled organizations requiring SOC2 security, custom SSO, and dedicated success manager.',
      popular: false,
      features: [
        'Everything in Pro',
        'Custom AI model training',
        'SAML SSO & Okta integration',
        '99.99% Uptime SLA guarantee',
        'Dedicated Solutions Architect',
        'Custom contract & invoicing',
      ],
      cta: 'Contact Sales',
      variant: 'outline',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-dark-2/40 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Flexible Pricing"
          title="Predictable plans for teams of any size"
          description="Start for free and upgrade as your product team scales. No hidden fees or lock-ins."
        />

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-grey-4'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="w-14 h-8 rounded-full bg-dark-4 border border-white/10 p-1 flex items-center transition-colors cursor-pointer"
          >
            <motion.div
              animate={{ x: annual ? 24 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="w-6 h-6 rounded-full bg-white shadow-md"
            />
          </button>
          <span className={`text-sm font-medium flex items-center gap-1.5 ${annual ? 'text-white' : 'text-grey-4'}`}>
            Annual Billing
            <span className="text-[10px] uppercase tracking-wider bg-white/10 text-white border border-white/15 px-2 py-0.5 rounded-full font-bold">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 flex flex-col justify-between relative ${
                plan.popular
                  ? 'bg-dark-3 border-2 border-white/30 shadow-2xl shadow-white/5 scale-105 z-10'
                  : 'bg-dark-2/70 border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 fill-black" /> Most Popular
                </div>
              )}

              <div>
                <div className="text-xl font-bold text-white mb-2">{plan.name}</div>
                <div className="text-sm text-grey-4 mb-6 min-h-[40px]">{plan.description}</div>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-extrabold text-white font-tight">
                    {annual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-sm text-grey-4">/ user / mo</span>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-grey-5">
                      <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant={plan.variant} size="lg" className="w-full">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

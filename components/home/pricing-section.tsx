"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react'; // Add this line

const PricingFeature = ({ text }: { text: string }) => (
  <motion.div 
    className="flex items-center space-x-3"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="p-1 rounded-full bg-secondary/20">
      <Check className="h-4 w-4 text-secondary" />
    </div>
    <span className="text-slate-600 dark:text-slate-300">{text}</span>
  </motion.div>
);

const ComparisonFeature = ({ text, isBy1 = true }: { text: string; isBy1?: boolean }) => (
  <motion.div 
    className="flex items-center space-x-3"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className={`p-1 rounded-full ${isBy1 ? 'bg-secondary/20' : 'bg-red-100 dark:bg-red-900/20'}`}>
      {isBy1 ? (
        <Check className="h-4 w-4 text-secondary" />
      ) : (
        <svg 
          className="h-4 w-4 text-red-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
    </div>
    <span className="text-slate-600 dark:text-slate-300">{text}</span>
  </motion.div>
);

const FloatingParticle = ({ id }: { id: string }) => (
  <motion.div
    key={id}
    className="absolute w-1 h-1 bg-primary/20 rounded-full"
    animate={{
      y: [0, -100],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: Math.random() * 2 + 1,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
      delay: Math.random() * -2,
    }}
    style={{
      left: `${Math.random() * 100}%`,
      bottom: -20,
    }}
  />
);

export default function PricingSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.05) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient-animate mb-4">
            Pay for Progress, Not Bloat
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Start with what you need. Add more as you grow. No hidden fees, no forced bundles.
          </p>
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <Card className="card-hover enhanced-glass p-8 relative group">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated Border */}
            <div className="absolute inset-0 animated-border opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map(() => {
                const uniqueId = Math.random().toString(36).substring(7);
                return <FloatingParticle key={uniqueId} id={uniqueId} />;
              })}
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.h3 
                  className="text-3xl font-bold text-gradient-animate mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Simple, Flexible Pricing
                </motion.h3>
                <motion.p 
                  className="text-2xl font-bold text-slate-900 dark:text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Starting at $99/month
                </motion.p>
                <motion.p 
                  className="text-slate-600 dark:text-slate-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Per automation tool. Add or remove anytime.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Included with Every Tool:
                  </h4>
                  <PricingFeature text="No setup fees" />
                  <PricingFeature text="Cancel anytime" />
                  <PricingFeature text="Free implementation support" />
                  <PricingFeature text="24/7 customer service" />
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Growth Benefits:
                  </h4>
                  <PricingFeature text="Volume discounts available" />
                  <PricingFeature text="Priority support as you grow" />
                  <PricingFeature text="Custom integration options" />
                  <PricingFeature text="Regular optimization reviews" />
                </div>
              </div>

              <Button
                className="w-full btn-primary btn-glow text-white font-semibold"
                size="lg"
              >
                <span className="relative z-10">View All Tools & Pricing →</span>
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gradient-animate text-center mb-8">
            BY1.net vs. Traditional Agencies
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover enhanced-glass p-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h4 className="font-bold text-gradient-animate mb-6">
                  With BY1.net:
                </h4>
                <div className="space-y-4">
                  <ComparisonFeature text="Pay for only what you use" />
                  <ComparisonFeature text="Start with one tool" />
                  <ComparisonFeature text="Add/remove tools anytime" />
                  <ComparisonFeature text="No minimum contract" />
                </div>
              </div>
            </Card>

            <Card className="card-hover enhanced-glass p-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h4 className="font-bold text-slate-900 dark:text-white mb-6">
                  With Traditional Agencies:
                </h4>
                <div className="space-y-4">
                  <ComparisonFeature text="Pay for unused features" isBy1={false} />
                  <ComparisonFeature text="Forced to buy packages" isBy1={false} />
                  <ComparisonFeature text="Long-term contracts" isBy1={false} />
                  <ComparisonFeature text="Hidden fees & charges" isBy1={false} />
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

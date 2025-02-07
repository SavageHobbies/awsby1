"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface CaseStudyProps {
  title: string;
  before: string;
  after: string;
  improvement: string;
  timeframe: string;
  delay: number;
}

const CaseStudy = ({ title, before, after, improvement, timeframe, delay }: CaseStudyProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <Card className="card-hover glass-card">
      <motion.div
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1 }}
        className="p-6 space-y-4 relative z-10"
      >
        <h3 className="text-xl font-bold text-gradient-animate">{title}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div 
            className="space-y-2 group/item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">Before</p>
            <div className="enhanced-glass p-3 rounded-lg group-hover/item:shadow-lg transition-shadow duration-300">
              <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">{before}</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-2 group/item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">After</p>
            <div className="enhanced-glass p-3 rounded-lg bg-secondary/10 group-hover/item:shadow-lg transition-shadow duration-300">
              <p className="text-lg font-semibold text-gradient-animate">{after}</p>
            </div>
          </motion.div>
        </div>
        
        <div className="space-y-3">
          <motion.p 
            className="text-gradient-animate font-semibold"
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {improvement}
          </motion.p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Achieved in: {timeframe}
          </p>
        </div>
      </motion.div>
    </Card>
  </motion.div>
);

export default function SocialProof() {
  const caseStudies = [
    {
      title: "Local Café Automation",
      before: "15 hours/week on social media",
      after: "2 hours/week oversight",
      improvement: "87% time savings on social media management",
      timeframe: "First month",
      delay: 0
    },
    {
      title: "Boutique Customer Service",
      before: "$2,500/month support costs",
      after: "$750/month AI support",
      improvement: "70% cost reduction + 24/7 coverage",
      timeframe: "3 months",
      delay: 0.2
    },
    {
      title: "Service Business Growth",
      before: "40% inquiry response rate",
      after: "95% response rate",
      improvement: "138% increase in converted leads",
      timeframe: "6 months",
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-white dark:bg-slate-900">
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
            background: 'radial-gradient(circle at 50% 50%, rgba(var(--secondary-rgb), 0.03) 0%, transparent 50%)',
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
            Real Progress, Real Businesses
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            See how businesses like yours achieved meaningful results with our step-by-step approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <CaseStudy key={study.title} {...study} />
          ))}
        </div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto enhanced-glass p-8 rounded-lg relative"
        >
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map(() => {
              const uniqueId = Math.random().toString(36).substring(7);
              return (
                <motion.div
                  key={uniqueId}
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
            })}
          </div>

          <div className="relative z-10">
            <p className="text-2xl font-semibold text-gradient-animate mb-4">
              You shouldn't need a Fortune 500 budget to fix a small business problem.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Start with one tool. Add more only when you're ready. Your business, your pace.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
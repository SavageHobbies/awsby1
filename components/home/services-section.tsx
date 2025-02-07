"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  services: string[];
  cta: string;
  delay: number;
  link: string;
}

const ServiceCard = ({ title, description, services, cta, delay, link }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="group"
  >
    <Card className="card-hover glass-card">
      <motion.div
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1 }}
        className="p-6 h-full flex flex-col justify-between relative z-10"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <h3 className="text-2xl font-bold text-gradient-animate mb-4 relative z-10">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6 relative z-10">{description}</p>
        <ul className="space-y-3 mb-8 min-h-[160px] relative z-10">
          {services.map((service) => (
            <motion.li
              key={`${title}-${service}`}
              className="flex items-center text-slate-700 dark:text-slate-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg
                className="w-5 h-5 mr-2 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="hover:text-primary dark:hover:text-secondary transition-colors">
                {service}
              </span>
            </motion.li>
          ))}
        </ul>
        <Button asChild className="btn-primary btn-glow text-white font-semibold relative z-10">
          <Link href={link}>
            <span className="relative z-10">{cta}</span>
          </Link>
        </Button>
      </motion.div>
    </Card>
  </motion.div>
);

export default function ServicesSection() {
  const services = [
    {
      title: "Start Small",
      description: "Solve one problem. Save time or money in days.",
      services: [
        "Social media automation",
        "Review monitoring",
        "Basic chat support",
        "Simple workflow automation"
      ],
      cta: "Start Here—No Commitments",
      delay: 0,
      link: "/services/web-development"
    },
    {
      title: "Grow Smart",
      description: "Add tools as you grow. Only pay for what you use.",
      services: [
        "AI chatbots",
        "Advanced workflow automation",
        "Customer insights",
        "Marketing automation"
      ],
      cta: "Expand Your Toolkit",
      delay: 0.2,
      link: "/services/ai-implementation"
    },
    {
      title: "Thrive Fully",
      description: "Full automation for businesses ready to soar.",
      services: [
        "Custom AI employees",
        "End-to-end systems",
        "Advanced analytics",
        "Enterprise automation"
      ],
      cta: "Talk to Us",
      delay: 0.4,
      link: "/contact"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
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
            background: 'radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.03) 0%, transparent 50%)',
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
            Start Small. Grow Smart.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Choose your pace. Add capabilities as you grow. No pressure to buy more than you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="enhanced-glass p-8 rounded-lg max-w-3xl mx-auto text-center relative z-10">
            {/* Animated Border */}
            <div className="absolute inset-0 animated-border opacity-30" />
            
            <p className="text-lg text-slate-600 dark:text-slate-300 italic mb-4 relative z-10">
              "BY1.net automated our customer service for less than hiring a part-timer. 
              We added marketing tools a year later—on our terms."
            </p>
            <p className="font-semibold text-gradient-animate relative z-10">
              Sarah Johnson, Small Business Owner
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

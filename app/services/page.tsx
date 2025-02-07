"use client";

import { motion } from 'framer-motion';
import GridBackground from '@/components/home/services/grid-background';
import { ServiceGrid } from '@/components/services/service-grid';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <GridBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Our Services
            </h1>
            <p className="text-xl text-slate-300">
              Comprehensive business solutions to help you grow and succeed in the digital age
            </p>
          </div>

          <ServiceGrid />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90"
              >
                Schedule a Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

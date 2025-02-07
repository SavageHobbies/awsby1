"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import NeuralNetwork from '@/components/home/neural-network';
import { useChat } from '@/hooks/use-chat';
import { useEffect, useState } from 'react';

const phrases = ["LEADS", "CLICKS", "INQUIRIES", "CONVERSATIONS", "SOCIAL MEDIA"];

export default function HeroSection() {
  const { openChat } = useChat();
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[600px] sm:h-[700px] relative overflow-hidden bg-gradient-to-b from-primary to-primary-dark dark:from-slate-900 dark:to-slate-800">
      <div className="absolute inset-0 h-full">
        <NeuralNetwork />
      </div>
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">
            AI that Transforms
          </h1>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {phrases[currentPhrase]}
            </span>
          </h2>
          <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">
            Into Sales
          </h3>
          
          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
            Let our AI close leads, manage bookings, and reply to client inquiries—24/7.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <Button
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100"
          >
            Get Started →
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

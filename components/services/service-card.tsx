import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: ComponentType<LucideProps>;
}

export const ServiceCard = ({
  title,
  description,
  features,
  href,
  icon: Icon
}: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-secondary mr-3" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-slate-300 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-center text-sm text-slate-400">
            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href={href}>
        <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90">
          Learn More
        </Button>
      </Link>
    </motion.div>
  );
}
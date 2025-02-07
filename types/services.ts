import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  caseStudy: {
    title: string;
    description: string;
  };
}

"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Building, Check } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const { toast } = useToast();

  const socialPlatforms = [
    'Facebook',
    'Instagram',
    'LinkedIn',
    'Twitter',
    'TikTok',
    'YouTube'
  ];

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'form_submit', {
        service: selectedService
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-primary" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Ready to transform your business? Let&apos;s start a conversation.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Basic Information Fields */}
              <div className="relative">
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                />
                <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
              
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
                <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
              
              <div className="relative">
                <Input
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="pl-10"
                />
                <Building className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>

              <Textarea
                placeholder="How can we help?"
                className="min-h-[150px]"
              />

              {/* Service Interest Dropdown */}
              <div className="space-y-2">
                <Label className="text-slate-300">Service Interest</Label>
                <Select onValueChange={setSelectedService}>
                  <SelectTrigger className="bg-slate-800/50 border-slate-700">
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>


              {/* Social Platform Checkboxes */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {socialPlatforms.map((platform) => (
                    <label 
                      key={platform}
                      className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedPlatforms.includes(platform)}
                        onChange={() => togglePlatform(platform)}
                        className="form-checkbox h-5 w-5 text-secondary rounded border-slate-500 focus:ring-secondary"
                      />
                      <span className="text-slate-300">{platform}</span>
                    </label>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-slate-400">
                    We&apos;ll connect with you on your preferred platforms
                  </span>
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-1 h-5 w-5 text-secondary rounded border-slate-500 focus:ring-secondary"
                  />
                  <span className="text-sm text-slate-400">
                    I agree to the{' '}
                    <Link href="/privacy" className="text-secondary hover:underline">
                      privacy policy
                    </Link>
                  </span>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white"
                  disabled={!privacyAccepted}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

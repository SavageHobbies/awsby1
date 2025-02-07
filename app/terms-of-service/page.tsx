"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-20"
    >
      <Card className="p-8">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Last Updated: January 24, 2025
        </p>
        
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h2>Introduction</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of BY1.net (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). By accessing or using our services, you agree to be bound by these Terms.
          </p>

          <h2>Eligibility</h2>
          <p>
            You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this requirement.
          </p>

          <h2>Account Registration</h2>
          <p>
            When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content and materials available on our services are protected by intellectual property laws. You may not use, copy, reproduce, or distribute any content without our prior written consent.
          </p>

          <h2>User Conduct</h2>
          <p>
            You agree not to:
          </p>
          <ul>
            <li>Violate any laws or regulations</li>
            <li>Infringe on any intellectual property rights</li>
            <li>Transmit any harmful or malicious content</li>
            <li>Interfere with the operation of our services</li>
            <li>Attempt to gain unauthorized access to our systems</li>
          </ul>

          <h2>Termination</h2>
          <p>
            We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including if you breach these Terms.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Ohio, without regard to its conflict of law provisions.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Your continued use of the services constitutes acceptance of the modified Terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
            <br />
            Email: legal@by1.net
            <br />
            Phone: (937) 314-1144
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
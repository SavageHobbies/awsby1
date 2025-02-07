"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-20"
    >
      <Card className="p-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Last Updated: January 24, 2025
        </p>
        
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h2>Introduction</h2>
          <p>
            BY1.net (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways:
          </p>
          <ul>
            <li><strong>Personal Data:</strong> Name, email address, phone number, and other identifiers</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and other usage statistics</li>
            <li><strong>Technical Data:</strong> Device information, operating system, and other technical details</li>
            <li><strong>Marketing Data:</strong> Preferences for receiving marketing communications</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We may use the information we collect for various purposes:
          </p>
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Understand and analyze how you use our services</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you for customer service and support</li>
            <li>Send you marketing and promotional communications</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have certain rights regarding your personal information:
          </p>
          <ul>
            <li>Access and obtain a copy of your data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request restriction of processing</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services that collect, monitor, and analyze information to improve our services. These third parties have access to your information only to perform specific tasks on our behalf.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@by1.net
            <br />
            Phone: (937) 314-1144
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
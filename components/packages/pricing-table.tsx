"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HOSTING_FEATURES } from "@/data/hosting-features";
import { cn } from "@/lib/utils";

const ADDONS = [
  {
    name: "Logo Design",
    price: "$299",
    billing: "One-time fee",
    description: "Professional logo design including multiple concepts, revisions, and final files in all formats",
    features: ["Multiple initial concepts", "Up to 3 revision rounds", "All file formats included", "Brand guidelines"]
  },
  {
    name: "E-commerce Setup",
    price: "$799",
    billing: "One-time fee",
    description: "Complete e-commerce implementation with payment processing and inventory management",
    features: ["Product catalog setup", "Payment gateway integration", "Inventory management", "Order processing system"]
  },
  {
    name: "Marketing Package",
    price: "$599",
    billing: "One-time fee",
    description: "Comprehensive marketing setup with SEO, analytics, and social media integration",
    features: ["SEO optimization", "Google Analytics setup", "Social media integration", "Marketing dashboard"]
  },
  {
    name: "Content Creation",
    price: "$199",
    billing: "Per month",
    description: "Regular content updates including blog posts, product descriptions, and social media content",
    features: ["Weekly blog posts", "Product descriptions", "Social media content", "SEO optimized writing"]
  },
  {
    name: "Custom Development",
    price: "$120",
    billing: "Per hour",
    description: "Custom feature development and integrations for specific business needs",
    features: ["Custom features", "Third-party integrations", "API development", "Technical consulting"]
  },
  {
    name: "Security Package",
    price: "$299",
    billing: "One-time fee",
    description: "Enhanced security features including SSL, firewalls, and regular backups",
    features: ["SSL certificate", "Firewall setup", "Daily backups", "Security monitoring"]
  }
];

const PACKAGES = [
  {
    name: "Starter",
    subtitle: "Essential Package",
    price: "$99",
    setupFee: "$199",
    description: "Perfect for small businesses just getting started",
    features: ["5 Pages", "Basic Template", "Basic SEO"]
  },
  {
    name: "Growth",
    subtitle: "Professional Package",
    price: "$249",
    setupFee: "$399",
    description: "Ideal for growing businesses",
    features: ["10-15 Pages", "Enhanced Template", "Advanced SEO"]
  },
  {
    name: "Premium",
    subtitle: "Marketing Package",
    price: "$499",
    setupFee: "$599",
    description: "Complete solution for established businesses",
    features: ["20-25+ Pages", "Premium Template", "Full SEO Suite"]
  },
  {
    name: "Enterprise",
    subtitle: "Custom Package",
    price: "Custom",
    setupFee: "Custom",
    description: "Tailored solutions for large organizations",
    features: ["Custom Pages", "Custom Design", "Custom Strategy"]
  }
];

const CheckIcon = ({ className }: { className: string }) => (
  <svg className={cn("w-6 h-6 mx-auto transition-colors duration-300", className)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = ({ className }: { className: string }) => (
  <svg className={cn("w-6 h-6 mx-auto transition-colors duration-300", className)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function PricingTable() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / target.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / target.clientHeight) * 100;
    target.style.setProperty('--mouse-x', `${x}%`);
    target.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <div className="w-full space-y-12">
      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
        {PACKAGES.map((pkg) => (
          <div key={pkg.name} className="relative">
            <Card 
              className="relative p-6 bg-white dark:bg-gray-800 card-hover glass-card h-full"
              onMouseMove={handleMouseMove}
            >
              <div className="text-center flex flex-col h-full justify-between relative z-10">
                <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{pkg.subtitle}</p>
                <div className="text-3xl font-bold text-green-500 mb-2">{pkg.price}<span className="text-sm">/mo</span></div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Setup Fee: {pkg.setupFee}</p>
                <div className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 text-left mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="default"
                  size="lg"
                  className={cn(
                    "w-full glowing-btn",
                    "bg-gradient-to-r from-green-600 to-green-700",
                    "hover:from-green-700 hover:to-green-800",
                    "transform transition-all duration-200",
                    "hover:-translate-y-1 hover:shadow-lg"
                  )}
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Features Comparison */}
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-xl blur-xl"></div>
        <h3 className="text-3xl font-bold text-center mb-8 text-gradient-animate">Feature Comparison</h3>
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full divide-y divide-gray-200/20 dark:divide-gray-700/20 backdrop-blur-sm relative">
            <colgroup>
              <col className="w-1/5" />
              <col className="w-1/5 bg-blue-50/20 dark:bg-blue-900/10" />
              <col className="w-1/5 bg-indigo-50/20 dark:bg-indigo-900/10" />
              <col className="w-1/5 bg-purple-50/20 dark:bg-purple-900/10" />
              <col className="w-1/5 bg-violet-50/20 dark:bg-violet-900/10" />
            </colgroup>
            <thead className="bg-white/50 dark:bg-gray-800/50">
              <tr>
                <th className="py-4 px-6 text-left text-lg font-bold text-gray-700 dark:text-gray-200">Feature</th>
                <th className="py-4 px-6 text-center text-lg font-bold bg-gradient-to-br from-blue-500/10 to-blue-600/10">Starter</th>
                <th className="py-4 px-6 text-center text-lg font-bold bg-gradient-to-br from-indigo-500/10 to-indigo-600/10">Growth</th>
                <th className="py-4 px-6 text-center text-lg font-bold bg-gradient-to-br from-purple-500/10 to-purple-600/10">Premium</th>
                <th className="py-4 px-6 text-center text-lg font-bold bg-gradient-to-br from-violet-500/10 to-violet-600/10">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200/20 dark:divide-gray-700/20">
              {HOSTING_FEATURES.map((category) =>
                category.features.map((feature) => (
                  <tr 
                    key={`${category.category}-${feature.detail}`}
                    className="group transition-all duration-300 hover:bg-blue-50/50 dark:hover:bg-blue-900/50 animate-fade-in opacity-0 even:bg-gray-50/20 dark:even:bg-gray-800/20"
                    style={{
                      animationDelay: `${HOSTING_FEATURES.indexOf(category) * 200 + category.features.indexOf(feature) * 100}ms`
                    }}
                  >
                    <td className="py-4 px-6 transition-colors duration-300 bg-transparent">
                      <div className="font-semibold text-gray-800 dark:text-gray-200">{feature.detail}</div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.starter === "Yes" || feature.starter === "✓" ? (
                        <CheckIcon className="text-blue-500 group-hover:text-blue-600" />
                      ) : feature.starter === "No" || feature.starter === "×" || !feature.starter ? (
                        <XIcon className="text-red-500 group-hover:text-red-600" />
                      ) : (
                        <span className="text-gray-700 dark:text-gray-300">{feature.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.growth === "Yes" || feature.growth === "✓" ? (
                        <CheckIcon className="text-indigo-500 group-hover:text-indigo-600" />
                      ) : feature.growth === "No" || feature.growth === "×" || !feature.growth ? (
                        <XIcon className="text-red-500 group-hover:text-red-600" />
                      ) : (
                        <span className="text-gray-700 dark:text-gray-300">{feature.growth}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.premium === "Yes" || feature.premium === "✓" ? (
                        <CheckIcon className="text-purple-500 group-hover:text-purple-600" />
                      ) : feature.premium === "No" || feature.premium === "×" || !feature.premium ? (
                        <XIcon className="text-red-500 group-hover:text-red-600" />
                      ) : (
                        <span className="text-gray-700 dark:text-gray-300">{feature.premium}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.enterprise === "Yes" || feature.enterprise === "✓" ? (
                        <CheckIcon className="text-violet-500 group-hover:text-violet-600" />
                      ) : feature.enterprise === "No" || feature.enterprise === "×" || !feature.enterprise ? (
                        <XIcon className="text-red-500 group-hover:text-red-600" />
                      ) : (
                        <span className="text-gray-700 dark:text-gray-300">{feature.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* À La Carte Add-ons */}
      <div className="mt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-xl blur-xl"></div>
        <h3 className="text-3xl font-bold text-center mb-8 text-gradient-animate">À La Carte Add-ons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {ADDONS.map((addon) => (
            <Card key={addon.name} className="p-6 bg-white dark:bg-gray-800 card-hover glass-card h-full">
              <div className="text-center flex flex-col h-full justify-between">
                <h3 className="text-2xl font-bold mb-2">{addon.name}</h3>
                <div className="text-3xl font-bold text-green-500 mb-2">{addon.price}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{addon.billing}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{addon.description}</p>
                <ul className="space-y-3 text-left mb-6">
                  {addon.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="default"
                  size="lg"
                  className={cn(
                    "w-full glowing-btn",
                    "bg-gradient-to-r from-green-600 to-green-700",
                    "hover:from-green-700 hover:to-green-800",
                    "transform transition-all duration-200",
                    "hover:-translate-y-1 hover:shadow-lg"
                  )}
                >
                  Add to Order
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

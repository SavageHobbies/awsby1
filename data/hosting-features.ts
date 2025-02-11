export interface Feature {
  detail: string;
  starter: string;
  growth: string;
  premium: string;
  enterprise: string;
}

export interface FeatureCategory {
  category: string;
  features: Feature[];
}

export const HOSTING_FEATURES: FeatureCategory[] = [
  {
    category: "Core Website Pages",
    features: [
      {
        detail: "Homepage",
        starter: "Yes",
        growth: "Yes",
        premium: "Yes",
        enterprise: "Yes",
      },
      {
        detail: "About Us",
        starter: "Yes",
        growth: "Yes",
        premium: "Yes",
        enterprise: "Yes",
      },
      {
        detail: "Services/Products",
        starter: "Yes",
        growth: "Yes",
        premium: "Yes",
        enterprise: "Yes",
      },
      {
        detail: "Contact Us",
        starter: "Yes",
        growth: "Yes",
        premium: "Yes",
        enterprise: "Yes",
      },
      {
        detail: "Total Pages",
        starter: "Up to 5",
        growth: "10-15",
        premium: "20-25+",
        enterprise: "Custom",
      },
    ],
  },
  {
    category: "Design & Layout",
    features: [
      {
        detail: "Mobile Responsiveness",
        starter: "Yes",
        growth: "Yes",
        premium: "Yes",
        enterprise: "Yes",
      },
      {
        detail: "Template Customization",
        starter: "Basic",
        growth: "Enhanced",
        premium: "Premium",
        enterprise: "Custom",
      },
      {
        detail: "Custom Design Elements",
        starter: "No",
        growth: "Limited",
        premium: "Yes",
        enterprise: "Full Custom",
      },
    ],
  },
  {
    category: "SEO Features",
    features: [
      {
        detail: "Basic On-Page SEO",
        starter: "Yes",
        growth: "Yes",
        premium: "Yes",
        enterprise: "Yes",
      },
      {
        detail: "Keyword Research",
        starter: "No",
        growth: "Basic",
        premium: "Advanced",
        enterprise: "Custom",
      },
      {
        detail: "SEO Monitoring",
        starter: "No",
        growth: "Basic",
        premium: "Full Suite",
        enterprise: "Custom",
      },
    ],
  },
  {
    category: "Support & Updates",
    features: [
      {
        detail: "Content Updates",
        starter: "2 hrs/month",
        growth: "4 hrs/month",
        premium: "6-8 hrs/month",
        enterprise: "Custom",
      },
      {
        detail: "Support Response",
        starter: "Email Only",
        growth: "Email & Phone",
        premium: "Priority",
        enterprise: "Dedicated",
      },
    ],
  },
];

export const ADD_ONS = [
  {
    service: "Extra Pages",
    description: "Beyond Package Limit",
    price: "$25-$50 per page",
  },
  {
    service: "Premium Template",
    description: "Access to premium templates",
    price: "$99-$199",
  },
  {
    service: "SEO Boost",
    description: "Enhanced SEO features",
    price: "$149-$299",
  },
  {
    service: "Content Writing",
    description: "Professional content per page",
    price: "$75-$150",
  },
];

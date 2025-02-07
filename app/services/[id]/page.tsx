import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CallButton } from '@/components/services/call-button';
import type { Service } from '@/types/services';

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

async function getService(id: string): Promise<Service | undefined> {
  // Simulate async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      const service = services.find((s) => s.id === id);
      resolve(service);
    }, 0);
  });
}

export default async function ServicePage({ params }: { params: { id: string } }) {
  const service = await getService(params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <service.icon className="h-12 w-12 text-secondary mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              {service.title}
            </h1>
          </div>

          <p className="text-xl text-slate-300 mb-12">
            {service.description}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                    </span>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </span>
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Success Story</h2>
            <h3 className="text-xl font-medium text-secondary mb-2">
              {service.caseStudy.title}
            </h3>
            <p className="text-slate-300 mb-6">{service.caseStudy.description}</p>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-6">Ready to Get Started?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90">
                  Schedule Consultation
                </Button>
              </Link>
              <CallButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

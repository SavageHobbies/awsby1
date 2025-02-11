import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { ServiceCard } from './service-card';

export function ServiceGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ServiceCard
            title={service.title}
            description={service.description}
            features={service.features}
            href={service.id === 'web-hosting' ? '/webhosting' : `/services/${service.id}`}
            icon={service.icon}
          />
        </motion.div>
      ))}
    </div>
  );
}

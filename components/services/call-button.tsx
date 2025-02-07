'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export function CallButton() {
  const handleCallClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <Button
      size="lg"
      variant="outline"
      className="group"
      onClick={handleCallClick}
    >
      <Phone className="mr-2 h-5 w-5 group-hover:text-secondary transition-colors" />
      Call Us Now
    </Button>
  );
}
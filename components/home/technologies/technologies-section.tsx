"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const technologies = [
  { name: 'Facebook', logo: '/images/facebook.svg' },
  { name: 'Google Ads', logo: '/images/Google Ads.svg' },
  { name: 'Instagram', logo: '/images/instagram.svg' },
  { name: 'LinkedIn', logo: '/images/LinkedIn.svg' },
  { name: 'Meta', logo: '/images/meta.svg' },
  { name: 'Microsoft', logo: '/images/Microsoft.svg' },
  { name: 'Pinterest', logo: '/images/Pintrest.svg' },
  { name: 'Stripe', logo: '/images/stripe.svg' },
  { name: 'TikTok', logo: '/images/Tiktok.svg' },
  { name: 'WooCommerce', logo: '/images/woo.svg' }
];

export default function TechnologiesSection() {
  const trackRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new ResizeObserver((entries) => {
      const trackWidth = entries[0].contentRect.width;
      setTranslateX(-trackWidth / 2);
    });

    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies We Work With
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Leveraging cutting-edge platforms to deliver innovative solutions
          </p>
        </div>

        <div className="partner-carousel-container">
          <div 
            className="partner-carousel-track"
            ref={trackRef}
            style={{
              transform: `translateX(${translateX}px)`,
              animation: 'scroll 30s linear infinite'
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="partner-logo">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="h-20 w-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .partner-carousel-container {
            width: 100%;
            overflow: hidden;
            position: relative;
          }

          .partner-carousel-track {
            display: flex;
            gap: 100px;
            padding: 60px 0;
            width: max-content;
          }

          .partner-logo {
            flex: 0 0 auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 80px;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @media (prefers-reduced-motion) {
            .partner-carousel-track {
              animation: none;
              justify-content: center;
              flex-wrap: wrap;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

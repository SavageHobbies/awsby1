"use client";

import { Metadata } from 'next';
import Head from 'next/head';
import Script from 'next/script';

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImageUrl?: string;
  structuredData?: object;
}

export default function Seo({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImageUrl = '/og-image.jpg',
  structuredData,
}: SeoProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={canonicalUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      {structuredData && (
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
      )}
    </>
  );
}
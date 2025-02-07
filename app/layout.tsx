import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import GoogleAnalytics from '@/components/analytics/google-analytics';
import Hotjar from '@/components/analytics/hotjar';
import CrispChat from '@/components/chat/crisp';
import ExitIntentPopup from '@/components/marketing/exit-intent-popup';
import StructuredData from '@/components/seo/structured-data.tsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://by1.net'),
  title: 'Leading AI & Automation Solutions for Business Transformation',
  description: 'Enterprise AI and automation solutions that reduce costs by 60% and deliver 3s response times. Proven results with 95% client satisfaction.',
  keywords: 'AI solutions, business automation, digital transformation, RPA, machine learning, process optimization, enterprise AI, ROI optimization, workflow automation',
  authors: [{ name: 'BY1.net' }],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://by1.net',
    siteName: 'BY1.net',
    title: 'Enterprise AI & Automation Solutions',
    description: 'Transform your business with cutting-edge AI and automation solutions. 60% cost reduction, 3s response times, 95% client satisfaction.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BY1.net - AI & Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI & Automation Solutions',
    description: 'Transform your business with cutting-edge AI and automation. 60% cost reduction, 3s response times.',
    images: ['/twitter-image.jpg'],
    site: '@by1net',
    creator: '@by1net',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'theme-color': '#000000',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BY1.net',
    url: 'https://by1.net',
    logo: 'https://by1.net/logo.png',
    description: 'Enterprise AI & Automation Solutions',
    sameAs: [
      'https://twitter.com/by1net',
      'https://linkedin.com/company/by1net',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <StructuredData data={jsonLd} />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <ExitIntentPopup />
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
          )}
          {process.env.NEXT_PUBLIC_HOTJAR_ID && process.env.NEXT_PUBLIC_HOTJAR_VERSION && (
            <Script
              strategy="lazyOnload"
              src={`/scripts/hotjar.js?hjid=${process.env.NEXT_PUBLIC_HOTJAR_ID}&hjsv=${process.env.NEXT_PUBLIC_HOTJAR_VERSION}`}
            />
          )}
          {process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID && (
            <Script
              strategy="lazyOnload"
              src={`/scripts/crisp.js?website_id=${process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID}`}
            />
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}

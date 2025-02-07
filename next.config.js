/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  // Disabling features that might cause permission issues during development
  experimental: {
    optimizeCss: false
  },
  swcMinify: false,
  // Commenting out redirects for local development
  // async redirects() {
  //   return [
  //     {
  //       source: '/:path*',
  //       has: [
  //         {
  //           type: 'host',
  //           value: '(?!www\\.).*',
  //         },
  //       ],
  //       destination: 'https://www.by1.net/:path*',
  //       permanent: true,
  //     },
  //     {
  //       source: '/:path*',
  //       has: [
  //         {
  //           type: 'header',
  //           key: 'x-forwarded-proto',
  //           value: 'http',
  //         },
  //       ],
  //       destination: 'https://www.by1.net/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn-in.pagesense.io https://static.zohocdn.com https://assets.cal.com https://app.cal.com https://www.googletagmanager.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://cdn-in.pagesense.io https://static.zohocdn.com https://www.google-analytics.com https://www.googletagmanager.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self' https://forms.zohopublic.in;
    frame-src 'self' https://forms.zohopublic.in https://cal.com https://app.cal.com;
    connect-src 'self' https://cdn-in.pagesense.io https://static.zohocdn.com https://forms.zohopublic.in https://api.web3forms.com https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://www.google-analytics.com/g/collect https://region1.analytics.google.com;
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
      {
        source: '/(.*\\.(?:png|jpg|jpeg|gif|webp|ico|svg|woff|woff2|ttf|eot))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;

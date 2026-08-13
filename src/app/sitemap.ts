import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eduratech.com';

  // Core pages with high priority
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/why-eduratech`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-we-work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Service pages with medium priority
  const servicePages: MetadataRoute.Sitemap = [
    '/services/custom-software-development',
    '/services/ai-development',
    '/services/saas-development',
    '/services/web-application-development',
    '/services/business-automation',
    '/services/crm-development',
    '/services/api-integration',
    '/services/cloud-solutions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Industry pages with medium priority
  const industryPages: MetadataRoute.Sitemap = [
    '/industries',
    '/industries/healthcare',
    '/industries/dental',
    '/industries/real-estate',
    '/industries/professional-services',
    '/industries/ecommerce',
    '/industries/education',
    '/industries/logistics',
    '/industries/startups',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Content pages
  const contentPages: MetadataRoute.Sitemap = [
    '/insights',
    '/insights/custom-software-costs',
    '/insights/ai-for-small-business',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...corePages, ...servicePages, ...industryPages, ...contentPages];
}

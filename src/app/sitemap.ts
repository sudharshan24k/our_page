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
      url: `${baseUrl}/methodology`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/technology`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/values`,
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
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/project-cost-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
  ];

  // Service pages with medium priority
  const servicePages: MetadataRoute.Sitemap = [
    '/services/custom-software-development',
    '/services/web-application-development',
    '/services/saas-development',
    '/services/crm-development',
    '/services/business-automation',
    '/services/ai-development',
    '/services/generative-ai-development',
    '/services/ai-automation',
    '/services/ai-chatbot-development',
    '/services/rag-development',
    '/services/web-development',
    '/services/website-development',
    '/services/ecommerce-development',
    '/services/aws-cloud-solutions',
    '/services/azure-cloud-solutions',
    '/services/api-development',
    '/services/data-analytics',
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
    '/insights/business-automation',
    '/insights/ai-chatbot-costs',
    '/insights/custom-vs-off-the-shelf-software',
    '/insights/how-to-automate-without-replacing-systems',
    '/insights/saas-development-costs',
    '/insights/how-to-build-internal-dashboard',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...corePages, ...servicePages, ...industryPages, ...contentPages];
}

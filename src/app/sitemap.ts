import { MetadataRoute } from 'next';
import { TARGET_LOCATIONS } from '@/lib/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.eduratech.com';

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

  // Case Study pages with high priority
  const caseStudyPages: MetadataRoute.Sitemap = [
    '/case-studies/global-saas-lead-generation',
    '/case-studies/fintech-cac-reduction',
    '/case-studies/logistics-partner-portal-automation',
    '/case-studies/healthcare-tech-demo-acceleration',
    '/case-studies/ecommerce-checkout-speed-optimization',
    '/case-studies/enterprise-ai-roi-calculator-generation',
    '/case-studies/hr-software-onboarding-gamification',
    '/case-studies/manufacturing-erp-sales-cycle-reduction',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Major US business cities to generate dynamic Local SEO landing pages in sitemap
  // Expanded list of 50 top US business cities for comprehensive Local SEO sitemap mapping
  const targetCities = [
    'new-york', 'los-angeles', 'chicago', 'houston', 'phoenix', 
    'philadelphia', 'san-antonio', 'san-diego', 'dallas', 'austin', 
    'san-jose', 'fort-worth', 'jacksonville', 'charlotte', 'columbus', 
    'san-francisco', 'indianapolis', 'seattle', 'denver', 'washington', 
    'boston', 'el-paso', 'nashville', 'detroit', 'oklahoma-city', 
    'portland', 'las-vegas', 'memphis', 'louisville', 'baltimore', 
    'milwaukee', 'albuquerque', 'tucson', 'fresno', 'sacramento', 
    'mesa', 'kansas-city', 'atlanta', 'omaha', 'colorado-springs', 
    'raleigh', 'virginia-beach', 'long-beach', 'miami', 'oakland', 
    'minneapolis', 'tulsa', 'bakersfield', 'wichita', 'arlington',
    // High-traffic analytics additions
    'warsaw', 'glenview', 'santa-clara', 'ashburn'
  ];

  // All 17 core services to be dynamically mapped to all 50 cities
  const localServices = [
    'custom-software-development',
    'web-application-development',
    'saas-development',
    'crm-development',
    'business-automation',
    'ai-development',
    'generative-ai-development',
    'ai-automation',
    'ai-chatbot-development',
    'rag-development',
    'web-development',
    'website-development',
    'ecommerce-development',
    'aws-cloud-solutions',
    'azure-cloud-solutions',
    'api-development',
    'data-analytics'
  ];

  const localSEOPages: MetadataRoute.Sitemap = [];
  
  targetCities.forEach(city => {
    localServices.forEach(service => {
      localSEOPages.push({
        url: `${baseUrl}/services/${service}-${city}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    });
  });

  const locationHubPages: MetadataRoute.Sitemap = TARGET_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    ...corePages,
    ...servicePages,
    ...industryPages,
    ...contentPages,
    ...caseStudyPages,
    ...localSEOPages,
    ...locationHubPages
  ];
}

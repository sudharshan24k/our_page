export interface SolutionData {
  title: string;
  slug: string;
  category: 'software' | 'ai' | 'problem';
  description: string;
  problem: string;
  solution: string;
}

export const TARGET_SOLUTIONS: SolutionData[] = [
  // Software
  {
    title: "Custom Software Development for Small Businesses",
    slug: "custom-software-development-for-small-businesses",
    category: "software",
    description: "Affordable, scalable custom software solutions tailored specifically for small business operations.",
    problem: "Small businesses often struggle with off-the-shelf software that doesn't fit their unique workflows, leading to inefficiencies and data silos.",
    solution: "We build custom software that perfectly maps to your business processes, improving efficiency without the enterprise price tag."
  },
  {
    title: "Custom Business Software Development",
    slug: "custom-business-software-development",
    category: "software",
    description: "Enterprise-grade custom business software development designed to automate workflows and drive growth.",
    problem: "Generic software solutions force you to change your business processes to match the tool, rather than the tool supporting your business.",
    solution: "Our custom business software development services deliver tailored applications that integrate seamlessly with your operations."
  },
  {
    title: "Software Development for Small Business",
    slug: "software-development-for-small-business",
    category: "software",
    description: "Expert software development services helping small businesses digitize and scale.",
    problem: "Manual processes and disconnected tools prevent small businesses from scaling effectively.",
    solution: "We provide end-to-end software development tailored for small business needs, from customer portals to inventory management."
  },
  {
    title: "Custom Internal Business Tools",
    slug: "custom-internal-business-tools",
    category: "software",
    description: "Build powerful custom internal business tools to empower your team and streamline operations.",
    problem: "Your team spends hours jumping between different apps, copying data, and managing operations on spreadsheets.",
    solution: "We design custom internal tools that centralize your data and give your team the exact dashboards and capabilities they need."
  },
  {
    title: "Business Process Automation Software",
    slug: "business-process-automation-software",
    category: "software",
    description: "Transform your operations with custom business process automation software.",
    problem: "Repetitive administrative tasks consume valuable employee time and are prone to human error.",
    solution: "Our business process automation software eliminates manual data entry and orchestrates workflows across your entire organization."
  },

  // AI
  {
    title: "AI Automation for Small Business",
    slug: "ai-automation-for-small-business",
    category: "ai",
    description: "Leverage cutting-edge AI automation for small business to punch above your weight.",
    problem: "Small businesses struggle to compete with larger enterprises that have massive support and administrative teams.",
    solution: "We implement AI automation that acts as a digital workforce, handling customer inquiries, data processing, and routine tasks 24/7."
  },
  {
    title: "AI Chatbot Development Company",
    slug: "ai-chatbot-development-company",
    category: "ai",
    description: "Partner with a leading AI chatbot development company to automate customer service and sales.",
    problem: "High customer support volume leads to delayed responses, frustrated customers, and lost sales opportunities.",
    solution: "As a specialized AI chatbot development company, we build intelligent, context-aware bots that resolve queries instantly and qualify leads."
  },
  {
    title: "AI Automation Services for Businesses",
    slug: "ai-automation-services-for-businesses",
    category: "ai",
    description: "Comprehensive AI automation services for businesses looking to scale operations intelligently.",
    problem: "Scaling operations traditionally means hiring more staff, linearly increasing your overhead costs.",
    solution: "Our AI automation services decouple growth from headcount by automating complex, multi-step workflows across your business."
  },
  {
    title: "Custom AI Solutions for Small Business",
    slug: "custom-ai-solutions-for-small-business",
    category: "ai",
    description: "Tailored custom AI solutions for small business challenges and opportunities.",
    problem: "Off-the-shelf AI tools are often too generic to solve specific, nuanced industry problems.",
    solution: "We build custom AI solutions that understand your specific business context, proprietary data, and unique workflows."
  },
  {
    title: "AI Workflow Automation",
    slug: "ai-workflow-automation",
    category: "ai",
    description: "Streamline complex processes with intelligent AI workflow automation.",
    problem: "Traditional rule-based automation breaks down when faced with unstructured data like emails, PDFs, or conversational text.",
    solution: "Our AI workflow automation uses large language models to read, understand, and route unstructured data automatically."
  },

  // Problem-based
  {
    title: "Automate Invoice Processing",
    slug: "automate-invoice-processing",
    category: "problem",
    description: "Eliminate manual data entry and automate invoice processing with custom software and AI.",
    problem: "Accounting teams spend hundreds of hours manually entering data from PDF invoices into accounting software, leading to errors and delays.",
    solution: "We build systems that use AI to automatically extract data from incoming invoices and push it directly into your ERP or accounting software."
  },
  {
    title: "Automate Customer Support with AI",
    slug: "automate-customer-support-with-ai",
    category: "problem",
    description: "Dramatically reduce response times and automate customer support with AI.",
    problem: "Your support team is overwhelmed by repetitive questions, causing delays for complex issues that require human attention.",
    solution: "We deploy AI agents that resolve up to 80% of common tier-1 support tickets instantly, escalating only complex issues to your human team."
  },
  {
    title: "Replace Spreadsheets with Custom Software",
    slug: "replace-spreadsheets-with-custom-software",
    category: "problem",
    description: "Upgrade your operations: replace spreadsheets with custom software designed for your workflows.",
    problem: "Running your business on massive, interconnected spreadsheets leads to data corruption, version control issues, and zero security.",
    solution: "We replace fragile spreadsheets with secure, cloud-based custom software featuring role-based access, audit trails, and beautiful dashboards."
  },
  {
    title: "Automate Business Workflows",
    slug: "automate-business-workflows",
    category: "problem",
    description: "Eliminate bottlenecks and automate business workflows with tailor-made solutions.",
    problem: "Information gets stuck in email inboxes or Slack threads, causing project delays and miscommunication.",
    solution: "We map out your manual processes and build dedicated software to automate business workflows, ensuring nothing falls through the cracks."
  },
  {
    title: "Build Customer Portal for Business",
    slug: "build-customer-portal-for-business",
    category: "problem",
    description: "Improve client satisfaction and retention—build a customer portal for your business.",
    problem: "Clients constantly email or call asking for status updates, invoices, or deliverables, draining your team's time.",
    solution: "We build custom customer portals where your clients can log in securely to access their data, files, and project statuses 24/7."
  }
];

export function getSolutionBySlug(slug: string): SolutionData | undefined {
  return TARGET_SOLUTIONS.find((sol) => sol.slug === slug);
}

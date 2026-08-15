export interface ProjectTypeOption {
  id: string;
  label: string;
  baseMinCost: number;
  baseMaxCost: number;
  baseMinWeeks: number;
  baseMaxWeeks: number;
}

export interface FeatureOption {
  id: string;
  label: string;
  addedMinCost: number;
  addedMaxCost: number;
  addedWeeks: number;
}

export interface ScaleOption {
  id: string;
  label: string;
  multiplier: number;
}

export interface UserOption {
  id: string;
  label: string;
  multiplier: number;
}

export interface TimelineOption {
  id: string;
  label: string;
  multiplier: number;
}

export interface DesignOption {
  id: string;
  label: string;
  multiplier: number;
}

export const projectTypes: ProjectTypeOption[] = [
  { id: "custom-software", label: "Custom Business Software", baseMinCost: 15000, baseMaxCost: 30000, baseMinWeeks: 8, baseMaxWeeks: 12 },
  { id: "web-app", label: "Web Application", baseMinCost: 12000, baseMaxCost: 25000, baseMinWeeks: 6, baseMaxWeeks: 10 },
  { id: "saas", label: "SaaS Product", baseMinCost: 25000, baseMaxCost: 50000, baseMinWeeks: 12, baseMaxWeeks: 18 },
  { id: "ai-app", label: "AI Application", baseMinCost: 20000, baseMaxCost: 45000, baseMinWeeks: 10, baseMaxWeeks: 16 },
  { id: "ai-chatbot", label: "AI Chatbot / AI Assistant", baseMinCost: 8000, baseMaxCost: 18000, baseMinWeeks: 4, baseMaxWeeks: 8 },
  { id: "automation", label: "Business Automation", baseMinCost: 5000, baseMaxCost: 12000, baseMinWeeks: 4, baseMaxWeeks: 6 },
  { id: "mobile-app", label: "Mobile Application", baseMinCost: 18000, baseMaxCost: 35000, baseMinWeeks: 10, baseMaxWeeks: 14 },
  { id: "api-integration", label: "API / Integration", baseMinCost: 4000, baseMaxCost: 9000, baseMinWeeks: 3, baseMaxWeeks: 5 },
  { id: "not-sure", label: "Not sure yet", baseMinCost: 10000, baseMaxCost: 25000, baseMinWeeks: 6, baseMaxWeeks: 12 }
];

export const features: FeatureOption[] = [
  { id: "auth", label: "User accounts & authentication", addedMinCost: 1500, addedMaxCost: 3000, addedWeeks: 1 },
  { id: "admin", label: "Admin dashboard", addedMinCost: 2500, addedMaxCost: 5000, addedWeeks: 2 },
  { id: "database", label: "Database integration", addedMinCost: 2000, addedMaxCost: 4000, addedWeeks: 1 },
  { id: "payment", label: "Payment processing (Stripe, etc.)", addedMinCost: 1500, addedMaxCost: 3000, addedWeeks: 1 },
  { id: "third-party", label: "Third-party integrations", addedMinCost: 1000, addedMaxCost: 2500, addedWeeks: 1 },
  { id: "api", label: "API integrations", addedMinCost: 1500, addedMaxCost: 3000, addedWeeks: 1 },
  { id: "ai", label: "AI / LLM functionality", addedMinCost: 4000, addedMaxCost: 8000, addedWeeks: 2 },
  { id: "workflows", label: "Automated workflows", addedMinCost: 2000, addedMaxCost: 4500, addedWeeks: 2 },
  { id: "analytics", label: "Analytics & reporting", addedMinCost: 1500, addedMaxCost: 3000, addedWeeks: 1 },
  { id: "realtime", label: "Real-time functionality", addedMinCost: 3000, addedMaxCost: 6000, addedWeeks: 2 },
  { id: "multitenant", label: "Multi-tenant architecture", addedMinCost: 4000, addedMaxCost: 9000, addedWeeks: 3 },
  { id: "cloud", label: "Cloud deployment", addedMinCost: 1500, addedMaxCost: 3000, addedWeeks: 1 }
];

export const scales: ScaleOption[] = [
  { id: "small-internal", label: "Small internal/business tool", multiplier: 0.9 },
  { id: "small-customer", label: "Small customer-facing application", multiplier: 1.0 },
  { id: "growing", label: "Growing business application", multiplier: 1.2 },
  { id: "saas-product", label: "SaaS / multi-user product", multiplier: 1.4 },
  { id: "enterprise", label: "Enterprise-scale application", multiplier: 1.8 },
  { id: "not-sure", label: "Not sure", multiplier: 1.1 }
];

export const users: UserOption[] = [
  { id: "under-100", label: "Under 100", multiplier: 0.9 },
  { id: "100-1000", label: "100–1,000", multiplier: 1.0 },
  { id: "1000-10000", label: "1,000–10,000", multiplier: 1.2 },
  { id: "10000-plus", label: "10,000+", multiplier: 1.5 },
  { id: "not-sure", label: "Not sure", multiplier: 1.1 }
];

export const timelines: TimelineOption[] = [
  { id: "asap", label: "As soon as possible (Rushed)", multiplier: 1.3 },
  { id: "1-2-months", label: "1–2 months", multiplier: 1.15 },
  { id: "3-4-months", label: "3–4 months", multiplier: 1.0 },
  { id: "5-6-months", label: "5–6 months", multiplier: 0.95 },
  { id: "6-plus-months", label: "6+ months", multiplier: 0.9 },
  { id: "just-exploring", label: "Just exploring", multiplier: 1.0 }
];

export const designs: DesignOption[] = [
  { id: "yes", label: "Yes, fully prepared", multiplier: 0.85 },
  { id: "partially", label: "Partially done", multiplier: 1.0 },
  { id: "no", label: "No, need full design", multiplier: 1.15 }
];

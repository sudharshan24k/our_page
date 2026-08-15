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
  { id: "custom-software", label: "Custom Business Software", baseMinCost: 450, baseMaxCost: 650, baseMinWeeks: 3, baseMaxWeeks: 5 },
  { id: "web-app", label: "Web Application", baseMinCost: 400, baseMaxCost: 600, baseMinWeeks: 3, baseMaxWeeks: 4 },
  { id: "saas", label: "SaaS Product", baseMinCost: 550, baseMaxCost: 800, baseMinWeeks: 4, baseMaxWeeks: 6 },
  { id: "ai-app", label: "AI Application", baseMinCost: 500, baseMaxCost: 750, baseMinWeeks: 4, baseMaxWeeks: 6 },
  { id: "ai-chatbot", label: "AI Chatbot / AI Assistant", baseMinCost: 350, baseMaxCost: 500, baseMinWeeks: 2, baseMaxWeeks: 3 },
  { id: "automation", label: "Business Automation", baseMinCost: 300, baseMaxCost: 450, baseMinWeeks: 2, baseMaxWeeks: 3 },
  { id: "mobile-app", label: "Mobile Application", baseMinCost: 500, baseMaxCost: 750, baseMinWeeks: 4, baseMaxWeeks: 5 },
  { id: "api-integration", label: "API / Integration", baseMinCost: 250, baseMaxCost: 400, baseMinWeeks: 1, baseMaxWeeks: 2 },
  { id: "not-sure", label: "Not sure yet", baseMinCost: 350, baseMaxCost: 550, baseMinWeeks: 3, baseMaxWeeks: 5 }
];

export const features: FeatureOption[] = [
  { id: "auth", label: "User accounts & authentication", addedMinCost: 30, addedMaxCost: 50, addedWeeks: 0 },
  { id: "admin", label: "Admin dashboard", addedMinCost: 40, addedMaxCost: 70, addedWeeks: 0 },
  { id: "database", label: "Database integration", addedMinCost: 30, addedMaxCost: 60, addedWeeks: 0 },
  { id: "payment", label: "Payment processing (Stripe, etc.)", addedMinCost: 30, addedMaxCost: 50, addedWeeks: 0 },
  { id: "third-party", label: "Third-party integrations", addedMinCost: 20, addedMaxCost: 40, addedWeeks: 0 },
  { id: "api", label: "API integrations", addedMinCost: 30, addedMaxCost: 50, addedWeeks: 0 },
  { id: "ai", label: "AI / LLM functionality", addedMinCost: 50, addedMaxCost: 90, addedWeeks: 0 },
  { id: "workflows", label: "Automated workflows", addedMinCost: 30, addedMaxCost: 60, addedWeeks: 0 },
  { id: "analytics", label: "Analytics & reporting", addedMinCost: 20, addedMaxCost: 45, addedWeeks: 0 },
  { id: "realtime", label: "Real-time functionality", addedMinCost: 40, addedMaxCost: 75, addedWeeks: 0 },
  { id: "multitenant", label: "Multi-tenant architecture", addedMinCost: 50, addedMaxCost: 100, addedWeeks: 0 },
  { id: "cloud", label: "Cloud deployment", addedMinCost: 20, addedMaxCost: 40, addedWeeks: 0 }
];

export const scales: ScaleOption[] = [
  { id: "small-internal", label: "Small internal/business tool", multiplier: 0.95 },
  { id: "small-customer", label: "Small customer-facing application", multiplier: 1.0 },
  { id: "growing", label: "Growing business application", multiplier: 1.05 },
  { id: "saas-product", label: "SaaS / multi-user product", multiplier: 1.1 },
  { id: "enterprise", label: "Enterprise-scale application", multiplier: 1.15 },
  { id: "not-sure", label: "Not sure", multiplier: 1.0 }
];

export const users: UserOption[] = [
  { id: "under-100", label: "Under 100", multiplier: 0.95 },
  { id: "100-1000", label: "100–1,000", multiplier: 1.0 },
  { id: "1000-10000", label: "1,000–10,000", multiplier: 1.05 },
  { id: "10000-plus", label: "10,000+", multiplier: 1.1 },
  { id: "not-sure", label: "Not sure", multiplier: 1.0 }
];

export const timelines: TimelineOption[] = [
  { id: "asap", label: "As soon as possible (Rushed)", multiplier: 1.1 },
  { id: "1-2-months", label: "1–2 months", multiplier: 1.05 },
  { id: "3-4-months", label: "3–4 months", multiplier: 1.0 },
  { id: "5-6-months", label: "5–6 months", multiplier: 0.98 },
  { id: "6-plus-months", label: "6+ months", multiplier: 0.95 },
  { id: "just-exploring", label: "Just exploring", multiplier: 1.0 }
];

export const designs: DesignOption[] = [
  { id: "yes", label: "Yes, fully prepared", multiplier: 0.95 },
  { id: "partially", label: "Partially done", multiplier: 1.0 },
  { id: "no", label: "No, need full design", multiplier: 1.05 }
];

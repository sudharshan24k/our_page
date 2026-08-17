"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface DataCollectionFormProps {
  onSubmit: (data: Record<string, string>) => void;
}

export function DataCollectionForm({ onSubmit }: DataCollectionFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.inquiry) {
      alert("Please fill in all required fields");
      return;
    }
    setIsSubmitting(true);
    await onSubmit(formData);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="text-sm font-medium text-zinc-900 dark:text-white block mb-1">
          Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium text-zinc-900 dark:text-white block mb-1">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium text-zinc-900 dark:text-white block mb-1">
          Company
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company"
          className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-zinc-900 dark:text-white block mb-1">
          What are you interested in? *
        </label>
        <select
          name="inquiry"
          value={formData.inquiry}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select an option</option>
          <option value="custom-software">Custom Software</option>
          <option value="ai-development">AI Development</option>
          <option value="saas">SaaS Development</option>
          <option value="web-app">Web Application</option>
          <option value="automation">Business Automation</option>
          <option value="crm">CRM Development</option>
          <option value="api-integration">API Integration</option>
          <option value="cloud">Cloud Solutions</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
      >
        {isSubmitting ? "Submitting..." : "Continue"}
        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
      </button>
    </form>
  );
}

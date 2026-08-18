"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { DataCollectionForm } from "./DataCollectionForm";
import { trackEvent } from "@/lib/tracking";

export interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showDataForm, setShowDataForm] = useState(false);
  const [collectedData, setCollectedData] = useState<Record<string, string>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg: Message = {
        id: "welcome",
        type: "bot",
        content: "Hi there! 👋 I'm here to help. Feel free to ask me any questions about our services, or I can collect your information for a personalized consultation.",
        timestamp: new Date(),
      };
      setMessages([welcomeMsg]);
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    const responses: Record<string, string> = {
      // Services
      "what services": "We offer custom software development, AI development, SaaS development, web applications, business automation, CRM development, API integration, and cloud solutions.",
      "what do you": "We help enterprises build scalable digital systems. We specialize in custom software, AI, and business automation solutions.",

      // Process
      "how do you work": "Our process: 1) Strategy audit, 2) Identify revenue leaks, 3) Custom roadmap, 4) Build and scale. We typically start with a free consultation.",
      "what's your process": "Our process: 1) Strategy audit, 2) Identify revenue leaks, 3) Custom roadmap, 4) Build and scale. We typically start with a free consultation.",

      // Timeline
      "how long": "Project timelines vary based on scope. A typical engagement starts with a 2-4 week discovery phase. We can discuss your specific needs during a consultation.",
      "timeline": "Project timelines vary based on scope. A typical engagement starts with a 2-4 week discovery phase. We can discuss your specific needs during a consultation.",

      // Pricing
      "cost": "Our pricing is custom based on your project scope. We offer flexible engagement models. Let's collect your details for an accurate quote.",
      "price": "Our pricing is custom based on your project scope. We offer flexible engagement models. Let's collect your details for an accurate quote.",
      "pricing": "Our pricing is custom based on your project scope. We offer flexible engagement models. Let's collect your details for an accurate quote.",

      // Contact
      "contact": "You can reach us at hello@ourpage.com or fill out the contact form on our website. We respond within 24 hours.",
      "get in touch": "You can reach us at hello@ourpage.com or fill out the contact form on our website. We respond within 24 hours.",

      // Data collection trigger
      "schedule": "I can help collect your information for a consultation. Would you like to proceed?",
      "consultation": "I can help collect your information for a consultation. Would you like to proceed?",
      "call": "I can help collect your information and we'll schedule a call with our team. Ready?",
    };

    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    return "Thanks for your question! For more specific information, please fill out our contact form or let me collect your details so our team can reach out with a personalized response.";
  };

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Check if user is asking for data collection
    if (
      content.toLowerCase().includes("consultation") ||
      content.toLowerCase().includes("schedule") ||
      content.toLowerCase().includes("call")
    ) {
      setTimeout(() => {
        const botMsg: Message = {
          id: `bot-${Date.now()}`,
          type: "bot",
          content: "Great! Let me collect your information so we can follow up with you.",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setShowDataForm(true);
      }, 500);
    } else {
      // Regular Q&A response
      setTimeout(() => {
        const botMsg: Message = {
          id: `bot-${Date.now()}`,
          type: "bot",
          content: getBotResponse(content),
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
      }, 500);
    }
  };

  const handleDataSubmit = async (data: Record<string, string>) => {
    setCollectedData(data);
    setShowDataForm(false);
    trackEvent("generate_lead", { source: "chatbot" });

    const confirmMsg: Message = {
      id: `confirm-${Date.now()}`,
      type: "bot",
      content: `Thanks, ${data.name}! We've received your information and will reach out to you at ${data.email} within 24 hours. Our team looks forward to speaking with you!`,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, confirmMsg]);

    // Send data to PageSense
    await sendToPageSense(data);
  };

  const sendToPageSense = async (data: Record<string, string>) => {
    try {
      // Configure your PageSense endpoint here
      const pagesengeEndpoint = process.env.NEXT_PUBLIC_PAGESENSE_ENDPOINT;

      if (!pagesengeEndpoint) {
        console.warn("PageSense endpoint not configured");
        return;
      }

      const payload = {
        source: "chatbot",
        timestamp: new Date().toISOString(),
        ...data,
      };

      const response = await fetch(pagesengeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("PageSense submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending to PageSense:", error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Let's Talk</h3>
              <p className="text-sm text-blue-100">We're here to help</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50 dark:bg-zinc-800">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}

            {showDataForm && (
              <div className="bg-white dark:bg-zinc-700 rounded-lg p-4">
                <DataCollectionForm onSubmit={handleDataSubmit} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          {!showDataForm && (
            <ChatInput onSendMessage={handleSendMessage} />
          )}
        </div>
      )}
    </div>
  );
}

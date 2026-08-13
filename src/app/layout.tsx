import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Edura Technologies USA",
    default: "Edura Technologies | Top B2B Tech & Lead Generation Agency in the USA",
  },
  description: "Edura Technologies is a premier B2B tech agency based in the United States, engineering high-conversion digital systems and lead generation strategies for enterprise firms across the USA.",
  keywords: ["B2B Tech Agency USA", "Lead Generation United States", "Digital Systems", "Software Development USA", "Conversion Optimization America", "National Tech Agency"],
  openGraph: {
    title: "Edura Technologies | Top B2B Tech Agency in the USA",
    description: "Engineering high-conversion digital systems and lead generation strategies for enterprise firms across the United States.",
    url: "https://eduratechnologies.com",
    siteName: "Edura Technologies USA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edura Technologies | Top B2B Tech Agency in the USA",
    description: "Engineering high-conversion digital systems for enterprise firms across the United States.",
  },
  alternates: {
    canonical: "https://eduratechnologies.com",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Edura Technologies",
  "url": "https://eduratechnologies.com",
  "logo": "https://eduratechnologies.com/logo.png",
  "image": "https://eduratechnologies.com/office.jpg",
  "description": "Edura Technologies is a premier B2B tech agency based in the United States, engineering high-conversion digital systems and lead generation strategies.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 Market Street, Suite 400",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7936,
    "longitude": -122.3962
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "telephone": "+1-415-555-0198",
  "priceRange": "$$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script 
          src="https://cdn-in.pagesense.io/js/eduratechnologies/4b485abf4fd1470b97e7ca5f0eae8283.js" 
          strategy="afterInteractive" 
        />
      </head>
      <body className={cn(inter.className, "bg-background text-foreground min-h-screen antialiased relative")}>
        {/* Premium Dark Background Pattern */}
        <div className="fixed inset-0 z-[-1] h-full w-full bg-noise bg-glow">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>

        {/* Floating CTA */}
        <a 
          href="/contact" 
          className="fixed bottom-8 right-8 z-[100] flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square group-hover:scale-110 transition-transform"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </a>
      </body>
    </html>
  );
}

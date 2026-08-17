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
  metadataBase: new URL("https://www.eduratech.com"),
  title: {
    template: "%s | Edura Technologies",
    default: "Edura Technologies | Custom Software & AI",
  },
  description: "Custom software, business automation, and AI systems engineered to deliver measurable growth and secure high-ticket clients.",
  keywords: ["custom software development", "AI development company", "SaaS development", "business automation", "web application development", "AI solutions", "cloud development", "US SMB software solutions", "midwest software development", "texas AI solutions", "florida custom software", "local business AI automation"],
  openGraph: {
    title: "Edura Technologies | Custom AI & Software Development",
    description: "We build practical AI solutions and custom software that solve real business problems. No hype. Real results.",
    url: "https://www.eduratech.com",
    siteName: "Edura Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edura Technologies | Custom AI & Software Development",
    description: "Custom AI solutions and software development for US small businesses and startups.",
  },
  robots: "index, follow",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google: "GOKubPXjdprLVUlMzNayc8gAkf4JoeCUymO7AS7fyMo",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Edura Technologies",
  "url": "https://www.eduratech.com",
  "logo": "https://www.eduratech.com/logo.png",
  "description": "Edura Technologies is a technology division of Edura Global Solutions specializing in custom AI development, software solutions, and digital transformation for US small businesses.",
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Texas"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Florida"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Ohio"
    },
    {
      "@type": "AdministrativeArea",
      "name": "North Carolina"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Georgia"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Illinois"
    },
    {
      "@type": "Country",
      "name": "Canada"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    },
    {
      "@type": "Country",
      "name": "Australia"
    }
  ],
  "knowsAbout": [
    "AI Development",
    "Generative AI",
    "Custom Software Development",
    "SaaS Development",
    "Web Application Development",
    "Cloud Solutions",
    "AWS Development",
    "Azure Development",
    "Business Automation",
    "Digital Transformation"
  ],
  "sameAs": [
    "https://www.linkedin.com/showcase/eduratech/",
    "https://www.instagram.com/edura_tech/",
    "https://www.facebook.com/profile.php?id=61593132340377"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "url": "https://www.eduratech.com/contact"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MW7B6LFS');
          `}
        </Script>
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script src="https://cdn-in.pagesense.io/js/eduratechnologies/4b485abf4fd1470b97e7ca5f0eae8283.js" strategy="afterInteractive" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NR9FSP61R6" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NR9FSP61R6');
          `}
        </Script>
      </head>
      <body className={cn(inter.className, "bg-background text-foreground min-h-screen antialiased relative")}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MW7B6LFS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
          aria-label="Send a Message"
          className="fixed bottom-8 right-8 z-[100] flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
        >
          <span className="sr-only">Send a Message</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square group-hover:scale-110 transition-transform"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </a>
      </body>
    </html>
  );
}

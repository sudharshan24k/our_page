"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RefreshCw, Home } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an analytics or error tracking service
    console.error("Unhandled Runtime Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center pt-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-4 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Something went wrong!
            <span className="block text-xl md:text-2xl font-medium text-zinc-500 mt-2">An unexpected error occurred</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed text-balance">
            We apologize for the inconvenience. Our systems have logged this issue. 
            You can try to reload the current page or return home.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button onClick={() => reset()} size="lg" className="bg-primary text-white hover:bg-primary/90 flex items-center gap-2 rounded-xl shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)] transition-all">
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>
            
            <Button href="/" variant="ghost" size="lg" className="text-zinc-300 hover:text-white hover:bg-white/10 border border-white/10 rounded-xl flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return Home
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

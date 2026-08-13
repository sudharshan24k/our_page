import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 text-zinc-400 mb-4 shadow-inner">
            <Search className="w-8 h-8" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            404
            <span className="block text-2xl md:text-3xl font-medium text-zinc-500 mt-2">Page Not Found</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed text-balance">
            The page you are looking for doesn't exist or has been moved. 
            Let's get you back on track to exploring our digital systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button href="/" size="lg" className="bg-primary text-white hover:bg-primary/90 flex items-center gap-2 rounded-xl shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)] transition-all">
              Return Home
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <Button href="/services" variant="ghost" size="lg" className="text-zinc-300 hover:text-white hover:bg-white/10 border border-white/10 rounded-xl">
              View Our Services
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
          <p className="text-zinc-500 font-medium tracking-widest uppercase text-sm animate-pulse">Loading</p>
        </div>
      </Container>
    </main>
  );
}

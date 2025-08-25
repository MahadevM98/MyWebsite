import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { DynamicContent } from "@/components/dynamic-content";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 md:py-32"
    >
       <div className="absolute inset-0 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <div className="container px-4 md:px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Digital Marketer, Data Analyst & Vibe Coder
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A curious, passionate, and results-focused professional who loves
            making sense of data, turning insights into actions, and helping
            businesses grow online.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#portfolio">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
          <Suspense fallback={<Skeleton className="mt-8 w-full h-32 bg-secondary" />}>
            <DynamicContent />
          </Suspense>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-6 h-6 animate-bounce text-primary" />
      </div>
    </section>
  );
}

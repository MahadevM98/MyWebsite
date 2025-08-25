import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Circle, Code, Framer, Layers, LayoutGrid } from "lucide-react";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 md:py-32"
    >
       <div className="absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      
      <div className="container px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl text-left">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            <Circle className="h-2 w-2 mr-2 fill-primary" />
            Available for Projects
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Meet the Expert Web Developer
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            I focus on delivering seamless navigation, responsive layouts, and pixel-perfect designs.
          </p>
          <div className="mt-8 flex justify-start gap-4">
            <Button asChild size="lg">
              <Link href="#portfolio">Explore Services <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
            <div className="absolute -top-8 -left-8 size-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"><Code size={24} /></div>
            <div className="absolute -bottom-8 -left-16 size-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"><Layers size={24} /></div>
            <div className="absolute -top-12 right-0 size-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"><LayoutGrid size={24} /></div>
            <div className="absolute -bottom-12 right-8 size-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"><Framer size={24} /></div>
            
            <Image 
                src="https://picsum.photos/450/450" 
                alt="Mahadev M" 
                width={450} 
                height={450} 
                className="rounded-full object-cover z-10 shadow-2xl shadow-primary/20"
                data-ai-hint="professional headshot"
            />
            <div className="absolute bottom-0 right-0 z-20">
                <div className="relative w-32 h-32">
                    <svg className="w-full h-full animate-spin [animation-duration:10s]" viewBox="0 0 100 100">
                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" stroke="none"></path>
                        <text>
                            <textPath href="#circlePath" startOffset="50%" textAnchor="middle" fill="hsl(var(--foreground))" className="text-sm font-semibold tracking-wider uppercase">
                                OFFICIAL FRAMER PARTNER CREATOR
                            </textPath>
                        </text>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                            <Framer className="text-foreground" size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

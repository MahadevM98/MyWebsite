import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Portfolio } from "@/components/sections/portfolio";
import { Cv } from "@/components/sections/cv";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

function SecondHero() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
          Crafting <span className="text-primary">Pixel-Perfect</span> Experiences
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          I design stunning, user-friendly websites that blend creativity with functionality—ensuring a seamless experience that captivates and converts.
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SecondHero />
        <About />
        <Projects />
        <Portfolio />
        <Cv />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

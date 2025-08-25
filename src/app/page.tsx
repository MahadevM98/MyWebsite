import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Portfolio } from "@/components/sections/portfolio";
import { Cv } from "@/components/sections/cv";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
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

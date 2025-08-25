"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="#home"
          className="flex items-center gap-3 font-bold"
        >
          <Image src="https://picsum.photos/40/40" alt="Mahadev M" width={40} height={40} className="rounded-full" data-ai-hint="professional headshot" />
          <div>
            <span className="text-lg font-bold">Mahadev M</span>
            <p className="text-sm font-normal text-muted-foreground">Web Developer</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-background">
              <div className="flex flex-col gap-6 pt-10">
                <Link
                  href="#home"
                  className="flex items-center gap-2 font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image src="https://picsum.photos/40/40" alt="Mahadev M" width={40} height={40} className="rounded-full" data-ai-hint="professional headshot" />
                   <div>
                    <span className="text-lg font-bold">Mahadev M</span>
                    <p className="text-sm font-normal text-muted-foreground">Web Developer</p>
                  </div>
                </Link>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Button asChild size="lg" className="mt-4">
                      <Link href="#contact">Start a Project <ArrowRight className="ml-2"/></Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:block">
           <Button asChild size="lg">
              <Link href="#contact">Start a Project <ArrowRight className="ml-2"/></Link>
            </Button>
        </div>
      </div>
    </header>
  );
}

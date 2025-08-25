"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ArrowRight, Bot } from "lucide-react";
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

function Logo() {
  return (
    <Link href="#home" className="flex items-center gap-3 group">
      <div className="relative w-10 h-10">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          <defs>
            <clipPath id="hexagon">
              <polygon points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25" />
            </clipPath>
          </defs>
          <g clipPath="url(#hexagon)">
            <Image
              src="/mahadev-m.jpg"
              alt="Mahadev M"
              width={100}
              height={100}
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              data-ai-hint="professional headshot"
            />
          </g>
          <polygon
            points="50 0, 95 25, 95 75, 50 100, 5 75, 5 25"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
    </Link>
  );
}

function StartProjectButton() {
  return (
     <Button asChild variant="glass" size="lg" className="rounded-full pl-3 pr-6 text-sm font-semibold">
      <Link href="#contact">
          <span className="bg-white/20 text-white rounded-full p-2 mr-3 group-hover:bg-white/30 transition-colors">
            <ArrowRight className="h-4 w-4" />
          </span>
          Start a Project
      </Link>
    </Button>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center py-4">
      <div className="flex h-16 w-full max-w-6xl items-center justify-between rounded-full bg-black/30 p-2 backdrop-blur-xl border border-white/10 mx-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => (
            <Button asChild variant="ghost" className="rounded-full text-white/80 hover:text-white" key={link.href}>
                <Link
                href={link.href}
                className="transition-colors hover:text-primary"
                >
                {link.label}
                </Link>
            </Button>
          ))}
            <Button asChild variant="ghost" className="rounded-full text-white/80 hover:text-white">
                <Link
                href="/image-generator"
                className="transition-colors hover:text-primary"
                >
                <Bot className="mr-2"/>
                AI Headshot
                </Link>
            </Button>
        </nav>

        <div className="hidden md:block">
          <StartProjectButton />
        </div>

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
                <Logo />
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
                   <Link
                      href="/image-generator"
                      className="text-lg flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Bot className="mr-2 h-5 w-5"/> AI Headshot
                    </Link>
                  <div className="mt-4">
                    <StartProjectButton />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

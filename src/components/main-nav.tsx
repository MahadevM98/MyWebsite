'use client';

import { Home, Briefcase, User, Phone, Zap } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: Briefcase },
  { href: "#portfolio", label: "Portfolio", icon: Zap },
  { href: "#contact", label: "Contact", icon: Phone },
];

export function MainNav() {
    const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-secondary/50 border border-primary/20 backdrop-blur-lg rounded-full flex items-center gap-2 p-2">
            {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href.startsWith("#") && pathname === "/");
                return (
                <Button asChild variant="ghost" size="icon" key={link.href} className={cn("rounded-full h-12 w-12 flex-col text-xs gap-1", isActive && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground")}>
                    <Link href={link.href} title={link.label}>
                        <link.icon className="h-5 w-5" />
                        <span className="sr-only">{link.label}</span>
                    </Link>
                </Button>
            )})}
        </div>
    </nav>
  );
}

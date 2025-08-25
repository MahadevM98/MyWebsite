"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full p-4 md:p-8">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Badge variant="secondary" className="border-primary/30 bg-secondary/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 mr-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Open to work
        </Badge>
        <Button asChild variant="glass">
            <a href="/mahadev_m_cv.pdf" download>Download CV</a>
        </Button>
      </div>
    </header>
  );
}

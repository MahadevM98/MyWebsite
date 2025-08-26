"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Linkedin, Mail, Link as LinkIcon, Download } from "lucide-react";

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mahadev-m-a08a57365", title: "LinkedIn"},
    { icon: Mail, href: "mailto:devminfo98@gmail.com", title: "Email" },
]

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full p-4 md:px-6">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center gap-4">
            <Badge variant="secondary" className="border-primary/30 bg-secondary/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2 mr-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                Open to work
            </Badge>
        </div>
        <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
                <Button asChild variant="glass" size="icon" key={link.href}>
                    <Link href={link.href} target="_blank" title={link.title}>
                        <link.icon className="h-5 w-5" />
                        <span className="sr-only">{link.title}</span>
                    </Link>
                </Button>
            ))}
             <Button asChild variant="glass" size="icon" title="Website">
                <Link href="https://www.mwebs.io/" target="_blank">
                    <LinkIcon className="h-5 w-5" />
                    <span className="sr-only">Website</span>
                </Link>
            </Button>
            <Button asChild variant="glass" className="hidden md:flex">
                <a href="https://drive.google.com/file/d/1NcVbj8U1ePeIVRtJCLmljYYpPUo1SX5j/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                </a>
            </Button>
            <Button asChild variant="glass" size="icon" className="md:hidden">
                 <a href="https://drive.google.com/file/d/1NcVbj8U1ePeIVRtJCLmljYYpPUo1SX5j/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Download CV">
                    <Download className="h-5 w-5" />
                    <span className="sr-only">Download CV</span>
                </a>
            </Button>
        </div>
      </div>
    </header>
  );
}

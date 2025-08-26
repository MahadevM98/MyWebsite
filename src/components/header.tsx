"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Linkedin, Mail, Link as LinkIcon, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mahadev-m-a08a57365", title: "LinkedIn"},
    { icon: Mail, href: "mailto:devminfo98@gmail.com", title: "Email" },
]

export function Header() {
  const { toast } = useToast();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "The link to this page has been copied to your clipboard.",
    });
  }

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
            <Button asChild variant="glass">
                <a href="/mahadev_m_cv.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                </a>
            </Button>
        </div>
      </div>
    </header>
  );
}

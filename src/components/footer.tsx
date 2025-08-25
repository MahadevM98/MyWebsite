import Link from "next/link";
import { Github, Linkedin, Mail, Phone, Code } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-background border-t border-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Mahadev.IO</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {year} Mahadev M. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="mailto:devminfo98@gmail.com" aria-label="Email">
            <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="tel:+917406894741" aria-label="Phone">
            <Phone className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

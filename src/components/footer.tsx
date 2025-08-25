import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm">
          &copy; {year} Mahadev M. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 transition-colors hover:text-primary" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 transition-colors hover:text-primary" />
          </Link>
          <Link href="mailto:devminfo98@gmail.com" aria-label="Email">
            <Mail className="h-6 w-6 transition-colors hover:text-primary" />
          </Link>
          <Link href="tel:+917406894741" aria-label="Phone">
            <Phone className="h-6 w-6 transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

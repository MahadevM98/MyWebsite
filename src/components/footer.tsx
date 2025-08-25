import Link from "next/link";
import { Framer } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-transparent">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          &copy; {year} Mahadev M. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
            <Framer className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">Made in Framer</span>
        </div>
      </div>
    </footer>
  );
}

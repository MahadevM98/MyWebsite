import Link from "next/link";
import { Framer } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="fixed bottom-4 right-4 z-50 space-y-2">
       <Button asChild size="sm" variant="outline" className="bg-black/50 backdrop-blur-sm">
        <Link href="https://framer.com/templates/boldex-portfolio-website-template/" target="_blank">
          Get this Template
        </Link>
      </Button>
      <Button asChild size="sm" variant="outline" className="bg-black/50 backdrop-blur-sm">
        <Link href="https://firebase.google.com/studio" target="_blank">
          <Framer className="mr-2" /> Made in Firebase Studio
        </Link>
      </Button>
    </footer>
  );
}

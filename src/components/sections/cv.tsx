import { Button } from "@/components/ui/button";
import { Download, BookUser } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const certifications = [
  { name: "Google Data Analytics Professional Certificate", link: "#" },
  { name: "Business Analysis & Process Management", link: "#" },
  { name: "Email Marketing Professional Certification", link: "#" },
];

export function Cv() {
  return (
    <section id="cv" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Resume & Certifications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Dive deeper into my professional journey and qualifications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="flex flex-col items-center justify-center text-center p-8 shadow-lg">
            <BookUser className="h-16 w-16 text-primary mb-4" />
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                Download My CV
              </CardTitle>
              <CardDescription className="mt-2">
                Get the full details of my experience, skills, and education.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg">
                <a href="/mahadev_m_cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card className="p-8 shadow-lg">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="font-headline text-2xl">
                Professional Certifications
              </CardTitle>
              <CardDescription className="mt-2">
                Commitment to continuous learning and professional development.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-center justify-between"
                  >
                    <span className="font-medium">{cert.name}</span>
                    <Button asChild variant="link">
                      <Link
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

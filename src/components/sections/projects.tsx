import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    link: "#",
    image: "https://images.unsplash.com/photo-1662947190722-5d272f82a526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8R29vZ2xlJTIwY2VydGlmaWNhdGlvbnxlbnwwfHx8fDE3NTYxNjExODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "certificate data analytics",
  },
  {
    title: "Business Analysis & Process Management",
    issuer: "Coursera",
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxM3x8YnVzaW5lc3MlMjBhbmFseXNpc3xlbnwwfHx8fDE3NTYxNjEyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "certificate business analysis",
  },
  {
    title: "Email Marketing Professional",
    issuer: "Intuit Mailchimp",
    link: "#",
    image: "https://images.unsplash.com/photo-1603791445824-0050bd436b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8ZW1haWx8ZW58MHx8fHwxNzU2MTYxMjk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "certificate email marketing",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Certifications &amp; Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of my professional certifications and GitHub repositories.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8 text-primary">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden bg-secondary/30 border-secondary group"
            >
              <div className="overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={cert.aiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="tracking-tight">{cert.title}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Award className="mr-2 h-4 w-4" />
                    View Certificate
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8 text-primary">GitHub Projects</h3>
            <Button asChild variant="glass" size="lg">
                <Link href="https://github.com/MahadevM98?tab=repositories&q=&type=public&language=&sort=" target="_blank">
                    <Github className="mr-2 h-5 w-5" />
                    View All Projects on GitHub
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Data-driven Marketing Dashboard",
    description:
      "An interactive dashboard built with R and Shiny to visualize marketing campaign performance and KPIs.",
    link: "https://github.com",
    image: "https://picsum.photos/600/400?random=1",
    aiHint: "dashboard analytics",
  },
  {
    title: "Customer Segmentation Analysis",
    description:
      "A data analysis project using SQL and Python to segment customers based on purchasing behavior for targeted marketing.",
    link: "https://github.com",
    image: "https://picsum.photos/600/400?random=2",
    aiHint: "customer chart",
  },
  {
    title: "SEO Keyword Opportunity Finder",
    description:
      "A script that leverages APIs to find low-competition, high-volume keywords to improve organic search rankings.",
    link: "https://github.com",
    image: "https://picsum.photos/600/400?random=3",
    aiHint: "seo code",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            GitHub Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Exploring data and code. Here are some of my favorite repositories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden bg-secondary/30 border-secondary group"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.aiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="tracking-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

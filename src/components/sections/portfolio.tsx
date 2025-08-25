import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Live E-commerce Sales Dashboard",
    description:
      "An interactive, real-time dashboard tracking sales, traffic, and conversion rates for an e-commerce platform. Built with SQL and Tableau.",
    tags: ["SQL", "Tableau", "Live Dashboard"],
    link: "#",
    image: "https://picsum.photos/600/400?random=4",
    aiHint: "sales dashboard",
  },
  {
    title: "AI Training Data Annotation",
    description:
      "Project focused on annotating complex datasets for training machine learning models, ensuring high-quality data for AI applications.",
    tags: ["Data Annotation", "Reinforcement Learning"],
    link: "#",
    image: "https://picsum.photos/600/400?random=5",
    aiHint: "data annotation",
  },
  {
    title: "Google Analytics & R Integration",
    description:
      "A comprehensive analysis of website user behavior by integrating Google Analytics data with R for advanced statistical modeling and visualization.",
    tags: ["Google Analytics", "R Programming", "Data Visualization"],
    link: "#",
    image: "https://picsum.photos/600/400?random=6",
    aiHint: "analytics graph",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Portfolio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in digital marketing, data analysis, and
            creating interactive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={item.aiHint}
              />
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
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

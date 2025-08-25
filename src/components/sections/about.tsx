import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const skills = [
  "Prompt Engineering",
  "Campaign Optimization",
  "SEO",
  "A/B Testing",
  "Reinforcement Learning",
  "Data-Driven Decision-Making",
  "SQL",
  "Tableau",
  "Google Analytics",
  "Google Data Studio",
  "R Programming",
  "AI Training Data Annotation",
];

const experiences = [
  {
    role: "AI Training Contributor",
    company: "Outlier.ai",
    description:
      "Contributed to AI training through data annotation and reinforcement learning from human feedback.",
  },
  {
    role: "Digital Marketing Specialist",
    company: "Polisika Marketing Solutions",
    description:
      "Developed and executed comprehensive digital marketing campaigns, focusing on SEO, A/B testing, and campaign optimization to drive growth.",
  },
  {
    role: "Co-Founder",
    company: "Kikbit Foods India Pvt. Ltd.",
    description:
      "Co-founded and managed business operations, applying data-driven strategies for market entry and growth.",
  },
];

export function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A blend of marketing acumen, analytical prowess, and coding
            curiosity.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <Image
              src="/mahadev-m.jpg"
              alt="Mahadev M"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg border-4 border-primary/50"
              data-ai-hint="professional headshot"
            />
          </div>
          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold tracking-tight mb-4">
              Career Highlights
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{exp.role}</h4>
                    <p className="font-semibold text-primary">{exp.company}</p>
                    <p className="text-muted-foreground mt-1">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card className="mt-16 bg-transparent border-secondary">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tight">
              Skills & Expertise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

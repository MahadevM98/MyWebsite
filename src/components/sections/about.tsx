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
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left mb-12 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A blend of marketing acumen, analytical prowess, and coding
            curiosity. I thrive on leveraging data to drive digital growth and build intelligent applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
                 <h3 className="text-2xl font-bold tracking-tight mb-6 text-primary">
                    Career Highlights
                </h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border">

                {experiences.map((exp, index) => (
                    <div key={index} className="flex gap-6 relative">
                    <div className="flex-shrink-0 h-10 w-10 mt-1 rounded-full bg-secondary text-primary flex items-center justify-center border border-primary/30">
                        <Briefcase className="h-5 w-5" />
                    </div>
                    <div className="flex-grow">
                        <h4 className="font-bold text-lg">{exp.role}</h4>
                        <p className="font-semibold text-primary">{exp.company}</p>
                        <p className="text-muted-foreground mt-1 text-sm">
                        {exp.description}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
          
            <Card className="bg-secondary/30 border-primary/20 backdrop-blur-sm p-6">
                <h3 className="text-2xl font-bold tracking-tight mb-6 text-primary">
                    Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <Badge
                    key={skill}
                    variant="secondary"
                    className="text-base py-2 px-4 border border-primary/30 bg-secondary/50"
                    >
                    {skill}
                    </Badge>
                ))}
                </div>
            </Card>
        </div>
      </div>
    </section>
  );

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const skills = [
  "SQL",
  "Tableau",
  "Excel",
  "Google Analytics",
  "Google Data Studio",
  "A/B Testing",
  "R Programming",
  "Kaggle",
  "Meta Ads",
  "Mailchimp",
  "SEO",
  "SEM",
  "Google Ads",
  "LLM evaluation",
  "Data annotation",
  "Prompt testing",
  "Reinforcement learning",
  "Wix",
  "Shopify",
  "Payment Gateways"
];

const experiences = [
  {
    role: "AI Training Contributor",
    company: "Outlier.ai",
    description:
      "Judged AI model responses for clarity and accuracy, labeled datasets to improve learning, and gained hands-on experience with prompt engineering.",
  },
  {
    role: "Digital Marketing Specialist",
    company: "Polisika Marketing Solutions",
    description:
      "Led Google Ads, SEO, and performance marketing to increase qualified leads. Built live dashboards with SQL for transparent reporting and data-driven recommendations.",
  },
  {
    role: "Digital Marketing Specialist",
    company: "Kikbit Foods India Pvt. Ltd.",
    description:
      "Ran SEO, email, and paid ad strategies to grow traffic. A/B tested landing pages and used Google Analytics to improve the marketing funnel.",
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
            Curious, passionate, and results-focused digital marketer who believes numbers can tell a story. I love making sense of data, turning insights into actions, and helping businesses grow online. Whether it’s optimizing a campaign or evaluating cutting-edge AI models, I enjoy rolling up my sleeves, solving problems, and contributing to a talented team. Let’s create something impactful together!
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
          
            <Card className="bg-transparent border-primary/20 backdrop-blur-sm p-6">
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
}

import { Button } from "@/components/ui/button";
import { Award, Github } from "lucide-react";
import Link from "next/link";

const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    link: "https://coursera.org/share/13508aaa8d2d4f0dd3a51f27e6350eb2",
  },
  {
    title: "Business Analysis & Process Management",
    link: "https://coursera.org/share/6e41fa6338344c38e1178730701219fe",
  },
  {
    title: "Email Marketing Professional",
    link: "https://www.linkedin.com/learning/certificates/3967e7443c3a16256d6ace550f5780e17960e957ba9ee6198111e3735f7a08a1?trk=share_certificate",
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

        <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8 text-primary text-center">Certifications</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
          {certifications.map((cert, index) => (
            <Button asChild variant="glass" size="lg" key={index}>
              <Link
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Award className="mr-2 h-4 w-4" />
                {cert.title}
              </Link>
            </Button>
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

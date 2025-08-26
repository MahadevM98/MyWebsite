import { Mail, Phone, Linkedin, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { DynamicContent } from "@/components/dynamic-content";

const contactDetails = [
    { icon: Mail, text: "devminfo98@gmail.com", href: "mailto:devminfo98@gmail.com" },
    { icon: Phone, text: "+91 7406894741", href: "tel:+917406894741" },
    { icon: Linkedin, text: "www.linkedin.com/in/mahadev-m-a08a57365", href: "https://www.linkedin.com/in/mahadev-m-a08a57365" },
    { icon: LinkIcon, text: "mwebs.io", href: "https://www.mwebs.io/" },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[700px] flex items-center bg-black"
    >
      <div className="container px-4 md:px-6 z-20 relative">
        <div className="max-w-4xl text-left text-white">
          <span className="text-primary font-semibold tracking-wider uppercase">Digital Marketing Specialist | Data Analyst | vibe coder</span>
          <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl mt-2">
            Mahadev M
          </h1>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
            {contactDetails.map((detail, index) => (
                <Link key={index} href={detail.href} target="_blank" className="flex items-center gap-3 text-sm group">
                    <detail.icon className="h-5 w-5 text-primary" />
                    <span className="group-hover:text-primary transition-colors">{detail.text}</span>
                </Link>
            ))}
          </div>
          <DynamicContent />
        </div>
      </div>
    </section>
  );
}

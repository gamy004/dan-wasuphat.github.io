import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
          Get in Touch
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-mono">
          Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono">
            <Link href="mailto:narayutput@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary/20 hover:bg-primary hover:text-primary-foreground font-mono">
            <Link href="https://www.linkedin.com/in/wasuphat-pudjaika-06185614b" target="_blank">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

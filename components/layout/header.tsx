import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-background/50 backdrop-blur-md supports-[backdrop-filter]:bg-background/20">
      <div className="container flex h-16 items-center justify-between">
        <Link className="mr-6 flex items-center space-x-2 font-bold font-mono text-primary" href="/">
          <span>&lt;Wasuphat /&gt;</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium font-mono">
          <Link href="#about" className="transition-colors hover:text-primary text-foreground/80">
            About
          </Link>
          <Link href="#projects" className="transition-colors hover:text-primary text-foreground/80">
            Projects
          </Link>
          <Link href="#contact" className="transition-colors hover:text-primary text-foreground/80">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm" className="font-mono border-primary/20 hover:bg-primary hover:text-primary-foreground hidden sm:flex">
            <Link href="/Profile.pdf" target="_blank">Resume</Link>
          </Button>
          <Button asChild size="sm" className="font-mono bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

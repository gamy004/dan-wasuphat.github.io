import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star, GitFork } from "lucide-react";
import Link from "next/link";
import { getPinnedProjects } from "@/lib/github";
import { Project } from "@/lib/types";

// Static featured projects (professional highlights)
const featuredProjects = [
  {
    title: "CERN AI Logging System",
    description: "Developed and maintained the AI logging system for the ALICE O2-FLP team at CERN. Implemented data engineering pipelines to optimize system performance and created a comprehensive monitoring dashboard for real-time analysis.",
    tags: ["Data Engineering", "AI", "Monitoring", "CERN"],
    link: "#",
  },
  {
    title: "KMUTT Learning Platform",
    description: "Led the development of a university-wide learning platform at KMUTT ETS. Managed the agile development process, designed the software architecture, and delivered a scalable web application to support student learning.",
    tags: ["Web App", "Agile", "Architecture", "Education"],
    link: "#",
  },
  {
    title: "Big Data Analytics Projects",
    description: "Executed various data analysis and visualization projects at the Big Data Experience Center. Transformed complex datasets into actionable insights for stakeholders.",
    tags: ["Data Science", "Visualization", "Analytics"],
    link: "#",
  },
];

function GitHubProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm hover:scale-[1.02]"
    >
      <div className="flex-1">
        <h3 className="font-bold text-lg font-mono text-foreground group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="mt-2 text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {project.description ?? "No description available."}
        </p>
      </div>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-white/5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="font-mono">{project.language ?? "Mixed"}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            <span>{project.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-3.5 w-3.5" />
            <span>{project.forks_count}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export async function Projects() {
  const pinnedProjects = await getPinnedProjects("gamy004");

  return (
    <section id="projects" className="container py-24 sm:py-32">
      {/* Featured Work Section */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
          Featured Work
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-mono">
          A selection of key projects and professional achievements.
        </p>
      </div>
      
      <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <div key={index} className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm group">
            <div>
              <h3 className="font-bold text-xl font-mono text-primary group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-md border border-primary/20 px-2.5 py-0.5 text-xs font-semibold font-mono text-primary transition-colors bg-primary/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" size="sm" className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground font-mono">
                <Link href={project.link}>
                  View Details <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Open Source Section */}
      <div className="mt-16 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-mono">
          Open Source
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8 font-mono">
          My pinned repositories on GitHub.
        </p>
      </div>

      {pinnedProjects.length > 0 ? (
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {pinnedProjects.map((project) => (
            <GitHubProjectCard key={project.name} project={project} />
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-md py-12 text-center">
          <p className="text-muted-foreground font-mono">
            No open source projects to display at this time.
          </p>
          <a
            href="https://github.com/gamy004"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm"
          >
            Visit my GitHub profile <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </section>
  );
}

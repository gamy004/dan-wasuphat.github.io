import { BadgeCheck, Briefcase, GraduationCap } from "lucide-react";

export function About() {
  const skills = [
    "NestJS",
    "Node.js",
    "React / Next.js",
    "TypeScript",
    "Architecture",
    "Data Engineering",
    "Agile Development",
    "Web Applications",
  ];

  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "LINE MAN Wongnai",
      period: "August 2024 - Present",
      description: "Developing scalable software solutions for one of Thailand's leading tech companies."
    },
    {
      role: "Senior Software Engineer (Captain Team)",
      company: "KMUTT ETS",
      period: "September 2020 - August 2024",
      description: "Led web application development and software solutions for learning platforms. Managed agile teams and delivered high-quality products."
    },
    {
      role: "Data Engineer",
      company: "CERN (Geneva, Switzerland)",
      period: "September 2023 - December 2023",
      description: "Collaborated with ALICE O2-FLP team to develop and maintain the AI logging system. Optimized system performance and created monitoring dashboards."
    },
    {
      role: "Data Scientist",
      company: "Big Data Experience Center",
      period: "August 2019 - September 2020",
      description: "Worked on data analysis and visualization projects."
    }
  ];

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 font-mono">
            About Me
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed font-mono text-sm sm:text-base">
            <p>
              I am a passionate Senior Software Engineer and Team Captain with a Master&apos;s degree in Computer Engineering. 
              My expertise lies in building robust web applications, designing scalable architectures, and leading agile teams.
            </p>
            <p>
              With a strong background in both software engineering and data science, I bring a unique perspective to problem-solving. 
              From developing learning platforms at KMUTT ETS to optimizing AI logging systems at CERN in Switzerland, I thrive on challenges that require technical innovation and precision.
            </p>
            <p>
              I am dedicated to making a positive impact through technology, constantly learning new tools, and sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-bold font-mono text-primary flex items-center gap-2">
              <GraduationCap className="h-5 w-5" /> Education
            </h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-bold text-foreground">Master&apos;s in Computer Engineering</h4>
                <p className="text-muted-foreground">King Mongkut&apos;s University of Technology Thonburi (2016 - 2018)</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-bold text-foreground">Bachelor&apos;s in Computer Science</h4>
                <p className="text-muted-foreground">King Mongkut&apos;s University of Technology Thonburi (2012 - 2016)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col justify-center bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="mb-6 text-xl font-bold font-mono text-primary flex items-center gap-2">
              <BadgeCheck className="h-5 w-5" /> Technical Skills
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 rounded-lg border border-white/5 p-3 bg-white/5 hover:bg-white/10 transition-colors">
                  <BadgeCheck className="h-4 w-4 text-primary" />
                  <span className="font-medium font-mono text-xs sm:text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="mb-6 text-xl font-bold font-mono text-primary flex items-center gap-2">
              <Briefcase className="h-5 w-5" /> Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l border-white/10 last:pb-0">
                  <div className="absolute left-[-5px] top-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <h4 className="font-bold text-foreground font-mono text-sm">{exp.role}</h4>
                  <p className="text-primary/80 text-xs font-mono mb-1">{exp.company}</p>
                  <p className="text-muted-foreground text-xs font-mono mb-2">{exp.period}</p>
                  <p className="text-muted-foreground text-xs">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

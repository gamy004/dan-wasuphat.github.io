import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { ParallaxSection } from "@/components/ui/parallax-section";

export default function Home() {
  return (
    <>
      <ParallaxSection offset={-50}>
        <Hero />
      </ParallaxSection>
      <ParallaxSection>
        <About />
      </ParallaxSection>
      <ParallaxSection>
        <Projects />
      </ParallaxSection>
      <ParallaxSection>
        <Contact />
      </ParallaxSection>
    </>
  );
}

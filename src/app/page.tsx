import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { TimelineSection } from "@/components/sections/timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-white/5 mt-20">
        <p>© {new Date().getFullYear()} LOGITHKUMAR K R. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}

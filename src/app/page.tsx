import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { TimelineSection } from "@/components/sections/timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />

      {/* Footer */}
      <footer className="py-10 text-center bg-white border-t border-slate-100">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} LOGITHKUMAR K R. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}

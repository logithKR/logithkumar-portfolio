import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { TimelineSection } from "@/components/sections/timeline";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-violet-200">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />

      {/* Footer */}
      <footer className="py-8 text-center bg-white border-t border-slate-100">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-slate-600">LOGITHKUMAR K R</span>. Crafted with Next.js & Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}

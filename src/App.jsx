import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeroSection } from "./components/sections/hero";
import { AboutSection } from "./components/sections/about";
import { SkillsSection } from "./components/sections/skills";
import { ProjectsSection } from "./components/sections/projects";
import { TimelineSection } from "./components/sections/timeline";
import { Navbar } from "./components/navbar";
import { ChatWidget } from "./components/chatbot/chat-widget";
import { LoadingScreen } from "./components/loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Navbar />
            <main className="min-h-screen selection:bg-violet-200">
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <TimelineSection />

              {/* Footer */}
              <footer className="py-8 text-center bg-white border-t border-slate-100">
                <p className="text-slate-400 text-sm">
                  © {new Date().getFullYear()} <span className="font-semibold text-slate-600">LOGITHKUMAR K R</span>. Crafted with React & Tailwind CSS.
                </p>
              </footer>
            </main>
            <ChatWidget />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

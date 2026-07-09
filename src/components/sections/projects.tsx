"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data";
import { ArrowRight, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Full Stack", "AI/ML", "Backend"];

  // Helper function to loosely categorize projects based on stack
  const getCategory = (project: any) => {
    const stack = project.stack.join(" ").toLowerCase();
    if (stack.includes("fastapi") || stack.includes("flask") || stack.includes("node")) {
      if (stack.includes("langchain") || stack.includes("gemini") || stack.includes("stable diffusion") || stack.includes("cp-sat")) {
        return "AI/ML";
      }
      return "Backend";
    }
    if (stack.includes("react") && (stack.includes("node") || stack.includes("fastapi") || stack.includes("flask"))) {
      return "Full Stack";
    }
    return "All"; // fallback
  };

  const displayedProjects = activeTab === "All" 
    ? projectsData 
    : projectsData.filter(p => getCategory(p) === activeTab || (activeTab === "AI/ML" && p.name.includes("GenJewels"))); // Hardcode edge cases if needed

  // Gradient backgrounds since we don't have images
  const gradients = [
    "from-slate-800 to-slate-900",
    "from-blue-900 to-indigo-900",
    "from-purple-900 to-slate-900"
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-slate-900">
          Featured Projects
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all \${
                activeTab === category
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-white text-slate-600 hover:bg-slate-50 shadow-sm border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={project.name}
                className={`relative h-[400px] rounded-2xl overflow-hidden group bg-gradient-to-br \${gradients[idx % gradients.length]} shadow-md`}
              >
                {/* Background Pattern Overlay (optional, creates texture) */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

                {/* Content Container positioned at bottom */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.slice(0, 3).map((tech, tIdx) => (
                        <Badge key={tIdx} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-0">
                          {tech}
                        </Badge>
                      ))}
                      {project.stack.length > 3 && (
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">+{project.stack.length - 3}</Badge>
                      )}
                    </div>

                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.live && (
                        <a 
                          href={`https://\${project.live}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          View Project <ArrowRight size={16} />
                        </a>
                      )}
                      {project.code && (
                        <a 
                          href={`https://\${project.code}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          <Code2 size={16} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all hover:shadow-blue-500/30 hover:scale-105">
            Let's build something together
          </button>
        </div>
      </div>
    </section>
  );
}

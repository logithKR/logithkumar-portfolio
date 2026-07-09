"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Full Stack", "AI/ML"];

  const getCategory = (project: (typeof projectsData)[0]) => {
    const stack = project.stack.join(" ").toLowerCase();
    if (stack.includes("langchain") || stack.includes("gemini") || stack.includes("stable diffusion") || stack.includes("cp-sat") || stack.includes("or-tools")) {
      return "AI/ML";
    }
    return "Full Stack";
  };

  const displayedProjects =
    activeTab === "All" ? projectsData : projectsData.filter((p) => getCategory(p) === activeTab);

  const gradients = [
    "from-slate-800 via-slate-700 to-blue-900",
    "from-indigo-900 via-purple-900 to-slate-900",
    "from-blue-900 via-cyan-900 to-slate-800",
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-center text-slate-900"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-1 bg-blue-600 rounded-full mb-12 mx-auto"
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white text-slate-600 hover:bg-slate-50 shadow-sm border border-slate-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={project.name}
                whileHover={{ y: -8 }}
                className={`relative h-[420px] rounded-2xl overflow-hidden group bg-gradient-to-br ${gradients[idx % gradients.length]} shadow-lg hover:shadow-2xl transition-shadow duration-300`}
              >
                {/* Animated shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />

                {/* Floating decorative dots */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 right-6 w-3 h-3 bg-blue-400/30 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-12 w-2 h-2 bg-purple-400/30 rounded-full"
                />

                {/* Content at bottom */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-blue-300 text-sm font-semibold mb-2">{project.date}</p>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{project.name}</h3>
                    <p className="text-slate-300 text-sm mb-4 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.stack.slice(0, 4).map((tech, tIdx) => (
                        <Badge
                          key={tIdx}
                          variant="secondary"
                          className="bg-white/15 text-white hover:bg-white/25 border-0 text-xs backdrop-blur-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.stack.length > 4 && (
                        <Badge variant="secondary" className="bg-white/15 text-white border-0 text-xs">
                          +{project.stack.length - 4}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {project.live && (
                        <motion.a
                          href={`https://${project.live}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          View Project <ArrowRight size={14} />
                        </motion.a>
                      )}
                      {project.code && (
                        <motion.a
                          href={`https://${project.code}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors backdrop-blur-sm"
                        >
                          <Code2 size={14} /> Source
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.25)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors"
          >
            Let&apos;s build something together <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

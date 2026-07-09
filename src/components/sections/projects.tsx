"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Full Stack", "AI/ML"];

  const getCategory = (project: (typeof projectsData)[0]) => {
    const stack = project.stack.join(" ").toLowerCase();
    if (stack.includes("langchain") || stack.includes("gemini") || stack.includes("stable diffusion") || stack.includes("or-tools")) return "AI/ML";
    return "Full Stack";
  };

  const displayedProjects = activeTab === "All" ? projectsData : projectsData.filter((p) => getCategory(p) === activeTab);

  const gradients = [
    "from-violet-600 via-indigo-600 to-purple-700",
    "from-indigo-700 via-blue-700 to-cyan-700",
    "from-purple-700 via-pink-700 to-rose-700",
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      <motion.div
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100/30 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-3">My work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Featured Projects
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mb-12 mx-auto"
          />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === category
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-200"
                  : "bg-white text-slate-600 hover:text-violet-600 shadow-sm border border-slate-200 hover:border-violet-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                key={project.name}
                whileHover={{ y: -8 }}
                className="group relative h-[440px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[idx % gradients.length]}`} />

                {/* Decorative elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 w-20 h-20 border border-white/10 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-20 right-16 w-8 h-8 bg-white/5 rounded-full"
                />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-7 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-sm text-white/90 text-xs font-medium rounded-full mb-3">
                      {project.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {project.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-5 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.stack.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-white/10 backdrop-blur-sm text-white/90 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-2.5 py-1 bg-white/10 text-white/70 rounded-md text-xs">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      {project.live && (
                        <motion.a
                          href={`https://${project.live}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-white text-violet-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-50 transition-colors"
                        >
                          <ExternalLink size={14} /> Live Demo
                        </motion.a>
                      )}
                      {project.code && (
                        <motion.a
                          href={`https://${project.code}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/25 transition-colors"
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
      </div>
    </section>
  );
}

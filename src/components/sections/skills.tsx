"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data";
import { Code2, Database, Layout, Terminal, Cpu, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Consolidated Tech Stack": <Cpu className="w-4 h-4" />,
  "Programming Languages": <Code2 className="w-4 h-4" />,
  "Frontend": <Layout className="w-4 h-4" />,
  "Backend": <Terminal className="w-4 h-4" />,
  "Databases": <Database className="w-4 h-4" />,
  "AI & Machine Learning": <Cpu className="w-4 h-4" />,
  "Tools & Auth": <Wrench className="w-4 h-4" />,
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Consolidated Tech Stack");

  const allSkills = skillsData.flatMap((cat) => cat.skills).slice(0, 12);
  const categories = ["Consolidated Tech Stack", ...skillsData.map((c) => c.category)];

  const getSkillsToDisplay = () => {
    if (activeCategory === "Consolidated Tech Stack") return allSkills;
    return skillsData.find((c) => c.category === activeCategory)?.skills || [];
  };

  const displayedSkills = getSkillsToDisplay();

  const getIconForSkill = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes("react") || s.includes("html") || s.includes("css") || s.includes("tailwind")) return <Layout className="w-8 h-8 text-blue-600" />;
    if (s.includes("sql") || s.includes("firebase") || s.includes("redis")) return <Database className="w-8 h-8 text-blue-600" />;
    if (s.includes("python") || s.includes("fastapi") || s.includes("node") || s.includes("flask") || s.includes("express")) return <Terminal className="w-8 h-8 text-blue-600" />;
    if (s.includes("langchain") || s.includes("faiss") || s.includes("gemini") || s.includes("stable") || s.includes("or-tools")) return <Cpu className="w-8 h-8 text-blue-600" />;
    if (s.includes("git") || s.includes("jwt") || s.includes("oauth") || s.includes("socket")) return <Wrench className="w-8 h-8 text-blue-600" />;
    return <Code2 className="w-8 h-8 text-blue-600" />;
  };

  const getSkillLevel = (skill: string) => {
    const val = (skill.length * 7) % 40 + 60;
    return val;
  };

  return (
    <section id="skills" className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Animated background patterns */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-56 h-56 bg-purple-100/40 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-slate-900"
        >
          My Skills
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-1 bg-blue-600 rounded-full mb-6 mx-auto"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 max-w-2xl mx-auto mb-12"
        >
          A comprehensive set of technical skills I&apos;ve developed over the years across Frontend, Backend, AI/ML, and DevOps.
        </motion.p>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white text-slate-600 hover:bg-slate-50 shadow-sm border border-slate-200"
              }`}
            >
              {categoryIcons[category]}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={skill}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transition-all duration-300 cursor-default group"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="mb-4"
                >
                  {getIconForSkill(skill)}
                </motion.div>
                <h3 className="text-lg font-bold text-slate-800 mb-6">{skill}</h3>

                {/* Progress Bar */}
                <div className="w-full">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${getSkillLevel(skill)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium">
                    <span>Beginner</span>
                    <span>Expert</span>
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

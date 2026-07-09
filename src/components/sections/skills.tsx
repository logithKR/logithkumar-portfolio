"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data";
import { Code2, Database, Layout, Terminal } from "lucide-react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Consolidated Tech Stack");

  // Create a "Consolidated Tech Stack" that combines all skills
  const allSkills = skillsData.flatMap((cat) => cat.skills).slice(0, 12); // Take top 12 for consolidated view
  
  const categories = ["Consolidated Tech Stack", ...skillsData.map((c) => c.category)];

  const getSkillsToDisplay = () => {
    if (activeCategory === "Consolidated Tech Stack") {
      return allSkills;
    }
    return skillsData.find((c) => c.category === activeCategory)?.skills || [];
  };

  const displayedSkills = getSkillsToDisplay();

  // Helper function to get an icon based on skill/category
  const getIconForSkill = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes("react") || s.includes("html") || s.includes("css") || s.includes("tailwind")) return <Layout className="w-8 h-8 text-blue-600 mb-4" />;
    if (s.includes("sql") || s.includes("firebase") || s.includes("redis")) return <Database className="w-8 h-8 text-blue-600 mb-4" />;
    if (s.includes("python") || s.includes("fastapi") || s.includes("node")) return <Terminal className="w-8 h-8 text-blue-600 mb-4" />;
    return <Code2 className="w-8 h-8 text-blue-600 mb-4" />;
  };

  // Helper function to randomly determine "level" for the UI progress bar (since we don't have level data)
  // We'll deterministically calculate it based on string length to keep it consistent
  const getSkillLevel = (skill: string) => {
    const val = (skill.length * 7) % 40 + 60; // Returns between 60 and 100
    return `${val}%`;
  };

  return (
    <section id="skills" className="py-24 bg-slate-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
          My Skills
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-12">
          A comprehensive set of technical skills I've developed over the years across Frontend, Backend, AI/ML, and DevOps.
        </p>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all \${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-white text-slate-600 hover:bg-slate-50 shadow-sm border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={skill}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                {getIconForSkill(skill)}
                <h3 className="text-lg font-bold text-slate-800 mb-6">{skill}</h3>
                
                {/* Progress Bar Container */}
                <div className="w-full">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: getSkillLevel(skill) }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-blue-600 rounded-full"
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

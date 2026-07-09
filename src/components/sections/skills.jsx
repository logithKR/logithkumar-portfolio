

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data";
import { Code2, Database, Layout, Terminal, Cpu, Wrench } from "lucide-react";

const iconMap = {
  "Python": <Terminal className="w-7 h-7" />,
  "JavaScript": <Code2 className="w-7 h-7" />,
  "SQL": <Database className="w-7 h-7" />,
  "React (Vite)": <Layout className="w-7 h-7" />,
  "Tailwind CSS": <Layout className="w-7 h-7" />,
  "HTML": <Code2 className="w-7 h-7" />,
  "CSS": <Layout className="w-7 h-7" />,
  "FastAPI": <Terminal className="w-7 h-7" />,
  "Flask": <Terminal className="w-7 h-7" />,
  "Node.js": <Terminal className="w-7 h-7" />,
  "Express.js": <Terminal className="w-7 h-7" />,
  "REST APIs": <Code2 className="w-7 h-7" />,
  "WebSockets": <Code2 className="w-7 h-7" />,
  "SQLite": <Database className="w-7 h-7" />,
  "Firebase Firestore": <Database className="w-7 h-7" />,
  "Redis": <Database className="w-7 h-7" />,
  "SQLAlchemy": <Database className="w-7 h-7" />,
  "LangChain": <Cpu className="w-7 h-7" />,
  "FAISS": <Cpu className="w-7 h-7" />,
  "Google Gemini API": <Cpu className="w-7 h-7" />,
  "Google OR-Tools (CP-SAT)": <Cpu className="w-7 h-7" />,
  "Stable Diffusion API": <Cpu className="w-7 h-7" />,
  "Git": <Wrench className="w-7 h-7" />,
  "GitHub": <Code2 className="w-7 h-7" />,
  "JWT": <Wrench className="w-7 h-7" />,
  "Firebase Auth": <Wrench className="w-7 h-7" />,
  "OAuth 2.0": <Wrench className="w-7 h-7" />,
  "Socket.io": <Wrench className="w-7 h-7" />,
};

const colorSets = [
  { bg: "bg-violet-50", text: "text-violet-600", ring: "ring-violet-200", bar: "from-violet-500 to-purple-500" },
  { bg: "bg-indigo-50", text: "text-indigo-600", ring: "ring-indigo-200", bar: "from-indigo-500 to-blue-500" },
  { bg: "bg-blue-50", text: "text-blue-600", ring: "ring-blue-200", bar: "from-blue-500 to-cyan-500" },
  { bg: "bg-purple-50", text: "text-purple-600", ring: "ring-purple-200", bar: "from-purple-500 to-pink-500" },
  { bg: "bg-emerald-50", text: "text-emerald-600", ring: "ring-emerald-200", bar: "from-emerald-500 to-teal-500" },
  { bg: "bg-amber-50", text: "text-amber-600", ring: "ring-amber-200", bar: "from-amber-500 to-orange-500" },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...skillsData.map((c) => c.category)];
  const allSkills = skillsData.flatMap((cat) => cat.skills);

  const getSkillsToDisplay = () => {
    if (activeCategory === "All") return allSkills;
    return skillsData.find((c) => c.category === activeCategory)?.skills || [];
  };

  const displayedSkills = getSkillsToDisplay();

  const getSkillLevel = (skill) => ((skill.length * 7) % 35 + 65);
  const getColorSet = (index) => colorSets[index % colorSets.length];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 w-72 h-72 bg-violet-100/30 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-3">What I work with</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            My Skills
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mb-4 mx-auto"
          />
          <p className="text-slate-500 max-w-xl mx-auto mb-12">
            A comprehensive set of technical skills across Frontend, Backend, AI/ML, and DevOps.
          </p>
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
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-200"
                  : "bg-white text-slate-600 hover:text-violet-600 shadow-sm border border-slate-200 hover:border-violet-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto text-left">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => {
              const colors = getColorSet(index);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  key={skill}
                  whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.08)" }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 transition-all duration-300 group cursor-default"
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {iconMap[skill] || <Code2 className="w-7 h-7" />}
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-3">{skill}</h3>
                  <div className="w-full">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${getSkillLevel(skill)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.03 }}
                        className={`h-full bg-gradient-to-r ${colors.bar} rounded-full`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

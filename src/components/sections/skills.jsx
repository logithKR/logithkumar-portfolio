import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data";
import { 
  SiPython, SiJavascript, SiReact, SiVite, SiTailwindcss, SiHtml5, SiCss,
  SiFastapi, SiFlask, SiNodedotjs, SiExpress, SiSqlite, SiFirebase, SiRedis,
  SiGit, SiGithub, SiJsonwebtokens, SiSocketdotio
} from "react-icons/si";
import { FaDatabase, FaBrain, FaKey } from "react-icons/fa";

const iconMap = {
  "Python": <SiPython className="w-8 h-8" color="#3776AB" />,
  "JavaScript": <SiJavascript className="w-8 h-8" color="#F7DF1E" />,
  "SQL": <FaDatabase className="w-8 h-8" color="#4479A1" />,
  "React (Vite)": <div className="flex gap-1 items-center"><SiReact className="w-6 h-6" color="#61DAFB" /><span className="text-slate-300 mx-0.5">/</span><SiVite className="w-6 h-6" color="#646CFF" /></div>,
  "Tailwind CSS": <SiTailwindcss className="w-8 h-8" color="#06B6D4" />,
  "HTML": <SiHtml5 className="w-8 h-8" color="#E34F26" />,
  "CSS": <SiCss className="w-8 h-8" color="#1572B6" />,
  "FastAPI": <SiFastapi className="w-8 h-8" color="#009688" />,
  "Flask": <SiFlask className="w-8 h-8" color="#000000" />,
  "Node.js": <SiNodedotjs className="w-8 h-8" color="#339933" />,
  "Express.js": <SiExpress className="w-8 h-8" color="#000000" />,
  "REST APIs": <FaDatabase className="w-8 h-8" color="#009688" />,
  "WebSockets": <SiSocketdotio className="w-8 h-8" color="#010101" />,
  "SQLite": <SiSqlite className="w-8 h-8" color="#003B57" />,
  "Firebase Firestore": <SiFirebase className="w-8 h-8" color="#FFCA28" />,
  "Redis": <SiRedis className="w-8 h-8" color="#DC382D" />,
  "SQLAlchemy": <FaDatabase className="w-8 h-8" color="#D71E00" />,
  "LangChain": <FaBrain className="w-8 h-8" color="#121212" />,
  "FAISS": <FaBrain className="w-8 h-8" color="#0052CC" />,
  "Google Gemini API": <FaBrain className="w-8 h-8" color="#4285F4" />,
  "Google OR-Tools (CP-SAT)": <FaBrain className="w-8 h-8" color="#FBBC05" />,
  "Stable Diffusion API": <FaBrain className="w-8 h-8" color="#8A2BE2" />,
  "Git": <SiGit className="w-8 h-8" color="#F05032" />,
  "GitHub": <SiGithub className="w-8 h-8" color="#181717" />,
  "JWT": <SiJsonwebtokens className="w-8 h-8" color="#000000" />,
  "Firebase Auth": <SiFirebase className="w-8 h-8" color="#FFCA28" />,
  "OAuth 2.0": <FaKey className="w-8 h-8" color="#3B82F6" />,
  "Socket.io": <SiSocketdotio className="w-8 h-8" color="#010101" />,
};

const colorSets = [
  { bg: "bg-violet-50/50", text: "text-violet-600", bar: "from-violet-500 to-purple-500", glow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]" },
  { bg: "bg-indigo-50/50", text: "text-indigo-600", bar: "from-indigo-500 to-blue-500", glow: "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]" },
  { bg: "bg-blue-50/50", text: "text-blue-600", bar: "from-blue-500 to-cyan-500", glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
  { bg: "bg-purple-50/50", text: "text-purple-600", bar: "from-purple-500 to-pink-500", glow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]" },
  { bg: "bg-emerald-50/50", text: "text-emerald-600", bar: "from-emerald-500 to-teal-500", glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]" },
  { bg: "bg-amber-50/50", text: "text-amber-600", bar: "from-amber-500 to-orange-500", glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]" },
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-bold text-violet-600 uppercase tracking-widest mb-3">Tech Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            My Skills
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mb-6 mx-auto"
          />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            A carefully curated stack of modern technologies for building robust, scalable, and high-performance applications.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "text-white shadow-md shadow-violet-200/50"
                  : "text-slate-600 hover:text-violet-600 bg-white shadow-sm border border-slate-200 hover:border-violet-200"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-6xl mx-auto text-left"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => {
              const colors = getColorSet(index);
              return (
                <motion.div
                  layout
                  variants={itemVariants}
                  key={skill}
                  whileHover={{ y: -6 }}
                  className={`group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-slate-200 z-10 hover:z-20`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${colors.glow}`}>
                    {iconMap[skill] || <FaDatabase className="w-8 h-8 text-slate-400 group-hover:text-violet-500 transition-colors" />}
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-800 mb-4 group-hover:text-violet-600 transition-colors">{skill}</h3>
                  
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Proficiency</span>
                      <span className="text-xs font-bold text-slate-700">{getSkillLevel(skill)}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${getSkillLevel(skill)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + index * 0.05, ease: "easeOut" }}
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

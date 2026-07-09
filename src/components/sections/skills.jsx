import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { skillsData } from "@/data";
import { 
  SiPython, SiJavascript, SiReact, SiVite, SiTailwindcss, SiHtml5, SiCss3,
  SiFastapi, SiFlask, SiNodedotjs, SiExpress, SiSqlite, SiFirebase, SiRedis,
  SiGit, SiGithub, SiJsonwebtokens, SiSocketdotio
} from "react-icons/si";
import { FaDatabase, FaBrain, FaKey } from "react-icons/fa";

const iconMap = {
  "Python": <SiPython className="w-8 h-8" color="#3776AB" />,
  "JavaScript": <SiJavascript className="w-8 h-8" color="#F7DF1E" />,
  "SQL": <FaDatabase className="w-8 h-8" color="#4479A1" />,
  "React (Vite)": <div className="flex gap-1"><SiReact className="w-8 h-8" color="#61DAFB" /><SiVite className="w-8 h-8" color="#646CFF" /></div>,
  "Tailwind CSS": <SiTailwindcss className="w-8 h-8" color="#06B6D4" />,
  "HTML": <SiHtml5 className="w-8 h-8" color="#E34F26" />,
  "CSS": <SiCss3 className="w-8 h-8" color="#1572B6" />,
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

// Generates random float animations
const getRandomFloat = (index) => {
  const randomX = Math.random() * 40 - 20;
  const randomY = Math.random() * 40 - 20;
  const randomRotate = Math.random() * 30 - 15;
  const duration = 4 + Math.random() * 4;
  
  return {
    y: [0, randomY, 0],
    x: [0, randomX, 0],
    rotate: [0, randomRotate, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.2,
    }
  };
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...skillsData.map((c) => c.category)];
  const allSkills = skillsData.flatMap((cat) => cat.skills);
  const containerRef = useRef(null);

  const getSkillsToDisplay = () => {
    if (activeCategory === "All") return allSkills;
    return skillsData.find((c) => c.category === activeCategory)?.skills || [];
  };

  const displayedSkills = getSkillsToDisplay();

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden" ref={containerRef}>
      {/* Deep Space Background Effects */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3">Tech Arsenal</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            My Toolkit
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A chaotic but powerful ecosystem of technologies I use to build scalable systems. <br/>
            <span className="text-violet-400 font-semibold">Grab and toss them around!</span>
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 backdrop-blur-md ${
                activeCategory === category
                  ? "bg-white/10 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-white/20"
                  : "bg-white/5 text-slate-400 hover:text-white border border-transparent hover:border-white/10 hover:bg-white/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Scattered Drag Nodes Area */}
        <div className="relative w-full min-h-[600px] flex flex-wrap justify-center items-center gap-6 p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden shadow-2xl">
          {displayedSkills.map((skill, index) => {
            const floatAnim = getRandomFloat(index);
            return (
              <motion.div
                key={skill}
                drag
                dragConstraints={containerRef}
                dragElastic={0.2}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                whileDrag={{ scale: 1.2, zIndex: 50, cursor: "grabbing" }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: floatAnim.y,
                  x: floatAnim.x,
                  rotate: floatAnim.rotate,
                }}
                transition={{ 
                  opacity: { duration: 0.5, delay: index * 0.05 },
                  scale: { type: "spring", stiffness: 200, damping: 10, delay: index * 0.05 },
                  ...floatAnim.transition 
                }}
                className="relative group cursor-grab flex flex-col items-center justify-center p-6 bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/20 hover:border-white/40 transition-colors"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
              >
                {/* Glow behind icon */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-center justify-center mb-3">
                  {iconMap[skill] || <FaDatabase className="w-8 h-8 text-white" />}
                </div>
                
                <h3 className="relative z-10 text-xs font-bold text-white text-center tracking-wide whitespace-nowrap">
                  {skill}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

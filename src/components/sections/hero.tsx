

import { motion } from "framer-motion";
import { profileData } from "@/data";
import { ArrowDown, Code2, Link as LinkIcon, Mail, Download, Sparkles } from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection() {
  const topSkills = ["React.js", "Python", "FastAPI", "LangChain", "Node.js", "Machine Learning"];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-16">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-violet-200/40 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-pink-100/30 rounded-full blur-[80px]"
        />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container mx-auto px-6 z-10 text-center flex flex-col items-center max-w-4xl"
      >
        {/* Status badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-violet-100 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-600">Available for opportunities</span>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div variants={fadeUp} className="mb-6">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[3px] border-white shadow-xl ring-4 ring-violet-100 mx-auto">
              <img
                src="/logith_passport_size_photo.jpg.jpeg"
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full border border-dashed border-violet-200/60"
            />
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-400 font-medium tracking-wide uppercase mb-2">
          Hello, I&apos;m
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <span className="text-slate-900">Logith</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600">kumar</span>
          <span className="text-slate-900"> K R</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-5">
          <Sparkles className="w-5 h-5 text-violet-500" />
          <p className="text-lg md:text-xl text-violet-600 font-semibold">
            Software Engineer & AI Builder
          </p>
          <Sparkles className="w-5 h-5 text-violet-500" />
        </motion.div>

        {/* Bio */}
        <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-500 mb-8 max-w-2xl leading-relaxed">
          {profileData.bio}
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2.5 mb-10">
          {topSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.08, type: "spring", stiffness: 200 }}
              whileHover={{ y: -3, scale: 1.08 }}
              className="px-4 py-1.5 text-sm font-medium bg-white text-slate-600 rounded-full shadow-sm border border-slate-200/80 hover:border-violet-200 hover:text-violet-700 hover:bg-violet-50 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-200 transition-all"
          >
            Let&apos;s Talk
          </motion.a>
          <motion.a
            href="/LOGITHKUMAR_K_R_SDE_RESUME.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold border-2 border-slate-200 bg-white/80 backdrop-blur text-slate-700 hover:border-violet-200 hover:bg-violet-50 transition-all"
          >
            <Download size={18} /> Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeUp} className="mt-10 flex gap-3">
          {[
            { href: profileData.github, icon: <Code2 size={18} />, label: "GitHub" },
            { href: profileData.linkedin, icon: <LinkIcon size={18} />, label: "LinkedIn" },
            { href: `mailto:${profileData.email}`, icon: <Mail size={18} />, label: "Email" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full bg-white/80 backdrop-blur shadow-sm border border-slate-200/80 text-slate-500 hover:text-violet-600 hover:border-violet-200 flex items-center justify-center transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, y: { duration: 1.5, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-300 hover:text-violet-500 transition-colors"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 200 } },
};

export function HeroSection() {
  const topSkills = ["React.js", "Node.js", "Python", "FastAPI", "LangChain", "Machine Learning"];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-16 bg-slate-50">
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 z-10 text-center flex flex-col items-center"
      >
        {/* Profile Image */}
        <motion.div variants={scaleIn} className="mb-8">
          <motion.div
            animate={floatingAnimation}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto bg-slate-200 ring-4 ring-blue-100"
          >
            <img
              src="/logith_passport_size_photo.jpg.jpeg"
              alt={profileData.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Greeting & Name */}
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 font-medium mb-2">
          Hello, I&apos;m
        </motion.p>
        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-4">
          {profileData.name}
        </motion.h1>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="h-1 bg-blue-600 rounded-full mb-6 mx-auto"
        />

        {/* Subtitle with typing effect feel */}
        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-blue-600 font-semibold mb-6 max-w-2xl">
          {profileData.title}
        </motion.p>

        {/* Bio */}
        <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
          {profileData.bio}
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-10">
          {topSkills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-1.5 text-sm font-medium bg-white text-slate-700 shadow-sm border border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors cursor-default"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons - using <a> tags directly instead of Button asChild */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center rounded-full px-8 py-3 text-base font-semibold shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-all"
          >
            Let&apos;s Talk
          </motion.a>
          <motion.a
            href="/LOGITHKUMAR_K_R_SDE_RESUME.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold border-2 border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition-all"
          >
            <Download size={18} /> Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex gap-4"
        >
          {[
            { href: profileData.github, icon: <Github size={20} />, label: "GitHub" },
            { href: profileData.linkedin, icon: <Linkedin size={20} />, label: "LinkedIn" },
            { href: `mailto:${profileData.email}`, icon: <Mail size={20} />, label: "Email" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white shadow-sm border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer"
      >
        <ArrowDown size={28} />
      </motion.a>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { profileData, skillsData } from "@/data";
import { ArrowDown, Code2, Link as LinkIcon, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  // Extract top skills for the hero pill tags
  const topSkills = [
    "React.js",
    "Node.js",
    "Python",
    "FastAPI",
    "LangChain",
    "Machine Learning"
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
        
        {/* Profile Image (Optional but kept for continuity, style updated) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto bg-slate-200">
            <img 
              src="/logith_passport_size_photo.jpg.jpeg" 
              alt={profileData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Greeting & Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-slate-500 font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-4">
            {profileData.name}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-blue-600 font-semibold mb-6 max-w-2xl"
        >
          {profileData.title}
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed"
        >
          {profileData.bio}
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {topSkills.map((skill) => (
            <Badge key={skill} variant="secondary" className="px-4 py-1.5 text-sm font-medium bg-white text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-100">
              {skill}
            </Badge>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all hover:scale-105 border-0">
            <Link href="#contact">Let's Talk</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-2 border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition-all">
            <a href="/LOGITHKUMAR_K_R_SDE_RESUME.pdf" download>
              Download Resume
            </a>
          </Button>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400"
      >
        <Link href="#about">
          <ArrowDown size={28} className="hover:text-blue-600 transition-colors cursor-pointer" />
        </Link>
      </motion.div>
    </section>
  );
}

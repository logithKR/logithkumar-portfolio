"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data";
import { ArrowDown, Code2, Link as LinkIcon, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-10">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 mix-blend-screen animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] opacity-50 mix-blend-screen animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl relative z-10 bg-muted">
            {/* We will use a placeholder or the actual image later */}
            <img 
              src="/logith_passport_size_photo.jpg.jpeg" 
              alt={profileData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
        >
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">{profileData.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 max-w-2xl"
        >
          {profileData.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-3xl leading-relaxed"
        >
          {profileData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-primary/25 transition-all">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full bg-background/50 backdrop-blur-sm">
            <a href="/LOGITHKUMAR_K_R_SDE_RESUME.pdf" download>
              Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex gap-6"
        >
          <SocialLink href={profileData.github} icon={<Code2 />} label="GitHub" />
          <SocialLink href={profileData.linkedin} icon={<LinkIcon />} label="LinkedIn" />
          <SocialLink href={`mailto:${profileData.email}`} icon={<Mail />} label="Email" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-colors flex items-center justify-center group"
      aria-label={label}
    >
      <div className="group-hover:scale-110 transition-transform">{icon}</div>
    </a>
  );
}

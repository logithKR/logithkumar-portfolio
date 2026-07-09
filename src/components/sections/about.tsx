"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
            About Me
          </h2>
          
          <Card className="bg-background/50 backdrop-blur-xl border-white/10 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 opacity-50" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {profileData.about}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

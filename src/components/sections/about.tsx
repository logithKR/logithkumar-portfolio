"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
            About Me
          </h2>
          
          <div className="bg-slate-50 border border-slate-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                {profileData.about}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

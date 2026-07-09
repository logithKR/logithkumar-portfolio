"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data";
import { User2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle animated bg element */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 border border-slate-100 rounded-full opacity-50"
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <User2 className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              About Me
            </h2>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-blue-600 rounded-full mb-10 mx-auto"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            className="bg-slate-50 border border-slate-100 shadow-sm rounded-2xl overflow-hidden transition-all duration-300"
          >
            <div className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                {profileData.about}
              </p>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
          >
            {[
              { label: "Projects", value: "3+" },
              { label: "Tech Stack", value: "15+" },
              { label: "Live Systems", value: "2" },
              { label: "Certifications", value: "2" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="text-3xl font-bold text-blue-600 mb-1"
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { educationData, achievementsData, certificationsData } from "@/data";
import { GraduationCap, Trophy, Award, Calendar } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function TimelineSection() {
  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-64 h-64 border border-slate-100 rounded-full"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-48 h-48 border border-slate-100 rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-center text-slate-900"
        >
          Experience & Achievements
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-1 bg-blue-600 rounded-full mb-16 mx-auto"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Education Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="p-2.5 bg-blue-100 rounded-xl text-blue-600"
              >
                <GraduationCap className="w-6 h-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </div>

            <div className="space-y-6 relative">
              {/* Animated vertical line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute left-5 top-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-transparent"
              />

              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative flex gap-5"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.2, type: "spring", stiffness: 300 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200 shrink-0 z-10"
                  >
                    <Calendar size={16} />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 16px 32px rgba(0,0,0,0.08)" }}
                    className="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm transition-all duration-300"
                  >
                    <span className="text-blue-600 font-semibold text-sm">{edu.date}</span>
                    <h4 className="font-bold text-lg text-slate-900 mt-1">{edu.degree}</h4>
                    <p className="text-slate-600 text-sm mt-1 font-medium">{edu.institution}</p>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block mt-3 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold rounded-full"
                    >
                      {edu.score}
                    </motion.span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Certifications Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-12"
          >
            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="p-2.5 bg-indigo-100 rounded-xl text-indigo-600"
                >
                  <Trophy className="w-6 h-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900">Achievements</h3>
              </div>
              <div className="space-y-4">
                {achievementsData.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariantsRight}
                    whileHover={{ y: -4, boxShadow: "0 16px 32px rgba(0,0,0,0.08)" }}
                    className="bg-slate-50 border border-slate-100 rounded-xl p-5 shadow-sm transition-all duration-300"
                  >
                    <h4 className="font-bold text-lg mb-2 text-slate-900">{achievement.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="p-2.5 bg-purple-100 rounded-xl text-purple-600"
                >
                  <Award className="w-6 h-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certificationsData.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariantsRight}
                    whileHover={{ x: 6, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
                    className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-start gap-3 shadow-sm transition-all duration-300 cursor-default"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                      className="mt-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0"
                    />
                    <p className="text-sm font-medium text-slate-700">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

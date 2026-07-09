

import { motion } from "framer-motion";
import { educationData, achievementsData, certificationsData } from "@/data";
import { GraduationCap, Trophy, Award, Calendar } from "lucide-react";

export function TimelineSection() {
  return (
    <section id="experience" className="py-24 bg-transparent relative overflow-hidden">
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-64 h-64 border border-violet-100/30 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-3">My journey</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Experience & Achievements
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mt-4 mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center"
              >
                <GraduationCap className="w-5 h-5" />
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-space-grotesk)" }}>Education</h3>
            </div>

            <div className="space-y-5 relative ml-5 border-l-2 border-violet-200 pl-8">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -3 }}
                  className="relative"
                >
                  {/* Dot on the line */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.15, type: "spring", stiffness: 300 }}
                    className="absolute -left-[2.55rem] top-2 w-4 h-4 rounded-full bg-violet-600 border-[3px] border-white shadow-sm"
                  />

                  <div className="bg-gradient-to-br from-slate-50 to-violet-50/20 border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                    <span className="text-xs font-semibold text-violet-600 uppercase tracking-wider">{edu.date}</span>
                    <h4 className="font-bold text-slate-900 mt-1 text-base">{edu.degree}</h4>
                    <p className="text-slate-500 text-sm mt-0.5">{edu.institution}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-violet-50 border border-violet-100 text-violet-700 text-xs font-semibold rounded-full">
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center"
                >
                  <Trophy className="w-5 h-5" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-space-grotesk)" }}>Achievements</h3>
              </div>
              <div className="space-y-4">
                {achievementsData.map((a, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    whileHover={{ y: -3, boxShadow: "0 12px 24px rgba(0,0,0,0.06)" }}
                    className="bg-gradient-to-br from-slate-50 to-indigo-50/20 border border-slate-100 rounded-xl p-5 shadow-sm transition-all duration-300"
                  >
                    <h4 className="font-bold text-slate-900 text-base mb-1.5">{a.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{a.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center"
                >
                  <Award className="w-5 h-5" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-space-grotesk)" }}>Certifications</h3>
              </div>
              <div className="space-y-3">
                {certificationsData.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="bg-white border border-slate-100 rounded-xl p-4 flex items-start gap-3 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 cursor-default"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                      className="mt-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shrink-0"
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

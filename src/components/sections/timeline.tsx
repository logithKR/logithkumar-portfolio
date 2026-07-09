"use client";

import { motion } from "framer-motion";
import { educationData, achievementsData, certificationsData } from "@/data";
import { GraduationCap, Trophy, Award } from "lucide-react";

export function TimelineSection() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-slate-900">
          Experience & Achievements
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col gap-1 mb-2">
                      <span className="text-blue-600 font-semibold text-sm">{edu.date}</span>
                      <h4 className="font-bold text-lg text-slate-900">{edu.degree}</h4>
                    </div>
                    <p className="text-slate-600 text-sm mb-3 font-medium">{edu.institution}</p>
                    <span className="inline-block px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-full">
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Achievements</h3>
              </div>
              <div className="space-y-4">
                {achievementsData.map((achievement, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-2 text-slate-900">{achievement.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certificationsData.map((cert, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-start gap-3 shadow-sm">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                    <p className="text-sm font-medium text-slate-700">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data";
import { User2, MapPin, Mail, Phone } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-64 h-64 border border-violet-100/40 rounded-full"
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-3">Get to know me</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              About Me
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mt-4 mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main about text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="md:col-span-2 bg-gradient-to-br from-slate-50 to-violet-50/30 border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                {profileData.about}
              </p>
            </motion.div>

            {/* Quick info card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg shadow-violet-200 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>Quick Info</h3>
              <div className="space-y-5">
                {[
                  { icon: <MapPin size={16} />, label: profileData.location },
                  { icon: <Mail size={16} />, label: profileData.email },
                  { icon: <Phone size={16} />, label: profileData.phone },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm text-violet-100 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
          >
            {[
              { label: "Projects Built", value: "3+", color: "from-violet-500 to-purple-500" },
              { label: "Tech Stack", value: "15+", color: "from-indigo-500 to-blue-500" },
              { label: "Live Systems", value: "2", color: "from-purple-500 to-pink-500" },
              { label: "Certifications", value: "2", color: "from-blue-500 to-cyan-500" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white border border-slate-100 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`} style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

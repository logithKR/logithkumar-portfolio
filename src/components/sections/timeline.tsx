"use client";

import { motion } from "framer-motion";
import { educationData, achievementsData, certificationsData } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Award } from "lucide-react";

export function TimelineSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/20 rounded-xl text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background group-[.is-active]:bg-primary/20 text-primary group-[.is-active]:text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-muted/20 border-white/10 hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-1 mb-2">
                        <span className="text-primary font-medium text-sm">{edu.date}</span>
                        <h3 className="font-bold text-lg">{edu.degree}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{edu.institution}</p>
                      <Badge variant="secondary" className="bg-background/50">{edu.score}</Badge>
                    </CardContent>
                  </Card>
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
            className="flex flex-col gap-16"
          >
            {/* Achievements */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-500">
                  <Trophy className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">Achievements</h2>
              </div>
              <div className="space-y-4">
                {achievementsData.map((achievement, idx) => (
                  <Card key={idx} className="bg-muted/20 border-white/10 hover:border-blue-500/50 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-500">
                  <Award className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">Certifications</h2>
              </div>
              <div className="space-y-4">
                {certificationsData.map((cert, idx) => (
                  <Card key={idx} className="bg-muted/20 border-white/10 hover:border-purple-500/50 transition-colors">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="mt-1 w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                      <p className="text-sm font-medium">{cert}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projectsData.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full flex"
              >
                <Card className="flex flex-col h-full bg-muted/20 border-white/10 backdrop-blur-md overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="h-2 w-full bg-gradient-to-r from-primary to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
                    </div>
                    <CardDescription className="text-primary font-medium">
                      {project.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground/80 mb-6 space-y-1">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="line-clamp-2" title={feature}>{feature}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.stack.map((tech, tIdx) => (
                        <Badge key={tIdx} variant="outline" className="bg-background/50 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-4 pt-4 border-t border-white/5">
                    {project.code && (
                      <Button variant="ghost" size="sm" asChild className="hover:bg-primary/20 hover:text-primary">
                        <a href={`https://${project.code}`} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" /> Code
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button variant="ghost" size="sm" asChild className="hover:bg-primary/20 hover:text-primary">
                        <a href={`https://${project.live}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

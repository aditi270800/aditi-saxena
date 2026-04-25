import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Monitor, Layers, Cpu, Zap } from "lucide-react";
import Github from "../assets/Icons/github";
import { project } from "../global/constant";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 px-[clamp(24px,8vw,120px)] relative"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="s-label" data-aos="fade-right">
          Portfolio
        </div>
        <h2 className="s-title" data-aos="fade-up">
          Featured <span>Projects.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mt-16">
          {project?.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 bg-surface/40 backdrop-blur-sm border border-border/50 p-8 md:p-10 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500">
                {/* <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                  <Monitor size={120} className="text-accent" />
                </div> */}

                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 grid place-items-center text-accent">
                      <Layers size={24} />
                    </div>
                    <div className="flex gap-4">
                      {project?.url?.github && (
                        <a
                          href={project.url.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text3 hover:text-accent transition-all hover:scale-110"
                          title="View GitHub Repository"
                        >
                          <Github />
                        </a>
                      )}
                      {project?.url?.website && (
                        <a
                          href={project.url.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text3 hover:text-accent transition-all hover:scale-110"
                          title="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-head font-bold text-text mb-4 group-hover:text-accent transition-colors">
                      {project?.title}
                    </h3>
                    <p className="text-text2 leading-relaxed text-sm md:text-base">
                      {project?.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project?.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-surface2/50 border border-border/50 text-text3 font-mono text-[10px] uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-border/30 grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="text-accent">
                        <Cpu size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-text3 font-mono">
                          Performance
                        </div>
                        <div className="text-xs text-text2 font-medium">
                          Virtualization (10k+ records)
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-accent2">
                        <Zap size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-text3 font-mono">
                          Optimization
                        </div>
                        <div className="text-xs text-text2 font-medium">
                          Code Splitting & Lazy Loading
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/5 to-accent3/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

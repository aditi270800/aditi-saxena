import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { experience } from "../global/constant";

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="section-pad px-[clamp(24px,8vw,120px)] bg-bg2/50 border-y border-border"
    >
      <div className="max-w-300 mx-auto">
        <div className="s-label">Career Path</div>
        <h2 className="s-title">
          Professional <span>Evolution.</span>
        </h2>

        <div className="space-y-6 relative before:content-[''] before:absolute before:left-0 md:before:left-[40px] before:top-0 before:bottom-0 before:w-px before:bg-border">
          {experience?.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`relative pl-8 md:pl-24 transition-all duration-500 ${expandedId === idx ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-[35px] top-6 w-[11px] h-[11px] rounded-full bg-accent border-[3px] border-bg z-10" />

              <div
                className={`glass-card p-6 md:p-10 cursor-pointer overflow-hidden relative group ${expandedId === idx ? "border-accent shadow-[0_20px_40px_var(--glow)]" : ""}`}
                onClick={() => setExpandedId(expandedId === idx ? null : idx)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-head text-2xl font-bold text-text group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-text3 font-mono text-[11px] uppercase tracking-wider">
                      <span className="flex items-center gap-1.5 text-accent font-semibold">
                        <Briefcase size={14} /> {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {exp.dates}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === idx ? 180 : 0 }}
                    className="w-10 h-10 rounded-full bg-surface2 border border-border grid place-items-center text-accent"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>

                {/* Metrics Badges */}
                {exp.metrics && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {exp.metrics.map((m: any, i: number) => (
                      <div
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/10 flex items-center gap-2"
                      >
                        <span className="text-accent font-head font-bold text-sm">
                          {m.value}
                        </span>
                        <span className="text-text3 text-[10px] uppercase font-mono tracking-tighter">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <AnimatePresence>
                  {expandedId === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-4 pt-6 border-t border-border mt-2">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex gap-4 text-text2 text-[15px] leading-relaxed group/li"
                          >
                            <span className="mt-1 text-accent flex-shrink-0 group-hover/li:scale-110 transition-transform">
                              <CheckCircle2 size={16} />
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

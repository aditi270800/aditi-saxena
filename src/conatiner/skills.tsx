import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Palette,
  Cpu,
  Zap,
  LineChart,
  Layers,
  Cloud,
} from "lucide-react";
import { skills } from "../components/constant";

const iconMap: Record<string, any> = {
  Frontend: Layout,
  "State Management & Architecture": Layers,
  "Performance Optimization": Zap,
  "Styling & UI": Palette,
  "Testing & Analytics": LineChart,
  "Tools & Deployment": Cloud,
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="section-pad px-[clamp(24px,8vw,120px)] relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* <div className="s-label" data-aos="fade-right">Technical Ecosystem</div> */}
        <h2 className="s-title" data-aos="fade-up">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, idx) => {
            const Icon = iconMap[group.category] || Cpu;
            return (
              <motion.div
                key={idx}
                className="glass-card p-8 group hover:border-accent hover:shadow-[0_20px_40px_var(--glow)] relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent to-transparent opacity-[0.03] rounded-bl-full" />

                <div className="w-12 h-12 rounded-xl bg-surface2 border border-border flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>

                <h3 className="font-head text-lg font-bold text-text mb-6">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-surface2 border border-border text-text2 font-mono text-[11px] tracking-wide hover:border-accent hover:text-accent transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

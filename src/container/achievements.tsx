import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Crown, Star } from 'lucide-react';
import { achievements } from '../global/constant';
const Achievements: React.FC = () => {
  const icons = [Trophy, Award, Medal, Crown, Star];

  return (
    <section id="achievements" className="section-pad px-[clamp(24px,8vw,120px)] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="s-label">Recognition</div>
        <h2 className="s-title">Award <span>Cabinet.</span></h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {achievements?.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                className="glass-card p-8 group hover:border-accent relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-0 group-hover:opacity-[0.03] blur-3xl transition-opacity" />
                
                <div className="w-14 h-14 rounded-2xl bg-surface2 border border-border flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_20px_var(--glow)] transition-all duration-500">
                  <Icon size={28} />
                </div>
                <h3 className="font-head text-xl font-bold text-text mb-4 group-hover:text-accent transition-colors">
                  {item?.title}
                </h3>
                <p className="text-text2 text-sm leading-relaxed border-l-2 border-border pl-4 py-1 italic group-hover:border-accent transition-colors">
                  {item?.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

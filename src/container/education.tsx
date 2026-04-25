import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, School } from 'lucide-react';
import { education, extraDetails } from '../global/constant';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-pad px-[clamp(24px,8vw,120px)] bg-bg2/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="s-label">Academic Background</div>
        <h2 className="s-title">Educational <span>Journey.</span></h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education?.map((edu, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-8 md:p-12 relative overflow-hidden group hover:border-accent shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-0 group-hover:opacity-[0.02] blur-3xl" />
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-surface2 border border-border flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all flex-shrink-0">
                  <School size={28} />
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-accent font-mono text-[10px] uppercase tracking-[0.2em] mb-3">
                    <Calendar size={12} /> {edu.dates}
                  </div>
                  <h3 className="font-head text-2xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                    {edu?.degree}
                  </h3>
                  <div className="text-text2 font-medium mb-4 flex items-center gap-2">
                    <GraduationCap size={16} /> {edu.institution}
                  </div>
                  {edu?.location && (
                    <div className="text-text3 text-sm flex items-center gap-2">
                      <MapPin size={14} /> {edu.location}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {extraDetails && extraDetails?.length > 0 && (
          <motion.div 
            className="mt-20 p-8 glass-card border-l-4 border-l-accent3 bg-accent3/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="s-label !mb-6 text-accent3 before:bg-accent3">Additional Focus</div>
            <div className="grid lg:grid-cols-2 gap-10">
              {extraDetails?.map((item, idx) => (
                <p key={idx} className="text-text2 text-sm leading-relaxed italic">
                  "{item}"
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Education;

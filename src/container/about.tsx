import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  User,
  Briefcase,
  MapPin,
  Mail,
  Rocket,
  Code2,
  Users,
  ShieldCheck,
} from "lucide-react";

const About: React.FC = () => {
//   const highlights = [
//     "4+ years building React/TypeScript frontends and Node.js/Express backends for production apps",
//     "Leading architecture, code reviews, and releases across four production applications",
//     "Mentoring 2 developers on architecture, debugging, and engineering best practices",
//     "Cut initial load time by 30% and unnecessary re-renders by 40% through memoization and code-splitting",
//     "Took test coverage from 30% to 90% by establishing testing standards with Jest and React Testing Library",
//   ];

  const quickFacts = [
    { icon: <Briefcase size={16} />, label: "Role", value: "Technical Lead" },
    { icon: <MapPin size={16} />, label: "Location", value: "Gurugram, India" },
  ];

  const stats = [
    { icon: <Rocket size={22} />, value: "4+", label: "Production Apps" },
    { icon: <Code2 size={22} />, value: "4+", label: "Years Experience" },
    { icon: <Users size={22} />, value: "2", label: "Engineers Mentored" },
    { icon: <ShieldCheck size={22} />, value: "90%", label: "Test Coverage" },
  ];

  return (
    <section
      id="about"
      className="section-pad px-[clamp(24px,8vw,120px)] bg-bg2/30"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="s-label">About</div>
        <h2 className="s-title">
          A little bit <span>about me.</span>
        </h2>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 mb-8 items-center">
          {/* Story + Highlights */}
          <motion.div
            className="glass-card p-4 md:p-12 relative overflow-hidden group hover:border-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent to-transparent opacity-[0.03] rounded-bl-full" />

            <p className="text-text2 text-[15px] leading-relaxed mb-8">
              I started as a Software Engineer at YABX in 2022 and I'm now a
              Technical Lead there, working across frontend and backend for four
              production applications. On the frontend side I care a lot about
              performance — cutting load times, killing unnecessary re-renders,
              that kind of thing. Lately I've also picked up backend ownership
              in Node/Express, building out REST APIs and keeping frontend and
              backend contracts in sync. I review code, mentor two developers,
              and I'm usually the one in the room when we're deciding whether a
              new feature is actually feasible before it gets built.
            </p>

            {/* <ul className="space-y-4">
              {highlights.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex gap-4 text-text2 text-[15px] leading-relaxed group/li"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <span className="mt-1 text-accent flex-shrink-0 group-hover/li:scale-110 transition-transform">
                    <CheckCircle2 size={16} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul> */}
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent3 to-transparent opacity-[0.03] rounded-bl-full" />

            <div className="s-label !mb-8">At a Glance</div>

            <div className="space-y-7">
              {quickFacts.map((fact, idx) => (
                <div key={idx} className="flex items-center gap-4 group/fact">
                  <div className="w-10 h-10 rounded-xl bg-surface2 border border-border flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                    {fact.icon}
                  </div>
                  <div>
                    <div className="text-text3 text-[10px] uppercase font-mono tracking-[0.2em] mb-1">
                      {fact.label}
                    </div>
                    <div className="text-text font-medium">{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-8 text-center group hover:border-accent hover:shadow-[0_20px_40px_var(--glow)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent to-transparent opacity-[0.03] rounded-bl-full" />

              <div className="w-12 h-12 rounded-xl bg-surface2 border border-border flex items-center justify-center mb-4 text-accent mx-auto group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="font-head text-4xl font-extrabold text-text mb-1 group-hover:text-accent transition-colors">
                {stat.value}
              </div>
              <div className="text-text3 text-[11px] uppercase font-mono tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
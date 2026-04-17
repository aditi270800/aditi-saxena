import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  ChevronRight,
  MapPin,
  Target,
  Zap,
} from "lucide-react";
import Github from "../assets/Icons/github";
import Linkedin from "../assets/Icons/linkedin";
// import resumeData from "../data.json";
// import ImpactTicker from "./ImpactTicker";

const Hero: React.FC = () => {
  const metaItems = [
    { icon: <MapPin size={14} />, label: "Location", value: "Gurugram" },
    { icon: <Target size={14} />, label: "Goal", value: "Scalable Frontend" },
    { icon: <Zap size={14} />, label: "Availability", value: "Immediate" },
  ];

  const impactScores = [
    { value: "40%", label: "Lead Time Reduction" },
    { value: "15+", label: "Features Shipped Monthly" },
    { value: "99%", label: "System Availability" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen pt-32 flex flex-col justify-between overflow-hidden relative"
    >
      <div className="px-[clamp(20px,8vw,120px)] w-full max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Left Side: Text */}
        <div className="max-w-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-4 md:mb-8"
          >
            {metaItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface2 border border-border text-text3 font-mono text-[11px] uppercase tracking-wide"
              >
                <span className="text-accent">{item.icon}</span>
                <span className="opacity-60">{item.label}:</span>
                <span className="text-text font-semibold">{item.value}</span>
              </div>
            ))}
          </motion.div>

          <motion.h1
            className="font-head text-[clamp(48px,12vw,110px)] font-extrabold tracking-[-0.04em] leading-[0.9] text-text mb-8 pr-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Aditi <br />
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-br from-accent via-accent2 to-accent3 inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(79,163,232,0.2)",
                  "0 0 40px rgba(79,163,232,0.4)",
                  "0 0 20px rgba(79,163,232,0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Saxena.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-text2 text-[clamp(16px,2vw,19px)] leading-relaxed max-w-[580px] mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Specialized in building high-performance, scalable web architectures
            that bridge technology and business impact.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary"
            >
              Examine Work <ChevronRight size={18} />
            </button>
            <button onClick={() => window.print()} className="btn-secondary">
              Export Resume <Download size={18} />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Impact Grid */}
        <motion.div
          className="hidden lg:flex flex-col gap-5 w-[320px]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {impactScores.map((score, idx) => (
            <div
              key={idx}
              className="glass-card p-6 border-l-4 border-l-accent flex flex-col gap-1 hover:translate-x-2 shadow-xl"
            >
              <div className="font-head text-4xl font-black text-text italic">
                {score.value}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-text3">
                {score.label}
              </div>
            </div>
          ))}

          <div className="flex gap-4 mt-4 px-2">
            {[
              {
                icon: <Github />,
                link: "https://github.com/aditi270800",
              },
              {
                icon: <Linkedin />,
                link: "https://www.linkedin.com/in/aditi-saxena-a781a51a0/",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card grid place-items-center text-text2 hover:text-accent hover:border-accent"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* <div className="mt-20">
        <ImpactTicker />
      </div> */}
    </section>
  );
};

export default Hero;

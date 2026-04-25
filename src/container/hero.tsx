import React from "react";
import { motion } from "framer-motion";
import { Download, MapPin, Target, Zap } from "lucide-react";
import Github from "../assets/Icons/github";
import Linkedin from "../assets/Icons/linkedin";
import MarqueeMessage from "../components/marqueeMessage";

const Hero: React.FC = () => {
  const metaItems = [
    { icon: <MapPin size={14} />, label: "Location", value: "Gurugram" },
    { icon: <Target size={14} />, label: "Goal", value: "Scalable Frontend" },
    { icon: <Zap size={14} />, label: "Availability", value: "Immediate" },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}assets/Aditi_Saxena_Resume.pdf`;
    link.download = "Aditi_Saxena_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-32 flex flex-col justify-between overflow-hidden relative"
    >
      <div className="px-[clamp(20px,8vw,120px)] w-full max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Left Side: Text */}
        <div className="max-w-[720px]">
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
              Saxena
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
            className="flex items-center flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button onClick={handleResumeDownload} className="btn-secondary">
              Export Resume <Download size={18} />
            </button>
            <div className="flex gap-4 px-2">
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
                  href={social?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-card grid place-items-center text-text2 hover:text-accent hover:border-accent"
                >
                  {social?.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="hidden lg:flex flex-col gap-5 w-[320px]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {metaItems?.map((score, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 glass-card p-4 border-l-4 border-l-accent hover:translate-x-2 shadow-xl"
            >
              <span className="text-accent">{score.icon}</span>
              <div className="flex flex-col gap-1">
                <div className="font-sans text-l font-extrabold text-text">
                  {score?.value}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-text3">
                  {score?.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-20">
        <MarqueeMessage />
      </div>
    </section>
  );
};

export default Hero;

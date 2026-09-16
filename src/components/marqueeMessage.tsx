import React from "react";
import { motion } from "framer-motion";

const MarqueeMessage: React.FC = () => {
  const items = [
    "TECHNICAL LEAD",
    "4+ YEARS EXPERIENCE",
    "REACT / TYPESCRIPT",
    "NODE.JS / EXPRESS",
    "REDUX / ZUSTAND",
    "30% FASTER LOAD TIMES",
    "90% TEST COVERAGE",
    "MENTORING 2 ENGINEERS",
  ];

  return (
    <div className="w-full bg-accent py-3 overflow-hidden whitespace-nowrap border-y border-white/10">
      <div className="flex">
        <motion.div
          className="flex gap-16 pr-16"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <React.Fragment key={i}>
              {items.map((text, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] font-bold text-white tracking-[0.2em] flex items-center gap-4"
                >
                  <span className="w-1.5 h-1.5 bg-white rotate-45" /> {text}
                </span>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeMessage;

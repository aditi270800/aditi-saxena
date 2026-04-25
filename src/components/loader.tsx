import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040810]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="relative mb-8 text-center">
        <motion.div
          className="text-[clamp(52px,10vw,96px)] font-head font-extrabold tracking-[-0.04em] bg-clip-text text-transparent bg-gradient-to-br from-[#4fa3e8] to-[#a78bfa] drop-shadow-[0_0_20px_rgba(79,163,232,0.4)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          AS
        </motion.div>
      </div>
      
      <div className="w-[180px] h-0.5 bg-[#111d30] rounded-full overflow-hidden mb-6">
        <motion.div
          className="h-full bg-gradient-to-r from-[#4fa3e8] to-[#a78bfa]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <motion.div
        className="text-[11px] font-mono text-[#4a6485] uppercase tracking-[0.2em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Loading Portfolio... {progress}%
      </motion.div>
    </motion.div>
  );
};

export default Splash;

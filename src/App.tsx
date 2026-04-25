import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/header";
import Hero from "./container/hero";
import Skills from "./container/skills";
import Experience from "./container/experience";
import Education from "./container/education";
import Projects from "./container/project";
import Achievements from "./container/achievements";
import Contact from "./container/contact";
import Splash from "./components/loader";
import AnimatedBackground from "./components/animatedBackground";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white overflow-x-hidden">
      <AnimatePresence>
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatedBackground />
          <Header />

          <main className="relative">
            <Hero />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <footer className="py-16 px-[clamp(24px,8vw,120px)] border-t border-border bg-bg/80 backdrop-blur-md relative z-10">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                <div className="font-head font-extrabold text-2xl text-text tracking-tight">
                  Aditi Saxena
                </div>
                <div className="text-text3 text-xs font-mono uppercase tracking-[0.2em]">
                  Senior Software Engineer • Portfolio
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-2 text-text3 text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Available for New Opportunities
                </div>
                <div>
                  © {new Date().getFullYear()} • Crafted in Gurugram, India
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
};

export default App;

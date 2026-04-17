import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    setIsDark(!isLight);

    const handleScroll = () => {
      const sections = ['hero', ...navItems.map(item => item.id)];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.setAttribute('data-theme', nextDark ? 'dark' : 'light');
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent3 z-[1001] origin-left"
        style={{ scaleX }}
      />

      {/* Main Nav */}
      <nav id="main-nav" className="fixed top-0 left-0 right-0 h-16 z-[1000] px-[clamp(16px,5vw,60px)] flex items-center justify-between backdrop-blur-[20px] bg-bg/70 border-b border-border transition-all duration-300">
        <div 
          className="font-head font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent3 cursor-pointer"
          onClick={() => scrollTo('hero')}
        >
          Aditi Saxena
        </div>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`cursor-pointer font-mono text-[12px] tracking-[0.1em] uppercase transition-colors relative hover:text-accent group ${
                activeSection === item.id ? 'text-accent' : 'text-text2'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
                activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-border bg-surface text-text2 cursor-pointer grid place-items-center transition-all duration-300 hover:border-accent hover:text-accent"
            title="Toggle theme"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[999] bg-bg p-20 px-8 flex flex-col gap-6 md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left font-head text-3xl font-bold text-text hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Dots */}
      <div id="section-dots" className="fixed right-6 top-1/2 -translate-y-1/2 z-[500] hidden lg:flex flex-col gap-[10px]">
        {['hero', ...navItems.map(i => i.id)].map((id) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              activeSection === id 
                ? 'bg-accent scale-150 shadow-[0_0_8px_var(--accent)]' 
                : 'bg-text3 hover:bg-accent2'
            }`}
            title={id.charAt(0).toUpperCase() + id.slice(1)}
          />
        ))}
      </div>
    </>
  );
};

export default Header;

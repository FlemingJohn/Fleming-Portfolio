
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const brandName = "DevFlow";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const charVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.05,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    hover: {
      y: -3,
      transition: { duration: 0.2 },
    }
  };

  const navItems = ['About', 'Experience', 'Projects', 'Education', 'Achievements'];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] px-4 py-4 md:px-8 md:py-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`
          max-w-6xl mx-auto w-full pointer-events-auto
          flex justify-between items-center px-6 py-3 md:px-8 md:py-4
          rounded-full transition-all duration-500 border
          ${isScrolled 
            ? 'bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : 'bg-transparent border-transparent'}
        `}
      >
        {/* Logo Section */}
        <motion.div 
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative">
            <motion.div 
              className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center glass-card border border-white/10 relative z-10 overflow-hidden"
              whileHover={{ scale: 1.1, rotate: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Terminal className="w-5 h-5 text-white" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>

          <div className="flex overflow-hidden">
            {brandName.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={charVariants}
                className={`text-xl font-bold tracking-tighter ${
                  i < 3 ? 'text-white' : 'text-white/40'
                }`}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-5 py-2 text-[13px] font-medium text-white/50 hover:text-white transition-all duration-300 relative group rounded-full"
              whileHover={{ y: -1 }}
            >
              <span className="relative z-10">{item}</span>
              <motion.div 
                className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="nav-hover"
              />
            </motion.a>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex glass-card px-6 py-2.5 rounded-full items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10 group overflow-hidden"
          >
            <Sparkles className="w-4 h-4 text-white/70 group-hover:text-white transition-colors animate-pulse" />
            <span>Contact</span>
          </motion.button>

          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors pointer-events-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden absolute top-24 left-4 right-4 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 shadow-2xl pointer-events-auto overflow-hidden"
          >
            <div className="flex flex-col gap-6 relative z-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white/60 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <hr className="border-white/5" />
              <button className="w-full py-4 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-xs">
                Resume
              </button>
            </div>
            {/* Background flourish for mobile menu */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

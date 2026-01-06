
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const brandName = "DevFlow";
  
  const charVariants = {
    initial: { y: 0 },
    hover: (i: number) => ({
      y: -2,
      transition: {
        duration: 0.3,
        delay: i * 0.04,
        ease: "easeOut",
      },
    }),
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
      <motion.div 
        initial="initial"
        whileHover="hover"
        className="flex items-center gap-3 cursor-pointer group"
      >
        {/* Animated Icon Container */}
        <div className="relative">
          <motion.div 
            className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center glass-card border border-white/10 relative z-10 overflow-hidden"
            whileHover={{ scale: 1.05, rotate: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Terminal className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
            
            {/* Inner Shimmer Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </div>

        {/* Staggered Brand Text */}
        <div className="flex overflow-hidden">
          {brandName.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={charVariants}
              className={`text-xl font-bold tracking-tight font-['Plus_Jakarta_Sans'] ${
                i < 3 ? 'text-white' : 'text-white/60'
              }`}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-10">
        {['About', 'Stack', 'Projects', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -1 }}
            className="text-sm font-medium text-white/40 hover:text-white transition-colors duration-200 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="glass-card px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-white/10 transition-colors border border-white/10 relative overflow-hidden group"
      >
        <Sparkles className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
        <span className="relative z-10">Resume</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </motion.button>
    </nav>
  );
};

export default Navbar;

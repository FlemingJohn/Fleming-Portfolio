
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="text-center w-full max-w-6xl mx-auto flex flex-col items-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-12 shadow-2xl overflow-hidden relative"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
        <span className="text-[13px] font-medium text-white/80 tracking-wide relative z-10">
          Full-Stack Engineer & Creative Developer
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-6xl md:text-[105px] font-semibold tracking-tight mb-10 leading-[0.95] text-white"
      >
        Engineering products <br />
        <span className="text-white">with precision</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-base md:text-[18px] text-white/40 max-w-2xl mx-auto mb-14 font-normal leading-relaxed tracking-tight"
      >
        Building scalable digital experiences through clean architecture and performant code. 
        Specializing in high-frequency web apps and fluid interactive interfaces.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex flex-row items-center justify-center gap-5 mb-32"
      >
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          View GitHub
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          Let's Chat
        </motion.button>
      </motion.div>

      {/* Scroll Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="flex items-center w-full max-w-3xl text-[12px] uppercase tracking-[0.2em] text-white/20"
      >
        <div className="flex-grow h-[1px] bg-white/10" />
        <div className="px-8 flex items-center gap-6">
          <span className="whitespace-nowrap">Scroll down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <div className="w-[18px] h-[28px] border border-white/20 rounded-full flex items-start justify-center p-1.5">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1.5 bg-white/60 rounded-full" 
              />
            </div>
          </motion.div>
          <span className="whitespace-nowrap">to explore work</span>
        </div>
        <div className="flex-grow h-[1px] bg-white/10" />
      </motion.div>
    </div>
  );
};

export default Hero;

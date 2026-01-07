
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, Youtube, Twitter, 
  Monitor, Trophy, ExternalLink 
} from 'lucide-react';

const Hero: React.FC = () => {
  const socials = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'X', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Devpost', icon: Monitor, href: '#' },
    { name: 'Hack2Skill', icon: Trophy, href: '#' },
  ];

  return (
    <div className="text-center w-full max-w-6xl mx-auto flex flex-col items-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 shadow-2xl overflow-hidden relative"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
        <span className="text-[13px] font-medium text-white/80 tracking-wide relative z-10">
          Full-Stack Engineer & Creative Developer
        </span>
      </motion.div>

      {/* Profile Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-10 group"
      >
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Animated Inner Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-8px] rounded-full border border-dashed border-white/10 opacity-50"
        />

        {/* Profile Image Container */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent backdrop-blur-xl shadow-2xl">
          <div className="w-full h-full rounded-full overflow-hidden border border-white/10 relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
              alt="Developer Profile" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
          </div>
          
          {/* Status Indicator */}
          <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-black z-20 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-6xl md:text-[105px] font-semibold tracking-tight mb-10 leading-[0.95] text-white"
      >
        Engineering products <br />
        <span className="text-white/40">with precision</span>
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
        className="flex flex-row flex-wrap items-center justify-center gap-5 mb-12"
      >
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/20 text-white font-medium transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          View GitHub
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 rounded-xl bg-white text-black font-bold transition-all shadow-[0_20px_50px_rgba(255,255,255,0.05)]"
        >
          Let's Chat
        </motion.button>
      </motion.div>

      {/* Social Dock */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex items-center gap-4 p-2 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm mb-32"
      >
        {socials.map((social, i) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.05)' }}
            className="w-12 h-12 flex items-center justify-center rounded-xl transition-all text-white/30 hover:text-white"
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
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

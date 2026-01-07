
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, Youtube, Twitter, 
  Monitor, Trophy, ExternalLink, Sparkles 
} from 'lucide-react';
import HeroVisual from './HeroVisual';
import HeroHUD from './HeroHUD';
import MagneticButton from './MagneticButton';
import Circuitry from './Circuitry';

const ScrambleText: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1/3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

const Hero: React.FC = () => {
  const socials = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'X', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Devpost', icon: Monitor, href: '#' },
    { name: 'Hack2Skill', icon: Trophy, href: '#' },
  ];

  const expoOut = [0.16, 1, 0.3, 1] as any;

  const titleWords = "Engineering products with precision".split(" ");

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Circuitry Background */}
      <Circuitry />
      
      {/* Technical HUD Overlay */}
      <HeroHUD />

      <div className="text-center w-full max-w-6xl mx-auto flex flex-col items-center relative z-20">
        {/* Badge with Scramble Effect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 shadow-2xl overflow-hidden relative"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
          <span className="text-[11px] font-mono font-medium text-white/80 tracking-widest relative z-10 uppercase">
            <ScrambleText text="Systems Architect & Creative Engineer" />
          </span>
        </motion.div>

        {/* Profile Visual Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 0.1, ease: expoOut }}
          className="mb-10"
        >
          <HeroVisual />
        </motion.div>

        {/* Main Heading - Staggered Word Entrance */}
        <h1 className="text-6xl md:text-[105px] font-semibold tracking-tight mb-10 leading-[0.95] text-white flex flex-wrap justify-center gap-x-[0.2em]">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3 + (i * 0.1), 
                ease: expoOut 
              }}
              className={i >= 2 ? "text-white/40" : "text-white"}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtext - Refined Entrance */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: expoOut }}
          className="text-base md:text-[18px] text-white/40 max-w-2xl mx-auto mb-14 font-normal leading-relaxed tracking-tight"
        >
          Building scalable digital experiences through clean architecture and performant code. 
          Specializing in high-frequency web apps and fluid interactive interfaces.
        </motion.p>

        {/* Magnetic Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: expoOut }}
          className="flex flex-row flex-wrap items-center justify-center gap-6 mb-12"
        >
          <MagneticButton variant="secondary">
            View GitHub
          </MagneticButton>
          <MagneticButton variant="primary">
            <span>Let's Chat</span>
            <Sparkles className="w-4 h-4" />
          </MagneticButton>
        </motion.div>

        {/* Social Dock */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex items-center gap-4 p-2 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm mb-32"
        >
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff' }}
              className="w-12 h-12 flex items-center justify-center rounded-xl transition-all text-white/30"
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
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
    </div>
  );
};

export default Hero;

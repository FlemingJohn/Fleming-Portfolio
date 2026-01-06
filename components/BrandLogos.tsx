
import React from 'react';
import { Layers, Cpu, Box, Globe, Code2, Database, Terminal, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const stack = [
  { name: 'TypeScript', icon: Layers },
  { name: 'React / Next.js', icon: Cpu },
  { name: 'Node.js', icon: Box },
  { name: 'GraphQL', icon: Globe },
  { name: 'Python', icon: Code2 },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Rust', icon: Terminal },
  { name: 'CyberSecurity', icon: ShieldCheck },
];

const BrandLogos: React.FC = () => {
  // Triple the array for extra safety on wide screens
  const duplicatedStack = [...stack, ...stack, ...stack];

  return (
    <div className="w-full overflow-hidden py-10 relative bg-black/20">
      {/* Gradient Fades for the edges to make the marquee look 'liquid' as it enters/exits */}
      <div className="absolute left-0 top-0 bottom-0 w-60 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-60 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

      {/* Marquee Row 1 */}
      <div className="flex mb-8 overflow-hidden">
        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: ["0%", "-33.33%"]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedStack.map((item, idx) => (
            <motion.div
              key={`${item.name}-1-${idx}`}
              whileHover={{ y: -5, scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="flex items-center gap-4 cursor-default group px-10 py-5 rounded-[24px] glass-card border border-white/5 hover:border-white/20 transition-all duration-500 relative"
            >
              <item.icon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-500" />
              <span className="text-xl font-bold tracking-[0.1em] text-white/40 group-hover:text-white font-['Plus_Jakarta_Sans'] uppercase text-[12px] transition-colors duration-500">
                {item.name}
              </span>
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-[24px] bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 - Reverse Direction */}
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: ["-33.33%", "0%"]
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedStack.map((item, idx) => (
            <motion.div
              key={`${item.name}-2-${idx}`}
              whileHover={{ y: 5, scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="flex items-center gap-4 cursor-default group px-10 py-5 rounded-[24px] glass-card border border-white/5 hover:border-white/20 transition-all duration-500 relative"
            >
              <item.icon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-500" />
              <span className="text-xl font-bold tracking-[0.1em] text-white/40 group-hover:text-white font-['Plus_Jakarta_Sans'] uppercase text-[12px] transition-colors duration-500">
                {item.name}
              </span>
              <div className="absolute inset-0 rounded-[24px] bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Sub-label */}
      <div className="mt-12 text-center relative z-30">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[10px] uppercase tracking-[0.6em] text-white/10 font-black"
        >
          Continuous Deployment • High Reliability
        </motion.span>
      </div>
    </div>
  );
};

export default BrandLogos;

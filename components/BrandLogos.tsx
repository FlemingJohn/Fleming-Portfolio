
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
  // Duplicate the array to create a seamless loop
  const duplicatedStack = [...stack, ...stack];

  return (
    <div className="w-full overflow-hidden py-20 relative">
      {/* Gradient Fades for the edges to make the marquee look 'liquid' as it enters/exits */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <motion.div 
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedStack.map((item, idx) => (
          <motion.div
            key={`${item.name}-${idx}`}
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex items-center gap-4 cursor-default group px-8 py-4 rounded-2xl glass-card border border-white/5 hover:border-white/20 transition-all duration-500"
          >
            <item.icon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors duration-500" />
            <span className="text-xl font-bold tracking-[0.15em] text-white/40 group-hover:text-white font-['Plus_Jakarta_Sans'] uppercase text-[13px] transition-colors duration-500">
              {item.name}
            </span>
            {/* Subtle inner glow for the silver effect */}
            <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500" />
          </motion.div>
        ))}
      </motion.div>

      {/* Sub-label for the moving section */}
      <div className="mt-12 text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-medium">
          Core Technology Infrastructure
        </span>
      </div>
    </div>
  );
};

export default BrandLogos;

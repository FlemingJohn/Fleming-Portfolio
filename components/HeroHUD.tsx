
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroHUD: React.FC = () => {
  const metadata = [
    { label: "LATENCY", value: "12ms", top: "20%", left: "15%" },
    { label: "CORE_SYNC", value: "ACTIVE", top: "70%", left: "10%" },
    { label: "UPLINK", value: "SECURE", top: "15%", right: "12%" },
    { label: "FRAME_RT", value: "120Hz", top: "75%", right: "15%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Perspective Grid */}
      <div className="absolute inset-0 [perspective:1000px]">
        <motion.div 
          className="absolute inset-0 border-[0.5px] border-white/[0.03] [transform:rotateX(60deg)]"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
          animate={{ backgroundPosition: ['0px 0px', '0px 100px'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Sweeping Scanning Beam */}
      <motion.div 
        animate={{ top: ['-20%', '120%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"
      />

      {/* Floating Metadata Nodes */}
      {metadata.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0.2],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 4 + i, 
            repeat: Infinity, 
            delay: i * 0.5 
          }}
          className="absolute font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase hidden lg:block"
          style={{ 
            top: item.top, 
            left: item.left, 
            right: item.right 
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span>{item.label} // <span className="text-white/60">{item.value}</span></span>
          </div>
          <div className="mt-1 w-12 h-px bg-white/5" />
        </motion.div>
      ))}

      {/* Decorative Corner Brackets */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/5" />
      <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-white/5" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-white/5" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/5" />
    </div>
  );
};

export default HeroHUD;

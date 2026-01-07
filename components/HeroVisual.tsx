
import React, { useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const HeroVisual: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      angle: (i / 12) * Math.PI * 2,
      delay: i * 0.1,
      size: Math.random() * 2 + 1
    }));
  }, []);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
    >
      {/* Outer Orbital Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
        style={{ transform: "translateZ(20px)" }}
      />

      {/* Particle Cloud */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            transform: `rotate(${p.angle}rad) translate(140px)`,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Middle Orbital Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-dashed border-white/10"
        style={{ transform: "translateZ(40px)" }}
      />

      {/* Inner Rotating Ring with Node */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 rounded-full border border-white/20"
        style={{ transform: "translateZ(60px)" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
      </motion.div>

      {/* Core Profile Cradle */}
      <div 
        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent backdrop-blur-3xl shadow-2xl overflow-hidden"
        style={{ transform: "translateZ(80px)" }}
      >
        <div className="w-full h-full rounded-full overflow-hidden border border-white/10 relative z-10 bg-black/40">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
            alt="Developer Profile" 
            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-110 transition-all duration-700"
          />
        </div>
        
        {/* Scanning Light Effect */}
        <motion.div 
          animate={{ top: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"
        />

        {/* Secondary Inner Pulse */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border-2 border-white/5 pointer-events-none"
        />
      </div>

      {/* Background Depth Glow */}
      <div className="absolute inset-[-40px] bg-white/[0.03] blur-[80px] rounded-full pointer-events-none -z-10" />
    </motion.div>
  );
};

export default HeroVisual;

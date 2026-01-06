import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const Tendril: React.FC<{ index: number; mouseX: any; mouseY: any }> = ({ index, mouseX, mouseY }) => {
  // Staggered physics for "viscous" trailing effect
  const springConfig = { 
    damping: 20 + index * 5, 
    stiffness: 70 - index * 8,
    mass: 1 + index * 0.4
  };
  
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  return (
    <motion.div
      style={{ x, y }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    >
      <div 
        className="rounded-full bg-white/40 blur-[10px]" 
        style={{ 
          width: `${80 - index * 10}px`, 
          height: `${80 - index * 10}px`,
          opacity: 0.6 - index * 0.08
        }} 
      />
    </motion.div>
  );
};

const FluidBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth movement
  const springConfig = { damping: 50, stiffness: 60 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const glintSpringConfig = { damping: 15, stiffness: 120 };
  const glintX = useSpring(mouseX, glintSpringConfig);
  const glintY = useSpring(mouseY, glintSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden pointer-events-none -z-10">
      {/* Texture Layer */}
      <div className="absolute inset-0 z-40 opacity-[0.08] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* SVG Goo Filter - Calibrated for Visibility */}
      <svg className="hidden">
        <defs>
          <filter id="mercury-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0" style={{ filter: 'url(#mercury-filter)' }}>
        {/* Main Background Pool */}
        <motion.div
          style={{ 
            x: useTransform(smoothX, (v) => v * 0.1), 
            y: useTransform(smoothY, (v) => v * 0.1) 
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/4 w-[50vw] h-[50vh] bg-white/10 rounded-full blur-[40px]"
        />

        {/* Trail Elements */}
        {[...Array(8)].map((_, i) => (
          <Tendril key={i} index={i} mouseX={mouseX} mouseY={mouseY} />
        ))}

        {/* High-intensity Interactive Glint */}
        <motion.div
          style={{ x: glintX, y: glintY }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-[30px] opacity-40"
        />

        {/* Floating Ambient Orbs */}
        <motion.div
          animate={{
            x: [-300, 300, -300],
            y: [200, -200, 200],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] bottom-[10%] w-[40vw] h-[40vh] bg-white/5 rounded-full blur-[100px]"
        />
        
        <motion.div
          animate={{
            x: [200, -200, 200],
            y: [-300, 300, -300],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute left-[5%] top-[5%] w-[35vw] h-[35vh] bg-white/5 rounded-full blur-[100px]"
        />
      </div>

      {/* Subtle Peripheral Glows - Bypasses filter for edge depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-white/[0.03] rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
    </div>
  );
};

export default FluidBackground;
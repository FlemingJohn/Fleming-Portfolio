
import React, { useEffect, useMemo } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const FluidBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth movement springs for the "viscous" liquid feel
  const springConfig = { damping: 50, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Subtle parallax response
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.05);
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.05);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden pointer-events-none -z-10">
      {/* Texture Layer - Adds the metallic graininess */}
      <div className="absolute inset-0 z-30 opacity-[0.06] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 
        SVG Liquid Filter (The "Gooey" effect)
        This filter merges blurred blobs into a single liquid mass, 
        mimicking the surface tension of mercury or silk folds.
      */}
      <svg className="hidden">
        <defs>
          <filter id="mercury-liquid">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 45 -18" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <motion.div 
        style={{ x: smoothX, y: smoothY, filter: 'url(#mercury-liquid)' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Main Fluid Body - Left/Bottom Flow */}
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            rotate: [0, 45, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] bottom-[-10%] w-[80vw] h-[80vh] bg-white opacity-40 rounded-full"
        />

        {/* Secondary Fluid Body - Top/Right Flow */}
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
            rotate: [0, -45, 0],
            scale: [1.2, 0.9, 1.2],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] top-[-10%] w-[70vw] h-[70vh] bg-white/60 opacity-30 rounded-full"
        />

        {/* Middle Connecting "Silk" Flow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[60vw] h-[100vh] bg-gradient-to-b from-white/20 via-white/40 to-white/10 opacity-20 rounded-full blur-[20px]"
        />

        {/* Sharp Reflection Streaks (Silver Creases) */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: i % 2 === 0 ? [-300, 300] : [300, -300],
              y: [0, 100, -100, 0],
              opacity: [0, 0.5, 0],
              scaleX: [1, 2.5, 1],
            }}
            transition={{
              duration: 15 + (i * 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 4
            }}
            className="absolute w-[50vw] h-[4px] bg-white blur-[10px] mix-blend-screen opacity-40 rotate-[15deg]"
          />
        ))}
      </motion.div>

      {/* Atmospheric Depth Gradients */}
      <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.6) 100%) z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
      <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-black to-transparent z-20" />
    </div>
  );
};

export default FluidBackground;

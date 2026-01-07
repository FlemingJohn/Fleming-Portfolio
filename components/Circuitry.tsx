
import React, { useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Circuitry: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX = useTransform(springX, [-500, 500], [20, -20]);
  const moveY = useTransform(springY, [-500, 500], [20, -20]);

  // Generate deterministic but random-looking logic paths
  const paths = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const segments = Array.from({ length: 3 }).map(() => ({
        dx: (Math.random() - 0.5) * 20,
        dy: (Math.random() - 0.5) * 20,
      }));
      return { startX, startY, segments, delay: i * 0.2 };
    });
  }, []);

  return (
    <motion.div 
      style={{ x: moveX, y: moveY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }}
      className="absolute inset-0 z-0 pointer-events-none opacity-20"
    >
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {paths.map((path, i) => {
          let currentX = path.startX;
          let currentY = path.startY;
          let d = `M ${currentX} ${currentY}`;
          
          path.segments.forEach(seg => {
            currentX += seg.dx;
            currentY += seg.dy;
            d += ` L ${currentX} ${currentY}`;
          });

          return (
            <g key={i}>
              <motion.path
                d={d}
                fill="none"
                stroke="white"
                strokeWidth="0.05"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0.2] }}
                transition={{ 
                  duration: 4, 
                  delay: path.delay, 
                  repeat: Infinity, 
                  repeatDelay: Math.random() * 5 
                }}
              />
              <motion.circle
                r="0.2"
                fill="white"
                initial={{ offset: 0, opacity: 0 }}
                animate={{ 
                  cx: [path.startX, currentX], 
                  cy: [path.startY, currentY],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4, 
                  delay: path.delay, 
                  repeat: Infinity, 
                  repeatDelay: Math.random() * 5 
                }}
              >
                <animate 
                  attributeName="r" 
                  values="0.1;0.4;0.1" 
                  dur="1s" 
                  repeatCount="indefinite" 
                />
              </motion.circle>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
};

export default Circuitry;

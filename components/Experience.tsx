
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Senior Systems Architect",
    company: "TechNova Solutions",
    period: "2021 — PRESENT",
    description: "Leading the development of distributed cloud architectures and high-frequency trading interfaces. Reduced system latency by 45% through custom WASM-based data pipelines.",
    skills: ["System Design", "Cloud Native", "WASM"]
  },
  {
    role: "Full Stack Engineer",
    company: "Quantum Dynamics",
    period: "2018 — 2021",
    description: "Engineered real-time collaboration tools used by 500k+ users. Orchestrated the migration from legacy monolith to a globally distributed microservices mesh.",
    skills: ["Next.js", "Go", "Kubernetes"]
  },
  {
    role: "Software Engineer",
    company: "Alpha Labs",
    period: "2016 — 2018",
    description: "Developed experimental UI components and internal data visualization tools. Focused on optimizing rendering performance for large-scale datasets.",
    skills: ["React", "D3.js", "Python"]
  }
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Pulse position that follows scroll
  const pulseY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="w-full max-w-7xl mx-auto px-6 py-32 relative">
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <Briefcase className="w-3 h-3 text-white/60" />
          <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Career Path</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white"
        >
          Professional <span className="text-white/30">Timeline</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* The Base Track */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.05] -translate-x-1/2 hidden md:block" />
        
        {/* Animated Progress Track */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/10 via-white/40 to-white/10 -translate-x-1/2 hidden md:block z-10"
        />

        {/* Travelling Pulse Effect */}
        <motion.div
          style={{ top: pulseY }}
          className="absolute left-0 md:left-1/2 w-4 h-24 -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-md hidden md:block z-20 pointer-events-none"
        />

        <div className="space-y-24 relative">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Content Side */}
              <motion.div 
                className="w-full md:w-1/2 md:px-12"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div 
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative p-8 rounded-[32px] glass-card border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,255,255,0.02)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-[10px] font-bold text-white/30 tracking-[0.2em] group-hover:text-white/60 transition-colors uppercase"
                    >
                      {exp.period}
                    </motion.span>
                    <div className="md:hidden w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
                  </div>
                  
                  <motion.h3 
                    className="text-2xl font-semibold text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {exp.role}
                  </motion.h3>
                  
                  <motion.div 
                    className="text-white/50 font-medium mb-4 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {exp.company}
                  </motion.div>
                  
                  <motion.p 
                    className="text-white/40 text-sm leading-relaxed mb-6 font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {exp.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIdx) => (
                      <motion.span 
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + (sIdx * 0.1) }}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-white/40 font-medium hover:bg-white/10 hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Liquid corner accent */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-[32px] pointer-events-none" />
                </motion.div>
              </motion.div>

              {/* Center Node with Pulse Animation */}
              <div className="absolute left-0 md:left-1/2 top-10 md:top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="relative"
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_white] z-20" />
                  <motion.div 
                    animate={{ 
                      scale: [1, 2, 1],
                      opacity: [0.3, 0, 0.3] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-white/50 rounded-full blur-sm"
                  />
                </motion.div>
              </div>

              {/* Spacer Side */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

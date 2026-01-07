
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Trophy, Star, Medal, CheckCircle2, ExternalLink, ShieldCheck, Fingerprint } from 'lucide-react';

const achievements = [
  {
    title: "Global Innovation Award",
    org: "TechSummit 2023",
    date: "2023",
    id: "AUTH-8829-X",
    description: "Awarded for pioneering research in WebGPU-based real-time rendering systems used in modern web browsers.",
    icon: Trophy,
    color: "rgba(255, 215, 0, 0.1)" // Gold tint
  },
  {
    title: "AWS Solutions Architect",
    org: "Amazon Web Services",
    date: "2022",
    id: "CERT-AWS-991",
    description: "Professional level certification for designing distributed systems on AWS with focus on high availability.",
    icon: Medal,
    color: "rgba(255, 255, 255, 0.05)"
  },
  {
    title: "Top 1% Contributor",
    org: "Alpha Labs",
    date: "2021",
    id: "ENG-RANK-01",
    description: "Consistently ranked in the top 1% of engineering performance for three consecutive years.",
    icon: Star,
    color: "rgba(0, 255, 255, 0.05)" // Cyan tint
  },
  {
    title: "Open Source Advocate",
    org: "GitHub",
    date: "2020",
    id: "GH-LEGACY-V5",
    description: "Recognized for significant contributions to the React and Rust ecosystems with over 5k+ stars combined.",
    icon: CheckCircle2,
    color: "rgba(255, 255, 255, 0.05)"
  }
];

const AchievementCard: React.FC<{ item: typeof achievements[0], index: number }> = ({ item, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  // Brightness/Glint position based on mouse
  const glintX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glintY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      className="relative group h-[480px] w-full cursor-pointer"
    >
      {/* 3D Content Container */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="h-full w-full rounded-[48px] glass-card border border-white/5 p-10 flex flex-col relative overflow-hidden group-hover:border-white/20 transition-colors duration-500"
      >
        {/* Holographic Foil Shimmer */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at ${glintX} ${glintY}, rgba(255,255,255,0.1) 0%, transparent 60%)`
          }}
        />
        
        {/* Subtle Static Shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] pointer-events-none" />

        {/* Verification Icon Top Right */}
        <div className="absolute top-10 right-10 flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity duration-700">
          <Fingerprint className="w-6 h-6 text-white mb-2" />
          <span className="text-[9px] font-mono tracking-tighter uppercase font-bold">{item.id}</span>
        </div>

        {/* Header Section */}
        <div className="mb-10" style={{ transform: "translateZ(40px)" }}>
          <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 mb-10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-2xl relative">
             <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <item.icon className="w-8 h-8 text-white/40 group-hover:text-white transition-colors relative z-10" />
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight leading-[1.1] mb-3 group-hover:translate-x-2 transition-transform duration-500">
            {item.title}
          </h3>
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 group-hover:text-white/40 transition-colors">
            {item.org} <span className="text-white/10 mx-2">/</span> {item.date}
          </p>
        </div>

        {/* Body Text */}
        <p className="text-white/30 text-base leading-relaxed font-light mb-12 flex-grow group-hover:text-white/60 transition-colors duration-500" style={{ transform: "translateZ(20px)" }}>
          {item.description}
        </p>

        {/* Footer Detail */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20 group-hover:text-white/40 transition-colors">Verified Registry</span>
          </div>
          <motion.div 
            whileHover={{ x: 3 }}
            className="flex items-center gap-2 group/link"
          >
             <span className="text-[9px] font-mono text-white/10 group-hover:text-white/40 transition-colors uppercase tracking-widest">View Credentials</span>
             <ExternalLink className="w-4 h-4 text-white/10 group-hover:text-white transition-colors" />
          </motion.div>
        </div>

        {/* Dynamic Background Tint */}
        <div 
          className="absolute inset-0 -z-10 transition-opacity duration-1000 opacity-0 group-hover:opacity-100"
          style={{ backgroundColor: item.color }} 
        />
      </div>

      {/* Floating Background Glow behind the card */}
      <div className="absolute -inset-10 bg-white/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-1000 -z-20" />
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="w-full max-w-7xl mx-auto px-6 py-48 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <ShieldCheck className="w-3 h-3 text-white/60" />
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-mono">Registry_V2 // Verified_Honors</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8"
          >
            Honors & <span className="text-white/20">Milestones</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-lg md:text-xl leading-relaxed font-light max-w-xl"
          >
            A curated record of professional recognition, certifications, and technical mastery validated by global industry standards.
          </motion.p>
        </div>

        <div className="hidden lg:flex flex-col items-end text-right font-mono text-[10px] tracking-[0.4em] text-white/10 uppercase gap-2">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
             Integrity_Verified: 100%
          </div>
          <span>Security_Protocol: Active</span>
          <span>Last_System_Audit: Dec_2023</span>
        </div>
      </div>

      {/* 3D Wall Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 perspective-[2000px]">
        {achievements.map((item, idx) => (
          <AchievementCard key={idx} item={item} index={idx} />
        ))}
      </div>

      {/* Background Decorative Blurs */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-white/[0.01] blur-[180px] rounded-full pointer-events-none -z-10 translate-y-[-50%]" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-white/[0.01] blur-[200px] rounded-full pointer-events-none -z-10 translate-y-[50%]" />
    </section>
  );
};

export default Achievements;


import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, CheckCircle2, ExternalLink } from 'lucide-react';

const achievements = [
  {
    title: "Global Innovation Award",
    org: "TechSummit 2023",
    date: "Dec 2023",
    description: "Awarded for pioneering research in WebGPU-based real-time rendering systems used in modern web browsers.",
    icon: Trophy,
  },
  {
    title: "AWS Certified Architect",
    org: "Amazon Web Services",
    date: "Aug 2022",
    description: "Professional level certification for designing distributed systems on AWS with focus on high availability.",
    icon: Medal,
  },
  {
    title: "Top 1% Contributor",
    org: "Alpha Labs",
    date: "2021",
    description: "Consistently ranked in the top 1% of engineering performance for three consecutive years.",
    icon: Star,
  },
  {
    title: "Open Source Advocate",
    org: "GitHub",
    date: "2020",
    description: "Recognized for significant contributions to the React and Rust ecosystems with over 5k+ stars combined.",
    icon: CheckCircle2,
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="w-full max-w-7xl mx-auto px-6 py-32 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Trophy className="w-3 h-3 text-white/60" />
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Recognition</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Honors & <span className="text-white/30">Milestones</span>
          </motion.h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 max-w-xs text-sm leading-relaxed"
        >
          Celebrating the pursuit of excellence and technical mastery across global industry standards.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative p-8 rounded-[32px] glass-card border border-white/5 overflow-hidden transition-all duration-500"
          >
            {/* Top Glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                <item.icon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white tracking-tight leading-tight group-hover:translate-x-1 transition-transform">{item.title}</h3>
              </div>
              
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-4">{item.org} &bull; {item.date}</p>
              
              <p className="text-white/40 text-xs leading-relaxed font-light mb-8 flex-grow group-hover:text-white/60 transition-colors">
                {item.description}
              </p>
              
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-widest text-white/20 font-bold group-hover:text-white/40 transition-colors">Verified Badge</span>
                <ExternalLink className="w-3 h-3 text-white/10 group-hover:text-white/30" />
              </div>
            </div>

            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

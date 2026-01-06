
import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Trophy, Award, ExternalLink, Code2, Rocket } from 'lucide-react';

const hackathons = [
  {
    event: "EthGlobal Paris",
    achievement: "Winner (Most Innovative)",
    project: "SyncOS",
    date: "July 2023",
    description: "Built a decentralized operating system kernel using Rust and WASM in under 36 hours. Secured the main prize for protocol architecture.",
    tags: ["Rust", "WASM", "P2P"],
    icon: Flame
  },
  {
    event: "HackMIT",
    achievement: "1st Place (Fintech Track)",
    project: "Zenith Pay",
    date: "Sept 2022",
    description: "Developed a zero-knowledge payment settlement engine that reduced transaction confirmation times to sub-second levels on testnet.",
    tags: ["Zk-SNARKs", "Go", "React"],
    icon: Trophy
  },
  {
    event: "Stanford TreeHacks",
    achievement: "Grand Finalist",
    project: "EcoNode",
    date: "Feb 2022",
    description: "Created a distributed sensor network platform for real-time carbon footprint tracking in urban environments.",
    tags: ["IoT", "TypeScript", "gRPC"],
    icon: Rocket
  },
  {
    event: "Chainlink Spring Hackathon",
    achievement: "Best UX Award",
    project: "Aether Link",
    date: "May 2021",
    description: "Designed a high-fidelity dashboard for managing cross-chain oracle nodes with a focus on fluid animations and real-time telemetry.",
    tags: ["Next.js", "Framer Motion", "Web3"],
    icon: Award
  }
];

const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="w-full max-w-7xl mx-auto px-6 py-32 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Flame className="w-3 h-3 text-white/60" />
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Competitive Innovation</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Rapid <span className="text-white/30">Prototyping</span>
          </motion.h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 max-w-xs text-sm leading-relaxed"
        >
          Selected victories and standout builds from global competitive engineering events.
        </motion.p>
      </div>

      {/* Hackathon Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hackathons.map((hack, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="group relative p-1 rounded-[40px] overflow-hidden"
          >
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-10 h-full rounded-[40px] glass-card border border-white/5 flex flex-col">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                  <hack.icon className="w-7 h-7 text-white/40 group-hover:text-white transition-colors" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold block mb-1">Project</span>
                  <span className="text-sm font-bold text-white group-hover:text-white transition-colors">{hack.project}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:translate-x-1 transition-transform">{hack.event}</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  {hack.achievement}
                </div>
              </div>

              <p className="text-white/40 text-sm leading-relaxed font-light mb-8 flex-grow group-hover:text-white/60 transition-colors">
                {hack.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {hack.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">{hack.date}</span>
                <motion.div 
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">View Repository</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;

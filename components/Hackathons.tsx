
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Flame, Trophy, Award, ExternalLink, Rocket, 
  Timer, ChevronRight, Play, Film, Binary
} from 'lucide-react';

const hackathons = [
  {
    event: "EthGlobal Paris",
    achievement: "Winner (Most Innovative)",
    project: "SyncOS",
    date: "JULY 2023",
    buildTime: "36H",
    description: "Built a decentralized operating system kernel using Rust and WASM. Secured the main prize for protocol architecture and high-performance threading.",
    tags: ["Rust", "WASM", "P2P"],
    icon: Flame,
    color: "from-orange-500/20"
  },
  {
    event: "Stanford TreeHacks",
    achievement: "Grand Finalist",
    project: "EcoNode",
    date: "FEB 2022",
    buildTime: "48H",
    description: "Distributed sensor network platform for real-time carbon footprint tracking in urban environments utilizing low-power gRPC communication.",
    tags: ["IoT", "gRPC", "TS"],
    icon: Rocket,
    color: "from-blue-500/20"
  },
  {
    event: "HackMIT",
    achievement: "1st Place (Fintech)",
    project: "Zenith Pay",
    date: "SEPT 2022",
    buildTime: "24H",
    description: "Zero-knowledge payment settlement engine that reduced transaction confirmation times to sub-second levels on Ethereum testnets.",
    tags: ["Zk-SNARKs", "Go", "Solidity"],
    icon: Trophy,
    color: "from-emerald-500/20"
  },
  {
    event: "Chainlink Spring",
    achievement: "Best UX Award",
    project: "Aether Link",
    date: "MAY 2021",
    buildTime: "72H",
    description: "High-fidelity dashboard for managing cross-chain oracle nodes with real-time telemetry and fluid animation interfaces.",
    tags: ["Next.js", "Framer", "Web3"],
    icon: Award,
    color: "from-purple-500/20"
  }
];

const Hackathons: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  
  // Progress bar width mapping
  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="hackathons" className="w-full py-32 relative overflow-hidden">
      {/* Decorative Background Labels */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-[0.03] select-none">
        <span className="text-[200px] font-black leading-none uppercase tracking-tighter">REEL_01</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Film className="w-3 h-3 text-white/60" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 font-medium">Timeline_Reel: Engineering_Marathons</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
            >
              The <span className="text-white/30 italic">Build Reel</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-xs text-sm leading-relaxed font-mono"
          >
            // A cinematic timeline of rapid innovation and competitive milestones.
          </motion.p>
        </div>
      </div>

      {/* Horizontal Reel Container */}
      <div className="relative">
        {/* Film Strip Sprocket Holes (Top) */}
        <div className="w-full h-8 border-y border-white/5 bg-black flex gap-4 px-4 items-center overflow-hidden mb-8">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="min-w-[40px] h-4 rounded-sm bg-white/[0.03] border border-white/5" />
          ))}
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 px-[10vw] no-scrollbar snap-x snap-mandatory"
        >
          {hackathons.map((hack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="min-w-[85vw] md:min-w-[600px] snap-center"
            >
              <div className="group relative aspect-video md:aspect-[16/10] rounded-[40px] glass-card border border-white/5 overflow-hidden flex flex-col p-8 md:p-12 transition-all duration-700 hover:border-white/20">
                {/* Visual Ambient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${hack.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
                
                {/* Build Time Badge - Bold Statement */}
                <div className="absolute top-0 right-0 p-8 md:p-12 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-5xl md:text-7xl font-black text-white/5 tracking-tighter group-hover:text-white/10 transition-colors">
                      {hack.buildTime}
                    </span>
                    <span className="text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase -mt-2">
                      Build_Latency
                    </span>
                  </div>
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-auto">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                      <hack.icon className="w-7 h-7 text-white/40 group-hover:text-white" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                      {hack.project}
                    </h3>
                    <div className="text-sm font-mono text-white/40 uppercase tracking-widest mb-6">
                      {hack.event} <span className="text-white/10 px-2">//</span> <span className="text-white/60">{hack.achievement}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/30 text-sm md:text-base leading-relaxed max-w-md font-light mb-8 group-hover:text-white/60 transition-colors">
                      {hack.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        {hack.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-mono text-white/20 border border-white/5 px-2 py-1 rounded bg-black/40">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 group/btn cursor-pointer"
                      >
                        <span className="text-[10px] font-bold font-mono text-white/20 uppercase tracking-widest group-hover/btn:text-white">Review_Docs</span>
                        <ChevronRight className="w-3 h-3 text-white/20 group-hover/btn:text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Date Vertical Text */}
                <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-white/5 flex items-center justify-center overflow-hidden">
                  <span className="rotate-90 text-[10px] font-mono text-white/10 tracking-[1em] whitespace-nowrap uppercase">
                    DEPLOYED_{hack.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Reel End Gap */}
          <div className="min-w-[20vw]" />
        </div>

        {/* Film Strip Sprocket Holes (Bottom) */}
        <div className="w-full h-8 border-y border-white/5 bg-black flex gap-4 px-4 items-center overflow-hidden mt-8">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="min-w-[40px] h-4 rounded-sm bg-white/[0.03] border border-white/5" />
          ))}
        </div>
      </div>

      {/* Playback Controls (Visual only) */}
      <div className="max-w-7xl mx-auto px-6 mt-16 flex items-center gap-8 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">
            <Play className="w-4 h-4 text-white/40 fill-white/10" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">Playback: Auto_Scroll</span>
            <span className="text-[9px] font-mono text-white/20 uppercase">Source: Innovation_Vault_V2</span>
          </div>
        </div>

        <div className="flex-grow h-[1px] bg-white/5 relative">
          <motion.div 
            style={{ width: progressWidth }}
            className="absolute inset-y-0 left-0 bg-white/40"
          />
          <div className="absolute right-0 -top-6 text-[9px] font-mono text-white/20 tracking-widest">
            SCRUB_TIMELINE
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 font-mono text-[10px] text-white/20 tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <Binary className="w-3 h-3" />
            00:0{hackathons.length}:00
          </div>
          <div className="flex items-center gap-2">
            <Timer className="w-3 h-3" />
            LIVE_FEED
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;

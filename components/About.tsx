
import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '8+', icon: Zap },
    { label: 'System Uptime', value: '99.9%', icon: Shield },
    { label: 'Projects Shipped', value: '150+', icon: Cpu },
  ];

  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-6 py-32 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
            <User className="w-3 h-3 text-white/60" />
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">The Narrative</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
            Architecting the <br />
            <span className="text-white/30">unseen infrastructure</span>
          </h2>

          <div className="space-y-6 text-white/50 text-base md:text-lg leading-relaxed max-w-xl font-light">
            <p>
              I specialize in bridging the gap between complex backend architecture and fluid, high-fidelity user interfaces. My approach is rooted in the belief that software should be as resilient as it is beautiful.
            </p>
            <p>
              Currently leading engineering initiatives at the intersection of real-time data visualization and decentralized systems, I focus on building tools that empower developers and enchant users.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Stats & Philosophy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 rounded-[24px] glass-card border border-white/5 hover:border-white/20 transition-all duration-500 group"
            >
              <stat.icon className="w-5 h-5 text-white/20 mb-6 group-hover:text-white transition-colors duration-500" />
              <div className="text-3xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">{stat.label}</div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 rounded-[24px] bg-white/[0.03] border border-white/10 flex flex-col justify-center sm:col-span-1"
          >
            <p className="text-[12px] italic text-white/40 leading-relaxed font-light">
              "Efficiency is the result of a disciplined mind meeting elegant code."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-white/[0.01] blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default About;

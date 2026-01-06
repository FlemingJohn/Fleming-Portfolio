
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Mercury OS",
    description: "A high-performance operating system interface built for creative workflows and low-latency interactions.",
    tech: ["Rust", "TypeScript", "WASM"],
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Lumina Engine",
    description: "Real-time ray tracing engine for web environments utilizing WebGPU for desktop-grade performance.",
    tech: ["WebGPU", "C++", "Vite"],
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Aether Protocol",
    description: "Decentralized data synchronization layer with zero-knowledge encryption and sub-50ms propagation.",
    tech: ["Go", "gRPC", "Next.js"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-32 relative">
      {/* Section Header */}
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Code className="w-3 h-3 text-white/60" />
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Selected Artifacts</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Featured <span className="text-white/30">Architecture</span>
          </motion.h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 max-w-sm text-sm leading-relaxed"
        >
          A curated collection of engineering projects focused on performance, scalability, and artistic execution.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              y: -15, 
              scale: 1.03,
              boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.08)"
            }}
            className="group relative flex flex-col h-full rounded-[32px] overflow-hidden glass-card border border-white/5 hover:border-white/20 transition-all duration-500"
          >
            {/* Project Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              {/* Floating Link Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white/90 group-hover:text-white transition-colors tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex gap-4">
                  <Github className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
                  <ExternalLink className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/10 group-hover:text-white/30 transition-colors">
                  Case Study
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Glows for visual distinction */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Projects;

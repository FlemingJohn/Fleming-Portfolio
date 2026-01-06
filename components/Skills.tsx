
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Globe, Database, Shield, Zap, Layout, Terminal, Workflow, 
  Code2, Layers, Box, GitMerge, Activity, Key, Container, Cloud,
  Maximize, Monitor, Component, FastForward
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: Layout,
    skills: [
      { name: "React / Next.js", icon: Cpu },
      { name: "TypeScript", icon: Code2 },
      { name: "WebGPU / WebGL", icon: Zap },
      { name: "Tailwind CSS", icon: Layers }
    ]
  },
  {
    title: "Systems & Backend",
    icon: Terminal,
    skills: [
      { name: "Rust / WASM", icon: FastForward },
      { name: "Go / gRPC", icon: Activity },
      { name: "Node.js", icon: Box },
      { name: "PostgreSQL", icon: Database }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Globe,
    skills: [
      { name: "AWS / GCP", icon: Cloud },
      { name: "Docker / K8s", icon: Container },
      { name: "CI/CD Pipelines", icon: GitMerge },
      { name: "Terraform", icon: Workflow }
    ]
  },
  {
    title: "Core Expertise",
    icon: Workflow,
    skills: [
      { name: "System Design", icon: Maximize },
      { name: "CyberSecurity", icon: Shield },
      { name: "API Architecture", icon: Key },
      { name: "Performance Opt.", icon: Activity }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-6 py-32 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Zap className="w-3 h-3 text-white/60" />
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Technical Arsenal</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Expertise & <span className="text-white/30">Capabilities</span>
          </motion.h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 max-w-xs text-sm leading-relaxed"
        >
          A multi-disciplinary stack focused on performance, security, and scalable architecture.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: catIdx * 0.1 }}
            className="group p-10 rounded-[40px] glass-card border border-white/5 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] blur-[60px] rounded-full group-hover:bg-white/[0.05] transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-all duration-500">
                  <category.icon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div 
                    key={skillIdx} 
                    whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.04)' }}
                    className="p-6 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-start gap-4 transition-all duration-300 group/skill"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover/skill:border-white/20 transition-all">
                      <skill.icon className="w-5 h-5 text-white/30 group-hover/skill:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-white/50 group-hover/skill:text-white transition-colors leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

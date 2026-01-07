
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, Youtube, Twitter, 
  Monitor, Trophy, Github, 
  ArrowUpRight, Mail, Terminal 
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FluidBackground from './components/FluidBackground';
import BrandLogos from './components/BrandLogos';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Hackathons from './components/Hackathons';

const App: React.FC = () => {
  const socials = [
    { name: 'LinkedIn', icon: Linkedin, href: '#', tag: 'Professional' },
    { name: 'X', icon: Twitter, href: '#', tag: 'Thoughts' },
    { name: 'YouTube', icon: Youtube, href: '#', tag: 'Tutorials' },
    { name: 'Devpost', icon: Monitor, href: '#', tag: 'Builds' },
    { name: 'Hack2Skill', icon: Trophy, href: '#', tag: 'Competition' },
    { name: 'GitHub', icon: Github, href: '#', tag: 'Open Source' },
  ];

  return (
    <div className="relative min-h-screen w-full selection:bg-white/20 bg-black">
      {/* The animated fluid background layer */}
      <FluidBackground />
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col w-full">
        <Navbar />
        
        <main className="min-h-screen flex flex-col justify-center items-center px-6 pt-32">
          <Hero />
        </main>

        <About />
        <Skills />
        <Experience />

        <section className="w-full py-10 border-y border-white/[0.03] bg-gradient-to-b from-transparent to-black/40">
          <BrandLogos />
        </section>

        <Projects />
        <Hackathons />
        <Education />
        <Achievements />

        <footer className="w-full pt-40 pb-16 px-6 max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">Stay Connected</h3>
              </div>
              <p className="text-white/40 text-lg leading-relaxed max-w-md mb-12">
                I'm always open to discussing new projects, creative ideas or architectural opportunities.
              </p>
              <motion.a 
                href="mailto:hello@devflow.eng"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-sm hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all"
              >
                <Mail className="w-5 h-5" />
                hello@devflow.eng
              </motion.a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.2)' }}
                  className="p-6 rounded-[24px] glass-card border border-white/5 transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <social.icon className="w-6 h-6 text-white/20 group-hover:text-white transition-colors" />
                    <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-white font-bold text-lg group-hover:translate-x-1 transition-transform">{social.name}</h4>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">{social.tag}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/20 text-[11px] uppercase tracking-[0.5em] font-medium text-center md:text-left">
              &copy; {new Date().getFullYear()} DevFlow Engineering &bull; Systems Architect
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[11px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-[11px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Legal</a>
              <a href="#" className="text-[11px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-white/[0.01] to-transparent pointer-events-none -z-10" />
        </footer>
      </div>
    </div>
  );
};

export default App;

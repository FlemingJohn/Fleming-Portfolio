
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FluidBackground from './components/FluidBackground';
import BrandLogos from './components/BrandLogos';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';

const App: React.FC = () => {
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

        {/* About Section */}
        <About />
        
        {/* Experience Timeline */}
        <Experience />

        {/* Skills/Stack Section with Marquee */}
        <section className="w-full py-10 border-y border-white/[0.03] bg-gradient-to-b from-transparent to-black/40">
          <BrandLogos />
        </section>

        {/* New Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        <footer className="w-full py-16 mt-20 text-center border-t border-white/[0.03] relative">
          <p className="text-white/20 text-[11px] uppercase tracking-[0.5em] font-medium">
            &copy; {new Date().getFullYear()} DevFlow Engineering &bull; Systems Architect
          </p>
          <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none" />
        </footer>
      </div>
    </div>
  );
};

export default App;

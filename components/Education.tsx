
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: "M.S. in Computer Science",
    school: "Stanford University",
    year: "2016",
    details: "Specialized in Artificial Intelligence and Distributed Systems. Research focused on low-latency network protocols."
  },
  {
    degree: "B.S. in Software Engineering",
    school: "MIT",
    year: "2014",
    details: "Graduated with Honors. Core focus on Algorithms, Data Structures, and Operating System design."
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="w-full max-w-7xl mx-auto px-6 py-32 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <GraduationCap className="w-3 h-3 text-white/60" />
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Academic Foundation</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Educational <span className="text-white/30">Background</span>
          </motion.h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/40 max-w-xs text-sm leading-relaxed"
        >
          A foundation built on rigorous theoretical research and practical software engineering principles.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.03)" }}
            className="group relative p-10 rounded-[40px] glass-card border border-white/5 overflow-hidden transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <BookOpen className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{edu.degree}</h3>
                  <p className="text-white/40 text-sm font-medium">{edu.school} &bull; {edu.year}</p>
                </div>
              </div>
              
              <p className="text-white/30 text-base leading-relaxed font-light group-hover:text-white/50 transition-colors">
                {edu.details}
              </p>
              
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-3">
                <Award className="w-4 h-4 text-white/20" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">Distinction Awarded</span>
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-white/[0.05] transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

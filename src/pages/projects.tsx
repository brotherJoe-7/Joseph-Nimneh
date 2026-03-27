import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-20 pb-40">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle 
          title="Project Anthology" 
          subtitle="A comprehensive showcase of my work in Software Engineering, Cybersecurity, and AI Infrastructure."
        />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-16 bg-slate-50 rounded-[3rem] border border-slate-100 text-center relative overflow-hidden group"
      >
        <div className="absolute top-0 left-0 w-2 h-full bg-red-600 group-hover:w-4 transition-all duration-500"></div>
        <h3 className="text-3xl font-black mb-6 tracking-tight text-slate-900">Custom Engineering Solutions</h3>
        <p className="text-slate-500 mb-10 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
          Need a specialized system audit, a secure cloud migration, or an AI-driven automation tool? Let&apos;s discuss your specific technical requirements.
        </p>
        <a href="mailto:contact@josephnimneh.dev" className="inline-flex items-center px-10 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl shadow-slate-200">
          Inquire for Custom Work <ArrowRight className="ml-3" size={20} />
        </a>
      </motion.div>
    </div>
  );
}

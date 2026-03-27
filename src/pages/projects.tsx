import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-32">

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle
          title="Project Anthology"
          subtitle="Real-world applications built across web, AI, mobile, and backend infrastructure — each solving a genuine problem."
        />
      </motion.div>

      {/* Project grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Custom work CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 rounded-3xl overflow-hidden relative"
      >
        <div className="bg-slate-900 p-8 sm:p-14">
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-600/10 rounded-full -mr-36 -mt-36 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600/20 rounded-2xl flex items-center justify-center">
                  <Briefcase size={20} className="text-red-400" />
                </div>
                <span className="text-red-400 text-xs font-black uppercase tracking-widest">Open for Work</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                Have a Project in Mind?
              </h3>
              <p className="text-slate-400 font-medium leading-relaxed max-w-lg">
                Open to internships, freelance work, and collaborative projects in AI, software development, and cybersecurity.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-700 active:scale-95 transition-all shadow-xl shadow-red-900/30 whitespace-nowrap"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

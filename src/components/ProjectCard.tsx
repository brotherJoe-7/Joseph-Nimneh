import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-red-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-red-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 backdrop-blur-[2px]">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white text-red-600 rounded-full hover:scale-110 transition-transform shadow-xl"
            >
              <ExternalLink size={24} />
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white text-red-600 rounded-full hover:scale-110 transition-transform shadow-xl"
            >
              <Github size={24} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-10 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-100 group-hover:bg-red-50 group-hover:text-red-600 group-hover:border-red-100 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-red-600 transition-colors tracking-tight italic">
          {project.title}
        </h3>
        <p className="text-slate-500 text-base font-medium leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Tag } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col h-full shadow-sm hover:shadow-2xl hover:border-red-200 dark:hover:border-red-900 hover:-translate-y-1 transition-all duration-500"
    >
      {/* Image Linked to Case Study */}
      <Link href={`/projects/${project.id}`} className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-100 block cursor-pointer">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay with action buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-between p-5">
          <span className="text-white text-xs font-black uppercase tracking-widest opacity-80 flex items-center gap-1">View Case Study</span>
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                aria-label="Live site"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-lg"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                aria-label="GitHub"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-red-600 hover:text-white transition-all shadow-lg"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">

        {/* Title Linked to Case Study */}
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors cursor-pointer">
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed flex-grow mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tags — scroll on mobile so no wrapping overflow */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
          {project.tags.slice(0, 7).map(tag => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-slate-800 rounded-full text-[11px] font-black uppercase tracking-wide text-slate-500 dark:text-slate-300 group-hover:border-red-100 dark:group-hover:border-red-900/50 group-hover:bg-red-50 dark:group-hover:bg-red-900/10 group-hover:text-red-600 dark:group-hover:text-red-500 transition-all whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 7 && (
            <span className="inline-flex items-center px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[11px] font-black text-slate-400">
              +{project.tags.length - 7} more
            </span>
          )}
        </div>

        {/* CTA row */}
        <div className="flex gap-3 mt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-600 text-white rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-red-700 active:scale-95 transition-all shadow-md shadow-red-100"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-black text-sm hover:border-red-400 dark:hover:border-red-500 hover:text-red-600 dark:hover:text-red-500 active:scale-95 transition-all"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

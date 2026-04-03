import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, MonitorPlay, Layers, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects, Project } from '@/data/projects';
import Layout from '@/components/Layout';

export default function ProjectCaseStudy({ project }: { project: Project }) {
  if (!project) return null;

  return (
    <Layout
      title={project.title}
      description={project.description}
      ogImage={project.image}
      ogUrl={`/projects/${project.id}`}
    >
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-12 pb-32 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          
          <Link href="/projects" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-red-600 dark:hover:text-red-500 transition-colors mb-10 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
          </Link>

          {/* Hero Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-3xl leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-10">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-black text-base shadow-xl shadow-red-200 hover:bg-red-700 transition-all">
                  <MonitorPlay size={20} /> View Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white rounded-full font-black text-base hover:border-slate-400 dark:hover:border-red-500 transition-all">
                  <Github size={20} /> View Source Code
                </a>
              )}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mb-20"
          >
            <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" priority />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="md:col-span-2 space-y-16">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                    <Layers className="text-red-600 dark:text-red-400" size={20} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">The Problem</h2>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{project.problem}</p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                    <Cpu className="text-red-600 dark:text-red-400" size={20} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white">The Solution</h2>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8">{project.solution}</p>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Features Built</h3>
                <ul className="space-y-4">
                  {project.keyFeatures?.map((feature, i) => (
                    <li key={i} className="flex flex-start gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full flex items-center justify-center shrink-0 mt-0.5">✓</div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar Data */}
            <div className="space-y-10">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 hover:border-red-500 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Project Results</h3>
                <p className="text-lg font-medium leading-relaxed">{project.results}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.id === params?.slug);
  
  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
};

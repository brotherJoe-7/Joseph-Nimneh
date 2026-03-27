import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, Cpu, Shield, Globe, Database } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { testimonials } from '@/data/testimonials';
import GitHubStats from '@/components/GitHubStats';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

      {/* ── Hero ── */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center py-16 gap-6">

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-red-600 shadow-2xl shadow-red-100"
        >
          <Image src="/profile.jpeg" alt="Joseph Nimneh" layout="fill" objectFit="cover" priority />
        </motion.div>

        {/* Status badge */}
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-slate-900 leading-none"
        >
          Joseph{' '}
          <span className="text-red-600">Nimneh</span>
        </motion.h1>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
            3rd Year IT Student @ Limkokwing University · Graduating 2027
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="text-slate-600 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed font-medium"
        >
          Studying Information Technology with a focus on{' '}
          <span className="text-red-600 font-bold border-b-2 border-red-200">Cybersecurity</span>,{' '}
          <span className="text-red-600 font-bold border-b-2 border-red-200">AI</span>, and{' '}
          <span className="text-red-600 font-bold border-b-2 border-red-200">Software Development</span>.
        </motion.p>

        {/* CTA buttons - always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-full font-black text-base sm:text-lg hover:bg-red-700 active:scale-95 transition-all shadow-xl shadow-red-200"
          >
            Explore My Work <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 rounded-full font-black text-base sm:text-lg hover:border-red-600 hover:text-red-600 active:scale-95 transition-all shadow-sm"
          >
            View Resume <span className="ml-2 opacity-30">↗</span>
          </Link>
        </motion.div>
      </section>

      {/* ── Career Paths ── */}
      <section className="py-20 border-y border-slate-100">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-black uppercase text-red-600 tracking-tight">Career Paths</h2>
            <p className="text-slate-500 leading-relaxed text-sm">
              As an IT student at Limkokwing University of Creative Technology with hands-on project experience, I am building toward a versatile technical professional career.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Software Engineer",
              "Software Developer",
              "IT Specialist",
              "Web Developer",
              "System Analyst",
              "IT Consultant",
              "Cybersecurity Analyst",
              "Quality Assurance Analyst",
              "Entrepreneurship",
            ].map((role) => (
              <div
                key={role}
                className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-red-300 hover:shadow-md transition-all"
              >
                <div className="w-2.5 h-2.5 bg-red-600 rounded-full shrink-0"></div>
                <span className="text-sm font-semibold text-slate-700 leading-tight">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-20" id="work">
        <SectionTitle
          title="Featured Projects"
          subtitle="Real-world applications built with modern web technologies and AI integration."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-600 text-red-600 rounded-full font-black text-base hover:bg-red-600 hover:text-white transition-all"
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── Core Competencies ── */}
      <section className="py-20 bg-slate-900 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-8 lg:px-12 sm:rounded-[2.5rem] overflow-hidden relative">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-900/20 rounded-full -ml-40 -mb-40 blur-3xl pointer-events-none" />

        <SectionTitle
          title="Core Competencies"
          subtitle="Languages, frameworks, and specialisations that power my projects."
          align="center"
          invert
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-6xl mx-auto">
          {skills.map((skill, i) => {
            const icons: Record<string, React.ReactNode> = {
              Specializations: <Shield size={20} />,
              Languages:       <Terminal size={20} />,
              'Frameworks & Web': <Code size={20} />,
              'IT & Engineering': <Database size={20} />,
              'Tools & Infrastructure': <Cpu size={20} />,
            };
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-red-500/40 transition-all group"
              >
                <h3 className="text-base font-black mb-5 flex items-center gap-3 text-white uppercase tracking-wider">
                  <span className="text-red-400 group-hover:text-red-300 transition-colors">
                    {icons[skill.category] ?? <Globe size={20} />}
                  </span>
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-white/10 text-white/80 text-xs font-semibold rounded-full border border-white/10 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── GitHub Activity ── */}
      <section className="py-20">
        <GitHubStats username="brotherJoe-7" />
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20">
        <SectionTitle
          title="Colleague Feedback"
          subtitle="Perspectives from peers and collaborators I have worked with."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-10 bg-slate-50 border border-slate-100 rounded-3xl relative hover:shadow-xl transition-all"
            >
              <div className="text-7xl text-red-100 absolute top-6 right-8 font-black select-none leading-none">"</div>
              <p className="text-slate-700 mb-8 font-medium leading-relaxed text-lg relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center font-black text-white text-xl shadow-lg shadow-red-100">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-slate-900">{t.name}</h4>
                  <p className="text-slate-500 text-sm font-semibold">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 mb-16">
        <div className="p-12 sm:p-16 bg-slate-900 rounded-[2.5rem] text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-transparent pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-black mb-6 relative z-10 tracking-tight">
            Ready to Build Something <span className="text-red-500">Secure?</span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto relative z-10 font-medium">
            Open to collaboration, internships, and freelance projects in AI, software development, and cybersecurity.
          </p>
          <a
            href="/Joseph_Nimneh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-red-600 text-white rounded-full font-black text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-900/40 relative z-10"
          >
            View Resume <ArrowRight className="ml-3" size={22} />
          </a>
        </div>
      </section>

    </div>
  );
}

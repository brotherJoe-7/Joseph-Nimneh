import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Mail, Linkedin, Github, ExternalLink,
  Award, Briefcase, GraduationCap, Users, Zap, Globe, Quote
} from 'lucide-react';

const JosephResume = () => {
  const achievements = [
    'Freshman of the Year (Campus Gospel Award)',
    'Campus Evangelist of the Year (Campus Gospel Award)',
    'Recognized among best students at Limkokwing University',
  ];

  const hackathons = [
    {
      title: 'Civic AI Hackathon',
      description:
        'Architected civic feedback system enabling citizens to report issues (water, electricity, roads) via WhatsApp during Sierra Leone civic festive celebration.',
      icon: <Globe size={20} className="text-blue-500" />,
    },
    {
      title: 'Campus AI Hackathon',
      description:
        'Collaborated on crop monitoring system measuring soil humidity, water, and air quality.',
      icon: <Zap size={20} className="text-amber-500" />,
    },
  ];

  const leadership = [
    {
      role: 'President',
      org: 'Limkokwing Christian Fellowship',
      period: 'Present — End of 2026',
      desc: 'Leading spiritual and community initiatives on campus.',
    },
    {
      role: 'Leader',
      org: 'The School of Wisdom',
      period: 'Global Initiative',
      desc: 'Collaborating with pastors and leaders from America and beyond.',
    },
  ];

  const experience = [
    {
      role: 'Personal Assistant',
      company: 'Dr. Modupe Taylor-Pearce',
      desc: 'IT management, business meetings coordination, and strategic errands.',
    },
  ];

  const cardBase =
    'bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 shadow-sm transition-colors duration-300';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-4 sm:px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* ── Header Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${cardBase} flex flex-col md:flex-row justify-between items-center gap-8`}
        >
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-2">
              Joseph Nimneh
            </h1>
            <p className="text-red-600 dark:text-red-500 font-bold uppercase tracking-[0.2em] text-sm mb-6">
              IT Student &amp; Visionary Leader
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="mailto:jnimneh20@gmail.com"
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-500 font-bold text-xs uppercase tracking-widest transition-colors">
                <Mail size={16} /> Email
              </a>
              <a href="https://www.linkedin.com/in/joseph-nimneh-597782296" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-500 font-bold text-xs uppercase tracking-widest transition-colors">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/brotherJoe-7" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-500 font-bold text-xs uppercase tracking-widest transition-colors">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
          <a
            href="/Joseph_Nimneh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 dark:shadow-red-900/40 active:scale-95 whitespace-nowrap"
          >
            <ExternalLink size={20} /> View Full PDF
          </a>
        </motion.div>

        {/* ── Grid Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left Column */}
          <div className="md:col-span-1 space-y-8">

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={cardBase}
            >
              <div className="flex items-center gap-3 mb-6 text-red-600 dark:text-red-500">
                <GraduationCap size={22} />
                <h2 className="font-black uppercase tracking-widest text-xs">Education</h2>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Limkokwing University</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">Information Technology</p>
                <p className="text-red-600/70 dark:text-red-500/70 text-[10px] font-black uppercase tracking-widest mt-2">Graduating 2027</p>
              </div>
            </motion.section>

            {/* Honors */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={cardBase}
            >
              <div className="flex items-center gap-3 mb-6 text-red-600 dark:text-red-500">
                <Award size={22} />
                <h2 className="font-black uppercase tracking-widest text-xs">Honors</h2>
              </div>
              <ul className="space-y-4">
                {achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm font-medium leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">

            {/* Vision */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 dark:bg-slate-800 border dark:border-slate-700 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-8 text-white/10 w-20 h-20" />
              <div className="relative z-10">
                <h2 className="text-white/40 font-black uppercase tracking-[0.3em] text-[10px] mb-4">The Vision</h2>
                <p className="text-lg md:text-xl font-bold italic leading-relaxed text-slate-200">
                  &ldquo;Scaling digital marketplaces across Africa to empower SMEs and farmers through AI-driven commerce, trust, and civic engagement.&rdquo;
                </p>
              </div>
            </motion.section>

            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={cardBase}
            >
              <div className="flex items-center gap-3 mb-8 text-red-600 dark:text-red-500">
                <Briefcase size={22} />
                <h2 className="font-black uppercase tracking-widest text-xs">Professional Experience</h2>
              </div>
              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-600 border-4 border-white dark:border-slate-900 shadow-sm" />
                    <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">{exp.role}</h3>
                    <p className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-xs mb-3">{exp.company}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Hackathons */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className={cardBase}
            >
              <div className="flex items-center gap-3 mb-8 text-red-600 dark:text-red-500">
                <Zap size={22} />
                <h2 className="font-black uppercase tracking-widest text-xs">Hackathon Participations</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hackathons.map((hack, i) => (
                  <div key={i} className="p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl hover:border-red-200 dark:hover:border-red-900 transition-colors">
                    <div className="mb-4">{hack.icon}</div>
                    <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-sm mb-2">{hack.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">{hack.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Leadership */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={cardBase}
            >
              <div className="flex items-center gap-3 mb-8 text-red-600 dark:text-red-500">
                <Users size={22} />
                <h2 className="font-black uppercase tracking-widest text-xs">Kingdom &amp; Leadership</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {leadership.map((lead, i) => (
                  <div key={i} className="p-5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl">
                    <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-tight mb-1">{lead.role}</h3>
                    <p className="text-red-600 dark:text-red-500 font-black uppercase tracking-[0.1em] text-[10px] mb-2">{lead.org}</p>
                    <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest mb-3">{lead.period}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">{lead.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default JosephResume;

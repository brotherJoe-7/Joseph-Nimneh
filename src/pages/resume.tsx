import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { 
  Download, 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Users, 
  Zap,
  Globe,
  Quote
} from 'lucide-react';

const JosephResume = () => {
  const achievements = [
    "Freshman of the Year (Campus Gospel Award)",
    "Campus Evangelist of the Year (Campus Gospel Award)",
    "Recognized among best students at Limkokwing University"
  ];

  const hackathons = [
    {
      title: "Civic AI Hackathon",
      description: "Architected civic feedback system enabling citizens to report issues (water, electricity, roads) via WhatsApp during Sierra Leone civic festive celebration",
      icon: <Globe className="text-blue-500" />
    },
    {
      title: "Campus AI Hackathon",
      description: "Collaborated on crop monitoring system measuring soil humidity, water, and air quality",
      icon: <Zap className="text-amber-500" />
    }
  ];

  const leadership = [
    {
      role: "President",
      org: "Limkokwing Christian Fellowship",
      period: "Present - End of 2026",
      desc: "Leading spiritual and community initiatives on campus."
    },
    {
      role: "Leader",
      org: "The School of Wisdom",
      period: "Global Initiative",
      desc: "Collaborating with pastors and leaders from America and beyond."
    }
  ];

  const experience = [
    {
      role: "Personal Assistant",
      company: "Dr. Modupe Taylor-Pearce",
      desc: "IT management, business meetings coordination, and strategic errands.",
      icon: <Briefcase />
    }
  ];

  return (
    <Layout title="Resume | Joseph Nimneh" description="Professional Resume of Joseph Nimneh - IT Student, Leader, and Innovator.">
      <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-2">Joseph Nimneh</h1>
              <p className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-6">IT Student & Visionary Leader</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="mailto:brotherjoseph79@gmail.com" className="flex items-center gap-2 text-slate-500 hover:text-red-600 font-bold text-xs uppercase tracking-widest transition-colors">
                  <Mail size={16} /> Email
                </a>
                <a href="https://www.linkedin.com/in/joseph-nimneh-597782296" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-red-600 font-bold text-xs uppercase tracking-widest transition-colors">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://github.com/brotherJoe-7" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-red-600 font-bold text-xs uppercase tracking-widest transition-colors">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
            <a 
              href="/Joseph_Nimneh_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 active:scale-95 text-center"
            >
              <ExternalLink size={20} /> View Full PDF
            </a>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Left Column: Education & Achievements */}
            <div className="md:col-span-1 space-y-8">
              <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6 text-red-600">
                  <GraduationCap size={24} />
                  <h2 className="font-black uppercase tracking-widest text-sm">Education</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-slate-900">Limkokwing University</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">IT Creative Technology</p>
                    <p className="text-red-600/60 text-[10px] font-black uppercase tracking-tighter mt-1">Graduating 2027</p>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6 text-red-600">
                  <Award size={24} />
                  <h2 className="font-black uppercase tracking-widest text-sm">Honors</h2>
                </div>
                <ul className="space-y-4">
                  {achievements.map((item, i) => (
                    <li key={i} className="text-slate-600 text-sm font-medium leading-relaxed flex gap-3">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Column: Experience, Hackathons, Leadership */}
            <div className="md:col-span-2 space-y-8">
              
              {/* Vision Section */}
              <section className="bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden">
                <Quote className="absolute top-6 right-8 text-white/10 w-24 h-24" />
                <div className="relative z-10">
                  <h2 className="text-white/40 font-black uppercase tracking-[0.3em] text-[10px] mb-4">The Vision</h2>
                  <p className="text-lg md:text-xl font-bold italic leading-relaxed text-slate-200">
                    "Scaling digital marketplaces across Africa to empower SMEs and farmers through AI-driven commerce, trust, and civic engagement."
                  </p>
                </div>
              </section>

              {/* Experience & PA Role */}
              <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-8 text-red-600">
                  <Briefcase size={24} />
                  <h2 className="font-black uppercase tracking-widest text-sm">Professional Experience</h2>
                </div>
                <div className="space-y-8">
                  {experience.map((exp, i) => (
                    <div key={i} className="group relative pl-8 border-l-2 border-slate-100">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-sm" />
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors uppercase tracking-tight">{exp.role}</h3>
                      <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-3">{exp.company}</p>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Hackathons */}
              <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-8 text-red-600">
                  <Zap size={24} />
                  <h2 className="font-black uppercase tracking-widest text-sm">Hackathon Wins</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hackathons.map((hack, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-200 transition-colors">
                      <div className="mb-4">{hack.icon}</div>
                      <h3 className="font-black text-slate-900 uppercase tracking-tight text-sm mb-2">{hack.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-medium">{hack.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Leadership */}
              <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-8 text-red-600">
                  <Users size={24} />
                  <h2 className="font-black uppercase tracking-widest text-sm">Kingdom & Leadership</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {leadership.map((lead, i) => (
                    <div key={i}>
                      <h3 className="text-slate-900 font-bold text-sm uppercase tracking-tight mb-1">{lead.role}</h3>
                      <p className="text-red-600 font-black uppercase tracking-[0.1em] text-[10px] mb-2">{lead.org}</p>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">{lead.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JosephResume;

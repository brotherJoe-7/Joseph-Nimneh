import React, { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, User, Send, CheckCircle2, Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40">
      <SectionTitle
        title="Get in Touch"
        subtitle="Open to collaboration, internships, and freelance work. I typically reply within 24 hours."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-stretch max-w-6xl mx-auto mt-8">

        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h3 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">Direct Contact</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Based in West Africa, collaborating with people worldwide. Studying IT at university and actively building projects.
            </p>
          </div>

          {/* Email */}
          <a
            href="mailto:brotherjoseph79@gmail.com"
            className="group flex items-center gap-5 p-6 bg-white border border-slate-100 rounded-3xl hover:border-red-300 hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
              <Mail size={26} />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">Email</p>
              <p className="text-lg font-black text-slate-900 break-all">brotherjoseph79@gmail.com</p>
            </div>
          </a>

          {/* Social presence */}
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
            <h4 className="text-xs font-black uppercase tracking-widest text-red-600 mb-6">Online Profiles</h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/brotherJoe-7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-700 font-black text-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"
              >
                <Github size={20} /> github.com/brotherJoe-7
              </a>
              <a
                href="https://www.linkedin.com/in/joseph-nimneh-597782296"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-700 font-black text-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"
              >
                <Linkedin size={20} /> Joseph Nimneh — LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col justify-center"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-8">
                <CheckCircle2 size={48} className="text-red-600" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-slate-900 tracking-tight">Message Sent!</h3>
              <p className="text-slate-500 text-lg font-medium">Thank you — I will get back to you shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-10 px-8 py-3 border-2 border-red-600 text-red-600 font-black rounded-full hover:bg-red-600 hover:text-white transition-all"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  <User size={12} className="inline mr-1.5" /> Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Samuel Johnson"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  <Mail size={12} className="inline mr-1.5" /> Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="samuel@company.com"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
                  <MessageSquare size={12} className="inline mr-1.5" /> Message
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-5 bg-red-600 text-white rounded-full font-black text-lg uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-100 active:scale-95"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

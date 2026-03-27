import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Shield, Cpu, Terminal } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Securing the Future: My Journey into Cybersecurity",
    excerpt: "Transitioning from a general IT background to specialized threat detection and network security. Here is what I've learned about the current landscape.",
    date: "March 24, 2026",
    readTime: "6 min read",
    tag: "Cybersecurity",
    icon: <Shield size={18} />,
  },
  {
    id: 2,
    title: "AI Integration in Modern IT Infrastructure",
    excerpt: "Exploring how artificial intelligence is automating system analysis and improving predictive maintenance in large-scale network environments.",
    date: "March 10, 2026",
    readTime: "8 min read",
    tag: "AI & Tech",
    icon: <Cpu size={18} />,
  },
  {
    id: 3,
    title: "The Architecture of a Professional Portfolio",
    excerpt: "Using Next.js, TypeScript, and Tailwind CSS to build high-performance web applications that stand out in the industry.",
    date: "February 15, 2026",
    readTime: "5 min read",
    tag: "Software Engineering",
    icon: <Terminal size={18} />,
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-20 pb-40">
      <SectionTitle 
        title="Journal & Insights" 
        subtitle="Exploring the intersection of Information Technology, Cybersecurity, and Artificial Intelligence."
      />

      <div className="grid gap-12 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogPosts.map((post, i) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs font-black uppercase tracking-widest transition-colors group-hover:bg-red-600 group-hover:text-white">
                <span className="mr-2">{post.icon}</span>
                {post.tag}
              </span>
              <div className="flex items-center space-x-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span className="flex items-center"><Calendar size={12} className="mr-1.5" /> {post.date}</span>
                <span className="flex items-center"><Clock size={12} className="mr-1.5" /> {post.readTime}</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-black mb-6 leading-tight text-slate-900 group-hover:text-red-600 transition-colors">
              {post.title}
            </h3>
            
            <p className="text-slate-500 text-base mb-10 leading-relaxed font-medium flex-grow">
              {post.excerpt}
            </p>
            
            <Link href={`/blog/${post.id}`} className="inline-flex items-center font-black text-sm uppercase tracking-[0.2em] text-red-600 hover:text-red-700 transition-colors pt-6 border-t border-slate-50">
              Read Insight <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.article>
        ))}
      </div>
      
      {/* Professional Newsletter Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-32 p-12 bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <h4 className="text-3xl md:text-4xl font-black mb-4 text-white tracking-tighter italic">Stay Ahead of the <span className="text-red-500">Curve</span></h4>
            <p className="text-slate-400 text-lg font-medium max-w-md">Subscribe for bi-weekly deep dives into Cybersecurity trends and AI infrastructure strategies.</p>
          </div>
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your professional email" 
              className="px-8 py-5 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 w-full lg:w-[350px] text-white font-medium"
            />
            <button className="px-10 py-5 bg-red-600 text-white rounded-full font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-900/40">
              Subscribe
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

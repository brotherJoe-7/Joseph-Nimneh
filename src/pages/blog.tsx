import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Shield, Cpu, Terminal } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { client } from '../../sanity/lib/client';
import groq from 'groq';

const tagIcons: Record<string, React.ReactNode> = {
  'Cybersecurity':       <Shield size={16} />,
  'AI & Technology':     <Cpu size={16} />,
  'Software Engineering':<Terminal size={16} />,
};

export default function BlogPage({ sanityPosts = [] }: { sanityPosts: any[] }) {
  const displayPosts = sanityPosts.length > 0 ? sanityPosts : blogPosts;

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    try {
      return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch { return dateStr; }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40">
      <SectionTitle
        title="Journal & Insights"
        subtitle="Exploring Information Technology, Cybersecurity, AI, and Software Development — topics I study, build, and care about."
      />

      {/* Post grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {displayPosts.map((post, i) => (
          <motion.article
            key={post._id || post.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
          >
            {/* Colour tag bar */}
            <div className={`h-1.5 w-full ${i % 3 === 0 ? 'bg-red-500' : i % 3 === 1 ? 'bg-purple-500' : 'bg-blue-500'}`} />

            <div className="p-8 flex flex-col flex-grow">
              {/* Tag + meta */}
              <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${post.tagColor || 'bg-slate-100 text-slate-600'}`}>
                  {tagIcons[post.tag] ?? null}
                  {post.tag}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                  <Clock size={11} /> {post.readTime || '5 min read'}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-black leading-snug text-slate-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed flex-grow mb-6">
                {post.excerpt}
              </p>

              {/* Footer row */}
              <div className="flex items-center justify-between pt-5 border-t border-slate-50 dark:border-slate-800">
                <span className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  <Calendar size={12} /> {post.publishedAt ? formatDate(post.publishedAt) : post.date}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-red-600 dark:text-red-500 hover:gap-3 transition-all"
                >
                  Read <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-28 p-10 sm:p-14 bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden relative dark:bg-slate-950 dark:border dark:border-slate-800"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full -mr-40 -mt-40 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">Stay in the Loop</h3>
            <p className="text-slate-400 font-medium max-w-md">
              Get notified when I publish new insights on Cybersecurity, AI, and Software Development.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600 w-full lg:w-72 font-medium"
            />
            <button className="px-8 py-4 bg-red-600 text-white rounded-full font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-900/30 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export async function getStaticProps() {
  const query = groq`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      "tag": categories[0]->title,
      "tagColor": categories[0]->color,
      publishedAt,
      excerpt,
      readTime
    }
  `;
  
  try {
    const sanityPosts = await client.fetch(query);
    return {
      props: { sanityPosts },
      revalidate: 10,
    };
  } catch (error) {
    return { props: { sanityPosts: [] }, revalidate: 10 };
  }
}

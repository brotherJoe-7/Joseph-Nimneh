import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Shield, Cpu, Terminal, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { client } from '../../sanity/lib/client';
import groq from 'groq';

const tagIcons: Record<string, React.ReactNode> = {
  'Cybersecurity':        <Shield size={14} />,
  'AI & Technology':      <Cpu size={14} />,
  'Software Engineering': <Terminal size={14} />,
};

const accentColors = [
  { bar: 'bg-red-500',    badge: 'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-400' },
  { bar: 'bg-violet-500', badge: 'bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-400' },
  { bar: 'bg-blue-500',   badge: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400' },
];

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
        {displayPosts.map((post, i) => {
          const accent = accentColors[i % 3];
          return (
            <motion.article
              key={post._id || post.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-950/50 hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              {/* Colour accent bar */}
              <div className={`h-1.5 w-full ${accent.bar}`} />

              <div className="p-7 flex flex-col flex-grow gap-4">
                {/* Tag + read time */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest ${accent.badge}`}>
                    {tagIcons[post.tag] ?? <BookOpen size={14} />}
                    {post.tag ?? 'General'}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    <Clock size={11} /> {post.readTime || '5 min read'}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-black leading-snug text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                  <span className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    <Calendar size={11} /> {post.publishedAt ? formatDate(post.publishedAt) : post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug?.current ?? post.slug}`}
                    className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-red-600 dark:text-red-500 hover:gap-3 transition-all group/link"
                  >
                    Read <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-28 p-10 sm:p-14 bg-slate-900 dark:bg-slate-950 border dark:border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full -mr-40 -mt-40 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">Stay in the Loop</h3>
            <p className="text-slate-400 font-medium max-w-md leading-relaxed">
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
      publishedAt,
      excerpt,
      readTime
    }
  `;
  try {
    const sanityPosts = await client.fetch(query);
    return { props: { sanityPosts }, revalidate: 10 };
  } catch {
    return { props: { sanityPosts: [] }, revalidate: 10 };
  }
}

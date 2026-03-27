import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts, BlogPost } from '@/data/blog';
import ShareButtons from '@/components/ShareButtons';
import WalineComments from '@/components/WalineComments';
import Head from 'next/head';
import { PortableText } from '@portabletext/react';
import { client } from '../../../sanity/lib/client';
import groq from 'groq';

const SITE_URL = 'https://joseph-nimneh.vercel.app';

interface Props {
  post: BlogPost | any;
  isLegacy?: boolean;
}

export default function BlogPostPage({ post, isLegacy }: Props) {
  const postUrl = `${SITE_URL}/blog/${post.slug || post.slug?.current}`;

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    try {
      return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch { return dateStr; }
  };

  return (
    <>
      <Head>
        <title>{post.title} | Joseph Nimneh</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | Joseph Nimneh`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`${SITE_URL}/blog/${post.slug}`} />
        <meta property="og:image" content={`${SITE_URL}/profile.jpeg`} />
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-40 max-w-3xl">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-400 hover:text-red-600 transition-colors"
          >
            <ArrowLeft size={16} /> All Articles
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 ${post.tagColor}`}>
            {post.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-slate-500 text-xl font-medium leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2"><Calendar size={14} /> {post.publishedAt ? formatDate(post.publishedAt) : post.date}</span>
            <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime || '5 min read'}</span>
            <span>By Joseph Nimneh</span>
          </div>
        </motion.header>

        <hr className="border-slate-100 mb-12" />

        {/* Article body */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-slate prose-lg max-w-none
            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
            prose-strong:text-slate-900 prose-strong:font-black
            prose-li:text-slate-600 prose-li:font-medium
            prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline"
        >
          {isLegacy ? (
            post.content.split('\n\n').map((block: string, i: number) => {
              if (block.startsWith('**') && block.endsWith('**')) {
                return <h2 key={i} className="text-2xl font-black mt-10 mb-4 text-slate-900">{block.replace(/\*\*/g, '')}</h2>;
              }
              if (block.startsWith('- ') || block.startsWith('1.')) {
                const items = block.split('\n').filter(Boolean);
                return (
                  <ul key={i} className="my-4 space-y-2 list-none pl-0">
                    {items.map((item: string, j: number) => (
                      <li key={j} className="flex items-start gap-3 text-slate-600 font-medium">
                        <span className="w-2 h-2 rounded-full bg-red-600 mt-2.5 shrink-0"></span>
                        <span dangerouslySetInnerHTML={{
                          __html: item.replace(/^[-\d.]+\s/, '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                        }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-slate-600 text-lg font-medium leading-relaxed my-4"
                  dangerouslySetInnerHTML={{
                    __html: block.replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-900 font-black">$1</strong>')
                  }} 
                />
              );
            })
          ) : (
            <PortableText value={post.body} />
          )}
        </motion.article>

        {/* Social share */}
        <ShareButtons url={postUrl} title={post.title} />

        {/* Comments */}
        <WalineComments path={`/blog/${post.slug}`} />

      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let sanitySlugs: string[] = [];
  try {
    sanitySlugs = await client.fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`);
  } catch (e) {
    console.warn("Sanity fetch failed, falling back to static blog posts only.");
  }

  const paths = [
    ...blogPosts.map(p => ({ params: { slug: p.slug } })),
    ...sanitySlugs.map((slug: string) => ({ params: { slug } }))
  ];

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Check legacy hardcoded posts first
  const legacyPost = blogPosts.find(p => p.slug === params?.slug);
  if (legacyPost) {
    return { props: { post: legacyPost, isLegacy: true } };
  }

  // Otherwise, query Sanity Database
  const query = groq`*[_type == "post" && slug.current == $slug][0] {
    title, excerpt, "tag": categories[0]->title, "tagColor": categories[0]->color,
    publishedAt, readTime, body
  }`;
  
  try {
    const sanityPost = await client.fetch(query, { slug: params?.slug });
    if (!sanityPost) return { notFound: true };
    return { props: { post: sanityPost, isLegacy: false }, revalidate: 10 };
  } catch (error) {
    return { notFound: true };
  }
};

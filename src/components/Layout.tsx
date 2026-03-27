import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import AIAssistant from './AIAssistant';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SITE_URL = 'https://joseph-nimneh.vercel.app';
const DEFAULT_TITLE = 'Joseph Nimneh | Portfolio';
const DEFAULT_DESC = 'IT Student specialising in Cybersecurity, AI, and Software Development. Based in West Africa, building real-world digital solutions.';
const DEFAULT_IMAGE = `${SITE_URL}/profile.jpeg`;

export default function Layout({ children, title, description, ogImage, ogUrl }: LayoutProps) {
  const resolvedTitle = title ? `${title} | Joseph Nimneh` : DEFAULT_TITLE;
  const resolvedDesc = description ?? DEFAULT_DESC;
  const resolvedImage = ogImage ?? DEFAULT_IMAGE;
  const resolvedUrl = ogUrl ? `${SITE_URL}${ogUrl}` : SITE_URL;

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Primary */}
        <title>{resolvedTitle}</title>
        <meta name="description" content={resolvedDesc} />
        <meta name="author" content="Joseph Nimneh" />
        <meta name="keywords" content="Joseph Nimneh, IT, Cybersecurity, AI, Software Developer, Sierra Leone, Portfolio" />

        {/* Open Graph — WhatsApp, Facebook, LinkedIn */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content={resolvedUrl} />
        <meta property="og:title"       content={resolvedTitle} />
        <meta property="og:description" content={resolvedDesc} />
        <meta property="og:image"       content={resolvedImage} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name"   content="Joseph Nimneh" />
        <meta property="og:locale"      content="en_US" />

        {/* Twitter card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={resolvedTitle} />
        <meta name="twitter:description" content={resolvedDesc} />
        <meta name="twitter:image"       content={resolvedImage} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={resolvedUrl} />
      </Head>

      <Navbar />

      <main className="flex-grow pt-24">
        {children}
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}

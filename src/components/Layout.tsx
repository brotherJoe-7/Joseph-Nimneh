import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { generateNextSeo, generateDefaultSeo } from 'next-seo/pages';
import { nextSeoConfig } from '../seo/next-seo.config';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const pageTitle = title ? `${title} | Joseph Nimneh` : undefined;

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {generateDefaultSeo(nextSeoConfig)}
        {title && generateNextSeo({ title: pageTitle, description })}
      </Head>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}

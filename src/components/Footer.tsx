import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const socials = [
  { icon: <Github size={22} />, href: 'https://github.com/brotherJoe-7', label: 'GitHub' },
  { icon: <Linkedin size={22} />, href: 'https://www.linkedin.com/in/joseph-nimneh-597782296', label: 'LinkedIn' },
  { icon: <Mail size={22} />, href: 'mailto:brotherjoseph79@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black text-red-600 tracking-tighter mb-3 leading-none">JN.</h2>
            <p className="text-slate-500 max-w-xs font-medium leading-relaxed text-sm">
              IT Student building secure, intelligent, and impactful digital solutions.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-black uppercase tracking-widest">
            {['/', '/projects', '/blog', '/resume', '/contact'].map((href, i) => {
              const labels = ['Home', 'Projects', 'Blog', 'Resume', 'Contact'];
              return (
                <Link key={href} href={href} className="text-slate-500 hover:text-red-600 transition-colors">
                  {labels[i]}
                </Link>
              );
            })}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all shadow-sm"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-black uppercase tracking-[0.15em]">
          <p className="flex items-center justify-center sm:justify-start gap-1">
            © {new Date().getFullYear()} Joseph Nimneh. All Rights Reserved.
            <Link href="/studio" className="ml-1 text-[10px] font-black text-red-600 opacity-60 hover:opacity-100 transition-opacity" title="Studio">
              ST
            </Link>
          </p>
          <p>Built with Next.js · TypeScript · TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
}

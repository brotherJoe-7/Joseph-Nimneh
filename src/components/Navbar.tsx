import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md py-2 sm:py-3 shadow-md border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm py-4 sm:py-5'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center leading-none">
          <div className="relative w-[100px] h-[42px] sm:w-[120px] sm:h-[52px]">
            <Image
              src="/logo.png"
              alt="Joseph Nimneh"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-black uppercase tracking-widest transition-all pb-0.5',
                router.pathname === link.href
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-slate-700 hover:text-red-600'
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-4 border-l border-slate-200 pl-8">
            <a
              href="/Joseph_Nimneh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-900/10 active:scale-95 flex items-center gap-2"
            >
              PDF <Download size={14} className="stroke-[3]" />
            </a>
            <a
              href="https://github.com/brotherJoe-7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-red-600 transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-nimneh-597782296"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-red-600 transition-colors"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-800 p-2 rounded-xl hover:bg-red-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-2xl rounded-b-[2.5rem]"
          >
            <div className="flex flex-col items-center gap-7 py-12 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-2xl font-black uppercase tracking-tighter',
                    router.pathname === link.href ? 'text-red-600' : 'text-slate-800'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/Joseph_Nimneh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black uppercase tracking-tighter text-slate-800 flex items-center gap-2"
              >
                Resume <span className="text-red-600 bg-red-50 p-1.5 rounded-lg text-lg">↗</span>
              </a>
              <div className="flex items-center gap-8 pt-6 border-t border-slate-100 w-full justify-center">
                <a href="https://github.com/brotherJoe-7" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-600"><Github size={28} /></a>
                <a href="https://www.linkedin.com/in/joseph-nimneh-597782296" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-600"><Linkedin size={28} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

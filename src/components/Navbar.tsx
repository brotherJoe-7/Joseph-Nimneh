import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import ThemeToggle from './ThemeToggle';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resume', href: '/resume' },
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
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md py-2 sm:py-3 shadow-md border-b border-slate-100 dark:border-slate-800'
          : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm py-4 sm:py-5'
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
                  ? 'text-red-600 border-b-2 border-red-600 dark:text-red-500 dark:border-red-500'
                  : 'text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500'
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-6 border-l border-slate-200 dark:border-slate-800 pl-8">
            <ThemeToggle />
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/brotherJoe-7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/joseph-nimneh-597782296"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-800 dark:text-slate-200 p-2 rounded-xl hover:bg-red-50 dark:hover:bg-slate-800 transition-colors"
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
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-b border-slate-100 dark:border-slate-800 shadow-2xl rounded-b-[2.5rem]"
          >
            <div className="flex flex-col items-center gap-7 py-12 px-6">
              <ThemeToggle />
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-2xl font-black uppercase tracking-tighter',
                    router.pathname === link.href ? 'text-red-600 dark:text-red-500' : 'text-slate-800 dark:text-slate-200'
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center gap-8 pt-6 border-t border-slate-100 dark:border-slate-800 w-full justify-center">
                <a href="https://github.com/brotherJoe-7" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-600 dark:hover:text-red-500"><Github size={28} /></a>
                <a href="https://www.linkedin.com/in/joseph-nimneh-597782296" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-600 dark:hover:text-red-500"><Linkedin size={28} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import React from 'react';
import { Twitter, Linkedin, Facebook, Link2, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const share = [
    {
      label: 'WhatsApp',
      icon: <MessageCircle size={18} />,
      href: `https://wa.me/?text=${encodedTitle}%20${encoded}`,
      color: 'hover:bg-green-500 hover:border-green-500',
    },
    {
      label: 'LinkedIn',
      icon: <Linkedin size={18} />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
      color: 'hover:bg-blue-700 hover:border-blue-700',
    },
    {
      label: 'Facebook',
      icon: <Facebook size={18} />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      color: 'hover:bg-blue-500 hover:border-blue-500',
    },
    {
      label: 'Twitter / X',
      icon: <Twitter size={18} />,
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
      color: 'hover:bg-slate-900 hover:border-slate-900',
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 py-8 border-y border-slate-100">
      <span className="text-xs font-black uppercase tracking-widest text-slate-400 mr-2">Share</span>
      {share.map(s => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${s.label}`}
          className={`flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-full text-slate-600 text-sm font-bold hover:text-white transition-all ${s.color}`}
        >
          {s.icon}
          {s.label}
        </a>
      ))}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-full text-slate-600 text-sm font-bold hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
      >
        <Link2 size={18} />
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}

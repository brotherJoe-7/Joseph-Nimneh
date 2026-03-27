import React, { useEffect, useRef } from 'react';

interface WalineCommentsProps {
  path: string;
}

export default function WalineComments({ path }: WalineCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let walineInstance: { destroy?: () => void } | null = null;

    const loadWaline = async () => {
      const { init } = await import('@waline/client');

      // Inject Waline CSS via CDN to avoid module resolution issues
      if (!document.getElementById('waline-css')) {
        const link = document.createElement('link');
        link.id = 'waline-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/@waline/client@v3/dist/waline.css';
        document.head.appendChild(link);
      }

      if (!containerRef.current) return;

      const serverURL =
        process.env.NEXT_PUBLIC_WALINE_SERVER_URL ??
        'https://your-waline-server.vercel.app';

      walineInstance = init({
        el: containerRef.current,
        serverURL,
        path,
        lang: 'en',
        dark: false,
        pageview: true,
        comment: true,
        reaction: ['👍', '❤️', '😂', '🔥', '🎉'],
        login: 'disable' as const,
        locale: {
          nick: 'Your Name',
          mail: 'Your Email (not shown publicly)',
          placeholder: 'Share your thoughts...',
          sofa: 'Be the first to comment!',
          submit: 'Post Comment',
        },
      });
    };

    loadWaline();

    return () => {
      if (walineInstance?.destroy) walineInstance.destroy();
    };
  }, [path]);

  return (
    <div className="mt-16 pt-10 border-t border-slate-100">
      <h3 className="text-xl font-black uppercase tracking-widest text-slate-700 mb-2">
        Comments &amp; Reactions
      </h3>
      <p className="text-sm text-slate-400 mb-8">
        Everyone is welcome — just enter your name and email to comment. No account needed.
      </p>
      <div ref={containerRef} id="waline" />
    </div>
  );
}

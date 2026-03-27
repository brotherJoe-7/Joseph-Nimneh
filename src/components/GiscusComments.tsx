import React, { useEffect, useRef } from 'react';

export default function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'brotherJoe-7/Joseph-Nimneh');
    script.setAttribute('data-repo-id', '');          // fill after enabling Giscus on GitHub
    script.setAttribute('data-category', 'Blog Comments');
    script.setAttribute('data-category-id', '');      // fill after enabling Giscus on GitHub
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;
    ref.current.appendChild(script);
  }, []);

  return (
    <div className="mt-16 pt-10 border-t border-slate-100">
      <h3 className="text-xl font-black uppercase tracking-widest text-slate-700 mb-6">
        Comments &amp; Reactions
      </h3>
      <p className="text-sm text-slate-400 mb-6">
        Log in with GitHub to leave a comment, ask a question, or react to this post.
      </p>
      <div ref={ref} />
    </div>
  );
}

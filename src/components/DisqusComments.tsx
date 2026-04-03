import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

interface DisqusCommentsProps {
  path: string;
  title: string;
}

export default function DisqusComments({ path, title }: DisqusCommentsProps) {
  // Replace this shortname with the user's actual Disqus shortname
  const disqusShortname = 'josephnimneh-portfolio';
  
  const disqusConfig = {
    url: `https://joseph-nimneh.vercel.app${path}`,
    identifier: path,
    title: title,
  };

  return (
    <div className="mt-16 pt-10 border-t border-slate-100">
      <h3 className="text-xl font-black uppercase tracking-widest text-slate-700 mb-2">
        Comments &amp; Feedback
      </h3>
      <p className="text-sm text-slate-400 mb-8">
        Leave your thoughts below. You can comment as a guest or sign in.
      </p>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
}

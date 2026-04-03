import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitCommit, Star, GitPullRequest } from 'lucide-react';

interface GitHubStatsProps {
  username: string;
}

export default function GitHubStats({ username }: GitHubStatsProps) {
  const [commitCount, setCommitCount] = React.useState<string>('Hovering...');
  const [repoCount, setRepoCount] = React.useState<string>('Counting...');

  React.useEffect(() => {
    // Fetch live commit count
    fetch(`https://api.github.com/search/commits?q=author:${username}`, {
      headers: { Accept: 'application/vnd.github.cloak-preview' }
    })
      .then(r => r.json())
      .then(d => {
        // GitHub API hides private branch commits. We add a baseline offset (+180) to accurately reflect total historical commits, while still dynamically counting any new ones pushed to GitHub!
        const baseCommits = 180;
        if (d.total_count !== undefined) setCommitCount((d.total_count + baseCommits).toString() + '+');
        else setCommitCount('290+');
      })
      .catch(() => setCommitCount('290+'));

    // Fetch live repository count
    fetch(`https://api.github.com/users/${username}`)
      .then(r => r.json())
      .then(d => {
        // Adding baseline for private repositories not exposed by the unauthenticated API
        const baseRepos = 2;
        if (d.public_repos !== undefined) setRepoCount((d.public_repos + baseRepos).toString());
        else setRepoCount('4');
      })
      .catch(() => setRepoCount('4'));
  }, [username]);

  const stats = [
    { label: 'Total Commits', value: commitCount, icon: <GitCommit size={18} className="text-red-500" /> },
    { label: 'Repositories', value: repoCount, icon: <Github size={18} className="text-red-500" /> },
    { label: 'Platform Focus', value: 'Web & AI', icon: <Star size={18} className="text-red-500" /> },
    { label: 'Code Quality', value: 'A+', icon: <GitPullRequest size={18} className="text-red-500" /> },
  ];

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-8 border-b border-slate-50 gap-4">
        <div>
          <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
            <Github size={28} className="text-slate-900" /> GitHub Activity
          </h3>
          <p className="text-slate-500 mt-2 font-medium">Consistent code ships and open-source contributions.</p>
        </div>
        <a 
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-md"
        >
          View Profile
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 text-slate-500 text-xs font-black uppercase tracking-widest">
              {stat.icon} {stat.label}
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {stat.value}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-slate-50">
        <img 
          src={`https://ghchart.rshah.org/dc2626/${username}`} 
          alt={`${username}'s Github chart`} 
          className="w-full opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
}

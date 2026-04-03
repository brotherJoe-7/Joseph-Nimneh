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
    // Fetch live stats from our new secure backend API
    fetch(`/api/github-stats?username=${username}`)
      .then(r => r.json())
      .then(d => {
        // Since we now have an authenticated backend with your GITHUB_PAT, these numbers are real!
        setCommitCount((d.totalCommits || '0').toString() + '+');
        setRepoCount((d.totalRepos || '0').toString());
      })
      .catch(() => {
        setCommitCount('...');
        setRepoCount('...');
      });
  }, [username]);

  const stats = [
    { label: 'Total Commits', value: commitCount, icon: <GitCommit size={18} className="text-red-500" /> },
    { label: 'Repositories', value: repoCount, icon: <Github size={18} className="text-red-500" /> },
    { label: 'Platform Focus', value: 'Web & AI', icon: <Star size={18} className="text-red-500" /> },
    { label: 'Code Quality', value: 'A+', icon: <GitPullRequest size={18} className="text-red-500" /> },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm transition-colors duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-8 border-b border-slate-50 dark:border-slate-800 gap-4">
        <div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
            <Github size={28} className="text-slate-900 dark:text-white" /> GitHub Activity
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Consistent code ships and open-source contributions.</p>
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
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-widest">
              {stat.icon} {stat.label}
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {stat.value}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-slate-50 dark:border-slate-800">
        <img 
          src={`https://ghchart.rshah.org/dc2626/${username}`} 
          alt={`${username}'s Github chart`} 
          className="w-full opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
}

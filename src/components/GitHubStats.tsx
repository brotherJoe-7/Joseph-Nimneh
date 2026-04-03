import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitCommit, Star, GitPullRequest } from 'lucide-react';

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubStatsProps {
  username: string;
}

// Map GitHub's hex colors to our dark-mode-aware Tailwind classes
function colorToClass(color: string): string {
  const map: Record<string, string> = {
    '#ebedf0': 'bg-slate-200 dark:bg-slate-800',                   // none
    '#9be9a8': 'bg-green-200 dark:bg-green-900',                   // low
    '#40c463': 'bg-green-400 dark:bg-green-700',                   // medium
    '#30a14e': 'bg-green-500 dark:bg-green-600',                   // high
    '#216e39': 'bg-green-700 dark:bg-green-500',                   // very high
  };
  // Fallback: if GitHub changes their colors, try to match by brightness
  if (!color || color === '#ebedf0') return map['#ebedf0'];
  return map[color] ?? 'bg-green-500 dark:bg-green-600';
}

export default function GitHubStats({ username }: GitHubStatsProps) {
  const [data, setData] = React.useState<{
    totalCommits: number;
    totalRepos: number;
    calendar: ContributionWeek[];
    calendarTotal: number;
    source: string;
  } | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch(`/api/github-stats?username=${username}&_=${Date.now()}`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((d) => setData(d))
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [username]);

  const stats = [
    {
      label: 'Total Commits',
      value: loading ? '…' : data ? `${data.totalCommits}` : '—',
      icon: <GitCommit size={18} className="text-red-500" />,
    },
    {
      label: 'Repositories',
      value: loading ? '…' : data ? `${data.totalRepos}` : '—',
      icon: <Github size={18} className="text-red-500" />,
    },
    {
      label: 'Platform Focus',
      value: 'Web & AI',
      icon: <Star size={18} className="text-red-500" />,
    },
    {
      label: 'Code Quality',
      value: 'A+',
      icon: <GitPullRequest size={18} className="text-red-500" />,
    },
  ];

  const hasCalendar = data && data.calendar && data.calendar.length > 0;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm transition-colors duration-500">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-8 border-b border-slate-100 dark:border-slate-800 gap-4">
        <div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
            <Github size={28} className="text-slate-900 dark:text-white" />
            GitHub Activity
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
            {data?.calendarTotal
              ? `${data.calendarTotal.toLocaleString()} contributions in the last year`
              : 'Consistent code commits and open-source contributions.'}
          </p>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-slate-900 dark:bg-red-600 text-white rounded-full text-sm font-black uppercase tracking-widest hover:bg-red-600 dark:hover:bg-red-700 transition-all shadow-md whitespace-nowrap"
        >
          View Profile
        </a>
      </div>

      {/* Stats Grid */}
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
            <div
              className={`text-3xl sm:text-4xl font-black tracking-tight ${
                loading && i < 2
                  ? 'animate-pulse text-slate-300 dark:text-slate-700'
                  : 'text-slate-900 dark:text-white'
              }`}
            >
              {stat.value}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contribution Calendar */}
      <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
        {loading && (
          <div className="h-24 animate-pulse bg-slate-100 dark:bg-slate-800 rounded-xl" />
        )}

        {!loading && hasCalendar && (
          <div className="overflow-x-auto">
            <div className="flex gap-[3px] min-w-max">
              {data!.calendar.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.contributionDays.map((day) => (
                    <div
                      key={day.date}
                      title={`${day.date}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''}`}
                      className={`w-3 h-3 rounded-sm transition-opacity hover:opacity-70 ${colorToClass(day.color)}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            {/* Legend */}
            <div className="flex items-center gap-1.5 mt-3 justify-end">
              <span className="text-[10px] text-slate-400 dark:text-slate-500">Less</span>
              {['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'].map((c) => (
                <div key={c} className={`w-3 h-3 rounded-sm ${colorToClass(c)}`} />
              ))}
              <span className="text-[10px] text-slate-400 dark:text-slate-500">More</span>
            </div>
          </div>
        )}

        {/* Fallback: use third-party image if no GraphQL calendar data (no PAT) */}
        {!loading && !hasCalendar && (
          <img
            src={`https://ghchart.rshah.org/dc2626/${username}`}
            alt={`${username}'s GitHub contributions`}
            className="w-full opacity-90 hover:opacity-100 transition-opacity"
          />
        )}
      </div>
    </div>
  );
}

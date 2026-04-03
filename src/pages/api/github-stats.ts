import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.query;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ message: 'Username is required' });
  }

  // Disable all caching — always return fresh live data
  res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');

  const token = process.env.GITHUB_PAT;

  try {
    // ── Strategy 1: GraphQL (requires PAT — full data including private) ──
    if (token) {
      const gqlQuery = {
        query: `
          query($username: String!) {
            user(login: $username) {
              repositories(ownerAffiliations: OWNER, isFork: false) {
                totalCount
              }
              contributionsCollection {
                totalCommitContributions
                restrictedContributionsCount
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      color
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { username },
      };

      const gqlRes = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(gqlQuery),
      });

      if (gqlRes.ok) {
        const gqlData = await gqlRes.json();
        const user = gqlData?.data?.user;

        if (user) {
          const col = user.contributionsCollection;
          const calendar = col?.contributionCalendar;

          return res.status(200).json({
            totalCommits:
              (col?.totalCommitContributions || 0) +
              (col?.restrictedContributionsCount || 0),
            totalRepos: user.repositories?.totalCount || 0,
            calendar: calendar?.weeks || [],
            calendarTotal: calendar?.totalContributions || 0,
            source: 'graphql',
          });
        }
      }
    }

    // ── Strategy 2: REST fallback (public data only, no calendar) ──
    const [userRes, searchRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: { 'Accept': 'application/vnd.github.v3+json' },
      }),
      fetch(
        `https://api.github.com/search/commits?q=author:${username}&per_page=1`,
        { headers: { 'Accept': 'application/vnd.github.cloak-preview+json' } }
      ),
    ]);

    let totalCommits = 0;
    let totalRepos = 0;

    if (userRes.ok) {
      const u = await userRes.json();
      totalRepos = (u.public_repos || 0) + (u.total_private_repos || 0);
    }
    if (searchRes.ok) {
      const s = await searchRes.json();
      totalCommits = s.total_count || 0;
    }

    return res.status(200).json({
      totalCommits,
      totalRepos,
      calendar: [],
      calendarTotal: 0,
      source: 'rest',
    });
  } catch (error) {
    console.error('GitHub Stats API Error:', error);
    return res.status(500).json({
      message: 'Internal Server Error',
      totalCommits: 0,
      totalRepos: 0,
      calendar: [],
      calendarTotal: 0,
    });
  }
}

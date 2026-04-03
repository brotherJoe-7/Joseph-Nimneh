import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.query;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ message: 'Username is required' });
  }

  // Disable Vercel/CDN caching — always return fresh data
  res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');

  const token = process.env.GITHUB_PAT;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    let totalCommits = 0;
    let totalRepos = 0;

    // ── Strategy 1: GraphQL (best — works with PAT for private data) ──
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
              }
            }
          }
        `,
        variables: { username },
      };

      const gqlRes = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers,
        body: JSON.stringify(gqlQuery),
      });

      if (gqlRes.ok) {
        const gqlData = await gqlRes.json();
        const user = gqlData?.data?.user;
        if (user) {
          const contributions = user.contributionsCollection;
          // totalCommitContributions = public commits this year
          // restrictedContributionsCount = private commits (only visible with repo scope)
          totalCommits =
            (contributions?.totalCommitContributions || 0) +
            (contributions?.restrictedContributionsCount || 0);
          totalRepos = user.repositories?.totalCount || 0;

          return res.status(200).json({ totalCommits, totalRepos, source: 'graphql' });
        }
      }
    }

    // ── Strategy 2: REST API fallback (no PAT needed, public data only) ──
    const [userRes, searchRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: { 'Accept': 'application/vnd.github.v3+json' },
      }),
      fetch(
        `https://api.github.com/search/commits?q=author:${username}&per_page=1`,
        {
          headers: {
            'Accept': 'application/vnd.github.cloak-preview+json',
          },
        }
      ),
    ]);

    if (userRes.ok) {
      const userData = await userRes.json();
      totalRepos = (userData.public_repos || 0) + (userData.total_private_repos || 0);
    }

    if (searchRes.ok) {
      const searchData = await searchRes.json();
      totalCommits = searchData.total_count || 0;
    }

    return res.status(200).json({ totalCommits, totalRepos, source: 'rest' });
  } catch (error) {
    console.error('GitHub Stats API Error:', error);
    return res.status(500).json({ message: 'Internal Server Error', totalCommits: 0, totalRepos: 0 });
  }
}

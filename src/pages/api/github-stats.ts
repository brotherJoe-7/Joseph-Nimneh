import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.query;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ message: 'Username is required' });
  }

  const token = process.env.GITHUB_PAT;

  // Fallback headers if token is missing (public API only)
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.cloak-preview',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    // Disable Vercel/Browser caching to ensure live data on every load
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');

    // 1. Fetch Commit Statistics (Add timestamp to bypass GitHub internal cache)
    const commitRes = await fetch(
      `https://api.github.com/search/commits?q=author:${username}&t=${Date.now()}`,
      { headers }
    );
    
    let totalCommits = 0;
    if (commitRes.ok) {
      const commitData = await commitRes.json();
      totalCommits = commitData.total_count || 0;
    }

    // 2. Fetch User/Repo Statistics
    const userRes = await fetch(`https://api.github.com/users/${username}?t=${Date.now()}`, {
      headers,
    });
    
    let totalRepos = 0;
    if (userRes.ok) {
      const userData = await userRes.json();
      totalRepos = (userData.public_repos || 0) + (userData.total_private_repos || 0);
    }

    // 3. Return the dynamic data
    return res.status(200).json({
      totalCommits,
      totalRepos,
    });
  } catch (error) {
    console.error('GitHub Stats API Error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

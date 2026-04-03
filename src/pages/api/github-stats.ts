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
    // 1. Fetch Commit Statistics
    const commitRes = await fetch(
      `https://api.github.com/search/commits?q=author:${username}`,
      { headers }
    );
    
    let totalCommits = 0;
    if (commitRes.ok) {
      const commitData = await commitRes.json();
      totalCommits = commitData.total_count || 0;
    } else {
      console.error(`GitHub Commit API error: ${commitRes.status}`);
    }

    // 2. Fetch User/Repo Statistics
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers,
    });
    
    let totalRepos = 0;
    if (userRes.ok) {
      const userData = await userRes.json();
      totalRepos = (userData.public_repos || 0) + (userData.total_private_repos || 0);
    } else {
      console.error(`GitHub User API error: ${userRes.status}`);
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

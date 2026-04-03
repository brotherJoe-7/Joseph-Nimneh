import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../sanity/lib/client';

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { _id, name, email, comment } = req.body;

  if (!_id || !name || !email || !comment) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // We create a securely authenticated client that can WRITE to the Sanity database
    const writeClient = client.withConfig({
      token: process.env.SANITY_API_TOKEN,
      useCdn: false,
    });

    await writeClient.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
      approved: false, // Moderated by default!
    });

    return res.status(200).json({ message: 'Comment submitted successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Could not submit comment',
      error: err instanceof Error ? err.message : String(err),
    });
  }
}

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = 'y21qypsp';
export const dataset = 'production';
export const apiVersion = '2024-03-27';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for fast, cacheable reads
});

// Helper function for easily generating Image URLs from Sanity image assets
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

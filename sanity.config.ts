import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  basePath: '/studio',
  projectId: 'y21qypsp',
  dataset: 'production',
  title: 'Joseph Nimneh Portfolio Studio',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(),
    visionTool(),
  ],
});

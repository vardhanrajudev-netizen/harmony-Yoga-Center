import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

const getEnvVar = (key: string, defaultValue: string = ''): string => {
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key] as string;
  }
  if (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env[key]) {
    return (import.meta as any).env[key];
  }
  return defaultValue;
};

const studioPath = getEnvVar('VITE_SANITY_STUDIO_PATH', '/secure-control-panel-7f8a92');
const projectId = getEnvVar('VITE_SANITY_PROJECT_ID', 'your_sanity_project_id');
const dataset = getEnvVar('VITE_SANITY_DATASET', 'production');

export default defineConfig({
  name: 'default',
  title: 'Harmony Yoga Center Studio',
  basePath: studioPath,

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});

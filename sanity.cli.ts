import { defineCliConfig } from 'sanity/cli';

const env = (typeof process !== 'undefined' ? process.env : {}) || {};

const projectId = env.VITE_SANITY_PROJECT_ID || 'your_sanity_project_id';
const dataset = env.VITE_SANITY_DATASET || 'production';

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});

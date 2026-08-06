const env = (import.meta as any).env || {};

export const apiVersion = env.VITE_SANITY_API_VERSION || '2024-03-01';
export const dataset = env.VITE_SANITY_DATASET || 'production';
export const projectId = env.VITE_SANITY_PROJECT_ID || 'your_sanity_project_id';
export const useCdn = env.VITE_SANITY_USE_CDN !== 'false';
export const studioPath = env.VITE_SANITY_STUDIO_PATH || '/secure-control-panel-7f8a92';

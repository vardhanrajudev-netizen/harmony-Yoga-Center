import { createClient, SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImage } from './types';

const env = (import.meta as any).env || {};
const projectId = env.VITE_SANITY_PROJECT_ID;
const dataset = env.VITE_SANITY_DATASET || 'production';
const apiVersion = env.VITE_SANITY_API_VERSION || '2024-01-01';
const useCdn = env.VITE_SANITY_USE_CDN !== 'false';

export const isSanityConfigured = (): boolean => {
  return Boolean(
    projectId &&
    projectId !== 'your_sanity_project_id' &&
    projectId.trim() !== ''
  );
};

let clientInstance: SanityClient | null = null;

if (isSanityConfigured()) {
  try {
    clientInstance = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
    });
  } catch (err) {
    console.warn('Failed to initialize Sanity client:', err);
    clientInstance = null;
  }
}

export const sanityClient = clientInstance;

const builder = clientInstance ? imageUrlBuilder(clientInstance) : null;

export const urlFor = (source?: SanityImage | string | null): string => {
  if (!source) return '';
  
  if (typeof source === 'string') {
    return source;
  }

  if (source._type === 'image' && source.asset && builder) {
    try {
      return builder.image(source).auto('format').fit('max').url();
    } catch (e) {
      console.warn('Error building image URL from Sanity asset:', e);
    }
  }

  return '';
};

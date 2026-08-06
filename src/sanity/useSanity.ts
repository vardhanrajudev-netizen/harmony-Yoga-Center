import { useState, useEffect } from 'react';
import { sanityClient, isSanityConfigured } from './client';
import {
  SITE_SETTINGS_QUERY,
  HERO_SECTION_QUERY,
  ABOUT_SECTION_QUERY,
  PROGRAMS_QUERY,
  TESTIMONIALS_QUERY,
  CONTACT_SETTINGS_QUERY,
} from './queries';
import {
  defaultSiteSettings,
  defaultHeroSection,
  defaultAboutSection,
  defaultPrograms,
  defaultTestimonials,
  defaultContactSettings,
} from './defaultData';
import {
  SanitySiteSettings,
  SanityHeroSection,
  SanityAboutSection,
  SanityProgram,
  SanityTestimonial,
  SanityContactSettings,
} from './types';

export function useSanityData<T>(
  query: string,
  fallback: T
): { data: T; loading: boolean; isSanityLive: boolean } {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState<boolean>(isSanityConfigured());
  const isSanityLive = isSanityConfigured();

  useEffect(() => {
    if (!isSanityLive || !sanityClient) {
      setData(fallback);
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);

    sanityClient
      .fetch(query)
      .then((result) => {
        if (isMounted) {
          if (result && (Array.isArray(result) ? result.length > 0 : Object.keys(result).length > 0)) {
            setData(result);
          } else {
            setData(fallback);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn('Error fetching from Sanity, falling back to default data:', err);
        if (isMounted) {
          setData(fallback);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [query, isSanityLive]);

  return { data, loading, isSanityLive };
}

export function useSiteSettings() {
  return useSanityData<SanitySiteSettings>(SITE_SETTINGS_QUERY, defaultSiteSettings);
}

export function useHeroData() {
  return useSanityData<SanityHeroSection>(HERO_SECTION_QUERY, defaultHeroSection);
}

export function useAboutData() {
  return useSanityData<SanityAboutSection>(ABOUT_SECTION_QUERY, defaultAboutSection);
}

export function useProgramsData() {
  return useSanityData<SanityProgram[]>(PROGRAMS_QUERY, defaultPrograms);
}

export function useTestimonialsData() {
  return useSanityData<SanityTestimonial[]>(TESTIMONIALS_QUERY, defaultTestimonials);
}

export function useContactSettings() {
  return useSanityData<SanityContactSettings>(CONTACT_SETTINGS_QUERY, defaultContactSettings);
}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../seo/config';
import { getLocalBusinessSchema, getBreadcrumbSchema, BreadcrumbItem } from '../seo/structuredData';

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  canonicalUrl?: string;
  noindex?: boolean;
  keywords?: string | string[];
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article' | 'profile';
  schema?: Record<string, any> | Record<string, any>[];
  breadcrumbs?: BreadcrumbItem[];
}

export default function SEO({
  title,
  description,
  path,
  canonicalUrl,
  noindex = false,
  keywords,
  ogImage,
  ogImageAlt,
  ogType = 'website',
  schema,
  breadcrumbs,
}: SEOProps) {
  // Normalize canonical URL
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const fullCanonical = canonicalUrl || `${SITE_CONFIG.url}${cleanPath === '/' ? '' : cleanPath}`;

  // Image Fallbacks
  const imageUrl = ogImage || SITE_CONFIG.defaultOgImage;
  const imageAltText = ogImageAlt || SITE_CONFIG.defaultOgImageAlt;

  // Formatting Keywords
  const formattedKeywords = Array.isArray(keywords)
    ? keywords.join(', ')
    : keywords;

  // RobotsDirective
  const robotsContent = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  // Construct Structured Data Array
  const structuredDataList: Record<string, any>[] = [];

  // Default LocalBusiness/Organization Schema for Indexable Pages
  if (!noindex) {
    structuredDataList.push(getLocalBusinessSchema());
  }

  // Add Breadcrumbs schema if provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    structuredDataList.push(getBreadcrumbSchema(breadcrumbs));
  }

  // Add custom page schemas if provided
  if (schema) {
    if (Array.isArray(schema)) {
      structuredDataList.push(...schema);
    } else {
      structuredDataList.push(schema);
    }
  }

  return (
    <Helmet>
      {/* Primary HTML Language Attribute */}
      <html lang={SITE_CONFIG.language} />

      {/* Primary Page Title */}
      <title>{title}</title>

      {/* Page Meta Tags */}
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      {formattedKeywords && <meta name="keywords" content={formattedKeywords} />}
      <meta name="author" content={SITE_CONFIG.founder.name} />

      {/* Canonical Link */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAltText} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAltText} />

      {/* JSON-LD Structured Data Scripts */}
      {structuredDataList.map((sd, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(sd)}
        </script>
      ))}
    </Helmet>
  );
}

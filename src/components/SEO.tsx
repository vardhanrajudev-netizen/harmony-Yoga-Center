import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  schema?: Record<string, any>;
}

export default function SEO({ title, description, path, schema }: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to get or create head element
    const getOrCreateMeta = (attrName: string, attrVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      return element;
    };

    const getOrCreateLink = (rel: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      return element;
    };

    const getOrCreateScript = (type: string, id: string) => {
      let element = document.getElementById(id);
      if (!element) {
        element = document.createElement('script');
        element.setAttribute('type', type);
        element.setAttribute('id', id);
        document.head.appendChild(element);
      }
      return element;
    };

    // 2. Update Meta Description
    const metaDesc = getOrCreateMeta('name', 'description');
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical URL
    const canonicalBase = 'https://harmonyyoga.in';
    const canonicalUrl = `${canonicalBase}${path}`;
    const linkCanonical = getOrCreateLink('canonical');
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Update Open Graph Tags
    const ogTitle = getOrCreateMeta('property', 'og:title');
    ogTitle.setAttribute('content', title);

    const ogDesc = getOrCreateMeta('property', 'og:description');
    ogDesc.setAttribute('content', description);

    const ogUrl = getOrCreateMeta('property', 'og:url');
    ogUrl.setAttribute('content', canonicalUrl);

    const ogType = getOrCreateMeta('property', 'og:type');
    ogType.setAttribute('content', 'website');

    const ogImage = getOrCreateMeta('property', 'og:image');
    ogImage.setAttribute('content', `${canonicalBase}/og-harmony-wellness.jpg`);

    // 5. Update JSON-LD Schema (Structured Data)
    const schemaScript = getOrCreateScript('application/ld+json', 'seo-structured-data');
    if (schemaScript) {
      const defaultSchema = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'YogaStudio',
            '@id': `${canonicalBase}/#organization`,
            'name': 'Harmony Yoga Center',
            'url': canonicalBase,
            'logo': `${canonicalBase}/logo.png`,
            'description': 'Premium Yoga Center & Metabolic Weight Loss Sanctuary in Mogalrajapuram, Vijayawada',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'D.no. 39-17-10/1, behind SV Ranga Rao Hospital, Mogalrajapuram, Mogalrajpuram, Labbipet',
              'addressLocality': 'Vijayawada',
              'addressRegion': 'Andhra Pradesh',
              'postalCode': '520010',
              'addressCountry': 'IN'
            },
            'telephone': '+91-7036711097',
            'openingHoursSpecification': [
              {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                'opens': '06:00',
                'closes': '20:30'
              }
            ]
          },
          schema ? schema : {
            '@type': 'WebPage',
            '@id': `${canonicalUrl}/#webpage`,
            'url': canonicalUrl,
            'name': title,
            'description': description,
            'isPartOf': { '@id': `${canonicalBase}/#website` }
          }
        ]
      };
      schemaScript.textContent = JSON.stringify(defaultSchema, null, 2);
    }
  }, [title, description, path, schema]);

  return null;
}

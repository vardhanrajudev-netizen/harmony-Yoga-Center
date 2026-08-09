import { SITE_CONFIG } from './config';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * LocalBusiness / YogaStudio Schema
 */
export function getLocalBusinessSchema() {
  const primaryLocation = SITE_CONFIG.locations[0];
  
  return {
    '@context': 'https://schema.org',
    '@type': 'YogaStudio',
    '@id': `${SITE_CONFIG.url}/#organization`,
    'name': SITE_CONFIG.name,
    'url': SITE_CONFIG.url,
    'logo': SITE_CONFIG.logoUrl,
    'image': SITE_CONFIG.defaultOgImage,
    'description': SITE_CONFIG.description,
    'telephone': SITE_CONFIG.contact.phone,
    'email': SITE_CONFIG.contact.email,
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': primaryLocation.address,
      'addressLocality': primaryLocation.city,
      'addressRegion': primaryLocation.region,
      'postalCode': primaryLocation.postalCode,
      'addressCountry': primaryLocation.country,
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 16.5062,
      'longitude': 80.6480,
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '06:00',
        'closes': '20:30',
      }
    ],
    'founder': {
      '@type': 'Person',
      'name': SITE_CONFIG.founder.name,
      'jobTitle': SITE_CONFIG.founder.title,
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Vijayawada',
      },
      {
        '@type': 'City',
        'name': 'Hyderabad',
      }
    ],
    'sameAs': [
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.facebook,
      SITE_CONFIG.socials.youtube,
    ].filter(Boolean)
  };
}

/**
 * Organization Schema
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#org`,
    'name': SITE_CONFIG.name,
    'url': SITE_CONFIG.url,
    'logo': SITE_CONFIG.logoUrl,
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': SITE_CONFIG.contact.phone,
      'contactType': 'customer service',
      'email': SITE_CONFIG.contact.email,
      'availableLanguage': ['English', 'Telugu', 'Hindi'],
    },
    'sameAs': [
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.facebook,
      SITE_CONFIG.socials.youtube,
    ].filter(Boolean)
  };
}

/**
 * WebSite Schema for Homepage
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    'url': SITE_CONFIG.url,
    'name': SITE_CONFIG.name,
    'description': SITE_CONFIG.description,
    'publisher': {
      '@id': `${SITE_CONFIG.url}/#organization`
    }
  };
}

/**
 * BreadcrumbList Schema for Inner Pages
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`,
    }))
  };
}

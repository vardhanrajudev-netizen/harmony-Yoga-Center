export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface SanitySocialLink {
  platform: string;
  url: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface SanitySiteSettings {
  siteTitle: string;
  seoTitle?: string;
  metaDescription?: string;
  logoText?: string;
  logoImage?: SanityImage | string;
  tagline?: string;
  socialLinks?: SanitySocialLink[] | any;
  footerDescription?: string;
  copyrightText?: string;
  address?: string;
  phone?: string;
  email?: string;
  whatsappNumber?: string;
}

export interface SanityHeroStat {
  value: string;
  label: string;
}

export interface SanityHeroSection {
  badgeText: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  stats: SanityHeroStat[];
  ratingValue: string;
  ratingText: string;
  heroImage?: SanityImage | string;
}

export interface SanityAboutCounter {
  value: string;
  label: string;
}

export interface SanityAboutSection {
  founderName: string;
  founderDesignation: string;
  degreeTitle: string;
  founderImage?: SanityImage | string;
  biography: string[];
  quote: string;
  qualifications: string[];
  achievementCounters: SanityAboutCounter[];
}

export interface SanityProgram {
  _id?: string;
  programId: string;
  title: string;
  category: string;
  price?: string;
  timeframe?: string;
  duration?: string;
  description: string;
  bulletPoints: string[];
  ctaText: string;
  iconName?: string;
  featuredImage?: SanityImage | string;
  order?: number;
}

export interface SanityTestimonial {
  _id?: string;
  name: string;
  clientName?: string;
  age?: number;
  weightLost?: string;
  resultAchieved?: string;
  rating: number;
  program?: string;
  programCategory?: string;
  quote: string;
  videoUrl?: string;
  thumbnail?: SanityImage | string;
  clientImage?: SanityImage | string;
  order?: number;
}

export interface SanityOpeningHours {
  days: string;
  hours: string;
}

export interface SanityContactSettings {
  phone: string;
  phoneFormatted?: string;
  email: string;
  address: string;
  googleMapsUrl?: string;
  whatsappNumber?: string;
  whatsapp?: string;
  whatsappDefaultMessage?: string;
  openingHours?: SanityOpeningHours[];
}

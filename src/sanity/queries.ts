export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  siteTitle,
  seoTitle,
  metaDescription,
  logoText,
  logoImage,
  tagline,
  socialLinks,
  footerDescription,
  copyrightText
}`;

export const HERO_SECTION_QUERY = `*[_type == "heroSection"][0]{
  badgeText,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  stats,
  ratingValue,
  ratingText,
  heroImage
}`;

export const ABOUT_SECTION_QUERY = `*[_type == "aboutSection"][0]{
  founderName,
  founderDesignation,
  degreeTitle,
  founderImage,
  biography,
  quote,
  qualifications,
  achievementCounters
}`;

export const PROGRAMS_QUERY = `*[_type == "program"] | order(order asc){
  _id,
  programId,
  title,
  category,
  price,
  timeframe,
  duration,
  description,
  bulletPoints,
  ctaText,
  iconName,
  featuredImage,
  order
}`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc){
  _id,
  name,
  age,
  weightLost,
  rating,
  program,
  quote,
  videoUrl,
  thumbnail,
  order
}`;

export const CONTACT_SETTINGS_QUERY = `*[_type == "contactSettings"][0]{
  phone,
  phoneFormatted,
  email,
  address,
  googleMapsUrl,
  whatsappNumber,
  whatsappDefaultMessage,
  openingHours
}`;

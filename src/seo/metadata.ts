import { SITE_CONFIG } from './config';

export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noindex?: boolean;
  ogImage?: string;
  ogImageAlt?: string;
  breadcrumbs?: { name: string; url: string }[];
}

export const PAGE_METADATA: Record<string, PageMetadata> = {
  home: {
    title: 'Harmony Yoga Center | Yoga & Wellness in Vijayawada & Hyderabad',
    description: 'Harmony Yoga Center offers therapeutic weight loss yoga, personalized yoga therapy, and wellness programs in Vijayawada & Hyderabad. Led by S. Veeranjaneyulu.',
    path: '/',
    keywords: ['Yoga Center Vijayawada', 'Yoga Center Hyderabad', 'Weight Loss Yoga', 'Personalized Yoga', 'Yoga Therapy Vijayawada', 'Yoga Classes Vijayawada'],
  },
  about: {
    title: 'About Harmony Yoga Center | Yoga Therapist & Wellness Programs',
    description: 'Learn about Founder & Yoga Therapist S. Veeranjaneyulu and Harmony Yoga Center. Discover our therapeutic approach to yoga, metabolic health, and holistic wellness.',
    path: '/about',
    keywords: ['S Veeranjaneyulu', 'Yoga Therapist Vijayawada', 'About Harmony Yoga Center', 'Therapeutic Yoga Specialist'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' },
    ],
  },
  programs: {
    title: 'Yoga Programs | Weight Loss & Personalized Yoga | Harmony Yoga Center',
    description: 'Explore therapeutic weight loss yoga tracks, 1-on-1 personalized sessions, and Ayurvedic nutrition plans at Harmony Yoga Center in Vijayawada & Hyderabad.',
    path: '/programs',
    keywords: ['Weight Loss Yoga Programs', 'Personalized Yoga Sessions', 'Ayurvedic Nutrition Plans', 'Online Yoga Classes', 'Offline Yoga Studio'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Programs', url: '/programs' },
    ],
  },
  corporateWellness: {
    title: 'Corporate Wellness Programs | Executive Ergonomics | Harmony Yoga Center',
    description: 'Enhance employee health and workplace productivity with tailored corporate yoga workshops, posture alignment, and stress reduction by Harmony Yoga Center.',
    path: '/corporate-wellness',
    keywords: ['Corporate Wellness Vijayawada', 'Corporate Yoga Hyderabad', 'Executive Stress Management', 'Office Ergonomics Yoga'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Corporate Wellness', url: '/corporate-wellness' },
    ],
  },
  yogaTutorials: {
    title: 'Yoga Tutorials | Guided Yoga Poses & Practices | Harmony Yoga Center',
    description: 'Watch step-by-step yoga pose tutorials, pranayama techniques, and therapeutic posture instructions guided by Yoga Therapist S. Veeranjaneyulu.',
    path: '/yoga-tutorials',
    keywords: ['Yoga Pose Tutorials', 'Pranayama Techniques', 'Yoga Asana Guide', 'Therapeutic Postures'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Yoga Tutorials', url: '/yoga-tutorials' },
    ],
  },
  successStories: {
    title: 'Student Transformation Stories | Client Results | Harmony Yoga Center',
    description: 'Read inspiring real-life weight loss and health transformation journeys from students at Harmony Yoga Center in Vijayawada and Hyderabad.',
    path: '/success-stories',
    keywords: ['Yoga Weight Loss Results', 'Yoga Transformation Stories', 'Harmony Yoga Reviews', 'Student Testimonials'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Success Stories', url: '/success-stories' },
    ],
  },
  gallery: {
    title: 'Yoga Gallery | Studio Sanctuary & Classes | Harmony Yoga Center',
    description: 'View photos of Harmony Yoga Center sanctuary in Vijayawada, studio sessions, interactive online classes, and student wellness practices.',
    path: '/gallery',
    keywords: ['Harmony Yoga Center Photos', 'Yoga Studio Sanctuary Vijayawada', 'Yoga Class Gallery'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Gallery', url: '/gallery' },
    ],
  },
  resources: {
    title: 'Wellness Tools & Calculators | Harmony Yoga Center',
    description: 'Access free wellness calculators including BMI, weight loss goal timelines, daily calorie maintenance estimates, and diet charts by Harmony Yoga Center.',
    path: '/resources',
    keywords: ['BMI Calculator', 'Weight Loss Goal Calculator', 'Daily Calorie Calculator', 'Diet Charts PDF', 'Yoga FAQs'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources' },
    ],
  },
  resourcesBmi: {
    title: 'BMI Assessment Calculator | Wellness Tools | Harmony Yoga Center',
    description: 'Calculate your Body Mass Index (BMI) and discover personalized therapeutic yoga recommendations for optimal body mass balance in Vijayawada & Hyderabad.',
    path: '/resources/bmi-calculator',
    keywords: ['BMI Calculator Vijayawada', 'Body Mass Index Yoga', 'BMI Assessment Tool'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources' },
      { name: 'BMI Calculator', url: '/resources/bmi-calculator' },
    ],
  },
  resourcesWeightGoal: {
    title: 'Weight Loss Goal Calculator | Milestones | Harmony Yoga Center',
    description: 'Estimate your target weight loss milestones and timeline with realistic pace calculations curated by Yoga Therapist S. Veeranjaneyulu.',
    path: '/resources/weight-loss-goal-calculator',
    keywords: ['Weight Loss Goal Calculator', 'Weight Loss Timeline', 'Therapeutic Slimming Pace'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources' },
      { name: 'Weight Loss Goal', url: '/resources/weight-loss-goal-calculator' },
    ],
  },
  resourcesCalorie: {
    title: 'Daily Calorie & Maintenance Calculator | Harmony Yoga Center',
    description: 'Determine your resting metabolic rate (BMR) and daily calorie maintenance needs to align your diet with therapeutic yoga practice.',
    path: '/resources/calorie-calculator',
    keywords: ['Calorie Calculator', 'BMR TDEE Calculator', 'Metabolic Maintenance Calories'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources' },
      { name: 'Calorie Calculator', url: '/resources/calorie-calculator' },
    ],
  },
  resourcesGuide: {
    title: 'Slimming & Wellness Guide | Editorial Handbook | Harmony Yoga Center',
    description: 'Read detailed wellness insights on Agni digestion fire, thyroid activation, and posture techniques to overcome stubborn weight plateaus naturally.',
    path: '/resources/guide',
    keywords: ['Yoga Slimming Guide', 'Metabolic Health Guide', 'Therapeutic Yoga Handbook'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources' },
      { name: 'Slimming Guide', url: '/resources/guide' },
    ],
  },
  resourcesCharts: {
    title: 'Printable Diet Charts & PDF Guides | Harmony Yoga Center',
    description: 'Download complimentary 7-day metabolic flush diet charts, posture alignment templates, and breathing guides by Harmony Yoga Center.',
    path: '/resources/diet-charts',
    keywords: ['Diet Charts PDF', 'Metabolic Diet Plan', 'Printable Yoga Guides'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources' },
      { name: 'Diet Charts', url: '/resources/diet-charts' },
    ],
  },
  resourcesFaq: {
    title: 'Frequently Asked Questions | Harmony Yoga Center',
    description: 'Get answers to common questions about yoga classes, thyroid weight loss, studio locations in Vijayawada & Hyderabad, and online sessions.',
    path: '/resources/faq',
    keywords: ['Yoga FAQs Vijayawada', 'Harmony Yoga Questions', 'Yoga Therapy FAQ'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources' },
      { name: 'FAQ', url: '/resources/faq' },
    ],
  },
  contact: {
    title: 'Contact Harmony Yoga Center | Vijayawada & Hyderabad',
    description: 'Contact Harmony Yoga Center in Vijayawada & Hyderabad. Schedule your 3-day companion trial pass or call +91 70367 11097 for class inquiries.',
    path: '/contact',
    keywords: ['Contact Harmony Yoga Center', 'Yoga Studio Phone Vijayawada', 'Harmony Yoga Center Address'],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Contact Us', url: '/contact' },
    ],
  },
  privateStudio: {
    title: 'Content Management Studio | Harmony Yoga Center',
    description: 'Internal content management studio.',
    path: '/secure-control-panel-7f8a92',
    noindex: true,
  },
  login: {
    title: 'Authentication Portal | Harmony Yoga Center',
    description: 'Internal authentication portal.',
    path: '/login',
    noindex: true,
  }
};

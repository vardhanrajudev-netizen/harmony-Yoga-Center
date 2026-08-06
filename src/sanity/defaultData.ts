import {
  SanitySiteSettings,
  SanityHeroSection,
  SanityAboutSection,
  SanityProgram,
  SanityTestimonial,
  SanityContactSettings,
} from './types';

export const defaultSiteSettings: SanitySiteSettings = {
  siteTitle: 'Harmony Yoga Center',
  seoTitle: 'Premium Weight Loss Yoga & Personal Training | Harmony Yoga Center Vijayawada',
  metaDescription:
    'Experience personalized yoga alignments, natural slimming solutions, and Ayurvedic nutrition schedules under S. Veeranjaneyulu (Yoga Therapist) in Mogalrajapuram, Vijayawada.',
  logoText: 'HARMONY YOGA',
  tagline: 'Scientific Yoga Science & Natural Slimming Sanctuary',
  socialLinks: [
    { platform: 'Instagram', url: 'https://www.instagram.com/harmony_yogacenter/?hl=en' },
    { platform: 'Facebook', url: 'https://www.facebook.com/anji.sykam' },
    { platform: 'Youtube', url: 'https://www.youtube.com/@Harmony-yoga-center/' },
  ],
  footerDescription:
    'Harmony Yoga Center helps individuals transform their health naturally through expert yoga programs, physical diagnostic alignments, and holistic dietary wisdom.',
  copyrightText: '© 2026 Harmony Yoga Center. All rights reserved.',
};

export const defaultHeroSection: SanityHeroSection = {
  badgeText: 'Mogalrajapuram, Vijayawada • Certified Science Therapy',
  title: 'Natural Slimming & Personalized Yoga Alignments',
  subtitle: 'Transform Your Health & Posture in 30 Minutes Daily',
  description:
    'Experience specialized yoga therapy designed to eliminate stubborn fat, reverse joint pains, and balance thyroid metabolism naturally under Chief Yoga Therapist S. Veeranjaneyulu.',
  ctaText: 'Book Free Consultation',
  ctaLink: '#booking-modal',
  secondaryCtaText: 'Explore Programs',
  secondaryCtaLink: '/programs',
  stats: [
    { value: '1,000+', label: 'Successful Slimming Cases' },
    { value: '100%', label: 'Natural & Non-Invasive' },
    { value: '7+ Yrs', label: 'Clinical Yoga Experience' },
  ],
  ratingValue: '4.9 / 5.0',
  ratingText: 'Over 500+ Verified Patient Reviews in Vijayawada',
};

export const defaultAboutSection: SanityAboutSection = {
  founderName: 'S. Veeranjaneyulu',
  founderDesignation: 'Founder & Chief Yoga Therapist',
  degreeTitle: 'M.Sc. in Yoga Science',
  founderImage: '/assets/yoga_gallery/IMG-20260718-WA0005.jpg',
  biography: [
    'With an esteemed Master of Science (M.Sc.) in Yoga Science, S. Veeranjaneyulu is one of India’s leading authorities on clinical yoga therapy and natural weight loss.',
    'Over seven years of dedicated diagnostic and consulting experience, he has designed custom recovery blueprints addressing stubborn hormonal plateau curves, thyroid metabolism dysfunctions, and chronic stress retention.',
    'At Harmony Yoga Center in Mogalrajapuram, Vijayawada, S. Veeranjaneyulu actively consults with every client. By establishing customized daily 30-minute sequences, he stimulates metabolic functions without resorting to aggressive crash diets or joint-straining workouts.',
  ],
  quote:
    'Your body is an intelligent self-healing ecosystem. When we realign joint postures and restore endocrine harmony through therapeutic breath and movement, natural slimming and vibrant health inevitably follow.',
  qualifications: [
    'Master of Science (M.Sc.) in Yoga Science & Therapeutic Anatomy',
    'Certified Specialist in Endocrine & Thyroid Metabolic Regulation',
    'Lead Clinical Therapist with over 7+ Years of Direct Diagnostic Consultation',
    'Pioneer of 30-Minute Micro-Flow Posture Realignment Blueprints',
  ],
  achievementCounters: [
    { value: '7+ Years', label: 'Clinical Yoga Experience' },
    { value: '1,000+', label: 'Patients Realigned' },
    { value: '98%', label: 'Long-term Success Rate' },
    { value: '100%', label: 'Natural & Safe Protocols' },
  ],
};

export const defaultPrograms: SanityProgram[] = [
  {
    programId: 'slimming',
    title: 'Natural Weight Loss & Slimming',
    category: 'Weight Loss Programs',
    price: 'Custom Plan / Consultation Required',
    timeframe: '30 Mins Daily',
    duration: '6 to 12 Weeks Track',
    description:
      'A scientific 30-minute daily yoga routine designed to activate visceral fat burn, balance thyroid glands, and boost metabolic rate without starvation diets.',
    bulletPoints: [
      '30-minute daily targeted metabolic activation flows',
      'Thyroid & endocrine gland compression postures',
      'Customized Ayurvedic nutrition & anti-inflammatory diet guides',
      'Progressive weight & inch loss tracking charts',
    ],
    ctaText: 'Enroll in Slimming Program',
    iconName: 'Flame',
    order: 1,
  },
  {
    programId: 'joint',
    title: 'Spine & Joint Pain Therapy',
    category: 'Therapeutic Recovery',
    price: 'Custom Plan / Consultation Required',
    timeframe: '45 Mins Daily',
    duration: '8 to 16 Weeks Track',
    description:
      'Targeted spinal decompression and joint alignment postures designed for severe back pain, neck stiffness, sciatica, and postural deformities.',
    bulletPoints: [
      'Spinal column traction and vertebral decompression',
      'Sciatica, lumbar disc, and cervical strain relief',
      'Skeletal angle realignment and postural correction',
      'Gentle mobility sequences safe for all age groups',
    ],
    ctaText: 'Book Joint Health Trial',
    iconName: 'Activity',
    order: 2,
  },
  {
    programId: 'personal',
    title: '1-on-1 Personal Yoga Therapy',
    category: '1-on-1 VIP',
    price: 'Bespoke Package',
    timeframe: 'Custom Schedules',
    duration: 'Flexible Duration',
    description:
      'Private diagnostic sessions with Founder & Chief Yoga Therapist S. Veeranjaneyulu tailored specifically to your medical history and health goals.',
    bulletPoints: [
      'Direct 1-on-1 diagnostic consultation with S. Veeranjaneyulu',
      'Personalized pose adjustments based on physical MRI/scans',
      'Dedicated personal trainer monitoring posture precision',
      'Available both in-person at Vijayawada sanctuary & live stream',
    ],
    ctaText: 'Schedule Personal Session',
    iconName: 'UserCheck',
    order: 3,
  },
  {
    programId: 'online',
    title: 'Global HD Live Interactive Classes',
    category: 'Virtual Sanctuary',
    price: 'Monthly Pass',
    timeframe: 'Multiple Time Slots',
    duration: 'Ongoing Subscription',
    description:
      'Live interactive video streaming classes allowing remote practitioners worldwide to receive real-time posture corrections from our master therapists.',
    bulletPoints: [
      'High-definition dual-camera interactive video streams',
      'Real-time live voice corrections during practice',
      'Morning and evening slots suited for global time zones',
      'Recorded session replays for busy working professionals',
    ],
    ctaText: 'Join Online Stream',
    iconName: 'Video',
    order: 4,
  },
];

export const defaultTestimonials: SanityTestimonial[] = [
  {
    name: 'P. Radhika',
    age: 34,
    weightLost: '10.1 Kg',
    rating: 5,
    program: 'Weight Loss Programs',
    quote:
      'I tried multiple commercial gyms, but the deep therapeutic endocrine lunges and customized thyroid compression sequences under S. Veeranjaneyulu (Yoga Therapist) restored my metabolism. I lost 10.1 Kg and completely reset my energy.',
    order: 1,
  },
  {
    name: 'K. Srimannarayana',
    age: 41,
    weightLost: '11.5 Kg',
    rating: 5,
    program: 'Personalized Yoga Sessions',
    quote:
      'I was suffering from stiff lower back joints and clinical thyroid lag. The personalized live corrections and custom posture alterations from S. Veeranjaneyulu rehabilitated my back and helped me shed 11 Kg naturally. Highly recommend online live yoga!',
    order: 2,
  },
  {
    name: 'M. Tejaswini',
    age: 29,
    weightLost: '8.2 Kg',
    rating: 5,
    program: 'Weight Loss Programs',
    quote:
      'As an IT professional, I barely had time for exercise. The 30-minute daily slimming routines designed by S. Veeranjaneyulu (Yoga Therapist) changed everything. I lost 8.2 Kg in 2 months without fatigue, and my stress handles literally vanished.',
    order: 3,
  },
];

export const defaultContactSettings: SanityContactSettings = {
  phone: '7036711097',
  phoneFormatted: '+91 70367 11097',
  email: 'harmonyyogacenter11@gmail.com',
  address:
    'D.no. 39-17-10/1, behind SV Ranga Rao Hospital, Mogalrajapuram, Vijayawada, Andhra Pradesh — 520010',
  googleMapsUrl: 'https://maps.google.com/?q=Harmony+Yoga+Center+Mogalrajapuram+Vijayawada',
  whatsappNumber: '917036711097',
  whatsappDefaultMessage:
    "Hello Harmony Yoga Center! I'd like to book a therapeutic consultation with S. Veeranjaneyulu.",
  openingHours: [
    { days: 'Monday – Saturday (Morning Batch)', hours: '5:00 AM – 11:00 AM' },
    { days: 'Monday – Saturday (Evening Batch)', hours: '4:00 PM – 8:30 PM' },
    { days: 'Sunday', hours: 'By Special Appointment Only' },
  ],
};

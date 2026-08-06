export default {
  name: 'heroSection',
  title: 'Home Hero Section',
  type: 'document',
  fields: [
    {
      name: 'badgeText',
      title: 'Top Badge Label',
      type: 'string',
      description: 'e.g. "Mogalrajapuram, Vijayawada • Certified Science Therapy"',
    },
    {
      name: 'title',
      title: 'Hero Main Title',
      type: 'string',
      description: 'e.g. "Natural Slimming & Personalized Yoga Alignments"',
    },
    {
      name: 'subtitle',
      title: 'Hero Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Hero Main Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'ctaText',
      title: 'Primary CTA Button Text',
      type: 'string',
      description: 'e.g. "Book Free Therapeutic Consultation"',
    },
    {
      name: 'ctaLink',
      title: 'Primary CTA Link or Path',
      type: 'string',
    },
    {
      name: 'secondaryCtaText',
      title: 'Secondary CTA Button Text',
      type: 'string',
    },
    {
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string',
    },
    {
      name: 'stats',
      title: 'Hero Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Stat Value (e.g. 1000+)', type: 'string' },
            { name: 'label', title: 'Stat Label (e.g. Satisfied Clients)', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'ratingValue',
      title: 'Rating Score',
      type: 'string',
      description: 'e.g. "4.9 / 5.0"',
    },
    {
      name: 'ratingText',
      title: 'Rating Subtext',
      type: 'string',
      description: 'e.g. "Over 500+ Verified Patient Reviews"',
    },
    {
      name: 'heroImage',
      title: 'Hero Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

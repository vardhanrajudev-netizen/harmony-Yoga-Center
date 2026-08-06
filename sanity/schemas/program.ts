export default {
  name: 'program',
  title: 'Wellness Programs',
  type: 'document',
  fields: [
    {
      name: 'programId',
      title: 'Program Identifier / Slug',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'e.g. "slimming", "joint", "personal", "online"',
    },
    {
      name: 'title',
      title: 'Program Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category Tag',
      type: 'string',
      description: 'e.g. "Weight Loss", "Therapeutic", "1-on-1 VIP"',
    },
    {
      name: 'price',
      title: 'Price / Fee Info',
      type: 'string',
      description: 'e.g. "Custom Plan / Consult Required"',
    },
    {
      name: 'timeframe',
      title: 'Timeframe',
      type: 'string',
      description: 'e.g. "30 Mins Daily"',
    },
    {
      name: 'duration',
      title: 'Program Duration',
      type: 'string',
      description: 'e.g. "6 to 12 Weeks"',
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'bulletPoints',
      title: 'Features / Key Highlights List',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon identifier e.g. "Flame", "Activity", "UserCheck", "Video"',
    },
    {
      name: 'featuredImage',
      title: 'Program Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
};

export default {
  name: 'testimonial',
  title: 'Client Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'age',
      title: 'Age',
      type: 'number',
    },
    {
      name: 'weightLost',
      title: 'Weight Lost / Metric Achieved',
      type: 'string',
      description: 'e.g. "8.2 Kg" or "Full Back Relief"',
    },
    {
      name: 'rating',
      title: 'Star Rating (1-5)',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: 'program',
      title: 'Enrolled Program',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Testimonial Review Quote',
      type: 'text',
      rows: 4,
    },
    {
      name: 'videoUrl',
      title: 'Video / Media Asset URL',
      type: 'url',
    },
    {
      name: 'thumbnail',
      title: 'Custom Thumbnail Image',
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

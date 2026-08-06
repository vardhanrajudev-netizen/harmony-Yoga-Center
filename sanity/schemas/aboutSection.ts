export default {
  name: 'aboutSection',
  title: 'About / Founder Section',
  type: 'document',
  fields: [
    {
      name: 'founderName',
      title: 'Founder Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'e.g. "S. Veeranjaneyulu"',
    },
    {
      name: 'founderDesignation',
      title: 'Founder Designation / Title',
      type: 'string',
      description: 'e.g. "Founder & Chief Yoga Therapist"',
    },
    {
      name: 'degreeTitle',
      title: 'Academic Title / Degree',
      type: 'string',
      description: 'e.g. "M.Sc. in Yoga Science"',
    },
    {
      name: 'founderImage',
      title: 'Founder Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'biography',
      title: 'Founder Biography Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      name: 'quote',
      title: 'Founder Philosophy Quote',
      type: 'text',
      rows: 3,
    },
    {
      name: 'qualifications',
      title: 'Key Qualifications / Credentials',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'achievementCounters',
      title: 'Achievement Counters / Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g. 7+)', type: 'string' },
            { name: 'label', title: 'Metric Label (e.g. Years Clinical Experience)', type: 'string' },
          ],
        },
      ],
    },
  ],
};

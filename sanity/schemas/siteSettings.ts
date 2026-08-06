export default {
  name: 'siteSettings',
  title: 'Global Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Website Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'seoTitle',
      title: 'Default SEO Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
    },
    {
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tagline',
      title: 'Website Tagline',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Social Link',
          fields: [
            { name: 'platform', title: 'Platform (Instagram, Facebook, Youtube, etc.)', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
    {
      name: 'footerDescription',
      title: 'Footer Description Text',
      type: 'text',
      rows: 3,
    },
    {
      name: 'copyrightText',
      title: 'Copyright Notice',
      type: 'string',
    },
  ],
};

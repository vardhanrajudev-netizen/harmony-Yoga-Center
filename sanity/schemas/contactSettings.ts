export default {
  name: 'contactSettings',
  title: 'Contact Information Settings',
  type: 'document',
  fields: [
    {
      name: 'phone',
      title: 'Primary Phone Number',
      type: 'string',
    },
    {
      name: 'phoneFormatted',
      title: 'Formatted Display Phone',
      type: 'string',
      description: 'e.g. "+91 70367 11097"',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Studio Address',
      type: 'text',
      rows: 3,
    },
    {
      name: 'googleMapsUrl',
      title: 'Google Maps Link',
      type: 'url',
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Phone Number (with Country Code)',
      type: 'string',
      description: 'e.g. "917036711097"',
    },
    {
      name: 'whatsappDefaultMessage',
      title: 'Default WhatsApp Message Text',
      type: 'string',
    },
    {
      name: 'openingHours',
      title: 'Studio Opening Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'days', title: 'Days (e.g. Monday - Saturday)', type: 'string' },
            { name: 'hours', title: 'Hours (e.g. 5:00 AM - 11:00 AM, 4:00 PM - 8:30 PM)', type: 'string' },
          ],
        },
      ],
    },
  ],
};

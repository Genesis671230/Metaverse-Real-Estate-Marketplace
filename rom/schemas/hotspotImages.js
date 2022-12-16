export default {
    name: 'hotspotImages',
    title: 'Hotspot Images',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Image Title',
        type: 'string',
      },
      {
        name: 'owner',
        title: 'Owner',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        },
    },
    ],
  };
  
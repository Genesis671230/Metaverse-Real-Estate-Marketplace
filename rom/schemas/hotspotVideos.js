export default {
    name: 'hotspotVideos',
    title: 'Hotspot Videos',
    type: 'document',
    fields: [
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
      },
      {
        name: 'owner',
        title: 'Owner',
        type: 'string',
      },
      {
        name: 'video',
        title: 'Video',
        type: 'file',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  
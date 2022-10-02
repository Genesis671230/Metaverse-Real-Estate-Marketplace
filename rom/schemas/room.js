export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
      {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
              hotspot: true,
          },
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'hotspotsposition',
        title: 'Hotspots position',
        type: 'array',
        of: [{ title:"Pitch",type:"object",
        fields: [
          {
            name: 'id',
            title: 'Id',
            type: 'number',
          },
          {
            name: 'linkedScene',
            title: 'Linked scene',
            type: 'number',
          },
          {
              name: 'pitch',
              title: 'Pitch',
              type: 'number',
          },
          {
              name: 'yaw',
              title: 'Yaw',
              type: 'number',
          },
          {
              name: 'hfov',
              title: 'Hfov',
              type: 'number',
          },
      ],
      }],
      },
  ],
};
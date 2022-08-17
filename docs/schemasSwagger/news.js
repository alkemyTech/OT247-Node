const News = {
  schemaName: 'News',
  type: 'object',
  required: [
    'name', 'content', 'image', 'categoryId',
  ],
  properties: {
    name: {
      type: 'string',
      example: 'Moon Cycle',
    },
    content: {
      type: 'text',
      example: 'The Moon displays these eight phases one after the other as it moves through its cycle each month. It takes 27 days for the Moon to orbit Earth.',
    },
    image: {
      type: 'string',
      example: 'img.jpg',
    },
    categoryId: {
      type: 'integer',
      example: 1,
    },
  },
};

module.exports = News;

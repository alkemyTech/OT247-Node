const Testimonial = {
  schemaName: 'Testimonial',
  type: 'object',
  required: [
    'name', 'image', 'content',
  ],
  properties: {
    name: {
      type: 'string',
      example: 'Testimonios 1',
    },
    image: {
      type: 'string',
      example: 'https://i.pinimg.com/originals/05/51/f5/0551f506725ac1deeaa85d46f8b9a5fd.jpg',
    },
    content: {
      type: 'string',
      example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et elementum metus.',
    },
  },
};

module.exports = Testimonial;

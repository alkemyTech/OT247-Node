const Category = {
  schemaName: 'Category',
  type: 'object',
  required: [
    'name', 'description', 'image',
  ],
  properties: {
    name: {
      type: 'string',
      example: 'Games',
    },
    description: {
      type: 'string',
      example: 'Games with different rules',
    },
    image: {
      type: 'string',
      example: 'test.gif',
    },
  },
};

module.exports = Category;

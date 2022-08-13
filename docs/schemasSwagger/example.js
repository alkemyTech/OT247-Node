const Example = {
  schemaName: 'Example',
  type: 'object',
  required: [
    'name', 'email', 'message',
  ],
  properties: {
    name: {
      type: 'string',
      example: 'romina',
    },
    phone: {
      type: 'integer',
      example: '34125634',
    },
    email: {
      type: 'string',
      example: 'test@example.com',
    },
  },
};

module.exports = Example;

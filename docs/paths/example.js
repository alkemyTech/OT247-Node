const Example = {
  path: '/example',

  get: {
    tags: ['example'],
    summary: 'GET example',
    description: 'This endpoint is a GET example',
    responses: {
      200: {
        description: 'example description',
      },
    },
    security: [
      { bearerAuth: [] },
    ],
  },

  post: {
    tags: ['example'],
    summary: 'POST example',
    description: 'This endpoint is a POST example',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Example',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'example description',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Example',
            },
          },
        },
      },
    },
  },

};

module.exports = Example;

const News = {
  path: {
    '/news': {
      get: {
        tags: ['news'],
        summary: 'GET news',
        description: '',
        responses: {
          200: {
            description: 'Show all the news',
          },
          400: {
            description: 'An error has ocurred',
          },
          404: {
            description: 'News not found',
          },
        },
      },
      post: {
        tags: ['news'],
        summary: 'POST news as admin',
        description: '',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/News',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Create a news',
          },
          400: {
            description: 'An error has ocurred',
          },
        },
      },
    },
    '/news/:id': {
      get: {
        tags: ['news'],
        summary: 'GET news as admin',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              id: {
                type: 'integer',
                example: 1,
              },
            },
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'Show a news',
          },
          400: {
            description: 'An error has ocurred',
          },
          404: {
            description: 'News not found',
          },
        },
      },
      put: {
        tags: ['news'],
        summary: 'PUT news as admin',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              id: {
                type: 'integer',
                example: 1,
              },
            },
            required: true,
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/News',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Change a news',
          },
          400: {
            description: 'An error has ocurred',
          },
          404: {
            description: 'News not found',
          },
        },
      },
      delete: {
        tags: ['news'],
        summary: 'DELETE news as admin',
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            schema: {
              id: {
                type: 'integer',
                example: 1,
              },
            },
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'Delete a news',
          },
          400: {
            description: 'An error has ocurred',
          },
          404: {
            description: 'News not found',
          },
        },
      },
    },
  },
};

module.exports = News;

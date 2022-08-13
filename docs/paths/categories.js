const Category = {
  paths: {
    '/categories': {
      get: {
        tags: ['category'],
        summary: 'GET categories names',
        description: 'This endpoint is a GET categories geting only attribute name',
        responses: {
          200: {
            description: 'category description',
          },
          404: {
            description: 'there are not categories',
          },
          401: {
            description: 'first login as admin',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },
      post: {
        tags: ['category'],
        summary: 'POST category',
        description: 'This endpoint is a POST category',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Category',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'category description',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Category',
                },
              },
            },
          },
          400: {
            description: 'invalid parameters',
          },
          401: {
            description: 'first login as admin',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },
    },
    '/categories/{id}': {
      get: {
        tags: ['category'],
        summary: 'GET category as admin',
        description: 'This endpoint is a GET one category by id as admin',
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
            description: 'category description',
          },
          404: {
            description: 'there are not category with given id',
          },
          401: {
            description: 'first login as admin',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },

      put: {
        tags: ['category'],
        summary: 'PUT category',
        description: 'This endpoint is a PUT category',
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
                $ref: '#/components/schemas/Category',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'category description',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Category',
                },
              },
            },
          },
          400: {
            description: 'invalid parameters',
          },
          404: {
            description: 'there are not categories',
          },
          401: {
            description: 'first login as admin',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },

      delete: {
        tags: ['category'],
        summary: 'DELETE category',
        description: 'This endpoint is a DELETE category',
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
            description: 'category deleted successfully',
          },
          400: {
            description: 'invalid parameters',
          },
          404: {
            description: 'there are not categories',
          },
          401: {
            description: 'first login as admin',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },
    },
  },
};

module.exports = Category;

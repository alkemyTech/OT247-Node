const Member = {
  path: {
    '/members': {
      get: {
        tags: ['member'],
        summary: 'GET pagination of members',
        description: 'This endpoint is a GET members paginated',
        responses: {
          200: {
            description: 'member description',
          },
          404: {
            description: 'there are not members',
          },
          401: {
            description: 'first login as admin',
          },
          403: {
            description: 'invalid token',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },
      post: {
        tags: ['member'],
        summary: 'POST member',
        description: 'This endpoint is a POST member',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Member',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'member description',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Member',
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
          403: {
            description: 'invalid token',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },
    },
    '/members/{id}': {
      put: {
        tags: ['member'],
        summary: 'PUT member',
        description: 'This endpoint is a PUT member',
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
                $ref: '#/components/schemas/Member',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'member description',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Member',
                },
              },
            },
          },
          400: {
            description: 'invalid parameters',
          },
          404: {
            description: 'there are not members',
          },
          401: {
            description: 'first login as admin',
          },
          403: {
            description: 'invalid token',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },

      delete: {
        tags: ['member'],
        summary: 'DELETE member',
        description: 'This endpoint is a DELETE member',
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
            description: 'member deleted successfully',
          },
          400: {
            description: 'invalid parameters',
          },
          404: {
            description: 'there are not members',
          },
          401: {
            description: 'first login as admin',
          },
          403: {
            description: 'invalid token',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },
    },
  },
};

module.exports = Member;

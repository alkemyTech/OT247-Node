const Testimonial = {
  path: {
    '/testimonials': {
      get: {
        tags: ['testimonial'],
        summary: 'GET all testimonials',
        description: 'This endpoint is a GET all testimonials',
        responses: {
          200: {
            description: 'testimonials description',
          },
          401: {
            description: 'first login as admin',
          },
          404: {
            description: 'there are not testimonials',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },
      post: {
        tags: ['testimonial'],
        summary: 'POST testimonial',
        description: 'This endpoint is a POST testimonial',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Testimonial',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'testimonial description',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Testimonial',
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
    '/testimonials/{id}': {
      put: {
        tags: ['testimonial'],
        summary: 'PUT testimonial',
        description: 'This endpoint is a PUT testimonial',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              id: {
                type: 'integer',
                example: 1,
              },
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Testimonial',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'testimonial description',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Testimonial',
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
          404: {
            description: 'there are not testimonial with given id',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },
      delete: {
        tags: ['testimonial'],
        summary: 'DELETE testimonial',
        description: 'This endpoint is a DELETE testimonial',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              id: {
                type: 'integer',
                example: 1,
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'testimonial description',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Testimonial',
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
          404: {
            description: 'there are not testimonial with given id',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },
    },
  },
};

module.exports = Testimonial;

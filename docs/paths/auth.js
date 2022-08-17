const Auth = {
  path: {
    '/auth/register': {
      post: {
        tags: ['auth'],
        summary: 'Register',
        description: 'This endpoint is a register for users',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserRegister',
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
                  $ref: '#/components/schemas/UserRegister',
                },
              },
            },
          },
          400: {
            description: 'Bad Request',
          },
        },
      },
    },
    '/auth/login': {
      post: {
        tags: ['auth'],
        summary: 'Login',
        description: 'This endpoint is login for users',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserLogin',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'user description and token',
          },
          400: {
            description: 'error user login',
          },
          500: {
            description: 'data and hash arguments required',
          },
        },
      },
    },
    '/auth/me': {
      get: {
        tags: ['auth'],
        summary: 'User info',
        description: ' This endpoint is a user info',
        parameters: [],
        responses: {
          200: {
            description: 'user data',
          },
          403: {
            description: 'Forbidden',
          },
          400: {
            description: 'unexpected error',
          },
        },
        security: [
          { bearerAuth: [] },
        ],
      },
    },
  },
};

module.exports = Auth;

const UserRegister = {
  schemaName: 'UserRegister',
  type: 'object',
  required: [
    'firstName', 'lastName', 'name', 'password',
  ],
  properties: {
    email: {
      type: 'string',
      example: 'johndoe@gmail.com',
    },
    password: {
      type: 'string',
      example: 'jOhN.S9zstzq',
    },
    firstName: {
      type: 'string',
      example: 'John',
    },
    lastName: {
      type: 'string',
      example: 'Doe',
    },
  },
};

module.exports = UserRegister;

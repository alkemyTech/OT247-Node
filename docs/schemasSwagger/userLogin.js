const UserLogin = {
  schemaName: 'UserLogin',
  type: 'object',
  required: [
    'name', 'password',
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
  },
};

module.exports = UserLogin;

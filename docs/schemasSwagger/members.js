const Member = {
  schemaName: 'Member',
  type: 'object',
  required: [
    'name', 'description', 'image', 'facebookUrl', 'instagramUrl', 'linkedinUrl',
  ],
  properties: {
    name: {
      type: 'string',
      example: 'Peter Parker',
    },
    description: {
      type: 'string',
      example: 'Member part of ONG',
    },
    image: {
      type: 'string',
      example: 'test.gif',
    },
    facebookUrl: {
      type: 'string',
      example: 'https://www.facebook.com/peterparker',
    },
    instagramUrl: {
      type: 'string',
      example: 'https://www.instagram.com/peterparker',
    },
    linkedinUrl: {
      type: 'string',
      example: 'https://www.linkedin.com/in/peterparker',
    },
  },
};

module.exports = Member;

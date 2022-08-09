module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Members', [
      {
        name: 'member 1',
        facebookUrl: 'facebook.com/member1',
        instagramUrl: 'instagram.com/member1',
        linkedinUrl: 'linkedin.com/member1',
        image: 'https://i.pinimg.com/originals/05/51/f5/0551f506725ac1deeaa85d46f8b9a5fd.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex euismod, euismod nisi eu, consectetur nisi.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'member 2',
        facebookUrl: 'facebook.com/member2',
        instagramUrl: '',
        linkedinUrl: 'linkedin.com/member2',
        image: 'https://i.pinimg.com/originals/05/51/f5/0551f506725ac1deeaa85d46f8b9a5fd.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex euismod, euismod nisi eu, consectetur nisi.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'member 3',
        facebookUrl: '',
        instagramUrl: '',
        linkedinUrl: '',
        image: 'https://i.pinimg.com/originals/05/51/f5/0551f506725ac1deeaa85d46f8b9a5fd.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex euismod, euismod nisi eu, consectetur nisi.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Members', null, {});
  },
};

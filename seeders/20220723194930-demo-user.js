module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Hideo',
        lastName: 'Kojima',
        email: 'me@hideokojima.com',
        password: '123',
        photo: 'https://pbs.twimg.com/profile_images/914211724412166144/Bf2Yij9b_400x400.jpg',
        roleId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Shigeru',
        lastName: 'Miyamoto',
        email: 'smiyamoto@nintendo.com',
        password: '123',
        photo: 'https://pbs.twimg.com/media/EpuX450XUAAJBK0.jpg',
        roleId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

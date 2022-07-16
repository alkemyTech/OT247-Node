'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Testimonials', [{
      name: 'tesimonial 1',
      image: 'https://i.pinimg.com/originals/05/51/f5/0551f506725ac1deeaa85d46f8b9a5fd.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex euismod, euismod nisi eu, consectetur nisi.',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Testimonials', null, {});
  }
};

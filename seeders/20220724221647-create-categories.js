'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Fiestas',
        description: 'Fiestas organizadas por la ONG',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Juegos',
        description: 'Juegos organizados por la ONG',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
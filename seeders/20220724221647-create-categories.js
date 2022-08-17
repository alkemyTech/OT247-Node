module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Fiestas',
        description: 'Fiestas organizadas por la ONG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Juegos',
        description: 'Juegos organizados por la ONG',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};

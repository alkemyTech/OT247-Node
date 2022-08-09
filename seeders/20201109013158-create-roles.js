module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin',
        description: 'Usuario administrador',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Standard',
        description: 'Usuario regular',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};

const { faker } = require('@faker-js/faker');

const data = [];
const amount = 20;
const date = new Date();
let userType;

for (let i = 0; i < amount; i += 1) {
  userType = i % 2 === 0 ? 1 : 2;

  data.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    photo: faker.image.avatar(),
    roleId: userType,
    createdAt: date,
    updatedAt: date,
  });
}

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

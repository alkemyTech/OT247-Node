const { faker } = require('@faker-js/faker');

let data = [];
let amount = 30;
let date = new Date();

for (let i = 0; i < amount; i++) {
  data.push({
    name: faker.lorem.sentence(),
    image: faker.image.nature(),
    content: faker.lorem.paragraph(),
    createdAt: date,
    updatedAt: date,
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Testimonials', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Testimonials', null, {});
  },
};

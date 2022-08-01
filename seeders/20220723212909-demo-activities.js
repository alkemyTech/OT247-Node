module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Activities', [
      {
        name: 'Activities 1',
        image: 'https://1734811051.rsc.cdn77.org/data/images/full/375838/spacex-falcon-9-rocket-and-crew-dragon-capsule-launches-from-cape-canaveral-sending-astronauts-to-the-international-space-station.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex euismod, euismod nisi eu, consectetur nisi.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Activities 2',
        image: 'https://cdn-3.expansion.mx/dims4/default/7355868/2147483647/strip/true/crop/6720x4480+0+0/resize/1800x1200!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F97%2F8f%2F421ea7c649289fbf72371883657a%2Fspacex-nasa.JPG',
        content: 'Vivamus iaculis posuere porttitor. Duis ante sapien, bibendum at nibh quis, accumsan pharetra leo. Nulla condimentum congue dignissim. Duis accumsan odio quis leo aliquam, eu laoreet odio molestie.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Activities 3',
        image: 'https://www.fayerwayer.com/resizer/bsIEy169K1t6MMdUexBU0ldv_PE=/arc-photo-metroworldnews/arc2-prod/public/EQKWAQT6JNEDFO3E3D6EKNOZME.JPG',
        content: 'Ut purus arcu, aliquam nec enim ut, varius interdum enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Activities 4',
        image: 'https://www.cronista.com/files/image/459/459818/62726a7793f94.jpg',
        content: 'Sed sodales augue nec mi porttitor mattis. Praesent a ex nec ipsum congue faucibus. Donec quis massa ac massa gravida viverra.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Activities 5',
        image: 'https://medialab.unmsm.edu.pe/chiqaqnews/wp-content/uploads/2020/12/neuralink.jpg',
        content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Activities', null, {});
  },
};

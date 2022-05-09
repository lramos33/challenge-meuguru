module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Haydon Mueller',
          email: 'haydon@email.com',
          password: 'example_password',
        },
        {
          name: 'Simona Spears',
          email: 'simona@email.com',
          password: 'example_password',
        },
        {
          name: 'Jacqueline Erickson',
          email: 'jacqueline@email.com',
          password: 'example_password',
        },
        {
          name: 'Bree Southern',
          email: 'bree@email.com',
          password: 'example_password',
        },
        {
          name: 'Ruqayyah Odom',
          email: 'ruqayyah@email.com',
          password: 'example_password',
        },
        {
          name: 'Brent Ferry',
          email: 'brent@email.com',
          password: 'example_password',
        },
        {
          name: 'Rhys Gallegos',
          email: 'rhys@email.com',
          password: 'example_password',
        },
        {
          name: 'Stefanie Reeves',
          email: 'stefanie@email.com',
          password: 'example_password',
        },
        {
          name: 'Uma Castillo',
          email: 'uma@email.com',
          password: 'example_password',
        },
        {
          name: 'Alima Wilkins',
          email: 'alima@email.com',
          password: 'example_password',
        },
        {
          name: 'Momina Green',
          email: 'monina@email.com',
          password: 'example_password',
        },
        {
          name: 'Dale Hatfield',
          email: 'dale@email.com',
          password: 'example_password',
        },
        {
          name: 'Albert Mill',
          email: 'albert@email.com',
          password: 'example_password',
        },
        {
          name: 'Samual Reeve',
          email: 'samual@email.com',
          password: 'example_password',
        },
        {
          name: 'Abigale Butler',
          email: 'abigale@email.com',
          password: 'example_password',
        },
        {
          name: 'Cleveland Matthews',
          email: 'cleveland@email.com',
          password: 'example_password',
        },
        {
          name: 'Jakob Buxton',
          email: 'jakob@email.com',
          password: 'example_password',
        },
        {
          name: 'Minnie Lindsay',
          email: 'minnie@email.com',
          password: 'example_password',
        },
        {
          name: 'Frances Bullock',
          email: 'frances@email.com',
          password: 'example_password',
        },
        {
          name: 'Fox Yoder',
          email: 'fox@email.com',
          password: 'example_password',
        },
      ],
      { timestamps: false },
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};

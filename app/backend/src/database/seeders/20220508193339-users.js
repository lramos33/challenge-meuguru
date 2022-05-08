module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'User One',
          email: 'user@email.com',
          password: 'example_password',
        },
        {
          id: 2,
          name: 'User Two',
          email: 'user@email.com',
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

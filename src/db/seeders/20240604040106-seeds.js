module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'todos',
      [
        {
          title: "title 1",
          description: "description 1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "title 2",
          description: "description 2",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "title 3",
          description: "description 3",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "title 4",
          description: "description 4",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "title 5",
          description: "description 5",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "title 6",
          description: "description 6",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "title 7",
          description: "description 7",
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todos', null, {});
  }
};

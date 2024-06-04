module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'todos',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: Sequelize.STRING(400),
        description: Sequelize.TEXT,
        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        deleted_at: {
          type: Sequelize.DATE
        }
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('todos');
  }
};

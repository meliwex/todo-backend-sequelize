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
        title: { type: Sequelize.STRING(400), allowNull: false },
        description: { type: Sequelize.TEXT, allowNull: true },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
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

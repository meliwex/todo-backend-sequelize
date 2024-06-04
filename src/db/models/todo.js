module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    title: DataTypes.STRING(400),
    description: DataTypes.TEXT,
  }, 
  {
    paranoid: true,
    deletedAt: "deleted_at",

    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
  });

  return todo;
};
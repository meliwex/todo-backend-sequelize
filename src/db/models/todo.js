module.exports = (sequelize, DataTypes) => {

  const Todo = sequelize.define('Todo', {
    title: { type: DataTypes.STRING(400), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
  }, 
  {
    underscored: true,
    paranoid: true,
    timestamps: true,
  });

  return Todo;
};
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Todo.associate = (models) => {
    Todo.belongsTo(models.User, {
      foreignkey: "userId",
      onDelete: "CASCADE",
    });
  };
  return Todo;
};

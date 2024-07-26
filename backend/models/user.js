module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      uquine: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Todo, {
      foreignKey: "userId",
      as: "todos",
    });
  };
  return User;
};

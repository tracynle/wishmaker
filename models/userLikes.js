module.exports = function(sequelize, DataTypes) {
  let UserLikes = sequelize.define("UserLikes", {
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  });

  UserLikes.associate = function(models) {
    UserLikes.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return UserLikes;
};

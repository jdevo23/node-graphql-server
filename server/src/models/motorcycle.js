module.exports = (sequelize, DataTypes) => {
  const Motorcycle = sequelize.define("motorcycles", {
    make: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  });

  return Motorcycle;
};

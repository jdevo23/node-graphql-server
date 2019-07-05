const Sequelize = require("sequelize");
const keys = require("../../keys");

const sequelize = new Sequelize({
  host: keys.host,
  dialect: "mysql",
  username: keys.user,
  password: keys.password,
  database: keys.database,
  define: {
    timestamps: false
  }
});

module.exports = sequelize;

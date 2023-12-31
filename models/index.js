const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);

const User = require("./User")(sequelize, Model, DataTypes);
const Todo = require("./Todo")(sequelize, Model, DataTypes);
const Note = require("./Note")(sequelize, Model, DataTypes);
const Table = require("./Table")(sequelize, Model, DataTypes);

User.hasMany(Todo);
User.hasMany(Note);
User.hasMany(Table);
Todo.belongsTo(User);
Note.belongsTo(User);
Table.belongsTo(User);

module.exports = { sequelize, User, Todo, Note, Table };

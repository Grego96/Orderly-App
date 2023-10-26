module.exports = (sequelize, Model, DataTypes) => {
  class Table extends Model {}

  Table.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      headers: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      rows: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "table",
    }
  );

  return Table;
};

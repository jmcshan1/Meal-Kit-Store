const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Style extends Model {}

Style.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    style_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'style',
  }
);

module.exports = Style;

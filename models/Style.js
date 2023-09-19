//reqiured dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Style model
class Style extends Model {}

//create fields/columns for Style model
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

//export Style model
module.exports = Style;

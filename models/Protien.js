//required dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Protien model
class Protien extends Model {}

//create fields/columns for Protien model
Protien.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    protien_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'protien',
  }
);

//export Protien model
module.exports = Protien;

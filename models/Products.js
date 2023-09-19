//required dependencies
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
//create Product model
class Product extends Model {}
//create fields/columns for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    protien_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'protien',
        key: 'id',
      },
    },
    style_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'style',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

//export model
module.exports = Product;
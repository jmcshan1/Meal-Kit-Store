const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Protien extends Model {}

Protien.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,
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

module.exports = Protien;
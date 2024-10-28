const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');
const { DB_TABLES } = require('../config/constants');

const Category = sequelize.define(DB_TABLES.CATEGORIES, {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
}, {
  paranoid: true
});

module.exports = Category;

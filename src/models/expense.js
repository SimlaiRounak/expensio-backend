const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');
const { DB_TABLES } = require('../config/constants');

const Expense = sequelize.define(DB_TABLES.EXPENSES, {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  expense_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  expense_amount: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
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

module.exports = Expense;

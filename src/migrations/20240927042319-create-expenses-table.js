/** @type {import('sequelize-cli').Migration} */
const { DB_TABLES } = require('../config/constants');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(DB_TABLES.EXPENSES, {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      expense_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      currency: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      expense_amount: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(DB_TABLES.EXPENSES);
  }
};

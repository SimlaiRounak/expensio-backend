/** @type {import('sequelize-cli').Migration} */
const { DB_TABLES } = require('../config/constants');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(DB_TABLES.CATEGORIES, {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
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
    await queryInterface.dropTable(DB_TABLES.CATEGORIES);
  }
};

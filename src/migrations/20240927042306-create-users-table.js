/** @type {import('sequelize-cli').Migration} */
const { DB_TABLES } = require('../config/constants');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(DB_TABLES.USERS, {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT('long'),
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
    await queryInterface.dropTable(DB_TABLES.USERS);
  }
};

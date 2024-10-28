const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');
const {
  database, user, password, host, dialect
} = require('./db.config');

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect,
  dialectModule: mysql2,
  logging: false
});

module.exports = {
  Sequelize,
  sequelize
};

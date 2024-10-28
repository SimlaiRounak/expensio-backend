require('dotenv').config();

const { env } = process;
const db = {
  host: env.DB_HOST,
  user: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME || 'expensio',
  port: env.DB_PORT || 3306,
  dialect: env.DB_DIALECT || 'mysql'
};

module.exports = db;

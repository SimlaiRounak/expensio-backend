const authCodes = require('./auth-codes');
const genericCodes = require('./generic-codes');
const userCodes = require('./user-codes');

module.exports = {
  ...authCodes,
  ...genericCodes,
  ...userCodes
};

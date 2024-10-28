const { verifyToken } = require('../helpers/authHelper');
const responseHelper = require('../helpers/responseHelper');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const authorization = req.headers['x-auth-token'];
    const verifiedUser = verifyToken(authorization);

    const userExists = await User.findOne({
      where: { id: verifiedUser.id },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt'] },
      raw: true
    });

    if (!userExists) {
      return responseHelper.error(req, res, 'TOKENUSR400');
    }

    req.user = userExists;

    return next();
  } catch (ex) {
    return responseHelper.error(req, res, 'SERVER500', ex);
  }
};

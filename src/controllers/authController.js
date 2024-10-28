const responseHelper = require('../helpers/responseHelper');
const authHelper = require('../helpers/authHelper');
const {
  User
} = require('../models');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({
      where: {
        email
      },
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      raw: true
    });
    if (!userExists) {
      return responseHelper.error(req, res, 'USER404');
    }
    const passwordVerified = await authHelper.verifyPassword(password, userExists.password);
    if (!passwordVerified) {
      return responseHelper.error(req, res, 'LOGIN401');
    }

    delete userExists.password;

    const responsePayload = {
      access_token: authHelper.generateToken({ id: userExists.id }),
      user: userExists
    };

    return responseHelper.success(req, res, 'LOGIN200', responsePayload);
  } catch (err) {
    return responseHelper.error(req, res, 'SERVER500', err);
  }
};

const register = async (req, res) => {
  try {
    const {
      first_name, last_name, email, password, phone_number, image
    } = req.body;
    const existingUser = await User.findOne({
      where: { email },
      attributes: ['id']
    });
    if (existingUser) {
      return responseHelper.error(req, res, 'USEREXISTS400');
    }
    await User.create({
      first_name,
      last_name,
      email,
      password: await authHelper.hashPassword(password),
      phone_number,
      image,
    });
    return responseHelper.success(req, res, 'USER201');
  } catch (err) {
    return responseHelper.error(req, res, 'SERVER500', err);
  }
};

const updateProfile = async (req, res) => {
  try {
    const {
      id, first_name, last_name, email, phone_number, image
    } = req.body;
    const existingUser = await User.findOne({
      where: { id, deletedAt: null },
      attributes: ['id']
    });
    if (!existingUser) {
      return responseHelper.error(req, res, 'USER404');
    }

    await User.update({
      first_name,
      last_name,
      email,
      phone_number,
      image
    }, {
      where: { id, deletedAt: null }
    });
    return responseHelper.success(req, res, 'USERUPDATE200');
  } catch (err) {
    return responseHelper.error(req, res, 'SERVER500', err);
  }
};

module.exports = {
  login,
  register,
  updateProfile
};

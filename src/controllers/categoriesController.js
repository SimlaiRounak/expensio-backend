const responseHelper = require('../helpers/responseHelper');

const listCategories = async (req, res) => {
  try {
    return responseHelper.success(req, res, 'SXS000');
  } catch (err) {
    return responseHelper.error(req, res, 'SERVER500', err);
  }
};

module.exports = {
  listCategories
};

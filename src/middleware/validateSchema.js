const validateRequest = (schema, property) => (req, res, next) => {
  try {
    const { error } = schema.validate(req[property]);
    if (error) {
      return res.json({ status_code: 422, message: error.details[0].message }).status(422);
    }
    return next();
  } catch (ex) {
    console.log(ex);
    return res.json({ status_code: 500, message: ex.message }).status(500);
  }
};

module.exports = {
  validateRequest
};

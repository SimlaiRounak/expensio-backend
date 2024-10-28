const Joi = require('joi');

module.exports = {
  body: Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    phone_number: Joi.string().required(),
    password: Joi.string().required(),
    image: Joi.string().required()
  })
};

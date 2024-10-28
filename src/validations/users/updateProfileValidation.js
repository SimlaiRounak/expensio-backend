const Joi = require('joi');

module.exports = {
  body: Joi.object().keys({
    id: Joi.number().required(),
    image: Joi.string().allow('', null).optional(),
    first_name: Joi.string().required(),
    last_name: Joi.string().allow('', null).optional(),
    email: Joi.string().required(),
    phone_number: Joi.string().required()
  })
};

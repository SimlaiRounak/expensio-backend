const Joi = require('joi');

const PaginationValidation = Joi.object({
  page: Joi.number().allow('').label('Page'),
  limit: Joi.number().allow('').label('Limit'),
});

module.exports = {
  PaginationValidation
};

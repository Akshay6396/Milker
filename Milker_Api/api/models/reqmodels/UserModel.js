var Joi = require('joi');

module.exports.UpdateAddressModal = {
  UserId: Joi.number().required(),
  Address: Joi.string().required(),
  SubLocality: Joi.string().required(),
  Locality: Joi.string().required(),
  SubAdmin: Joi.string().required(),
  Admin: Joi.string().required(),
  PostalCode: Joi.string().required(),
  Lat: Joi.string().required(),
  Long: Joi.string().required()
};

module.exports.GetUserDashboardDataModal = {
  Lat: Joi.string().required(),
  Long: Joi.string().required()
};

module.exports.GetMilkerOrdersModal = {
  UserId: Joi.number().required()
};
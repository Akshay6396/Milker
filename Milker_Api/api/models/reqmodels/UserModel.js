var Joi = require('joi');

module.exports.UpdateAddressModal = {
  UserId: Joi.number().required(),
  Address: Joi.string().required(),
  SubLocality: Joi.any(),
  Locality: Joi.any(),
  SubAdmin: Joi.any(),
  Admin: Joi.any(),
  PostalCode: Joi.any(),
  Lat: Joi.string().required(),
  Long: Joi.string().required()
};

module.exports.GetUserDashboardDataModal = {
  Lat: Joi.any(),
  Long: Joi.any()
};

module.exports.GetMilkerOrdersModal = {
  UserId: Joi.number().required(),
  IsMilker: Joi.bool().required()
};
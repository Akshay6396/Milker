var Joi = require('joi');

module.exports.AddAddressModal = {
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

module.exports.UserAddressListModal = {
  UserId: Joi.number().required()
};

module.exports.DeleteAddressModal = {
  Id: Joi.number().required()
};
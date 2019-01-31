var Joi = require('joi');

module.exports.AddUpdateMasterSubsciptionModal = {
  Id: Joi.allow(null),
  Name: Joi.string().required(),
  ProductId: Joi.number().required(),
  SubscriptionTypeId: Joi.number().required(),
  OfferedPrice: Joi.number().required(),
  CreatedBy: Joi.number().required()
};

module.exports.DeleteMasterSubsciptionModal = {
  Id: Joi.number().required()
};
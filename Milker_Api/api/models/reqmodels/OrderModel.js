var Joi = require('joi');

module.exports.PlaceOrderModal = {
  UserId: Joi.number().required(),
  MilkerId: Joi.number().required(),
  Amount: Joi.number().required(),
  ProductInfo: Joi.string().required(),
  LocationId: Joi.number().required(),
  TxnId: Joi.string().required(),
  PaymentMethodTypeId: Joi.number().required(),
  OrderStatusId: Joi.number().required(),
  SubscriptionId: Joi.allow(null)
};
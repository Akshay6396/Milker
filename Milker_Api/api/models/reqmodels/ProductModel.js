var Joi = require('joi');

module.exports.AddProductModal = {
  Name: Joi.string().required(),
  Description: Joi.string().required(),
  BrandId: Joi.number(),
  CategoryId: Joi.number(),
  AddedById: Joi.number(),
  SalePrice: Joi.any(),
  Quantity: Joi.number(),
  UnitId: Joi.number(),
  MRP: Joi.any(),
  ProductURL: Joi.string()
};

module.exports.GetMilkerProductByIdModal = {
  CategoryId: Joi.number(),
  MilkerId: Joi.number()
};
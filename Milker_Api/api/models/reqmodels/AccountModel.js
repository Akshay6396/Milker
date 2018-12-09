var Joi = require('joi');

module.exports.LoginModel = {
  PhoneNumber: Joi.string().min(2).max(10).required(),
  Password: Joi.string().required().min(2).max(50)
};

module.exports.RegisterModel = {
  FirstName: Joi.string().min(2).max(50).required(),
  LastName: Joi.string().required().min(2).max(50),
  PhoneNumber: Joi.number().required(),
  EmailId: Joi.string().email(),
  Password: Joi.required(),
  UserTypeID: Joi.number()
};

module.exports.VerifyCodeModel = {
  PhoneNumber: Joi.string().min(2).max(10).required(),
  VerificationCode: Joi.string().required().min(2).max(10)
};

module.exports.RequestOTPModel = {
  PhoneNumber: Joi.string().min(2).max(10).required(),
  VerificationCode: Joi.string().required().min(2).max(10)
};

module.exports.ResetPasswordModel = {
  PhoneNumber: Joi.number().required(),
  Password: Joi.string().required().min(2).max(50)
};
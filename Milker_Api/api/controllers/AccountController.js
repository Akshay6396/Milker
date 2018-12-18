var _dbContaxt = require(_pathconst.FilesPath.DBContaxt);
var Encription = require(_pathconst.FilesPath.Encription);
var randomstring = require("randomstring");
var Config = require(_pathconst.FilesPath.ConfigUrl);
var AuthHelper = require(_pathconst.FilesPath.AuthHelper);
var TextLocal = require(_pathconst.FilesPath.TextLocalHelper);

var resModel = {
  Status: false,
  Message: "",
  Data: {}
};
/**
 * @api {post} /api/account/login Login
 *  @apiName User login
 *  @apiGroup Account
 *  @apiParam {String}  PhoneNumber Phone Number.
 *  @apiParam {String}  Password Password.
 *  @apiDescription Login User Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/account/login
 */
exports.Login = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_UserLogin ?,?', [req.body.PhoneNumber, Encription.Encrypt(req.body.Password)]).then(function (spRes) {
      if (spRes != null && spRes.length > 0) {
        var userModel = spRes[0];
        resModel.Data = {};
        switch (userModel.ResStatus) {
          case 1:
            userModel.token = AuthHelper.createJWToken(userModel);
            resModel.Status = true;
            resModel.Message = 'Success';
            resModel.Data = userModel;
            res.json(resModel);
            break;
          case -1:
            resModel.Status = false;
            resModel.Message = 'Error occured during execution';
            resModel.Data = {};
            res.json(resModel);
            break;
          case 2:
            resModel.Status = false;
            resModel.Message = userModel.ExMessage;
            resModel.Data = {};
            res.json(resModel);
            break;
          default:
            resModel.Status = false;
            resModel.Message = 'Error occured during execution';
            resModel.Data = {};
            res.json(resModel);
            break;
        }
      }
    }).catch(function (err) {
      console.log(err);
      resModel.Status = false;
      resModel.Message = err.message;
      resModel.Data = err;
      res.json(resModel);
      throw err;
    }).finally(function (err) {
      _dbContaxt.destroyContext();
    });
  } catch (err) {
    resModel.Status = false;
    resModel.Message = 'Error occured during execution';
    resModel.Data = err;
    res.json(resModel);
  }
};

/**
 * @api {post} /api/account/Register Register
 *  @apiName Register
 *  @apiGroup Account
 *  @apiParam {String}  FirstName First Name
 *  @apiParam {String}  LastName Last Name
 *  @apiParam {Number}  PhoneNumber Phone Number
 *  @apiParam {EmailId}  EmailId Email Id
 *  @apiParam {String}  Password Password
 *  @apiParam {Number}  UserTypeID User Type Id
 *  @apiDescription Register User Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/account/Register
 */
exports.Register = function (req, res) {
  try {
    const otp = randomstring.generate(6);
    _dbContaxt.getContext().raw('Exec M_UserRegister ?,?,?,?,?,?,?', [req.body.FirstName,
    req.body.LastName, req.body.PhoneNumber, req.body.EmailId, Encription.Encrypt(req.body.Password), req.body.UserTypeID, otp]).then(function (spRes) {
      if (spRes != null && spRes.length > 0) {
        var userModel = spRes[0];
        resModel.Data = {};
        switch (userModel.ResStatus) {
          case 1:
            resModel.Status = true;
            resModel.Message = 'Success';
            TextLocal.SendOtp(req.body.PhoneNumber, otp);
            userModel.token = AuthHelper.createJWToken(userModel);
            resModel.Data = req.body.PhoneNumber.toString();
            res.json(resModel);
            break;
          case -1:
            resModel.Status = false;
            resModel.Message = userModel.ExMessage;
            resModel.Data = {};
            res.json(resModel);
            break;
          case 2:
            resModel.Status = false;
            resModel.Message = userModel.ExMessage;
            resModel.Data = {};
            res.json(resModel);
            break;
          case -2:
            resModel.Status = false;
            resModel.Message = userModel.ExMessage;
            resModel.Data = {};
            res.json(resModel);
            break;
          default:
            resModel.Status = false;
            resModel.Message = 'Error occured during execution';
            resModel.Data = {};
            res.json(resModel);
            break;
        }
      }
    }).catch(function (err) {
      throw err;
    }).finally(function (err) {
      _dbContaxt.destroyContext();
    });
  } catch (err) {
    resModel.Status = false;
    resModel.Message = 'Error occured during execution';
    resModel.Data = err;
    res.json(resModel);
  }
};

/**
 * @api {post} /api/account/VerifyCode Verify Code
 *  @apiName Verify Code
 *  @apiGroup Account
 *  @apiParam {String}  PhoneNumber Phone Number
 *  @apiParam {String}  VerificationCode Verification Code
 *  @apiDescription Verify Code Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/account/VerifyCode
 */
exports.VerifyCode = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_VerifyCode ?,?', [req.body.PhoneNumber, req.body.VerificationCode]).then(function (spRes) {
      if (spRes != null && spRes.length > 0) {
        var userModel = spRes[0];
        resModel.Status = true;
        resModel.Message = 'Success';
        userModel.token = AuthHelper.createJWToken(userModel);
        resModel.Data = userModel;
        res.json(resModel);
      } else {
        resModel.Status = false;
        resModel.Message = spRes[0].ExMessage;
        resModel.Data = {};
        res.json(resModel);
      }
    }).catch(function (err) {
      throw err;
    }).finally(function (err) {
      _dbContaxt.destroyContext();
    });
  } catch (err) {
    resModel.Status = false;
    resModel.Message = 'Error occured during execution';
    resModel.Data = err;
    res.json(resModel);
  }
};


/**
 * @api {post} /api/account/RequestOTP Request OTP
 *  @apiName Request OTP
 *  @apiGroup Account
 *  @apiParam {String}  PhoneNumber Phone Number
 *  @apiParam {String}  VerificationCode Verification Code
 *  @apiDescription Request OTP Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/account/RequestOTP
 */
exports.RequestOTP = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_RequestOTP ?,?', [req.body.PhoneNumber, req.body.VerificationCode]).then(function (spRes) {
      if (spRes != null && spRes.length > 0) {
        resModel.Status = true;
        TextLocal.SendOtp(req.body.PhoneNumber, req.body.VerificationCode);
        resModel.Message = 'Success';
        resModel.Data = spRes[0];
        res.json(resModel);
      }
      else {
        resModel.Status = false;
        resModel.Message = spRes[0].ExMessage;
        resModel.Data = {};
        res.json(resModel);
      }
    });

  } catch (err) {
    resModel.Status = false;
    resModel.Message = 'Error occured during execution';
    resModel.Data = err;
    res.json(resModel);
  }
};

/**
 * @api {post} /api/account/ResetPassword Reset Password
 *  @apiName Reset Password
 *  @apiGroup Account
 
 *  @apiParam {String}  PhoneNumber Phone Number
 *  @apiParam {String}  Password Password
 *  @apiDescription Reset Password User Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/account/ResetPassword
 */
exports.ResetPassword = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec LR_ForgetPassword ?,?', [req.body.PhoneNumber, Encription.Encrypt(req.body.Password)]).then(function (spRes) {
      if (spRes != null && spRes.length > 0) {
        var userModel = spRes[0];
        resModel.Data = {};
        switch (userModel.ResStatus) {
          case 1:
            resModel.Status = true;
            resModel.Message = 'Sucess';
            resModel.Data = userModel;
            break;
          case -1:
            resModel.Status = false;
            resModel.Message = 'Error occured during execution';
            resModel.Data = {};
            break;
          case 2:
            resModel.Status = false;
            resModel.Message = userModel.ExMessage;
            resModel.Data = {};
            break;
          default:
            resModel.Status = false;
            resModel.Message = 'Error occured during execution';
            resModel.Data = {};
            break;
        }
      }
      res.json(resModel);
    }).catch(function (err) {
      throw err;
    }).finally(function (err) {
      _dbContaxt.destroyContext();
    });
  } catch (err) {
    resModel.Status = false;
    resModel.Message = 'Error occured during execution';
    resModel.Data = err;
    res.json(resModel);
  }
};
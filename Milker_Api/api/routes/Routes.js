var AccountCntrl = require(_pathconst.ControllersPath.AccountController)
var AccountModel = require(_pathconst.ReqModelsPath.AccountModel)

var UserCntrl = require(_pathconst.ControllersPath.UserController)
var UserModel = require(_pathconst.ReqModelsPath.UserModel)

var AuthHelper = require(_pathconst.FilesPath.AuthHelper)
var multer = require('multer');
var upload = multer({
  dest: './downloads/'
});
var fs = require('fs');

module.exports = function (app, validate) {
  // Account Routes Starts
  app.post('/api/account/Login', AccountCntrl.Login)
  app.post('/api/account/Register', validate.body(AccountModel.RegisterModel), AccountCntrl.Register)
  app.post('/api/account/VerifyCode', validate.body(AccountModel.VerifyCodeModel), AccountCntrl.VerifyCode)
  app.post('/api/account/RequestOTP', validate.body(AccountModel.RequestOTPModel), AccountCntrl.RequestOTP)
  app.post('/api/account/ResetPassword', validate.body(AccountModel.ResetPasswordModel), AccountCntrl.ResetPassword)
  // Account Routes Ends

  // User Routes Starts
  // AuthHelper.authorize
  app.post('/api/user/UpdateAddress', validate.body(UserModel.UpdateAddressModal), UserCntrl.UpdateAddress)
  app.post('/api/user/GetUserDashboardData', validate.body(UserModel.GetUserDashboardDataModal), UserCntrl.GetUserDashboardData)
  app.post('/api/user/GetMilkerOrders', validate.body(UserModel.GetMilkerOrdersModal), UserCntrl.GetMilkerOrders)

  // User Routes Ends
  app.post('/api/PDF/UploadImageOnServer', upload.single('upload'), (req, res) => {
    console.log("downloading");
    var tmp_path = req.file.path;
    var target_path = './downloads/' + req.file.originalname;
    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    res.json("success");
  });
}
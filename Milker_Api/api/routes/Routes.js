var AccountCntrl = require(_pathconst.ControllersPath.AccountController)
var AccountModel = require(_pathconst.ReqModelsPath.AccountModel)

var UserCntrl = require(_pathconst.ControllersPath.UserController)
var UserModel = require(_pathconst.ReqModelsPath.UserModel)

var ProductCntrl = require(_pathconst.ControllersPath.ProductController)
var ProductModel = require(_pathconst.ReqModelsPath.ProductModel)

var OrderCntrl = require(_pathconst.ControllersPath.OrderController)
var OrderModel = require(_pathconst.ReqModelsPath.OrderModel)

var SubscriptionCntrl = require(_pathconst.ControllersPath.SubscriptionController)
var SubscriptionModel = require(_pathconst.ReqModelsPath.SubscriptionModel)

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
  app.post('/api/user/AddAddress', validate.body(UserModel.AddAddressModal), UserCntrl.AddAddress)
  app.post('/api/user/DeleteAddress', validate.body(UserModel.DeleteAddressModal), UserCntrl.DeleteAddress)
  app.post('/api/user/UserAddressList', validate.body(UserModel.UserAddressListModal), UserCntrl.UserAddressList)
  app.post('/api/user/GetUserDashboardData', validate.body(UserModel.GetUserDashboardDataModal), UserCntrl.GetUserDashboardData)
  app.post('/api/user/GetMilkerOrders', validate.body(UserModel.GetMilkerOrdersModal), UserCntrl.GetMilkerOrders)

  // User Routes Ends

  // Product Routes Starts
  app.post('/api/product/AddUpdateProduct', validate.body(ProductModel.AddUpdateProductModal), ProductCntrl.AddUpdateProduct)
  app.post('/api/product/ProductMasterData', ProductCntrl.ProductMasterData)
  app.post('/api/product/GetMilkerProductById', validate.body(ProductModel.GetMilkerProductByIdModal), ProductCntrl.GetMilkerProductById)

  // Product Routes Ends
  
  // Order Routes Starts
  app.post('/api/order/PlaceOrder', validate.body(OrderModel.PlaceOrderModal), OrderCntrl.PlaceOrder)

  // Order Routes Ends 
  
  // Subscription Routes Starts
  app.post('/api/subscription/AddUpdateMasterSubsciption', validate.body(SubscriptionModel.AddUpdateMasterSubsciptionModal), SubscriptionCntrl.AddUpdateMasterSubsciption)
  app.post('/api/subscription/DeleteMasterSubsciption', validate.body(SubscriptionModel.DeleteMasterSubsciptionModal), SubscriptionCntrl.DeleteMasterSubsciption)
  app.post('/api/subscription/GetMasterSubsciption', SubscriptionCntrl.GetMasterSubsciption)

  // Subscription Routes Ends
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
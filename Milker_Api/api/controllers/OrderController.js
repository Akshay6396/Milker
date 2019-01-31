var _dbContaxt = require(_pathconst.FilesPath.DBContaxt);
var Encription = require(_pathconst.FilesPath.Encription);
var randomstring = require("randomstring");
var Config = require(_pathconst.FilesPath.ConfigUrl);
var AuthHelper = require(_pathconst.FilesPath.AuthHelper);

var resModel = {
  Status: false,
  Message: "",
  Data: {}
};


/**
 * @api {post} /api/user/PlaceOrder Place Order
 *  @apiName Place Order
 *  @apiGroup Order
 
 *  @apiParam {Number}  UserId User Id
 *  @apiParam {Number}  MilkerId Milker Id
 *  @apiParam {Decimal}  Amount Amount of order
 *  @apiParam {String}  ProductInfo Json data of products
 *  @apiParam {Number}  LocationId Location Id
 *  @apiParam {String}  TxnId Transection Id
 *  @apiParam {Number}  PaymentMethodTypeId Type of payment
 *  @apiParam {Number}  OrderStatusId Status of the order
 *  @apiParam {Number}  SubscriptionId Longitude
 *  @apiDescription Place Order Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/order/PlaceOrder
 */
exports.PlaceOrder = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_PlaceOrder ?,?,?,?,?,?,?,?,?', [req.body.UserId, req.body.MilkerId, req.body.Amount, req.body.ProductInfo, req.body.LocationId, req.body.TxnId, req.body.PaymentMethodTypeId, req.body.OrderStatusId, req.body.SubscriptionId]).then(function (spRes) {
      if (spRes != null && spRes.length > 0) {
        var userModel = spRes[0];
        resModel.Data = {};
        switch (userModel.ResStatus) {
          case 1:
            resModel.Status = true;
            resModel.Message = 'Success';
            resModel.Data = {};
            break;
          case -1:
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
      resModel.Status = false;
      resModel.Message = 'Error occured during execution';
      resModel.Data = err;
      res.json(resModel);
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
 * @api {post} /api/user/DeleteAddress Delete Address
 *  @apiName Delete Address
 *  @apiGroup User
 
 *  @apiParam {Number}  Id Address Id
 *  @apiDescription Delete Address Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/user/DeleteAddress
 */
exports.DeleteAddress = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_DeleteAddress ?', [req.body.Id]).then(function (spRes) {
      if (spRes != null && spRes.length > 0) {
        var userModel = spRes[0];
        resModel.Data = {};
        switch (userModel.ResStatus) {
          case 1:
            resModel.Status = true;
            resModel.Message = 'Success';
            resModel.Data = {};
            break;
          case -1:
            resModel.Status = false;
            resModel.Message = userModel.ExMessage;
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
      resModel.Status = false;
      resModel.Message = 'Error occured during execution';
      resModel.Data = err;
      res.json(resModel);
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
 * @api {post} /api/user/UserAddressList User Address List
 *  @apiName  User Address List
 *  @apiGroup User 
 *  @apiParam {Number}  UserId User Id
 *  @apiDescription User Address List Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/user/UserAddressList
 */
exports.UserAddressList = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_UserAddressList ?', [req.body.UserId]).then(function (spRes) {
      if (spRes != null && spRes.length > 0) {
        var userModel = spRes; //spRes[0];
        resModel.Data = {};
        resModel.Status = true;
        if (userModel.length > 0) {
          resModel.Message = 'Success';
        } else {
          resModel.Message = 'No records found';
        }
        resModel.Data = userModel;
        res.json(resModel);
      } else {
        resModel.Status = false;
        resModel.Message = 'No records found!';
        resModel.Data = {};
        res.json(resModel);
      }
    }).catch(function (err) {
      resModel.Status = false;
      resModel.Message = 'Error occured during execution';
      resModel.Data = err;
      res.json(resModel);
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
 * @api {post} /api/user/GetUserDashboardData Get User Dashboard Data
 *  @apiName Get User Dashboard Data
 *  @apiGroup User
 
 *  @apiParam {String}  Lat Latitude
 *  @apiParam {String}  Long Longitude
 *  @apiDescription Get User Dashboard Data Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/user/GetUserDashboardData
 */
exports.GetUserDashboardData = async function (req, res) {
  try {
    let dashboardData = {};
    var productCat = await _dbContaxt.getContext().raw('Exec M_GetProductCategory');  //.then(function (spRes) {
    var products = await _dbContaxt.getContext().raw('Exec M_GetProduct');  //.then(function (spRes) {
    let Products = [];
    productCat.forEach(element => {
      element.product = products.filter(p => p.CategoryId === element.Id)
      Products.push(element);
    });

    if (productCat.length > 0) {
      dashboardData.Products = Products;
    } else {
      dashboardData.Products = [];
    }
    var nearbyMilker = await _dbContaxt.getContext().raw('Exec M_GetNearByMilkers ?,?', [req.body.Lat, req.body.Long]);//.then(function (spRes) {
    if (nearbyMilker.length > 0) {
      dashboardData.NearbyMilkers = nearbyMilker;
    } else {
      dashboardData.NearbyMilkers = [];
    }
    resModel.Status = true;
    resModel.Message = '';
    resModel.Data = dashboardData;
    res.json(resModel);
  } catch (err) {
    resModel.Status = false;
    resModel.Message = 'Error occured during execution';
    resModel.Data = err;
    res.json(resModel);
  }
};

/**
 * @api {post} /api/user/GetMilkerOrders Get Milker Orders
 *  @apiName Get Get Milker Orders
 *  @apiGroup User
 
 *  @apiParam {String}  UserId User Id
 *  @apiParam {Bool}  IsMilker Is Milker
 *  @apiDescription Get Milker Orders Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/user/GetMilkerOrders
 */
exports.GetMilkerOrders = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_GetOrder ?,?', [req.body.UserId, req.body.IsMilker]).then(function (spRes) {
      if (spRes != null && spRes.length > 0) {
        var userModel = spRes; //spRes[0];
        resModel.Data = {};
        resModel.Status = true;
        if (userModel.length > 0) {
          resModel.Message = 'Success';
        } else {
          resModel.Message = 'No records found';
        }
        resModel.Data = userModel;
        res.json(resModel);
      } else {
        resModel.Status = false;
        resModel.Message = 'No Orders found!';
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
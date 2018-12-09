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
 * @api {post} /api/user/UpdateAddress Update Address
 *  @apiName Update Address
 *  @apiGroup User
 
 *  @apiParam {Number}  UserId User Id
 *  @apiParam {String}  Address Address
 *  @apiParam {String}  SubLocality SubLocality
 *  @apiParam {String}  Locality Locality
 *  @apiParam {String}  SubAdmin SubAdmin
 *  @apiParam {String}  Admin Admin
 *  @apiParam {String}  PostalCode Postal Code
 *  @apiParam {String}  Lat Lattitude
 *  @apiParam {String}  Long Longitude
 *  @apiDescription Update Address Service..
 *  @apiSampleRequest http://ec2-13-57-230-164.us-west-1.compute.amazonaws.com:8010/api/user/UpdateAddress
 */
exports.UpdateAddress = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_UpdateAddress ?,?,?,?,?,?,?,?,?', [req.body.UserId, req.body.Address, req.body.SubLocality, req.body.Locality, req.body.SubAdmin, req.body.Admin, req.body.PostalCode, req.body.Lat, req.body.Long]).then(function (spRes) {
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
        resModel.Message = 'No Agency found!';
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
 *  @apiSampleRequest http://ec2-13-57-230-164.us-west-1.compute.amazonaws.com:8010/api/user/GetUserDashboardData
 */
exports.GetUserDashboardData = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_GetProductCategory').then(function (spRes) {
      if (spRes != null && spRes.length > 0) {
        var ProductCategories = spRes;
        _dbContaxt.getContext().raw('Exec M_GetNearByMilkers', [req.body.Lat, req.body.Long]).then(function (spRes) {
          if (spRes != null && spRes.length > 0) {
            var NearbyMilkers = spRes; //spRes[0];
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
            resModel.Message = 'No Agency found!';
            resModel.Data = {};
            res.json(resModel);
          }
        }).catch(function (err) {
          throw err;
        }).finally(function (err) {
          _dbContaxt.destroyContext();
        });
      } else {
        resModel.Status = false;
        resModel.Message = 'No Agency found!';
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
 * @api {post} /api/user/GetMilkerOrders Get Milker Orders
 *  @apiName Get Get Milker Orders
 *  @apiGroup User
 
 *  @apiParam {String}  UserId User Id
 *  @apiDescription Get Milker Orders Service..
 *  @apiSampleRequest http://ec2-13-57-230-164.us-west-1.compute.amazonaws.com:8010/api/user/GetMilkerOrders
 */
exports.GetMilkerOrders = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_UpdateAddress ?,?,?,?,?,?,?,?,?', [req.body.UserId, req.body.Address, req.body.SubLocality, req.body.Locality, req.body.SubAdmin, req.body.Admin, req.body.PostalCode, req.body.Lat, req.body.Long]).then(function (spRes) {
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
        resModel.Message = 'No Agency found!';
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
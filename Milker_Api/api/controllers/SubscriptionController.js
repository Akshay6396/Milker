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
 * @api {post} /api/subscription/AddUpdateMasterSubsciption Add and Update Subscription
 *  @apiName Add Update Subscription
 *  @apiGroup Subscription
 
 *  @apiParam {Number}  Id Subscription Id
 *  @apiParam {String}  Name Subscription Name
 *  @apiParam {Number}  ProductId Product Id
 *  @apiParam {Number}  SubscriptionTypeId Subscription Type Id
 *  @apiParam {Decimal}  OfferedPrice Offered Price of Subscription
 *  @apiParam {Number}  CreatedBy Created By
 *  @apiDescription Add Subscription Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/subscription/AddUpdateMasterSubsciption
 */
exports.AddUpdateMasterSubsciption = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_AddUpdateMasterSubsciption ?,?,?,?,?,?', [req.body.Id, req.body.Name, req.body.ProductId, req.body.SubscriptionTypeId, req.body.OfferedPrice, req.body.CreatedBy]).then(function (spRes) {
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
          case -2:
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
 * @api {post} /api/subscription/DeleteMasterSubsciption Delete Subscription
 *  @apiName Delete Subscription
 *  @apiGroup Subscription
 
 *  @apiParam {Number}  Id Subscription Id
 *  @apiDescription Delete Subscription Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/subscription/DeleteMasterSubsciption
 */
exports.DeleteMasterSubsciption = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_DeleteMasterSubsciption ?', [req.body.Id]).then(function (spRes) {
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
          case -2:
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
 * @api {post} /api/subscription/GetMasterSubsciption Get Master Subscription
 *  @apiName Get Master Subscription
 *  @apiGroup Subscription
 *  @apiDescription Get Subscription Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/subscription/GetMasterSubsciption
 */
exports.GetMasterSubsciption = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_GetMasterSubscription').then(function (spRes) {
      if (spRes != null && spRes.length > 0) {
        var userModel = spRes; //spRes[0];
        resModel.Data = {};
        resModel.Status = true;
        if (userModel.length > 0) {
          resModel.Message = 'Success';
        } else {
          resModel.Message = 'No Subscriptions found!';
        }
        resModel.Data = userModel;
        res.json(resModel);
      } else {
        resModel.Status = false;
        resModel.Message = 'No Subscriptions found!';
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
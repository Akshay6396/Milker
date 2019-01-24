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
 * @api {post} /api/product/AddProduct Add Product
 *  @apiName Add Product
 *  @apiGroup Product
 
 *  @apiParam {Number}  Name Product Name
 *  @apiParam {String}  Description Product Description
 *  @apiParam {Int}  BrandId Product Brand Id
 *  @apiParam {Int}  CategoryId Product Category Id
 *  @apiParam {Int}  AddedById Added By Id
 *  @apiParam {Decimal}  SalePrice Sale Price
 *  @apiParam {Int}  Quantity Product Quantity
 *  @apiParam {Int}  UnitId Product Unit Id
 *  @apiParam {Decimal}  MRP MRP Unit
 *  @apiParam {String}  ProductURL Product Image URL
 *  @apiDescription Add Product Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/product/AddProduct
 */
exports.AddProduct = function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_AddProduct ?,?,?,?,?,?,?,?,?,?', [req.body.Name, req.body.Description,
    req.body.BrandId, req.body.CategoryId, req.body.AddedById, req.body.SalePrice, req.body.Quantity,
    req.body.UnitId, req.body.MRP, req.body.ProductURL]).then(function (spRes) {
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
 * @api {post} /api/product/ProductMasterData Product Master Data
 *  @apiName Product Master Data
 *  @apiGroup Product
 *  @apiDescription Product Master Data Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/product/ProductMasterData
 */
exports.ProductMasterData = async function (req, res) {
  try {
    let productMasterData = {};
    const brandData = await _dbContaxt.getContext().raw('Exec M_GetAllBrand');
    if (brandData.length > 0) {
      productMasterData.Brands = brandData;
    } else {
      productMasterData.Brands = [];
    }
    const productCategoryData = await _dbContaxt.getContext().raw('Exec M_GetAllProductCategory');
    if (productCategoryData.length > 0) {
      productMasterData.ProductCategory = productCategoryData;
    } else {
      productMasterData.ProductCategory = [];
    }
    const unitData = await _dbContaxt.getContext().raw('Exec M_GetAllUnit');
    if (unitData.length > 0) {
      productMasterData.Units = unitData;
    } else {
      productMasterData.Units = [];
    }
    resModel.Data = productMasterData;
    resModel.Status = true;
    resModel.Message = 'Success';
    res.json(resModel);
  } catch (err) {
    resModel.Status = false;
    resModel.Message = 'Error occured during execution';
    resModel.Data = err;
    res.json(resModel);
  }
};

/**
 * @api {post} /api/product/GetMilkerProductById Get Milker Product By Id
 *  @apiName Get Milker Product By Id
 *  @apiParam {Int}  CategoryId Product Category Id
 *  @apiParam {Int}  MilkerId Milker Id
 *  @apiGroup Product
 *  @apiDescription Get Milker Product By Id Service..
 *  @apiSampleRequest http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/product/GetMilkerProductById
 */
exports.GetMilkerProductById = async function (req, res) {
  try {
    _dbContaxt.getContext().raw('Exec M_GetMilkerProductById ?,?', [req.body.CategoryId, req.body.MilkerId]).then(function (spRes) {
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
        resModel.Message = 'No Products found!';
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
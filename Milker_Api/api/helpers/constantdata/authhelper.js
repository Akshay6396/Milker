var Config = require(_pathconst.FilesPath.ConfigUrl)
var jwt = require('jwt-simple')
var moment = require('moment')

/**
 * @api {function} createJWToken createJWToken
 *  @apiName createJWToken
 *  @apiGroup AuthHelper
 *  @apiParam {object}  user A object of user information  .
 *  @apiDescription Create unique token with 1 minutes expire time .
 */
exports.createJWToken = function (user) {
    var payload = {
        user: user,
        iat: moment().unix()
        // exp: moment().add(1, 'minutes').unix()    //Token for a whole day
    }
    return jwt.encode(payload, Config.TOKEN_SECRET)
}

/**
 * @api {function} authorize authorize
 *  @apiName authorize
 *  @apiGroup AuthHelper
 *  @apiParam {object}  req A object of Request Call from Client  .
 *  @apiParam {object}  res A object of Response Call to Client .
 *  @apiParam {callback}  next A Callback to pass request to next midleware .
 *  @apiDescription A midleware to authorize the REST call .
 */
exports.authorize = function (req, res, next) {
    var resModel = {
        Status: false,
        Message: "",
        Data: {}
    };
    if (!req.header('Authorization')) {
        resModel.Message = 'Please make sure your request has an Authorization header';
        return res.status(401).send(resModel);
    }
    var token = req.header('Authorization');
    var payload = null
    try {
        payload = jwt.decode(token, Config.TOKEN_SECRET)
    } catch (err) {
        resModel.Message = err.message;
        return res.status(401).send(resModel);
    }
    if (payload.exp <= moment().unix()) {
        resModel.Message = 'Token has expired';
        return res.status(401).send(resModel);
    }
    req.userId = payload.userId
    next()
}
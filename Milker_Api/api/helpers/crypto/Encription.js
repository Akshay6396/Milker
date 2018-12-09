var crypto = require('crypto'),
algorithm = 'aes-128-cbc';

exports.Encrypt = function (text) {
    var cipher = crypto.createCipher(algorithm,'milkerpassword')
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}
exports.Decrypt = function (text) {
    var decipher = crypto.createDecipher(algorithm,'milkerpassword')
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}
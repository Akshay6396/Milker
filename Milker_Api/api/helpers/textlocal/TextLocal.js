var http = require('http');
var urlencode = require('urlencode');

exports.SendOtp = function (number, sampleotp) {
    var SampleOTP = sampleotp;
    var msg = urlencode('Your OTP ' + SampleOTP + ' for your Milker Application. Please enter this code during verification.');
    var username = 'developervicky83@gmail.com';
    var hash = 'f9362c79e10a8c9e033dd1f3a83e1de187bac1c9540fe88c3314f933c23d073f'; // The hash key could be found under Help->All Documentation->Your hash key. Alternatively you can use your Textlocal password in plain text.
    var sender = 'MILKER';
    var data = 'username=' + username + '&hash=' + hash + '&sender=' + sender + '&numbers=' + number + '&message=' + msg
    var options = {
        host: 'api.textlocal.in',
        path: '/send?' + data
    };


    callback = function (response) {
        var str = '';
        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });
        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            console.log(str);
        });
    }
    //console.log('hello js'))
    http.request(options, callback).end();
}

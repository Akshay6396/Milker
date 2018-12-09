var url = require('url')
var express = require('express')
const path = require('path')
global.appRoot = path.resolve(__dirname)
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var validator = require('express-joi-validation')({
  passError: true // NOTE: this tells the module to pass the error along for you
});
global._pathconst = require('./api/helpers/constantdata/pathconst.js')
var app = express()

var db = require('./api/lib/msdb')
/**
 * Express MiddleWare
 */         //handle multipart requests
app.use(bodyParser.urlencoded()); //handle queryStrings
app.use(bodyParser.json())        //handle json data
app.use(bodyParser.json({ limit: '50mb' }))
app.use(session({
  secret: 'milker',
  rolling: true,
  saveUninitialized: true,
  resave: false
}))                                //handle session


app.use(express.static(__dirname + '/api'))      //handle static files
/**
 * app.use(express.static(path._makeLong('client')))      //handle static files
 * Root level routing
 */
app.get('/', function (req, res) {
  res.sendFile(_pathconst.PagesPath.IndexPage)
})
app.get('/apidoc', function (req, res) {
  res.sendFile(_pathconst.PagesPath.DocPage)
})

app.use(function (req, res, next) {
  // Mentioning content types
  res.setHeader('Content-Type', 'application/json; charset=UTF-8');
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept,Authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions) 
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


require(_pathconst.FilesPath.Routes)(app, validator)

// require('./server/modules/users/route/users-route')(app)
// require('./server/modules/agent/route/agent-route')(app)
// require('./server/modules/client/route/client-route')(app)
// require('./server/modules/property/route/property-route')(app)
// require('./server/modules/tour/route/tour-route')(app)

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   res.sendFile(_pathconst.PagesPath.ErrorPage)
// })
// After your routes add a standard express error handler. This will be passed the Joi
// error, plus an extra "type" field so we can tell what type of validation failed

app.use((err, req, res, next) => {
  if (err.error.isJoi) {
    let errDetail = []
    // we had a joi error, let's return a custom 400 json response
    if (err.error.details) {
      err.error.details.map(function (item) {
        var temp = {}
        temp[item.context.key] = item.message
        errDetail.push(temp)
      })
    }
    res.status(400).json({
      Status: false,
      Data: errDetail,
      Message: "Model InValid"
    });
  } else {
    // pass on to another error handler
    res.json({
      Status: false,
      Data: {},
      Message: "Error Occured"
    });
  }
});
module.exports = app
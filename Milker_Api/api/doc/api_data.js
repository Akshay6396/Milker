define({ "api": [
  {
    "type": "post",
    "url": "/api/account/Register",
    "title": "Register",
    "name": "Register",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FirstName",
            "description": "<p>First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LastName",
            "description": "<p>Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Phone Number</p>"
          },
          {
            "group": "Parameter",
            "type": "EmailId",
            "optional": false,
            "field": "EmailId",
            "description": "<p>Email Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserTypeID",
            "description": "<p>User Type Id</p>"
          }
        ]
      }
    },
    "description": "<p>Register User Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-13-57-230-164.us-west-1.compute.amazonaws.com:8010/api/account/Register"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/AccountController.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/api/account/RequestOTP",
    "title": "Request OTP",
    "name": "Request_OTP",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Phone Number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "VerificationCode",
            "description": "<p>Verification Code</p>"
          }
        ]
      }
    },
    "description": "<p>Request OTP Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-13-57-230-164.us-west-1.compute.amazonaws.com:8010/api/account/RequestOTP"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/AccountController.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/api/account/ResetPassword",
    "title": "Reset Password",
    "name": "Reset_Password",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Phone Number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "description": "<p>Reset Password User Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-13-57-230-164.us-west-1.compute.amazonaws.com:8010/api/account/ResetPassword"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/AccountController.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/api/account/login",
    "title": "Login",
    "name": "User_login",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Phone Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password.</p>"
          }
        ]
      }
    },
    "description": "<p>Login User Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-13-57-230-164.us-west-1.compute.amazonaws.com:8010/api/account/login"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/AccountController.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/api/account/VerifyCode",
    "title": "Verify Code",
    "name": "Verify_Code",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PhoneNumber",
            "description": "<p>Phone Number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "VerificationCode",
            "description": "<p>Verification Code</p>"
          }
        ]
      }
    },
    "description": "<p>Verify Code Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-13-57-230-164.us-west-1.compute.amazonaws.com:8010/api/account/VerifyCode"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/AccountController.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/api/user/GetMilkerOrders",
    "title": "Get Milker Orders",
    "name": "Get_Get_Milker_Orders",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>User Id</p>"
          }
        ]
      }
    },
    "description": "<p>Get Milker Orders Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-13-57-230-164.us-west-1.compute.amazonaws.com:8010/api/user/GetMilkerOrders"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/GetUserDashboardData",
    "title": "Get User Dashboard Data",
    "name": "Get_User_Dashboard_Data",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Lat",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Long",
            "description": "<p>Longitude</p>"
          }
        ]
      }
    },
    "description": "<p>Get User Dashboard Data Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-13-57-230-164.us-west-1.compute.amazonaws.com:8010/api/user/GetUserDashboardData"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/UpdateAddress",
    "title": "Update Address",
    "name": "Update_Address",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "UserId",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubLocality",
            "description": "<p>SubLocality</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Locality",
            "description": "<p>Locality</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubAdmin",
            "description": "<p>SubAdmin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Admin",
            "description": "<p>Admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PostalCode",
            "description": "<p>Postal Code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Lat",
            "description": "<p>Lattitude</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Long",
            "description": "<p>Longitude</p>"
          }
        ]
      }
    },
    "description": "<p>Update Address Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-13-57-230-164.us-west-1.compute.amazonaws.com:8010/api/user/UpdateAddress"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  }
] });
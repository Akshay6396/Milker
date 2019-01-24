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
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/account/Register"
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
          }
        ]
      }
    },
    "description": "<p>Request OTP Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/account/RequestOTP"
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
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/account/ResetPassword"
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
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/account/login"
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
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/account/VerifyCode"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/AccountController.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/api/product/AddUpdateProduct",
    "title": "Add and update Product",
    "name": "Add_Product",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Product Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Product Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": "<p>Product Description</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "BrandId",
            "description": "<p>Product Brand Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "CategoryId",
            "description": "<p>Product Category Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "AddedById",
            "description": "<p>Added By Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "SalePrice",
            "description": "<p>Sale Price</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "Quantity",
            "description": "<p>Product Quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "UnitId",
            "description": "<p>Product Unit Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "MRP",
            "description": "<p>MRP Unit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProductURL",
            "description": "<p>Product Image URL</p>"
          }
        ]
      }
    },
    "description": "<p>Add Product Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/product/AddUpdateProduct"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/ProductController.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/product/GetMilkerProductById",
    "title": "Get Milker Product By Id",
    "name": "Get_Milker_Product_By_Id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "CategoryId",
            "description": "<p>Product Category Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "MilkerId",
            "description": "<p>Milker Id</p>"
          }
        ]
      }
    },
    "group": "Product",
    "description": "<p>Get Milker Product By Id Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/product/GetMilkerProductById"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/ProductController.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/product/ProductMasterData",
    "title": "Product Master Data",
    "name": "Product_Master_Data",
    "group": "Product",
    "description": "<p>Product Master Data Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/product/ProductMasterData"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/ProductController.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/user/AddAddress",
    "title": "Add Address",
    "name": "Add_Address",
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
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/user/AddAddress"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/DeleteAddress",
    "title": "Delete Address",
    "name": "Delete_Address",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>Address Id</p>"
          }
        ]
      }
    },
    "description": "<p>Delete Address Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/user/DeleteAddress"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
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
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "IsMilker",
            "description": "<p>Is Milker</p>"
          }
        ]
      }
    },
    "description": "<p>Get Milker Orders Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/user/GetMilkerOrders"
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
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/user/GetUserDashboardData"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/UserAddressList",
    "title": "User Address List",
    "name": "User_Address_List",
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
          }
        ]
      }
    },
    "description": "<p>User Address List Service..</p>",
    "sampleRequest": [
      {
        "url": "http://ec2-54-219-161-189.us-west-1.compute.amazonaws.com:8010/api/user/UserAddressList"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  }
] });

var config = {
  client: 'mssql',
  connection: {
    host: 'milker.cp7yc7xpjlan.us-west-1.rds.amazonaws.com',
    user: 'Milker12',
    password: 'jdf#$#%f',
    database: 'Milker-Dev'
  }
}

var dbContext = {
  knex: null,
  getContext: function () {
    knex = require('knex')(config);
    return knex;
  },
  destroyContext: function () {
    knex.destroy();
    console.log("Distroy end.");
  }
}
module.exports = dbContext;
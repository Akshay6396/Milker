var config = {
  client: 'mssql',
  connection: {
    host: 'debugged-pro.cp7yc7xpjlan.us-west-1.rds.amazonaws.com',
    user: 'Debugged_Pro',
    password: 'hjfb#$54%',
    database: 'Milker_Dev'
    // database: 'tempdb'
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
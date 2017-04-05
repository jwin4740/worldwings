// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection("mysql://b5c06e7c9887c5:1e809df3@us-cdbr-iron-east-03.cleardb.net/heroku_6b0bbc304e5f86f?reconnect=true");

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

});

// Export connection for our ORM to use.
module.exports = connection;

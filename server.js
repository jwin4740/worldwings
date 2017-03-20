// ==============================================================================
// DEPENDENCIES
// 
// ==============================================================================
var express = require("express");
var app = express();
var mysql = require("mysql");
var path = require("path");
var exphbs = require("express-handlebars");
var bodyParser  = require("body-parser");






// Sets an initial port.
var port = process.env.port || 8080;


// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname + "/views"));


// connects to mysql database

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "platinum",
//     database: "worldwings_db"
// });

// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);

//     }
//     console.log("connected as id " + connection.threadId);
// });


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// Root get route
app.get("/", function(req, res) {

   
       res.render('index');
   
});


// Post route -> back to home
// app.post("/", function(req, res) {
//     connection.query("INSERT INTO events (event) VALUES (?)", [req.body.event], function(err, result) {
//         if (err) throw err;

//         res.redirect("/");
//     });

// });





// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================


app.listen(port, function() {
    console.log("App listening on port: " + port);
});

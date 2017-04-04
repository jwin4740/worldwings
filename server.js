// ==============================================================================
// DEPENDENCIES
// 
// ==============================================================================
var express = require("express");

var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var app = express();



// Sets an initial port.
var port = process.env.port || 8080;


// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");



// Serve static content for the app from the "public" directory in the application directory.

app.use(express.static(process.cwd() + "/public"));




// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// Root get route

var routes = require("./controllers/wings_controller.js");

app.use("/", routes);


// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================
app.listen(port, function () {
    console.log("App listening on port: " + port);
});
var express = require("express");

var router = express.Router();

// Import the model (wings.js) to use its database functions.
var wingMod = require("../models/wings.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  wingMod.all(function (data) {
    var hbsObject = {
      wingObj: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {
  wingMod.create([
    "wing_flavor", "devoured"
  ], [
    req.body.wing_flavor, req.body.devoured
  ], function () {
    res.redirect("/");
  });
});

router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  wingMod.update({
    devoured: req.body.devoured
  }, condition, function () {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
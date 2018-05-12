var express = require("express"),
	router 	= express.Router(),
	app		= express();

router.get("/", function(req, res){
	res.render("events/events.ejs");
});

module.exports = router;
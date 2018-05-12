var express = require("express"),
	router 	= express.Router(),
	app		= express();

router.get("/", function(req, res){
	res.render("tipsAndTricks/tipsTricks.ejs");
});

module.exports = router;
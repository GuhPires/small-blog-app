var express = require("express"),
	router 	= express.Router(),
	app		= express();

router.get("/", function(req, res){
	res.render("posts/posts.ejs");
});

module.exports = router;
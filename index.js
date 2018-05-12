var express = require("express"),
	app		= express();

app.use(express.static(__dirname + "/public"));

// MAIN ROUTES: --------------------------------------------------------------------------------------------

app.get("/", function(req, res){
	res.render("index.ejs");
});

app.get("/about", function(req, res){
	res.render("about.ejs");
});

// OTHER ROUTES: --------------------------------------------------------------------------------------------

var postRoutes 	  	 = require("./routes/posts"),
	eventRoutes	  	 = require("./routes/events"),
	tipsTricksRoutes = require("./routes/tipsAndTricks");

app.use("/posts", postRoutes);
app.use("/events", eventRoutes);
app.use("/tipsAndTricks", tipsTricksRoutes);

// MAIN ROUTES: --------------------------------------------------------------------------------------------

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server Started");
	console.log(process.env.PORT);
	console.log(process.env.IP);
});
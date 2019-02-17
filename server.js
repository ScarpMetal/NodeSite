var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + "/views/";

app.use("/", router);

router.get("/", function (req, res) {
	res.sendFile(path + "HomePage/index.html");
});

app.use("*", function (req, res) {
	res.sendFile(path + "error-404.html");
});

app.listen(3000, function () {
	console.log("Server running at Port 3000");
});
// include fs-extra package
var fs = require("fs-extra");

var source = "pages";
var destination = "../../pages";

// copy source folder to destination
fs.copy(source, destination, function (err) {
	if (err) {
		console.log("An error occured while copying the pages folder.");
		return console.error(err);
	}
	console.log("pages folder copy completed!");
});

var source2 = "components";
var destination2 = "../../components";

// copy source folder to destination
fs.copy(source2, destination2, function (err) {
	if (err) {
		console.log("An error occured while copying the components folder.");
		return console.error(err);
	}
	console.log("components folder copy completed!");
});

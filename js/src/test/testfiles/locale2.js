var ilib = require("../../../ilibglobal.js");

ilib.Locale2 = function(spec) {
	//console.log("Locale2: spec is " + spec);

	var parts = spec.split("-");
	this.language = parts[0];
	this.region = parts[1];
};

ilib.Locale2.prototype.getLanguage = function() {
	return this.language;
};

ilib.Locale2.prototype.getRegion = function() {
	return this.region;
};

ilib.Locale2.y = "This property came from ilib.Locale2";

module.exports = ilib.Locale2;
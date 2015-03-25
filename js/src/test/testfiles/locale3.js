var ilib = ilib || {};

// this is an alternate definition of Locale2

ilib.Locale2 = function(spec) {
	console.log("Locale2: spec is " + spec);

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

// the other definition doesn't have this property
ilib.z = "This property came from the alternate ilib.Locale2";

module.exports = function (loader) {
	// no dependencies
	return ilib;
};

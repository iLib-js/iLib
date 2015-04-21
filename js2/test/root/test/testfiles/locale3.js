// !dependencies: false

// this is an alternate definition of Locale2

Locale2 = function(spec) {
	console.log("Locale2: spec is " + spec);

	var parts = spec.split("-");
	this.language = parts[0];
	this.region = parts[1];
};

Locale2.prototype.getLanguage = function() {
	return this.language;
};

Locale2.prototype.getRegion = function() {
	return this.region;
};

// the other definition doesn't have this property
Locale2.z = "This property came from the alternate ilib.Locale2";

module.exports = ilib.Locale2;

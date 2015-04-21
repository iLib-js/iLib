// !dependencies: false

Locale2 = function(spec) {
	//console.log("Locale2: spec is " + spec);

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

Locale2.y = "This property came from ilib.Locale2";

module.exports = Locale2;
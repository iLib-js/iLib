var ilib = require("../../../lib/ilib.js");

ilib.Qwerty = function(spec) {
	//console.log("Qwerty: spec is " + spec);

	this.spec = spec;
};

ilib.Qwerty.prototype.getSpec = function() {
	return this.spec;
};

module.exports = ilib.Qwerty;
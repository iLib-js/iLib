var ilib = require("../../../../lib/ilib.js");

ilib.Foobar = function(spec) {
	//console.log("Foobar: spec is " + spec);

	this.spec = spec;
};

ilib.Foobar.prototype.getSpec = function() {
	return this.spec;
};

module.exports = ilib.Foobar;
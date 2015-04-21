// !dependencies: false

var Grzwfd = require("./grzwfd.js");

Asdf = function(spec) {
	//console.log("Asdf: spec is " + spec);

	this.spec = spec;
};

Asdf.prototype.getSpec = function() {
	return this.spec;
};

module.exports = Asdf;
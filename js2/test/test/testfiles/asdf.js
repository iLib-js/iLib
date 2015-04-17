var ilib = require("../../../lib/ilib.js");
if (!ilib.Grzwfd) ilib.Grzwfd = require("./grzwfd.js");

ilib.Asdf = function(spec) {
	//console.log("Asdf: spec is " + spec);

	this.spec = spec;
};

ilib.Asdf.prototype.getSpec = function() {
	return this.spec;
};

module.exports = ilib.Asdf;
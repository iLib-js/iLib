var ilib = require("../../ilibglobal.js");

ilib.Grzwfd = function(spec) {
	//console.log("Grzwfd: spec is " + spec);

	this.spec = spec;
};

ilib.Grzwfd.prototype.getSpec = function() {
	return this.spec;
};

module.exports = ilib.Grzwfd;
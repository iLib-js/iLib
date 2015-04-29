// !dependencies: false

Grzwfd = function(spec) {
	//console.log("Grzwfd: spec is " + spec);

	this.spec = spec;
};

Grzwfd.prototype.getSpec = function() {
	return this.spec;
};

module.exports = Grzwfd;
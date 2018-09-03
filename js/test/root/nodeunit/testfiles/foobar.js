// !dependencies: false

Foobar = function(spec) {
	//console.log("Foobar: spec is " + spec);

	this.spec = spec;
};

Foobar.prototype.getSpec = function() {
	return this.spec;
};

module.exports = Foobar;
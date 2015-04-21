// !dependencies: false

Qwerty = function(spec) {
	//console.log("Qwerty: spec is " + spec);

	this.spec = spec;
};

Qwerty.prototype.getSpec = function() {
	return this.spec;
};

module.exports = Qwerty;
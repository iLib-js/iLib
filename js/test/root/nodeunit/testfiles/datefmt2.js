// !dependencies: false

var Locale2 = require("./locale2.js");

DateFmt2 = function(options) {
	// console.log("DateFmt2: options is " + JSON.stringify(options));
	
	var locale = new Locale2(options.locale);
	
	if (locale.getLanguage() === "en") {
		this.template = "MM/dd/yyyy";
	} else {
		this.template = "dd/MM/yyyy";
	}
};

DateFmt2.prototype.format = function(date) {
	var x = this.template.replace("dd", date.getDate());
	x = x.replace("MM", date.getMonth()+1);
	x = x.replace("yyyy", date.getFullYear());
	return x;
};

DateFmt2.x = "This property came from DateFmt2";

//var util = require("util");
//console.log("DateFmt2: ilib is " + util.inspect(ilib, {depth: null}));
//console.log("DateFmt2: global.ilib is " + util.inspect(global.ilib, {depth: null}));
//console.log("DateFmt2: module is " + util.inspect(module, {depth: null}));

module.exports = DateFmt2;

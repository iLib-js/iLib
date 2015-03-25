var ilib = ilib || {};

ilib.DateFmt2 = function(options) {
	// console.log("DateFmt2: options is " + JSON.stringify(options));
	
	var locale = new ilib.Locale2(options.locale);
	
	if (locale.getLanguage() === "en") {
		this.template = "MM/dd/yyyy";
	} else {
		this.template = "dd/MM/yyyy";
	}
};

ilib.DateFmt2.prototype.format = function(date) {
	var x = this.template.replace("dd", date.getDate());
	x = x.replace("MM", date.getMonth()+1);
	x = x.replace("yyyy", date.getFullYear());
	return x;
};

ilib.x = "This property came from ilib.DateFmt2";

module.exports = function (loader) {
	loader.merge(ilib, loader.require("test/testfiles/locale2.js"));

	return ilib;	
};

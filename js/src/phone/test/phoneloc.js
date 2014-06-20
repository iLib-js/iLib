PhoneLocaleTests.prototype.testGetByMCCUS = function() {
	var loc = new enyo.g11n.PhoneLoc({mcc: "310"});
	UnitTest.requireDefined(loc);
	UnitTest.requireEqual("us", loc.region);
	
	return UnitTest.passed;
};

PhoneLocaleTests.prototype.testGetByMCCDE = function() {
	var loc = new enyo.g11n.PhoneLoc({mcc: "262"});
	UnitTest.requireDefined(loc);
	UnitTest.requireEqual("de", loc.region);
	
	return UnitTest.passed;
};

PhoneLocaleTests.prototype.testGetByMCCUnknownMCC = function() {
	var loc = new enyo.g11n.PhoneLoc({mcc: "31"});
	UnitTest.requireDefined(loc);
	UnitTest.requireEqual("unknown", loc.region);
	
	return UnitTest.passed;
};

PhoneLocaleTests.prototype.testGetByCC1 = function() {
	var loc = new enyo.g11n.PhoneLoc({countryCode: "1"});
	UnitTest.requireDefined(loc);
	UnitTest.requireEqual("us", loc.region);
	
	return UnitTest.passed;
};

PhoneLocaleTests.prototype.testGetByCC2 = function() {
	var loc = new enyo.g11n.PhoneLoc({countryCode: "44"});
	UnitTest.requireDefined(loc);
	UnitTest.requireEqual("gb", loc.region);
	
	return UnitTest.passed;
};

PhoneLocaleTests.prototype.testGetByCCUnknownCC = function() {
	var loc = new enyo.g11n.PhoneLoc({countryCode: "0"});
	UnitTest.requireDefined(loc);
	UnitTest.requireEqual("unknown", loc.region);
	
	return UnitTest.passed;
};

PhoneLocaleTests.prototype.testGetByLocaleUS = function() {
	var loc = new enyo.g11n.PhoneLoc({locale: "en_us"});
	UnitTest.requireDefined(loc);
	UnitTest.requireEqual("us", loc.region);
	
	return UnitTest.passed;
};

PhoneLocaleTests.prototype.testGetByLocaleDE = function() {
	var loc = new enyo.g11n.PhoneLoc({locale: "de_de"});
	UnitTest.requireDefined(loc);
	UnitTest.requireEqual("de", loc.region);
	
	return UnitTest.passed;
};

PhoneLocaleTests.prototype.testGetDefault = function() {
	var loc = new enyo.g11n.PhoneLoc();
	UnitTest.requireDefined(loc);
	UnitTest.requireEqual("us", loc.region);
	
	return UnitTest.passed;
};

PhoneLocaleTests.prototype.testGetDefaultEmpty = function() {
	var loc = new enyo.g11n.PhoneLoc({});
	UnitTest.requireDefined(loc);
	UnitTest.requireEqual("us", loc.region);
	
	return UnitTest.passed;
};

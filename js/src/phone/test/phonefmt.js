PhoneFormatTests.prototype.testGetStyleRegionsRightNumber = function() { 
	var regions = new enyo.g11n.FmtStyles.getRegions();
	
	UnitTest.requireEqual(17, regions.length);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testGetStyleRegionsRightContent = function() { 
	var regions = new enyo.g11n.FmtStyles.getRegions();
	var i, hash = {};
	
	for (i = 0; i < regions.length; i++) {
		hash[regions[i].countryCode] = regions[i].countryName;
	}
	
	UnitTest.require(hash["us"]);
	UnitTest.require(hash["it"]);
	UnitTest.require(hash["fr"]);
	UnitTest.require(hash["gb"]);
	UnitTest.require(hash["ie"]);
	UnitTest.require(hash["de"]);
	UnitTest.require(hash["nl"]);
	UnitTest.require(hash["be"]);
	UnitTest.require(hash["lu"]);
	UnitTest.require(hash["es"]);
	UnitTest.require(hash["mx"]);
	UnitTest.require(hash["cn"]);
	UnitTest.require(hash["au"]);
	UnitTest.require(hash["sg"]);
	UnitTest.require(hash["nz"]);
	UnitTest.require(hash["in"]);
	UnitTest.require(hash["hk"]);

	return UnitTest.passed;
};

PhoneFormatTests.prototype.testMakeStyle = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("en_us"));
	
	UnitTest.requireObject(style);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testMakeStyleRightLocale = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("en_us"));
	
	UnitTest.requireEqual("us", style.locale.region);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testMakeStyleUnknown = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("_unknown"));
	
	UnitTest.requireObject(style);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testMakeStyleUnknownRightLocale = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("_unknown"));
	
	UnitTest.requireEqual("unknown", style.locale.region);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testMakeStyleNotDefined = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("_xx"));
	
	UnitTest.requireObject(style);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testMakeStyleNotDefinedRightLocale = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("_xx"));
	
	UnitTest.requireEqual("unknown", style.locale.region);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testMakeStyleDefaultLocale = function() {
	var style = new enyo.g11n.FmtStyles();
	
	UnitTest.requireObject(style);
	// should get the phoneLocale and use that
	UnitTest.requireEqual("us", style.locale.region);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testHasStyle = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("en_us"));
	
	UnitTest.require(style.hasStyle("dots"));
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testHasStyleFalse = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("en_us"));
	
	UnitTest.requireFalse(style.hasStyle("asdf"));
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testHasStyleDE = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("de_de"));
	
	UnitTest.require(style.hasStyle("minimalistischen"));
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testGetStyle = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("en_us"));
	var templates = style.getStyle("dots");
	
	UnitTest.requireDefined(templates);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testGetStyleRightStyle = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("en_us"));
	var templates = style.getStyle("dots");
	
	UnitTest.requireDefined(templates);
	UnitTest.requireDefined(templates.whole);
	UnitTest.requireDefined(templates.partial);
	UnitTest.requireEqual("XXX ", templates.whole.vsc[2]);
	UnitTest.requireEqual("XXX.", templates.whole.areaCode[2]);
	UnitTest.requireEqual("XXXXXX", templates.whole.subscriberNumber[5]);
	UnitTest.requireEqual("XXX.", templates.partial.areaCode[2]);
	UnitTest.requireEqual("XXX.XXX", templates.partial.subscriberNumber[5]);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testGetStyleDefault = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("en_us"));
	var templates = style.getStyle("asdf");
	
	UnitTest.requireDefined(templates);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testGetStyleDefaultRightStyle = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("en_us"));
	var templates = style.getStyle("asdf");
	
	UnitTest.requireDefined(templates);
	UnitTest.requireDefined(templates.whole);
	UnitTest.requireDefined(templates.partial);
	
	UnitTest.requireEqual("1 (650) 555-1234", templates.example);
	UnitTest.requireEqual("XXX ", templates.whole.vsc[2]);
	UnitTest.requireEqual("(XXX) ", templates.whole.areaCode[2]);
	UnitTest.requireEqual("XXXXXX", templates.whole.subscriberNumber[5]);
	UnitTest.requireEqual("(XXX) ", templates.partial.areaCode[2]);
	UnitTest.requireEqual("XXX-XXX", templates.partial.subscriberNumber[5]);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testGetExamplesUS = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("en_us"));
	var examples = style.getExamples();
	
	UnitTest.requireDefined(examples);
	UnitTest.requireEqual(3, examples.length);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testGetExamplesUSRight = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("en_us"));
	var examples = style.getExamples();
	
	UnitTest.requireDefined(examples);
	UnitTest.requireEqual("1 (650) 555-1234", examples[0].value);
	UnitTest.requireEqual("1-650-555-1234", examples[1].value);
	UnitTest.requireEqual("1.650.555.1234", examples[2].value);

	UnitTest.requireEqual("default", examples[0].key);
	UnitTest.requireEqual("dashes", examples[1].key);
	UnitTest.requireEqual("dots", examples[2].key);

	return UnitTest.passed;
};

PhoneFormatTests.prototype.testGetExamplesNL = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("nl_nl"));
	var examples = style.getExamples();
	
	UnitTest.requireDefined(examples);
	UnitTest.requireEqual(5, examples.length);
	
	return UnitTest.passed;
};

PhoneFormatTests.prototype.testGetExamplesNLRight = function() {
	var style = new enyo.g11n.FmtStyles(new enyo.g11n.Locale("nl_nl"));
	var examples = style.getExamples();
	
	UnitTest.requireDefined(examples);
	UnitTest.requireEqual("(020) 123 4567", examples[0].value);
	UnitTest.requireEqual("020 123 4567", examples[1].value);
	UnitTest.requireEqual("020 1234567", examples[2].value);
	UnitTest.requireEqual("020-123-45-67", examples[3].value);
	UnitTest.requireEqual("020/123 45 67", examples[4].value);
	
	UnitTest.requireEqual("default", examples[0].key);
	UnitTest.requireEqual("spatie", examples[1].key);
	UnitTest.requireEqual("gecomprimeerd", examples[2].key);
	UnitTest.requireEqual("streepjes", examples[3].key);
	UnitTest.requireEqual("japen", examples[4].key);
	
	return UnitTest.passed;
};

function testGetStyleRegionsRightNumber() { 
	var regions = new ilib.FmtStyles.getRegions();
	
	assertEquals(17, regions.length);
};

function testGetStyleRegionsRightContent() { 
	var regions = new ilib.FmtStyles.getRegions();
	var expected = [
		"US",
		"IT",
		"FR",
		"GB",
		"IE",
		"DE",
		"NL",
		"BE",
		"LU",
		"ES",
		"MX",
		"CN",
		"AU",
		"SG",
		"NZ",
		"IN",
		"HK"
	];
	assertArrayEquals(expected, regions);

	
};

function testMakeStyle() {
	var style = new ilib.FmtStyles(new ilib.Locale("en-US"));
	
	assertTrue(typeof(style) === 'object');
};

function testMakeStyleRightLocale() {
	var style = new ilib.FmtStyles(new ilib.Locale("en-US"));
	
	assertEquals("US", style.locale.region);
	
	
};

function testMakeStyleUnknown() {
	var style = new ilib.FmtStyles(new ilib.Locale("_unknown"));
	
	assertTrue(typeof(style) === 'object');
};

function testMakeStyleUnknownRightLocale() {
	var style = new ilib.FmtStyles(new ilib.Locale("_unknown"));
	
	assertEquals("unknown", style.locale.region);
	
};

function testMakeStyleNotDefined() {
	var style = new ilib.FmtStyles(new ilib.Locale("_xx"));
	
	assertTrue(typeof(style) === 'object');
};

function testMakeStyleNotDefinedRightLocale() {
	var style = new ilib.FmtStyles(new ilib.Locale("_xx"));
	
	assertEquals("unknown", style.locale.region);
};

function testMakeStyleDefaultLocale() {
	var style = new ilib.FmtStyles();
	
	assertTrue(typeof(style) === 'object');
	// should get the phoneLocale and use that
	assertEquals("US", style.locale.region);
	
};

function testHasStyle() {
	var style = new ilib.FmtStyles(new ilib.Locale("en-US"));
	
	assertTrue(style.hasStyle("dots"));
	
	
};

function testHasStyleFalse() {
	var style = new ilib.FmtStyles(new ilib.Locale("en-US"));
	
	assertFalse(style.hasStyle("asdf"));
	
};

function testHasStyleDE() {
	var style = new ilib.FmtStyles(new ilib.Locale("de-DE"));
	
	assertTrue(style.hasStyle("minimalistischen"));
	
	
};

function testGetStyle() {
	var style = new ilib.FmtStyles(new ilib.Locale("en-US"));
	var templates = style.getStyle("dots");
	
	assertNotUndefined(templates);
	
	
};

function testGetStyleRightStyle() {
	var style = new ilib.FmtStyles(new ilib.Locale("en-US"));
	var templates = style.getStyle("dots");
	
	assertNotUndefined(templates);
	assertNotUndefined(templates.whole);
	assertNotUndefined(templates.partial);
	assertEquals("XXX ", templates.whole.vsc[2]);
	assertEquals("XXX.", templates.whole.areaCode[2]);
	assertEquals("XXXXXX", templates.whole.subscriberNumber[5]);
	assertEquals("XXX.", templates.partial.areaCode[2]);
	assertEquals("XXX.XXX", templates.partial.subscriberNumber[5]);
	
	
};

function testGetStyleDefault() {
	var style = new ilib.FmtStyles(new ilib.Locale("en-US"));
	var templates = style.getStyle("asdf");
	
	assertNotUndefined(templates);
};

function testGetStyleDefaultRightStyle() {
	var style = new ilib.FmtStyles(new ilib.Locale("en-US"));
	var templates = style.getStyle("asdf");
	
	assertNotUndefined(templates);
	assertNotUndefined(templates.whole);
	assertNotUndefined(templates.partial);
	
	assertEquals("1 (650) 555-1234", templates.example);
	assertEquals("XXX ", templates.whole.vsc[2]);
	assertEquals("(XXX) ", templates.whole.areaCode[2]);
	assertEquals("XXXXXX", templates.whole.subscriberNumber[5]);
	assertEquals("(XXX) ", templates.partial.areaCode[2]);
	assertEquals("XXX-XXX", templates.partial.subscriberNumber[5]);
	
	
};

function testGetExamplesUS() {
	var style = new ilib.FmtStyles(new ilib.Locale("en-US"));
	var examples = style.getExamples();
	
	assertNotUndefined(examples);
	assertEquals(3, examples.length);
	
	
};

function testGetExamplesUSRight() {
	var style = new ilib.FmtStyles(new ilib.Locale("en-US"));
	var examples = style.getExamples();
	
	assertNotUndefined(examples);
	assertEquals("1 (650) 555-1234", examples[0].value);
	assertEquals("1-650-555-1234", examples[1].value);
	assertEquals("1.650.555.1234", examples[2].value);

	assertEquals("default", examples[0].key);
	assertEquals("dashes", examples[1].key);
	assertEquals("dots", examples[2].key);

	
};

function testGetExamplesNL() {
	var style = new ilib.FmtStyles(new ilib.Locale("nl-NL"));
	var examples = style.getExamples();
	
	assertNotUndefined(examples);
	assertEquals(5, examples.length);
	
	
};

function testGetExamplesNLRight() {
	var style = new ilib.FmtStyles(new ilib.Locale("nl-NL"));
	var examples = style.getExamples();
	
	assertNotUndefined(examples);
	assertEquals("(020) 123 4567", examples[0].value);
	assertEquals("020 123 4567", examples[1].value);
	assertEquals("020 1234567", examples[2].value);
	assertEquals("020-123-45-67", examples[3].value);
	assertEquals("020/123 45 67", examples[4].value);
	
	assertEquals("default", examples[0].key);
	assertEquals("spatie", examples[1].key);
	assertEquals("gecomprimeerd", examples[2].key);
	assertEquals("streepjes", examples[3].key);
	assertEquals("japen", examples[4].key);
	
	
};

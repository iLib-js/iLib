function testGetByMCCUS() {
	var loc = new ilib.PhoneLoc({mcc: "310"});
	assertNotUndefined(loc);
	assertEquals("US", loc.getRegion());
};

function testGetByMCCDE() {
	var loc = new ilib.PhoneLoc({mcc: "262"});
	assertNotUndefined(loc);
	assertEquals("DE", loc.getRegion());
};

function testGetByMCCUnknownMCC() {
	var loc = new ilib.PhoneLoc({mcc: "31"});
	assertNotUndefined(loc);
	assertEquals("unknown", loc.getRegion());
};

function testGetByCC1() {
	var loc = new ilib.PhoneLoc({countryCode: "1"});
	assertNotUndefined(loc);
	assertEquals("US", loc.getRegion());
};

function testGetByCC1() {
	var loc = new ilib.PhoneLoc({countryCode: "44"});
	assertNotUndefined(loc);
	assertEquals("GB", loc.getRegion());	
};

function testGetByCCUnknownCC() {
	var loc = new ilib.PhoneLoc({countryCode: "0"});
	assertNotUndefined(loc);
	assertEquals("unknown", loc.getRegion());
};

function testGetByLocaleUS() {
	var loc = new ilib.PhoneLoc({locale: "en-US"});
	assertNotUndefined(loc);
	assertEquals("US", loc.getRegion());
};

function testGetByLocaleDE() {
	var loc = new ilib.PhoneLoc({locale: "de-DE"});
	assertNotUndefined(loc);
	assertEquals("DE", loc.getRegion());	
};

function testGetDefault() {
	var loc = new ilib.PhoneLoc();
	assertNotUndefined(loc);
	assertEquals("US", loc.region);	
};

function testGetDefaultEmpty() {
	var loc = new ilib.PhoneLoc({});
	assertNotUndefined(loc);
	assertEquals("US", loc.region);
};
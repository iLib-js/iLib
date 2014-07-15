function testGetByMCCUS() {
	var loc = new ilib.PhoneLoc({mcc: "310"});
	assertNotUndefined(loc);
	assertEquals("US", loc.region);
	
};

function testGetByMCCDE() {
	var loc = new ilib.PhoneLoc({mcc: "262"});
	assertNotUndefined(loc);
	assertEquals("DE", loc.region);
	
};

function testGetByMCCUnknownMCC() {
	var loc = new ilib.PhoneLoc({mcc: "31"});
	assertNotUndefined(loc);
	assertEquals("unknown", loc.region);
	
};

function testGetByCC1() {
	var loc = new ilib.PhoneLoc({countryCode: "1"});
	assertNotUndefined(loc);
	assertEquals("US", loc.region);
	
};

function testGetByCC2() {
	var loc = new ilib.PhoneLoc({countryCode: "44"});
	assertNotUndefined(loc);
	assertEquals("GB", loc.region);
	
};

function testGetByCCUnknownCC() {
	var loc = new ilib.PhoneLoc({countryCode: "0"});
	assertNotUndefined(loc);
	assertEquals("unknown", loc.region);
	
};

function testGetByLocaleUS() {
	var loc = new ilib.PhoneLoc({locale: "en-US"});
	assertNotUndefined(loc);
	assertEquals("US", loc.region);
	
};

function testGetByLocaleDE() {
	var loc = new ilib.PhoneLoc({locale: "de-DE"});
	assertNotUndefined(loc);
	assertEquals("DE", loc.region);
	
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

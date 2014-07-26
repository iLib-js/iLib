/*function testLoadUS() {
	var states = new ilib.StatesData({
		path: "phone/base/test/states",
		locale: new ilib.Locale("en-US")
	});
	assertNotUndefined(states);
};
*/
function testLoadUSRightContent() {
	/*var states = new ilib.StatesData({
		root: ".",
		path: "test/states",
		locale: new ilib.Locale("en-US")
	});*/
	var states = new ilib.StatesData({locale: "en-US"});
	assertNotUndefined(states);

	var content = states.get(0);
	assertNotUndefined(content);

	assertEquals(10, content.length);
	assertEquals(0, content[0]);
	assertEquals(1, content[1]);
	assertEquals(2, content[2]);
	assertEquals(3, content[3]);
	assertEquals(4, content[4]);
	assertEquals(5, content[5]);
	assertEquals(6, content[6]);
	assertEquals(7, content[7]);
	assertEquals(8, content[8]);
	assertEquals(9, content[9]);
	
};
/*
function testLoadNotThere() {
	var states = new ilib.StatesData({
		path: "phone/base",
		locale: new ilib.Locale("en-US")
	});
	assertTrue(states);
	assertTrue(states.get(0) === undefined);
	
};

function testLoadDefault() {
	var states = new ilib.StatesData({
		root: ".",
		path: "test/states",
		locale: new ilib.Locale("en-GB")
	});
	assertNotUndefined(states);
	
	// should default to the "unknown" locale automatically
	var content = states.get(0);
	assertNotUndefined(content);
	
	assertEquals(10, content.length);
	assertEquals(100, content[0]);
	assertEquals(101, content[1]);
	assertEquals(102, content[2]);
	assertEquals(103, content[3]);
	assertEquals(104, content[4]);
	assertEquals(105, content[5]);
	assertEquals(106, content[6]);
	assertEquals(107, content[7]);
	assertEquals(108, content[8]);
	assertEquals(109, content[9]);
};

function testLoadDE() {
	var states = new ilib.StatesData({
		root: ".",
		path: "phone/base/test/states",
		locale: new ilib.Locale("de-DE")
	});
	assertNotUndefined(states);
};

function testLoadDERightContent() {
	var states = new ilib.StatesData({
		root: ".",
		path: "test/states",
		locale: new ilib.Locale("de-DE")
	});
	assertNotUndefined(states);
	 
	var content = states.get(0);
	assertNotUndefined(content);
	
	assertEquals(10, content.length);
	assertEquals(10, content[0]);
	assertEquals(11, content[1]);
	assertEquals(12, content[2]);
	assertEquals(13, content[3]);
	assertEquals(14, content[4]);
	assertEquals(15, content[5]);
	assertEquals(16, content[6]);
	assertEquals(17, content[7]);
	assertEquals(18, content[8]);
	assertEquals(19, content[9]);
	
};
*/
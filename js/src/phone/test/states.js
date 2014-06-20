StatesDataTests.prototype.testLoadUS = function() {
	var states = new enyo.g11n.StatesData({
		path: "phone/base/test/states",
		locale: new enyo.g11n.Locale("en_us")
	});
	UnitTest.requireDefined(states);
	return UnitTest.passed;
};

StatesDataTests.prototype.testLoadUSRightContent = function() {
	var states = new enyo.g11n.StatesData({
		root: ".",
		path: "test/states",
		locale: new enyo.g11n.Locale("en_us")
	});
	UnitTest.requireDefined(states);
	
	var content = states.get(0);
	UnitTest.requireDefined(content);
	
	UnitTest.requireEqual(10, content.length);
	UnitTest.requireEqual(0, content[0]);
	UnitTest.requireEqual(1, content[1]);
	UnitTest.requireEqual(2, content[2]);
	UnitTest.requireEqual(3, content[3]);
	UnitTest.requireEqual(4, content[4]);
	UnitTest.requireEqual(5, content[5]);
	UnitTest.requireEqual(6, content[6]);
	UnitTest.requireEqual(7, content[7]);
	UnitTest.requireEqual(8, content[8]);
	UnitTest.requireEqual(9, content[9]);
	
	return UnitTest.passed;
};

StatesDataTests.prototype.testLoadNotThere = function() {
	var states = new enyo.g11n.StatesData({
		path: "phone/base",
		locale: new enyo.g11n.Locale("en_us")
	});
	UnitTest.require(states);
	UnitTest.require(states.get(0) === undefined);
	return UnitTest.passed;
};

StatesDataTests.prototype.testLoadDefault = function() {
	var states = new enyo.g11n.StatesData({
		root: ".",
		path: "test/states",
		locale: new enyo.g11n.Locale("en_gb")
	});
	UnitTest.requireDefined(states);
	
	// should default to the "unknown" locale automatically
	var content = states.get(0);
	UnitTest.requireDefined(content);
	
	UnitTest.requireEqual(10, content.length);
	UnitTest.requireEqual(100, content[0]);
	UnitTest.requireEqual(101, content[1]);
	UnitTest.requireEqual(102, content[2]);
	UnitTest.requireEqual(103, content[3]);
	UnitTest.requireEqual(104, content[4]);
	UnitTest.requireEqual(105, content[5]);
	UnitTest.requireEqual(106, content[6]);
	UnitTest.requireEqual(107, content[7]);
	UnitTest.requireEqual(108, content[8]);
	UnitTest.requireEqual(109, content[9]);
	return UnitTest.passed;
};

StatesDataTests.prototype.testLoadDE = function() {
	var states = new enyo.g11n.StatesData({
		root: ".",
		path: "phone/base/test/states",
		locale: new enyo.g11n.Locale("de_de")
	});
	UnitTest.requireDefined(states);
	return UnitTest.passed;
};

StatesDataTests.prototype.testLoadDERightContent = function() {
	var states = new enyo.g11n.StatesData({
		root: ".",
		path: "test/states",
		locale: new enyo.g11n.Locale("de_de")
	});
	UnitTest.requireDefined(states);
	
	var content = states.get(0);
	UnitTest.requireDefined(content);
	
	UnitTest.requireEqual(10, content.length);
	UnitTest.requireEqual(10, content[0]);
	UnitTest.requireEqual(11, content[1]);
	UnitTest.requireEqual(12, content[2]);
	UnitTest.requireEqual(13, content[3]);
	UnitTest.requireEqual(14, content[4]);
	UnitTest.requireEqual(15, content[5]);
	UnitTest.requireEqual(16, content[6]);
	UnitTest.requireEqual(17, content[7]);
	UnitTest.requireEqual(18, content[8]);
	UnitTest.requireEqual(19, content[9]);
	
	return UnitTest.passed;
};

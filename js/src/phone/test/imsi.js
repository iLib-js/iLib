ImsiTests.prototype.testRegularImsi3DigitMNC = function() {
	var imsi = "31003014084567890"
	var expected = {
		mcc: "310",
		mnc: "030",
		msin: "14084567890"
	};
	
	UnitTest.require(objectEquals(expected, enyo.g11n.PhoneUtils.parseImsi(imsi)));
	
	return UnitTest.passed;
};

ImsiTests.prototype.testRegularImsi2DigitMNC = function() {
	var imsi = "26207201234567"
	var expected = {
		mcc: "262",
		mnc: "07",
		msin: "201234567"
	};
	
	UnitTest.require(objectEquals(expected, enyo.g11n.PhoneUtils.parseImsi(imsi)));
	
	return UnitTest.passed;
};

ImsiTests.prototype.testSpecialImsi1 = function() {
	var imsi = "31000201234567"
	var expected = {
		mcc: "310",
		mnc: "00",
		msin: "201234567"
	};
	
	UnitTest.require(objectEquals(expected, enyo.g11n.PhoneUtils.parseImsi(imsi)));
	
	return UnitTest.passed;
};

ImsiTests.prototype.testSpecialImsi2 = function() {
	var imsi = "310004201234567"
	var expected = {
		mcc: "310",
		mnc: "004",
		msin: "201234567"
	};
	
	UnitTest.require(objectEquals(expected, enyo.g11n.PhoneUtils.parseImsi(imsi)));
	
	return UnitTest.passed;
};

ImsiTests.prototype.testBrokenMCC = function() {
	var imsi = "32000414084567890"
	var expected = {
		mcc: "320",
		mnc: "004",
		msin: "14084567890"
	};
	
	// should default to a 3 digit mnc
	UnitTest.require(objectEquals(expected, enyo.g11n.PhoneUtils.parseImsi(imsi)));
	
	return UnitTest.passed;
};

ImsiTests.prototype.testBrokenMNC = function() {
	var imsi = "31014114084567890"
	var expected = {
		mcc: "310",
		mnc: "141",
		msin: "14084567890"
	};
	
	// should default to a 3 digit mnc
	UnitTest.require(objectEquals(expected, enyo.g11n.PhoneUtils.parseImsi(imsi)));
	
	return UnitTest.passed;
};

ImsiTests.prototype.testTooShort = function() {
	var imsi = "31"
	
	UnitTest.require(enyo.g11n.PhoneUtils.parseImsi(imsi) === undefined);
	
	return UnitTest.passed;
};

ImsiTests.prototype.testUndefined = function() {
	// should default to a 3 digit mnc
	UnitTest.require(enyo.g11n.PhoneUtils.parseImsi(undefined) === undefined);
	
	return UnitTest.passed;
};

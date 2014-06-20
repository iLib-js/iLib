PhoneUtilsTests.prototype.testNormNANP1 = function() {
	UnitTest.requireEqual("us", enyo.g11n.PhoneUtils.normPhoneReg("us"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testNormNANP2 = function() {
	UnitTest.requireEqual("us", enyo.g11n.PhoneUtils.normPhoneReg("ca"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testNormNANP3 = function() {
	UnitTest.requireEqual("us", enyo.g11n.PhoneUtils.normPhoneReg("jm"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testNormFrance1 = function() {
	UnitTest.requireEqual("fr", enyo.g11n.PhoneUtils.normPhoneReg("fr"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testNormFrance2 = function() {
	UnitTest.requireEqual("fr", enyo.g11n.PhoneUtils.normPhoneReg("mq"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testNormItaly1 = function() {
	UnitTest.requireEqual("it", enyo.g11n.PhoneUtils.normPhoneReg("it"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testNormItaly2 = function() {
	UnitTest.requireEqual("it", enyo.g11n.PhoneUtils.normPhoneReg("va"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testNormOther = function() {
	UnitTest.requireEqual("de", enyo.g11n.PhoneUtils.normPhoneReg("de"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testNormUnknown = function() {
	UnitTest.requireEqual("xx", enyo.g11n.PhoneUtils.normPhoneReg("xx"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testNormUndefined = function() {
	UnitTest.require(enyo.g11n.PhoneUtils.normPhoneReg(undefined) === undefined);
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapMCCtoReg1 = function() {
	UnitTest.requireEqual("us", enyo.g11n.PhoneUtils.mapMCCtoRegion("310"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapMCCtoReg2 = function() {
	UnitTest.requireEqual("de", enyo.g11n.PhoneUtils.mapMCCtoRegion("262"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapMCCtoRegUnknown = function() {
	UnitTest.requireEqual("unknown", enyo.g11n.PhoneUtils.mapMCCtoRegion("0"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapMCCtoRegUndefined = function() {
	UnitTest.require(enyo.g11n.PhoneUtils.mapMCCtoRegion(undefined) === undefined);
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapMCCtoCC1 = function() {
	UnitTest.requireEqual("49", enyo.g11n.PhoneUtils.mapMCCtoCC("262"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapMCCtoCC2 = function() {
	UnitTest.requireEqual("1", enyo.g11n.PhoneUtils.mapMCCtoCC("310"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapMCCtoCCUnknown = function() {
	UnitTest.require(enyo.g11n.PhoneUtils.mapMCCtoCC("0") === undefined);
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapMCCtoCCUndefined = function() {
	UnitTest.require(enyo.g11n.PhoneUtils.mapMCCtoCC(undefined) === undefined);
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapCCtoReg1 = function() {
	UnitTest.requireEqual("de", enyo.g11n.PhoneUtils.mapCCtoRegion("49"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapCCtoReg2 = function() {
	UnitTest.requireEqual("us", enyo.g11n.PhoneUtils.mapCCtoRegion("1"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapCCtoRegUnknown = function() {
	UnitTest.requireEqual("unknown", enyo.g11n.PhoneUtils.mapCCtoRegion("0"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapCCtoRegUndefined = function() {
	UnitTest.require(enyo.g11n.PhoneUtils.mapCCtoRegion(undefined) === undefined);
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapAreatoRegNANP1 = function() {
	UnitTest.requireEqual("us", enyo.g11n.PhoneUtils.mapAreaToRegion("1", "408"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapAreatoRegNANP2 = function() {
	UnitTest.requireEqual("jm", enyo.g11n.PhoneUtils.mapAreaToRegion("1", "876"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapAreatoRegNANP3 = function() {
	UnitTest.requireEqual("ca", enyo.g11n.PhoneUtils.mapAreaToRegion("1", "416"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapAreatoRegNANPUnknown = function() {
	UnitTest.requireEqual("us", enyo.g11n.PhoneUtils.mapAreaToRegion("1", "999"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapAreatoRegNANPUndefined = function() {
	UnitTest.requireEqual("us", enyo.g11n.PhoneUtils.mapAreaToRegion("1", undefined));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapAreatoRegItaly1 = function() {
	UnitTest.requireEqual("it", enyo.g11n.PhoneUtils.mapAreaToRegion("39", "6"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapAreatoRegItaly2 = function() {
	UnitTest.requireEqual("sm", enyo.g11n.PhoneUtils.mapAreaToRegion("39", "549"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapAreatoRegOther1 = function() {
	UnitTest.requireEqual("de", enyo.g11n.PhoneUtils.mapAreaToRegion("49", "2553"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapAreatoRegOther2 = function() {
	UnitTest.requireEqual("nl", enyo.g11n.PhoneUtils.mapAreaToRegion("31", "20"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapAreatoRegUnknown = function() {
	UnitTest.requireEqual("unknown", enyo.g11n.PhoneUtils.mapAreaToRegion("0", "20"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapAreatoRegUndefined = function() {
	UnitTest.require(enyo.g11n.PhoneUtils.mapAreaToRegion(undefined, undefined) === undefined);
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapRegToCC1 = function() {
	UnitTest.requireEqual("49", enyo.g11n.PhoneUtils.mapRegiontoCC("de"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapRegToCC2 = function() {
	UnitTest.requireEqual("1", enyo.g11n.PhoneUtils.mapRegiontoCC("us"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapRegToCC3 = function() {
	UnitTest.requireEqual("1", enyo.g11n.PhoneUtils.mapRegiontoCC("ca"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapRegToCC4 = function() {
	UnitTest.requireEqual("1", enyo.g11n.PhoneUtils.mapRegiontoCC("jm"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapRegToCCUnknown = function() {
	UnitTest.requireEqual("0", enyo.g11n.PhoneUtils.mapRegiontoCC("unknown"));
	return UnitTest.passed;
};

PhoneUtilsTests.prototype.testMapRegToCCUndefined = function() {
	UnitTest.require(enyo.g11n.PhoneUtils.mapRegiontoCC(undefined) === undefined);
	return UnitTest.passed;
};

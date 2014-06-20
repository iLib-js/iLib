PhoneParseTestsLU.prototype.testParseFull = function() {
	var parsed = new enyo.g11n.PhoneNumber("26 26 45 45", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "26264545"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsLU.prototype.testParseIgnoreFormatting = function() {
	var parsed = new enyo.g11n.PhoneNumber("26.26.45.45", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "26264545"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsLU.prototype.testParseIgnoreCrap = function() {
	var parsed = new enyo.g11n.PhoneNumber("@23!60$12^34(", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "23601234"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsLU.prototype.testParsePlusIDDToUS = function() {
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsLU.prototype.testParseZerosIDDToUS = function() {
	var parsed = new enyo.g11n.PhoneNumber("0012028675309", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsLU.prototype.testParsePlusIDDToGB = function() {
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsLU.prototype.testParseZerosIDDToGB = function() {
	var parsed = new enyo.g11n.PhoneNumber("00442012345678", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsLU.prototype.testParseEmergencyNumber = function() {
	var parsed = new enyo.g11n.PhoneNumber("112", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "112"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsLU.prototype.testParseEmergencyNumberPlus = function() {
	var parsed = new enyo.g11n.PhoneNumber("112115", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "112",
			subscriberNumber: "115"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsLU.prototype.testParseMobileNumber = function() {
	var parsed = new enyo.g11n.PhoneNumber("621123456", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		mobilePrefix: "621",
		subscriberNumber: "123456"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsLU.prototype.testParseDialAround = function() {
	var parsed = new enyo.g11n.PhoneNumber("15232 360 12 34", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		cic: "15232",
		subscriberNumber: "3601234"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsLU.prototype.testParseService = function() {
	var parsed = new enyo.g11n.PhoneNumber("80069123456", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "80069",
		subscriberNumber: "123456"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsLU.prototype.testParsePremium = function() {
	var parsed = new enyo.g11n.PhoneNumber("908-8765-4321", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "908",
		subscriberNumber: "87654321"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsLU.prototype.testParsePartial1 = function() {
	var parsed = new enyo.g11n.PhoneNumber("2", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "2"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsLU.prototype.testParsePartial2 = function() {
	var parsed = new enyo.g11n.PhoneNumber("26", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "26"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsLU.prototype.testParsePartial3 = function() {
	var parsed = new enyo.g11n.PhoneNumber("266", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "266"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsLU.prototype.testParsePartial4 = function() {
	var parsed = new enyo.g11n.PhoneNumber("2662", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "2662"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsLU.prototype.testParsePartial5 = function() {
	var parsed = new enyo.g11n.PhoneNumber("26621", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "26621"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsLU.prototype.testParsePartial6 = function() {
	var parsed = new enyo.g11n.PhoneNumber("266212", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "266212"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsLU.prototype.testParsePartial7 = function() {
	var parsed = new enyo.g11n.PhoneNumber("2662123", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "2662123"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsLU.prototype.testParsePartial8 = function() {
	var parsed = new enyo.g11n.PhoneNumber("26621234", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "26621234"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsLU.prototype.testParsePartial9 = function() {
	var parsed = new enyo.g11n.PhoneNumber("266212345", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "266212345"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsLU.prototype.testParsePartial10 = function() {
	var parsed = new enyo.g11n.PhoneNumber("2662123456", {locale: "de_lu"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "2662123456"
	}, {locale: "de_lu"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


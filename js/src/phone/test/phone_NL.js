PhoneParseTestsNL.prototype.testParseFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("0201234567", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "1234567"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParseIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("020/123-4567", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "1234567"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParseIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("0@2!0$12^34(56_7", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "1234567"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParseNoAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("7654321", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParsePlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParseZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("0012028675309", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParseLongAreaCodeNoTrunk = function(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new enyo.g11n.PhoneNumber("519123456", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "519123456"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParseLocalNumber = function(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new enyo.g11n.PhoneNumber("654 321", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "654321"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParsePlusIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParseZerosIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("00442012345678", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParseEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("112", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "112"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParseEmergencyNumberPlus = function(){
	var parsed = new enyo.g11n.PhoneNumber("112115", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "112",
			subscriberNumber: "115"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParseMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("0612345678", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "6",
		subscriberNumber: "12345678"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParseMobileInternationalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("+31 6 12345678", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "31",
		mobilePrefix: "6",
		subscriberNumber: "12345678"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParseService = function(){
	var parsed = new enyo.g11n.PhoneNumber("1800 12345678", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "1800",
		subscriberNumber: "12345678"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParseBlock = function(){
	var parsed = new enyo.g11n.PhoneNumber("116116", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "116",
		subscriberNumber: "116"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParseInternetDialup = function(){
	var parsed = new enyo.g11n.PhoneNumber("082 87654321", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "82",
		subscriberNumber: "87654321"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParsePartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNL.prototype.testParsePartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("03", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "3"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParsePartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("034", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "34"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParsePartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0344", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "344"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParsePartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("03444", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "344",
			subscriberNumber: "4"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParsePartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("034441", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "344",
		subscriberNumber: "41"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParsePartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0344412", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "344",
		subscriberNumber: "412"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParsePartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("03444123", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "344",
		subscriberNumber: "4123"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParsePartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("034441234", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "344",
			subscriberNumber: "41234"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParsePartial10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0344412345", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "344",
			subscriberNumber: "412345"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNL.prototype.testParsePartial11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("03444123456", {locale: "nl_nl"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "344",
			subscriberNumber: "4123456"
	}, {locale: "nl_nl"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


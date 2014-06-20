PhoneParseTestsGB.prototype.testParseGBFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("020 1234 5678", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("3456789", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "3456789"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBBogusPrefix = function(){
	var parsed = new enyo.g11n.PhoneNumber("06 69812345", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "669812345"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


PhoneParseTestsGB.prototype.testParseGBFullLongAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("01946712345", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "19467",
		subscriberNumber: "12345"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBFullSpecialAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("01946123456", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1946",
		subscriberNumber: "123456"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("(020) 1234-5678", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBFullLongAreaCodeIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("(01999)123456", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1999",
		subscriberNumber: "123456"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("$020@1234&5678-", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBNoAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("82345678", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "82345678"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseInvalidLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("12345678", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "12345678",
		invalid: true
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBServiceCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("034012345678", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "340",
		subscriberNumber: "12345678"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBWithVSC = function(){
	var parsed = new enyo.g11n.PhoneNumber("14102012345678", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "141",
		trunkAccess: "0",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBPersonalNumbering = function(){
	var parsed = new enyo.g11n.PhoneNumber("07012345678", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "70",
		subscriberNumber: "12345678"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("07534123456", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "7534",
		subscriberNumber: "123456"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBPlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("0012028675309", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBLongAreaCodeNoTrunk = function(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new enyo.g11n.PhoneNumber("1999123456", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "1999123456",
		invalid: true
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("116", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "116"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsGB.prototype.testParseGBEmergencyNumberPlus = function(){
	var parsed = new enyo.g11n.PhoneNumber("116116", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "116",
		subscriberNumber: "116"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseGBPartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsGB.prototype.testParseGBPartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("019", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "19"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsGB.prototype.testParseGBPartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0199", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "199"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsGB.prototype.testParseGBPartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01999", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1999"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsGB.prototype.testParseGBPartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("019991", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1999",
		subscriberNumber: "1"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsGB.prototype.testParseGBPartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0199912", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1999",
		subscriberNumber: "12"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsGB.prototype.testParseGBPartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01999123", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1999",
		subscriberNumber: "123"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsGB.prototype.testParseGBPartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("019991234", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1999",
			subscriberNumber: "1234"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsGB.prototype.testParseGBPartial10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0199912345", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1999",
			subscriberNumber: "12345"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsGB.prototype.testParseGBPartial11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01999123456", {locale: "en_gb"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1999",
			subscriberNumber: "123456"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseWithUSMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_gb", mcc: "316"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en_us"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseWithFRMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_gb", mcc: "208"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseWithMXMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_gb", mcc: "334"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseWithDEMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_gb", mcc: "262"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsGB.prototype.testParseWithGBMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_gb", mcc: "235"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

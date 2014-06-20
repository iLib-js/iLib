PhoneParseTestsAU.prototype.testParseFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("(08) 1234 5678", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "8",
		subscriberNumber: "12345678"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("23456789", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "23456789"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseBogusPrefix = function(){
	var parsed = new enyo.g11n.PhoneNumber("09 69812345", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "969812345"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("(02) 1234-5678", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "12345678"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("$02@1234&5678-", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "12345678"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseNoAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("91234567", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "91234567"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseServiceCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("0198 123 456", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "198",
		subscriberNumber: "123456"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseWithVSC = function(){
	var parsed = new enyo.g11n.PhoneNumber("1831 02 2345 6789", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "1831",
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "23456789"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseInternationalCarrierSelection = function(){
	var parsed = new enyo.g11n.PhoneNumber("0016 61 2 5678 1234", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "0016",
		countryCode: "61",
		areaCode: "2",
		subscriberNumber: "56781234"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseCarrierSelectionInternational = function(){
	var parsed = new enyo.g11n.PhoneNumber("1441 0011 61 2 5678 1234", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		cic: "1441",
		iddPrefix: "0011",
		countryCode: "61",
		areaCode: "2",
		subscriberNumber: "56781234"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseCarrierSelectionDomestic = function(){
	var parsed = new enyo.g11n.PhoneNumber("1441 2 5678 1234", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		cic: "1441",
		areaCode: "2",
		subscriberNumber: "56781234"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("0412 345 678", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "4123",
		subscriberNumber: "45678"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParsePlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("001112028675309", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "0011",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseInternationalDialAround = function(){
	var parsed = new enyo.g11n.PhoneNumber("1456 0011 1 202 867 5309", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		cic: "1456",
		iddPrefix: "0011",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("000", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "000"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsAU.prototype.testParseEmergencyGSM = function(){
	var parsed = new enyo.g11n.PhoneNumber("112", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "112"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParsePartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParsePartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("02", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsAU.prototype.testParsePartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 2", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "2"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsAU.prototype.testParsePartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 23", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "23"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsAU.prototype.testParsePartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 234", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "234"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsAU.prototype.testParsePartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 2345", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "2345"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsAU.prototype.testParsePartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 2345 6", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "23456"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsAU.prototype.testParsePartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 2345 67", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "234567"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsAU.prototype.testParsePartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 2345 678", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "2345678"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsAU.prototype.testParsePartial10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 2345 6789", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "23456789"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsAU.prototype.testParsePartial11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 2345 6789 0", {locale: "en_au"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "234567890"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseWithUSMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 1234 5678", {locale: "en_au", mcc: "316"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "0212345678",
		invalid: true
	}, {locale: "en_us"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseWithFRMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 1234 5678", {locale: "en_au", mcc: "208"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "12345678"
	}, {locale: "en_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseWithMXMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 1234 5678", {locale: "en_au", mcc: "334"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "02",
		subscriberNumber: "12345678"
	}, {locale: "en_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseWithDEMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 1234 5678", {locale: "en_au", mcc: "262"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "345678"
	}, {locale: "en_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsAU.prototype.testParseWithAUMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("02 1234 5678", {locale: "en_au", mcc: "505"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2",
		subscriberNumber: "12345678"
	}, {locale: "en_au"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

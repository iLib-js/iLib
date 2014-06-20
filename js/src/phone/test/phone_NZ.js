PhoneParseTestsNZ.prototype.testParseFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("03 456-7890", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "4567890"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("3456789", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "3456789"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseBogusPrefix = function(){
	var parsed = new enyo.g11n.PhoneNumber("05 9812345", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "59812345",
		invalid: true
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("(03) 123-5678", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "1235678"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("$03@1234&567-", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "1234567"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseNoAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("91234567", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "91234567"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseServiceCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("080098765", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "800",
		subscriberNumber: "98765"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseWithVSC = function(){
	var parsed = new enyo.g11n.PhoneNumber("*222", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "*222"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("02112345678", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "21",
		subscriberNumber: "12345678"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParsePlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("0012028675309", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("111", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "111"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParsePartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParsePartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("03", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNZ.prototype.testParsePartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("039", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "9"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNZ.prototype.testParsePartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0399", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "99"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNZ.prototype.testParsePartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("03999", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "999"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNZ.prototype.testParsePartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("039991", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "9991"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNZ.prototype.testParsePartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0399912", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "99912"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNZ.prototype.testParsePartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("03999123", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "999123"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNZ.prototype.testParsePartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("039991234", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "9991234"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsNZ.prototype.testParsePartial10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0399912345", {locale: "en_nz"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "99912345"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseWithUSMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_nz", mcc: "316"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en_us"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseWithFRMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_nz", mcc: "208"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseWithMXMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_nz", mcc: "334"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseWithDEMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_nz", mcc: "262"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsNZ.prototype.testParseWithNZMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_nz", mcc: "530"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en_nz"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

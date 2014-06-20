PhoneParseTestsIE.prototype.testParseIEFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("0112345678", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1",
		subscriberNumber: "12345678"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIEFullLongAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("040412345", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "404",
		subscriberNumber: "12345"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIEIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("(0404) 12-345", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "404",
		subscriberNumber: "12345"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIEIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("0@11$23%45&678", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1",
		subscriberNumber: "12345678"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIENoAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("82345678", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "82345678"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseLocalInvalidNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("12345678", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "12345678",
		invalid: true
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testVSC = function(){
	var parsed = new enyo.g11n.PhoneNumber("14282345678", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "142",
		subscriberNumber: "82345678"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIEPlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIEZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("0012028675309", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIELongAreaCodeNoTrunk = function(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new enyo.g11n.PhoneNumber("404123456", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "404123456"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIELocalNumber = function(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new enyo.g11n.PhoneNumber("82345678", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "82345678"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIEPlusIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIEPlusIDDToIE = function(){
	var parsed = new enyo.g11n.PhoneNumber("+353 86 822 3689", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		mobilePrefix: "86",
		subscriberNumber: "8223689"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIEZerosIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("00442012345678", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIEService = function(){
	var parsed = new enyo.g11n.PhoneNumber("15308765432", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "1530",
		subscriberNumber: "8765432"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIEMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("0871234567", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "87",
		subscriberNumber: "1234567"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIEPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIE.prototype.testParseIEPartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("04", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "4"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIE.prototype.testParseIEPartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("040", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "40"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIE.prototype.testParseIEPartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0404", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "404"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIE.prototype.testParseIEPartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("04041", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "1"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIE.prototype.testParseIEPartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("040412", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "404",
		subscriberNumber: "12"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIE.prototype.testParseIEPartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0404123", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "404",
		subscriberNumber: "123"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIE.prototype.testParseIEPartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("04041234", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "404",
		subscriberNumber: "1234"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIE.prototype.testParseIEPartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("040412345", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "404",
			subscriberNumber: "12345"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

// for CFISH-5426
PhoneParseTestsIE.prototype.testParseEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("999", {locale: "en_ie"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "999"
	}, {locale: "en_ie"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("0112345678", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1",
		subscriberNumber: "12345678"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("(01) 12 34 56 78", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1",
		subscriberNumber: "12345678"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("0@11$23%45&678", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1",
		subscriberNumber: "12345678"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRNoAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("12 34 56 78", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "12345678"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRPlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseIDDToIEMobile = function(){
	var parsed = new enyo.g11n.PhoneNumber("+353 86 8223689", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		mobilePrefix: "86",
		subscriberNumber: "8223689"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


PhoneParseTestsFR.prototype.testParseFRZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("0012028675309", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRLongAreaCodeNoTrunk = function(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new enyo.g11n.PhoneNumber("1 23 45 67 89 00", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "12345678900"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRLocalNumber = function(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new enyo.g11n.PhoneNumber("12345678", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "12345678"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRPlusIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRZerosIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("00442012345678", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRDepartments = function(){
	var parsed = new enyo.g11n.PhoneNumber("0590 123 456", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRInternationalToDepartments = function(){
	var parsed = new enyo.g11n.PhoneNumber("+33 590 123 456", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		serviceCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("0712345678", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "7",
		subscriberNumber: "12345678"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsFR.prototype.testParseFRPartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("05", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "5"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsFR.prototype.testParseFRPartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("051", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5",
		subscriberNumber: "1"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsFR.prototype.testParseFRPartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0512", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5",
		subscriberNumber: "12"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsFR.prototype.testParseFRPartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("05123", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "5",
			subscriberNumber: "123"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsFR.prototype.testParseFRPartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("051234", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5",
		subscriberNumber: "1234"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsFR.prototype.testParseFRPartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0512345", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5",
		subscriberNumber: "12345"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsFR.prototype.testParseFRPartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("05123456", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsFR.prototype.testParseFRPartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("051234567", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "5",
			subscriberNumber: "1234567"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsFR.prototype.testParseFRPartial10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0512345678", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "5",
			subscriberNumber: "12345678"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


// for NOV-113777
PhoneParseTestsFR.prototype.testParseLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("41551735", {locale: "fr_fr"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "41551735"
	}, {locale: "fr_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDEFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("02360123456", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2360",
		subscriberNumber: "123456"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDEIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("02360/ 123456", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2360",
		subscriberNumber: "123456"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDEIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("0@23!60$12^34(56", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2360",
		subscriberNumber: "123456"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDENoAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("8234 5678", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "82345678"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDEPlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDEZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("0012028675309", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseIDDToIEMobile = function(){
	var parsed = new enyo.g11n.PhoneNumber("+353 86 8223689", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		mobilePrefix: "86",
		subscriberNumber: "8223689"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDELongAreaCodeNoTrunk = function(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new enyo.g11n.PhoneNumber("2360/ 123456", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "2360123456"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDELocalNumber = function(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new enyo.g11n.PhoneNumber("723 456", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "723456"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDEInvalidLocalNumber = function(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new enyo.g11n.PhoneNumber("123 456", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "123456",
		invalid: true
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseLocalWithPauseChars = function(){
	var parsed = new enyo.g11n.PhoneNumber("4156568w1234", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "4156568",
		extension: "w1234"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseLDWithPauseChars = function(){
	var parsed = new enyo.g11n.PhoneNumber("02360/ 123456w1234", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2360",
		subscriberNumber: "123456",
		extension: "w1234"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDEPlusIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDEZerosIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("00442012345678", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("112", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "112"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseEmergencyNumberPlus = function(){
	var parsed = new enyo.g11n.PhoneNumber("19222115", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "19222",
			subscriberNumber: "115"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDEMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("016512345678", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "165",
		subscriberNumber: "12345678"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEDialAround = function(){
	var parsed = new enyo.g11n.PhoneNumber("01032 2360/ 123456", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		cic: "1032",
		areaCode: "2360",
		subscriberNumber: "123456"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEDialAroundLong = function(){
	var parsed = new enyo.g11n.PhoneNumber("010032 2360/ 123456", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		cic: "10032",
		areaCode: "2360",
		subscriberNumber: "123456"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEService = function(){
	var parsed = new enyo.g11n.PhoneNumber("01169 123/45678", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "11",
		subscriberNumber: "6912345678"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEBlock = function(){
	var parsed = new enyo.g11n.PhoneNumber("116116", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "116116"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDEInternetDialup = function(){
	var parsed = new enyo.g11n.PhoneNumber("01925 87654321", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "192",
		subscriberNumber: "587654321"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDEPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsDE.prototype.testParseDEPartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("05", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "5"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEPartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("058", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "58"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEPartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0584", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "584"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEPartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("05844", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "5844"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEPartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("058441", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5844",
		subscriberNumber: "1"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEPartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0584412", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5844",
		subscriberNumber: "12"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEPartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("05844123", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "5844",
		subscriberNumber: "123"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEPartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("058441234", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "5844",
			subscriberNumber: "1234"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEPartial10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0584412345", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "5844",
			subscriberNumber: "12345"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsDE.prototype.testParseDEPartial11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("05844123456", {locale: "de_de"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "5844",
			subscriberNumber: "123456"
	}, {locale: "de_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


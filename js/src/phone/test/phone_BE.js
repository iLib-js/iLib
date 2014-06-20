PhoneParseTestsBE.prototype.testParseFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("038234567", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "8234567"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParseIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("03-823-45-67", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "8234567"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParseIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("0@3!8$2^34(56_7", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "3",
		subscriberNumber: "8234567"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParseNoAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("8234567", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "8234567"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParsePlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParseZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("0012028675309", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParseLongAreaCodeNoTrunk = function(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new enyo.g11n.PhoneNumber("71123456", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "71123456"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParseLocalNumber = function(){
	// this number uses an area code to start it, but without the trunk, we should
	// not recognize it as an area code
	var parsed = new enyo.g11n.PhoneNumber("82 34 56", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "823456"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParsePlusIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442082345678", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "82345678"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParseZerosIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("00442082345678", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "82345678"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParseEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("112", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "112"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParseEmergencyNumberPlus = function(){
	var parsed = new enyo.g11n.PhoneNumber("112115", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "112",
			subscriberNumber: "115"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParseMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("0492 823456", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "492",
		subscriberNumber: "823456"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParseInternational = function(){
	var parsed = new enyo.g11n.PhoneNumber("+32 3 823 45 67", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "32",
		areaCode: "3",
		subscriberNumber: "8234567"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParseInternationalMobile = function(){
	var parsed = new enyo.g11n.PhoneNumber("+32 492 823 456", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "32",
		mobilePrefix: "492",
		subscriberNumber: "823456"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParseService = function(){
	var parsed = new enyo.g11n.PhoneNumber("0800 82345678", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "800",
		subscriberNumber: "82345678"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParseBlock = function(){
	var parsed = new enyo.g11n.PhoneNumber("116116", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "116",
		subscriberNumber: "116"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParsePartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsBE.prototype.testParsePartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("05", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "5"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParsePartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("058", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "58"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParsePartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0584", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "58",
		subscriberNumber: "4"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParsePartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("05844", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "58",
		subscriberNumber: "44"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParsePartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("058441", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "58",
		subscriberNumber: "441"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParsePartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0584412", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "58",
		subscriberNumber: "4412"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParsePartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("05844123", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "58",
		subscriberNumber: "44123"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParsePartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("058441234", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "58",
			subscriberNumber: "441234"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParsePartial10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0584412345", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "58",
			subscriberNumber: "4412345"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsBE.prototype.testParsePartial11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("05844123456", {locale: "nl_be"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "58",
			subscriberNumber: "44123456"
	}, {locale: "nl_be"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


PhoneParseTestsIN.prototype.testParseINFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("01112345678", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345678"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINFull2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("07753123456", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "7753",
		subscriberNumber: "123456"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("011-12345678", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345678"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("01%1@-12$&34!56^7(8", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345678"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("37654321", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "37654321"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseInvalidLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("8765432100", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "8765432100",
		invalid: true
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseINMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("9912345678", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		mobilePrefix: "991",
		subscriberNumber: "2345678"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

// for CFISH-8481
PhoneParseTestsIN.prototype.testParseINMobileNumberFromIntl = function(){
	var parsed = new enyo.g11n.PhoneNumber("+91 99123 45678", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "91",
		mobilePrefix: "991",
		subscriberNumber: "2345678"
	}, {locale: "en_us"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseCic = function(){
	var parsed = new enyo.g11n.PhoneNumber("01054 80123 45678", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		cic: "1054",
		areaCode: "80",
		subscriberNumber: "12345678"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseINEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("112", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "112"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINEmergencyNumberPlus = function(){
	var parsed = new enyo.g11n.PhoneNumber("112118", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "112",
		subscriberNumber: "118"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseINPlusIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseINZerosIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("00442012345678", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseINPlusIDDToGBLongArea = function(){
	var parsed = new enyo.g11n.PhoneNumber("+441997123456", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "1997",
		subscriberNumber: "123456"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+4", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "4"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+44", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		subscriberNumber: "2"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+4420", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+44201", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+4420123", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "123"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+44201234", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1234"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12345"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+4420123456", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "123456"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+44201234567", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1234567"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12345678"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


PhoneParseTestsIN.prototype.testParseINPlusIDDToUnknown = function(){
	var parsed = new enyo.g11n.PhoneNumber("+5062012345678", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "506",
		subscriberNumber: "2012345678"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseINZerosIDDToUnknown = function(){
	var parsed = new enyo.g11n.PhoneNumber("005062012345678", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "506",
		subscriberNumber: "2012345678"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseINPartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("011", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0111", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "1"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01112", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("011123", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "123"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0111234", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "1234"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01112345", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("011123456", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "123456"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartial10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0111234567", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "1234567"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartial11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01112345678", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345678"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartial11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("011123456789", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "123456789",
		invalid: true	// number is too long
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseINPartialLocal1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("4", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "4"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIN.prototype.testParseINPartialLocal2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("47", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "47"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartialLocal3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("476", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "476"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartialLocal4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("4765", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "4765"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartialLocal5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("47654", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "47654"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartialLocal6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("476543", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "476543"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartialLocal7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("4765432", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "4765432"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIN.prototype.testParseINPartialLocal8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("47654321", {locale: "en_in"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "47654321"
	}, {locale: "en_in"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

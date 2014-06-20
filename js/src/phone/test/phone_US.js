PhoneParseTestsUS.prototype.testParseUSFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("(456) 345-3434", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSFullNoLocale = function(){
	var parsed = new enyo.g11n.PhoneNumber("(456) 345-3434");
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSFull2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("4154154155", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "415",
		subscriberNumber: "4154155"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("456-345-3434", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("@456@345@$%^3434", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("345-3434", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "3453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSWithTrunk = function(){
	var parsed = new enyo.g11n.PhoneNumber("1 (456) 345-3434", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSWithTrunkAltFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("1-456-345-3434", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSWithDialAround = function(){
	var parsed = new enyo.g11n.PhoneNumber("10-10-321-456-345-3434", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		cic: "1010321",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSWithVSC = function(){
	var parsed = new enyo.g11n.PhoneNumber("*67 (456) 345-3434", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "*674563453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSWithVSCandTrunk = function(){
	var parsed = new enyo.g11n.PhoneNumber("*67 1 (456) 345-3434", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "*6714563453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseWithAlternateVSC = function(){
	var parsed = new enyo.g11n.PhoneNumber("112 (456) 345-3434", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "1124563453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseWithAlternateVSCBogusCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("111111111", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "111111111"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("911", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "911"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseEmergencyNumberExtended = function(){
	var parsed = new enyo.g11n.PhoneNumber("911 123", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "911",
		subscriberNumber: "123"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseLocalWithPauseChars = function(){
	var parsed = new enyo.g11n.PhoneNumber("6175568w1234", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseLDWithPauseChars = function(){
	var parsed = new enyo.g11n.PhoneNumber("4156175568w1234", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseLDWithPauseCharsAndTrunk = function(){
	var parsed = new enyo.g11n.PhoneNumber("1-415-617-5568 w 1234", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseLocalWithExtension = function(){
	var parsed = new enyo.g11n.PhoneNumber("617-5568x1234", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6175568",
		extension: "1234"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseLDWithExtension = function(){
	var parsed = new enyo.g11n.PhoneNumber("415-617-5568 x1234", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "1234"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSPlusIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSZerosIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("011442012345678", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "011",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBLongArea = function(){
	var parsed = new enyo.g11n.PhoneNumber("+441997123456", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "1997",
		subscriberNumber: "123456"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+4", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "4"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+44", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		subscriberNumber: "2"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+4420", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+44201", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+4420123", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "123"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+44201234", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1234"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12345"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+4420123456", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "123456"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+44201234567", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1234567"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12345678"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


PhoneParseTestsUS.prototype.testParseUSPlusIDDToUnknown = function(){
	var parsed = new enyo.g11n.PhoneNumber("+5062012345678", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "506",	// Costa Rica
		subscriberNumber: "2012345678"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSZerosIDDToUnknown = function(){
	var parsed = new enyo.g11n.PhoneNumber("0115062012345678", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "011",
		countryCode: "506", // Costa Rica
		subscriberNumber: "2012345678"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("4", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "4"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSPartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("45", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "45"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("456", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "456"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("4563", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "4563"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("45634", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "45634"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("456345", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "456345"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("4563453", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "4563453"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("45634534", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "34534"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("456345343", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "345343"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartial10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("4563453434", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartial11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("45634534345", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "456",
		subscriberNumber: "34534345"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSPartialTrunk0 = function(){
	var parsed = new enyo.g11n.PhoneNumber("1", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSPartialTrunk1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("14", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		subscriberNumber: "4"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSPartialTrunk2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("145", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		subscriberNumber: "45"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialTrunk3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("1456", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialTrunk4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("14563", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialTrunk5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("145634", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "34"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialTrunk6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("1456345", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "345"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialTrunk7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("14563453", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3453"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialTrunk8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("145634534", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "34534"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialTrunk9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("1456345343", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "345343"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialTrunk10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("14563453434", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "3453434"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialTrunk11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("145634534345", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "456",
		subscriberNumber: "34534345"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+3", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "3"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+35", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "35"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+353", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+3531", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+35311", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "1"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+353112", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "12"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+3531123", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "123"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+35311234", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "1234"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+353112345", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "12345"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+3531123456", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "123456"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD12 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+35311234567", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "1234567"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDD13 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+353112345678", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "353",
		areaCode: "1",
		subscriberNumber: "12345678"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseUSPartialIDDtoPreserveZeroCountry0 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDDtoPreserveZeroCountry1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+3", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "3"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDDtoPreserveZeroCountry2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+39", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDDtoPreserveZeroCountry3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+390", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDDtoPreserveZeroCountry4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+3904", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		subscriberNumber: "4"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDDtoPreserveZeroCountry5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+39040", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "40"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDDtoPreserveZeroCountry6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+390401", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "40",
		subscriberNumber: "1"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testParseUSPartialIDDtoPreserveZeroCountry7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+3904012345678", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "40",
		subscriberNumber: "12345678"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseWithUSMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_us", mcc: "316"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseWithFRMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_us", mcc: "208"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: 'en_fr'});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseWithMXMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_us", mcc: "334"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: 'en_mx'});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseWithDEMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_us", mcc: "262"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: 'en_de'});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


PhoneParseTestsUS.prototype.testParseWithUSMCCNoLocale = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {mcc: "316"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseWithFRMCCNoLocale = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {mcc: "208"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: 'en_fr'});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseWithMXMCCNoLocale = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {mcc: "334"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: 'en_mx'});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseWithDEMCCNoLocale = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {mcc: "262"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: 'en_de'});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


// for NOV-108200
PhoneParseTestsUS.prototype.testParseBogusSpecialChars = function(){
	var parsed = new enyo.g11n.PhoneNumber("+P13817803573", {mcc: "262"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "P1",
		areaCode: "381",
		subscriberNumber: "7803573"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParse555Number = function(){
	var parsed = new enyo.g11n.PhoneNumber("(408) 555-1234", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "408",
		subscriberNumber: "5551234"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseHtmlGarbage = function(){
	var parsed = new enyo.g11n.PhoneNumber("<button>t1</button>", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		extension: "ttt1tt"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseIntermediateSizedNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("56765432", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "567",
		subscriberNumber: "65432"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testParseEmergencyLikeServiceNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("411", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "411"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testBogusInternationalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("+33112345678", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "1",
		subscriberNumber: "12345678"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


PhoneParseTestsUS.prototype.testFictitousNumberLocale = function(){
	var parsed = new enyo.g11n.PhoneNumber("5555555", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "5555555"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testFictitousNumberLD = function(){
	var parsed = new enyo.g11n.PhoneNumber("5555555555", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "555",
		subscriberNumber: "5555555"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

// for NOV-113367
PhoneParseTestsUS.prototype.testCrazyIntlCall = function(){
	var parsed = new enyo.g11n.PhoneNumber("+1123", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		trunkAccess: "1",
		subscriberNumber: "23"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

//for NOV-109333
PhoneParseTestsUS.prototype.testWierdVSC = function(){
	var parsed = new enyo.g11n.PhoneNumber("*#43#", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "*#43#"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsUS.prototype.testSSCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("*646#", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "*646#"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

// for CFISH-5088
PhoneParseTestsUS.prototype.testVSCUMTS1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("#*06", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "#*06"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testVSCUMTS2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("*#06#408-987-6543", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "*#06#4089876543"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testVSCUMTS3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("*#062#408-987-6543", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "*#062#4089876543"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testVSCUMTS4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("#62#408-987-6543", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "#62#4089876543"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testVSCUMTS5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("*##62#408-987-6543", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "*##62#4089876543"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testVSCUMTS6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("##62#408-987-6543", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "##62#4089876543"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

// for CFISH-6022
PhoneParseTestsUS.prototype.testVSCVerizon = function(){
	var parsed = new enyo.g11n.PhoneNumber("*228", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "*228"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsUS.prototype.testVSCVerizon2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("*844752224458", {mcc: "310"}); // US
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "*844752224458"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

// for CFISH-6362
PhoneParseTestsUS.prototype.testVSCCDMALong = function(){
	var parsed = new enyo.g11n.PhoneNumber("1123456", {mcc: "310"}); // US
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		vsc: "1123456"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

//for CFISH-6444
PhoneParseTestsUS.prototype.testParseWithForeignIDD = function(){
	var parsed = new enyo.g11n.PhoneNumber("0044209876543", {mcc: "310"}); // US but with a foreign IDD
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44", // uk
		areaCode: "20", // london
		subscriberNumber: "9876543"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

// for CFISH-6845
PhoneParseTestsUS.prototype.testParseWithChinaIDD = function(){
	var parsed = new enyo.g11n.PhoneNumber("00861098765432"); // US home locale but using a foreign IDD
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "86", // china
		areaCode: "10", // beijing
		subscriberNumber: "98765432"
	});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

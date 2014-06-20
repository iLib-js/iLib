PhoneParseTestsCN.prototype.testParseCNFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("01012345678", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345678"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNFull2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("08081123456", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "8081",
		subscriberNumber: "123456"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("010-12345678", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345678"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("01%0@-12$&34!56^7(8", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345678"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("87654321", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "87654321"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNPlusIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNZerosIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("00442012345678", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBLongArea = function(){
	var parsed = new enyo.g11n.PhoneNumber("+441997123456", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "1997",
		subscriberNumber: "123456"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("15005179573", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseIDDToMobile = function(){
	var parsed = new enyo.g11n.PhoneNumber("+8615005179573", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "86",
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+4", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "4"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+44", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		subscriberNumber: "2"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+4420", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+44201", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+4420123", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "123"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+44201234", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1234"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "12345"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+4420123456", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "123456"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPlusIDDToGBPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("+44201234567", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "20",
			subscriberNumber: "1234567"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("110", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "110"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseEmergencyNumberPlus = function(){
	var parsed = new enyo.g11n.PhoneNumber("120115", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "120",
			subscriberNumber: "115"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNPlusIDDToUnknown = function(){
	var parsed = new enyo.g11n.PhoneNumber("+5062012345678", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "506",
		subscriberNumber: "2012345678"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNZerosIDDToUnknown = function(){
	var parsed = new enyo.g11n.PhoneNumber("005062012345678", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "506",
		subscriberNumber: "2012345678"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNPartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("010", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0101", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01012", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("010123", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0101234", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1234"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01012345", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("010123456", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123456"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartial10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0101234567", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1234567"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartial11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01012345678", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345678"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNPartialLocal1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("8", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "8"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsCN.prototype.testParseCNPartialLocal2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("87", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "87"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartialLocal3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("876", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "876"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartialLocal4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("8765", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "8765"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartialLocal5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("87654", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "87654"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartialLocal6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("876543", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "876543"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartialLocal7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("8765432", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "8765432"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseCNPartialLocal8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("87654321", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "87654321"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

//for DFISH-26683
PhoneParseTestsCN.prototype.testParseNewMobilePrefix1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("14782808075", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		mobilePrefix: "147",
		subscriberNumber: "82808075"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsCN.prototype.testParseNewMobilePrefix2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("18721083400", {locale: "zh_cn"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		mobilePrefix: "187",
		subscriberNumber: "21083400"
	}, {locale: "zh_cn"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("23897077", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "23897077"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsHK.prototype.testFromIntl = function(){
	var parsed = new enyo.g11n.PhoneNumber("+85223897077", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "852",
		subscriberNumber: "23897077"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsHK.prototype.testMobile = function(){
	var parsed = new enyo.g11n.PhoneNumber("93897077", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		mobilePrefix: "9",
		subscriberNumber: "3897077"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsHK.prototype.testFromIntlToMobile = function(){
	var parsed = new enyo.g11n.PhoneNumber("+85293897077", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "852",
		mobilePrefix: "9",
		subscriberNumber: "3897077"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testLocalNumberWithMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("23897077", {locale: "en_us", mcc: "454"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "23897077"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("2123 4567", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "21234567"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("22-34-56-78", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "22345678"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("2!1@2$3-^4&5(6)7", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "21234567"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseServiceCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("18501", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "1",
		subscriberNumber: "8501"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("51234567", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		mobilePrefix: "5",
		subscriberNumber: "1234567"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParsePlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("00112028675309", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "001",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("999", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "999"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseEmergencyNumberGSM = function(){
	var parsed = new enyo.g11n.PhoneNumber("112", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "112"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParsePartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("2", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "2"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParsePartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("21", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "21"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsHK.prototype.testParsePartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("212", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "212"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsHK.prototype.testParsePartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("2123", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "2123"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsHK.prototype.testParsePartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("2123 4", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "21234"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsHK.prototype.testParsePartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("2123 45", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "212345"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsHK.prototype.testParsePartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("2123 456", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "2123456"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsHK.prototype.testParsePartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("2123 4567", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "21234567"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsHK.prototype.testParsePartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("2123 4567 8", {locale: "en_hk"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "212345678"
	}, {locale: "en_hk"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseWithUSMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_hk", mcc: "316"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en_us"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseWithFRMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_hk", mcc: "208"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseWithMXMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_hk", mcc: "334"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseWithDEMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_hk", mcc: "262"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsHK.prototype.testParseWithGBMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_hk", mcc: "235"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

// for bug NOV-118901
PhoneParseTestsSG.prototype.testLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("93897077", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "93897077"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsSG.prototype.testFromIntl = function(){
	var parsed = new enyo.g11n.PhoneNumber("+6593897077", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "65",
		subscriberNumber: "93897077"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsSG.prototype.testLocalNumberWithMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("83897077", {locale: "en_us", mcc: "525"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "83897077"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParseLocalNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("6123 4567", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "61234567"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParseIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("62-34-56-78", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "62345678"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParseIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("6!1@2$3-^4&5(6)7", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "61234567"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParseServiceCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("1800 345 6789", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "1800",
		subscriberNumber: "3456789"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParseMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("81234567", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "81234567"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParsePlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParseZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("00112028675309", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "001",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParseEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("999", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		emergency: "999"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParsePartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("6", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParsePartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("61", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "61"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsSG.prototype.testParsePartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("612", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "612"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsSG.prototype.testParsePartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("6123", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6123"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsSG.prototype.testParsePartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("6123 4", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "61234"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsSG.prototype.testParsePartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("6123 45", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "612345"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsSG.prototype.testParsePartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("6123 456", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6123456"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsSG.prototype.testParsePartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("6123 4567", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "61234567"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsSG.prototype.testParsePartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("6123 4567 8", {locale: "en_sg"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "612345678"
	}, {locale: "en_sg"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParseWithUSMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_sg", mcc: "316"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en_us"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParseWithFRMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_sg", mcc: "208"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParseWithMXMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_sg", mcc: "334"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "en_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParseWithDEMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_sg", mcc: "262"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsSG.prototype.testParseWithGBMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "en_sg", mcc: "235"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "en_gb"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

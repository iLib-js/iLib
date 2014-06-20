PhoneParseTestsMX.prototype.testParseMXFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("6241234567", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "624",
		subscriberNumber: "1234567"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXLocal = function(){
	var parsed = new enyo.g11n.PhoneNumber("62412345", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "62412345"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("624-123-4567", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "624",
		subscriberNumber: "1234567"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("62@4$1%2^3&45!67", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "624",
		subscriberNumber: "1234567"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXPlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("0012028675309", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXPlusIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXZerosIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("00442012345678", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("019981234567", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "01",
		areaCode: "998",
		subscriberNumber: "1234567"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXServiceNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("026241234567", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "02",
		subscriberNumber: "6241234567"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXServiceNumber2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("8006241234567", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "800",
		subscriberNumber: "6241234567"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXShortAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("5512345678", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "55",
		subscriberNumber: "12345678"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("5", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "5"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXPartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("55", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			subscriberNumber: "55"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("551", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "551"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("5512", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "5512"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("55123", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "55123"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("551234", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "551234"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("5512345", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "5512345"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("55123456", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "55123456"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("551234567", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			areaCode: "55",
			subscriberNumber: "1234567"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartial10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("5512345678", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			areaCode: "55",
			subscriberNumber: "12345678"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseMXPartialTrunk0 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			subscriberNumber: "0"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartialTrunk1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "01"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartialTrunk2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("015", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			subscriberNumber: "5"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartialTrunk3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0155", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartialTrunk4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01551", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartialTrunk5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("015512", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartialTrunk6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0155123", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartialTrunk7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01551234", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1234"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartialTrunk8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("015512345", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12345"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartialTrunk9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0155123456", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "123456"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartialTrunk10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("01551234567", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "1234567"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsMX.prototype.testParseMXPartialTrunk11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("015512345678", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "01",
			areaCode: "55",
			subscriberNumber: "12345678"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseWithUSMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "es_mx", mcc: "316"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "es_us"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseWithFRMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "es_mx", mcc: "208"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "es_fr"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseWithMXMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "es_mx", mcc: "334"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "3222313"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsMX.prototype.testParseWithDEMCC = function(){
	var parsed = new enyo.g11n.PhoneNumber("6153222313", {locale: "es_mx", mcc: "262"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6153222313"
	}, {locale: "es_de"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

// for bug NOV-119557
PhoneParseTestsMX.prototype.testParseTollFree = function(){
	var parsed = new enyo.g11n.PhoneNumber("01 800 022 0606", {locale: "es_mx"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "01",
		serviceCode: "800",
		subscriberNumber: "0220606"
	}, {locale: "es_mx"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

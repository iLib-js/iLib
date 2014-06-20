PhoneParseTestsES.prototype.testParseESFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("925123456", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "925",
		subscriberNumber: "123456"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseESIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("(925) 123 456", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "925",
		subscriberNumber: "123456"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseESIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("9@251$23%45&6", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "925",
		subscriberNumber: "123456"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseESPlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseESZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("0012028675309", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseESPlusIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseESZerosIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("00442012345678", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("112", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "112"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseEmergencyNumberPlus = function(){
	var parsed = new enyo.g11n.PhoneNumber("112115", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "112",
			subscriberNumber: "115"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseESMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("654123456", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		mobilePrefix: "654",
		subscriberNumber: "123456"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseESServiceNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("800123456", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "800",
		subscriberNumber: "123456"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseESDialAround = function(){
	var parsed = new enyo.g11n.PhoneNumber("1032955123456", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		cic: "1032",
		areaCode: "955",
		subscriberNumber: "123456"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseESPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("9", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseESPartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("95", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		subscriberNumber: "95"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseESPartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("957", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "957"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseESPartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("9571", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "957",
		subscriberNumber: "1"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseESPartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("957 12", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "957",
		subscriberNumber: "12"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseESPartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("957 123", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "957",
		subscriberNumber: "123"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseESPartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("957 123 4", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "957",
		subscriberNumber: "1234"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseESPartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("957 123 45", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		areaCode: "957",
		subscriberNumber: "12345"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseESPartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("957 123 456", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			areaCode: "957",
			subscriberNumber: "123456"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsES.prototype.testParseDialIDD00International1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseDialIDD00International2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("00", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "00"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseDialIDD00International3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("001", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseDialIDD00International4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0016", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			subscriberNumber: "6"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseDialIDD00International5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("00165", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			subscriberNumber: "65"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseDialIDD00International6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("001650", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseDialIDD00International7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0016505", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "5"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseDialIDD00International8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("00165055", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "55"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseDialIDD00International9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("001650555", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "555"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseDialIDD00International10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0016505551", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "5551"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseDialIDD00International11 = function(){
	var parsed = new enyo.g11n.PhoneNumber("00165055512", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "55512"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseDialIDD00International12 = function(){
	var parsed = new enyo.g11n.PhoneNumber("001650555123", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "555123"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsES.prototype.testParseDialIDD00International13 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0016505551234", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "1",
			areaCode: "650",
			subscriberNumber: "5551234"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};


PhoneParseTestsES.prototype.testParseFromInternational = function(){
	var parsed = new enyo.g11n.PhoneNumber("+34912123456", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "34",
			areaCode: "912",
			subscriberNumber: "123456"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

//for CFISH-7040
PhoneParseTestsES.prototype.testParseMobileNumber = function() {
	var parsed = new enyo.g11n.PhoneNumber("665 545 880", {locale: "es_es"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		mobilePrefix: "665",
		subscriberNumber: "545880"
	}, {locale: "es_es"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

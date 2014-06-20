PhoneParseTestsIT.prototype.testParseITFull = function(){
	var parsed = new enyo.g11n.PhoneNumber("06 1234 5678", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "12345678"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseITIgnoreFormatting = function(){
	var parsed = new enyo.g11n.PhoneNumber("(06) 1234 5678", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "12345678"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseITIgnoreCrap = function(){
	var parsed = new enyo.g11n.PhoneNumber("0@61$23%45&678", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "12345678"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseITPlusIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("+12028675309", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseITZerosIDDToUS = function(){
	var parsed = new enyo.g11n.PhoneNumber("0012028675309", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "1",
		areaCode: "202",
		subscriberNumber: "8675309"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseIDDToSanMarino = function(){
	var parsed = new enyo.g11n.PhoneNumber("+378 0549 123 456", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	// San Marino should use the Italian parsing algorithm, so we can get the parts instead
	// of everything being in the subscriber number
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "549",
		subscriberNumber: "123456"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseITPlusIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("+442012345678", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseITZerosIDDToGB = function(){
	var parsed = new enyo.g11n.PhoneNumber("00442012345678", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "44",
		areaCode: "20",
		subscriberNumber: "12345678"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseEmergencyNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("112", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "112"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseEmergencyNumberPlus = function(){
	var parsed = new enyo.g11n.PhoneNumber("112115", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			emergency: "112",
			subscriberNumber: "115"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseITMobileNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("3991234567", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		mobilePrefix: "399",
		subscriberNumber: "1234567"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseITServiceNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("7991234567", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "799",
		subscriberNumber: "1234567"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseITNetServiceNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("4345654343", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "4",
		subscriberNumber: "345654343"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseITSpecialRateNumber = function(){
	var parsed = new enyo.g11n.PhoneNumber("8991234567", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		serviceCode: "899",
		subscriberNumber: "1234567"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseITPartial1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

PhoneParseTestsIT.prototype.testParseITPartial2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("05", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "5"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIT.prototype.testParseITPartial3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("057", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "57"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIT.prototype.testParseITPartial4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0577", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "577"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIT.prototype.testParseITPartial5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0577 1", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "577",
			subscriberNumber: "1"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIT.prototype.testParseITPartial6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0577 12", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "577",
		subscriberNumber: "12"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIT.prototype.testParseITPartial7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0577 123", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "577",
		subscriberNumber: "123"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIT.prototype.testParseITPartial8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0577 1234", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "577",
		subscriberNumber: "1234"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIT.prototype.testParseITPartial9 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0577 12345", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "577",
			subscriberNumber: "12345"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIT.prototype.testParseITPartial10 = function(){
	var parsed = new enyo.g11n.PhoneNumber("0577 123456", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "577",
			subscriberNumber: "123456"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

// for bug NOV-115337
PhoneParseTestsIT.prototype.testParseIntlToMobile = function(){
	var parsed = new enyo.g11n.PhoneNumber("+3939012345678", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "39",
			mobilePrefix: "390",
			subscriberNumber: "12345678"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};
PhoneParseTestsIT.prototype.testParseIntlToAreaCode = function(){
	var parsed = new enyo.g11n.PhoneNumber("+3903912345678", {locale: "it_it"});
	UnitTest.requireDefined(parsed);
	
	var expected = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "39",
			trunkAccess: "0",
			areaCode: "39",
			subscriberNumber: "12345678"
	}, {locale: "it_it"});
	
	UnitTest.require(parsed.equals(expected));
	return UnitTest.passed;
};

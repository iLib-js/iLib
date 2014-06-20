vPhoneNumberTests.prototype.testNumberMatchFRDepartments1 = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchFRDepartments1Reverse = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	UnitTest.requireEqual(100, right.compare(left));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testNumberMatchFRDepartmentsWrongArea = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "591",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchFRDepartmentsWrongAreaReverse = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "591",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	UnitTest.requireEqual(0, right.compare(left));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testNumberMatchFRDepartmentsDifferentCountryCodes = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchFRDifferentSN = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123454"
	}, {locale: "fr_fr"});
	
	UnitTest.require(20, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSTrunk = function(){
	var left = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSTrunkReverse = function(){
	var left = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(100, right.compare(left));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSTrunkDefaultLocale = function(){
	var left = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	});
	var right = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	});
	
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSTrunkDefaultLocaleReverse = function(){
	var left = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	});
	var right = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	});
	
	UnitTest.requireEqual(100, right.compare(left));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSTrunkWrongLocale = function(){
	var left = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "fr_fr"});
	var right = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "fr_fr"});
	
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSTrunkWrongLocaleReverse = function(){
	var left = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "fr_fr"});
	var right = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "fr_fr"});
	
	UnitTest.requireEqual(100, right.compare(left));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testNumberMatchUSMissingArea = function(){
	var left = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(88, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSMissingAreaReverse = function(){
	var left = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(88, right.compare(left));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSDifferentArea = function(){
	var left = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		areaCode: "407",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSDifferentAreaReverse = function(){
	var left = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		areaCode: "407",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(0, right.compare(left));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSCompletelyDifferentCountryCodes = function(){
	// different area codes, where neither is the US
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "30",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSMissingCountryCodeThisCountry = function(){
	// missing area code, where the one that is present is the same as the locale
	var left = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "es_es"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "es_es"});
	
	UnitTest.requireEqual(84, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSMissingCountryCodeThisCountryReverse = function(){
	// missing area code, where the one that is present is the same as the locale
	var left = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "es_es"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "es_es"});
	
	UnitTest.requireEqual(84, right.compare(left));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSMissingCountryCodeOtherCountry = function(){
	// missing area codes, where the one that is present is not the same as the current locale (US)
	var left = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(68, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSMissingCountryCodeOtherCountryReverse = function(){
	// missing area codes, where the one that is present is not the same as the current locale (US)
	var left = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34",
		areaCode: "590",
		subscriberNumber: "1234567"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(68, right.compare(left));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testNumberMatchITSanMarino = function(){
	var left = new enyo.g11n.PhoneNumber({
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it_it"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it_it"});
	
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchITSanMarinoReverse = function(){
	var left = new enyo.g11n.PhoneNumber({
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it_it"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it_it"});
	
	UnitTest.requireEqual(100, right.compare(left));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSSanMarino = function(){
	var left = new enyo.g11n.PhoneNumber({
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en_us"});

	// only a 100% match if calling from inside of italy
	UnitTest.requireEqual(68, left.compare(right));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testNumberMatchITSanMarinoWrongArea = function(){
	var left = new enyo.g11n.PhoneNumber({
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "374",
		subscriberNumber: "123456"
	}, {locale: "it_it"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "it_it"});
	
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testNumberMatchITSanMarinoDifferentCountryCodes = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchITSanMarinoDifferentCountryCodesReverse = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(100, right.compare(left));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchITSanMarinoDifferentCountryCodesDiffAreaCodes = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "378",
		trunkAccess: "0",
		areaCode: "378",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "00",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "374",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testNumberMatchITVaticanCity = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "379",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it_it"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it_it"});
	
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchITVaticanCityReverse = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "379",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it_it"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it_it"});
	
	UnitTest.requireEqual(100, right.compare(left));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testNumberMatchITOther = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it_it"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it_it"});
	
	UnitTest.requireEqual(84, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchITOtherReverse = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it_it"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "it_it"});
	
	UnitTest.requireEqual(84, right.compare(left));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testNumberMatchUSDifferentCountryCodesIT = function(){
	// both ways are valid ways to reach the Vatican from abroad
	var left = new enyo.g11n.PhoneNumber({
		countryCode: "379",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSDifferentCountryCodesITReverse = function(){
	// both ways are valid ways to reach the Vatican from abroad
	var left = new enyo.g11n.PhoneNumber({
		countryCode: "379",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "69812345"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(100, right.compare(left));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSDifferentCountryCodesFR = function(){
	// both ways are valid ways to reach the departments from abroad
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSDifferentCountryCodesFRReverse = function(){
	// both ways are valid ways to reach the departments from abroad
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(100, right.compare(left));
	
	return UnitTest.passed;
};


PhoneNumberTests.prototype.testNumberMatchDEMissingExtension = function(){
	var left = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456"
	}, {locale: "de_de"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "789"
	}, {locale: "de_de"});
	
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchDEMissingExtensionReverse = function(){
	var left = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456"
	}, {locale: "de_de"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "789"
	}, {locale: "de_de"});
	
	UnitTest.requireEqual(0, right.compare(left));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchDEDifferentExtension = function(){
	var location;
	var left = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "833"
	}, {locale: "de_de"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "789"
	}, {locale: "de_de"});
	
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchUSEverythingDifferent = function(){
	var location;
	var left = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		countryCode: "49",
		areaCode: "2203",
		subscriberNumber: "123456",
		extension: "833"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "650",
		subscriberNumber: "7654321"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchCAUseNanpRules = function(){
	var location;
	var left = new enyo.g11n.PhoneNumber({
		areaCode: "416",
		subscriberNumber: "1234567"
	}, {locale: "en_ca"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "416",
		subscriberNumber: "1234567"
	}, {locale: "en_ca"});
	
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};

// for bug NOV-116615
PhoneNumberTests.prototype.testNumberMatchMobileVsLDNumber = function(){
	var location;
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "44",
		mobilePrefix: "7734",
		subscriberNumber: "345345"
	}, {locale: "en_gb"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "1483",
		subscriberNumber: "345345"
	}, {locale: "en_gb"});
	
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};

//for bug NOV-118901
PhoneNumberTests.prototype.testNumberMatchSG = function(){
	var location;
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "65",
		subscriberNumber: "93897077"
	}, {locale: "en_sg"});
	var right = new enyo.g11n.PhoneNumber({
		subscriberNumber: "93897077"
	}, {locale: "en_sg"});
	
	UnitTest.requireEqual(84, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testNumberMatchSGWrongLocale = function(){
	var location;
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "65",
		subscriberNumber: "93897077"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		subscriberNumber: "93897077"
	}, {locale: "en_us"});
	
	UnitTest.requireEqual(68, left.compare(right));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testStringsNumberMatchUSIgnoreSomeFields = function() {
	var left = new enyo.g11n.PhoneNumber('1 (650) 456-7890'),
		right = new enyo.g11n.PhoneNumber('650-456-7890');
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchITSanMarinoDifferentCountryCodes = function(){
	var left = new enyo.g11n.PhoneNumber('+378 0549 123 456', {locale: "en_us"}),
		right = new enyo.g11n.PhoneNumber('+39 0549 123 456', {locale: "en_us"});
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchITSanMarinoMissingCountryCodes = function(){
	var left = new enyo.g11n.PhoneNumber('+378 0549 123 456', {locale: "it_it"}),
		right = new enyo.g11n.PhoneNumber('0549 123 456', {locale: "it_it"});
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchITSanMarinoDifferentCountryCodesDiffAreaCodes = function(){
	var left = new enyo.g11n.PhoneNumber('+378 0548 123 456', {locale: "en_us"}),
		right = new enyo.g11n.PhoneNumber('+39 0545 123 456', {locale: "en_us"});
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchITOther = function(){
	var left = new enyo.g11n.PhoneNumber('+39 06 69812345', {locale: "it_it"}),
		right = new enyo.g11n.PhoneNumber('06-69812345', {locale: "it_it"});
	UnitTest.requireEqual(84, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchFRDepartments1 = function(){
	var left = new enyo.g11n.PhoneNumber('+590 590 123 456', {locale: "fr_fr"}),
		right = new enyo.g11n.PhoneNumber('0590 123 456', {locale: "fr_fr"});
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchDEMissingExtension = function(){
	var left = new enyo.g11n.PhoneNumber('02203 123456', {locale: "de_de"}),
		right = new enyo.g11n.PhoneNumber('02203 123456-789', {locale: "de_de"});
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchDEDifferentExtension = function(){
	var left = new enyo.g11n.PhoneNumber('02203/123456-833', {locale: "de_de"}),
		right = new enyo.g11n.PhoneNumber('02203 123456-789', {locale: "de_de"});
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testStringsNumberMatchUSIgnoreSomeFieldsReverse = function(){
	var left = new enyo.g11n.PhoneNumber('650-456-7890', {locale: "en_us"}),
		right = new enyo.g11n.PhoneNumber('1 (650) 456-7890', {locale: "en_us"});
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchITSanMarinoDifferentCountryCodesReverse = function(){
	var left = new enyo.g11n.PhoneNumber('+39 0549 123 456', {locale: "en_us"}),
		right = new enyo.g11n.PhoneNumber('+378 0549 123 456', {locale: "en_us"});
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchITSanMarinoMissingCountryCodesReverse = function(){
	var left = new enyo.g11n.PhoneNumber('0549 123 456', {locale: "it_it"}),
		right = new enyo.g11n.PhoneNumber('+378 0549 123 456', {locale: "it_it"});
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchITSanMarinoDifferentCountryCodesDiffAreaCodesReverse = function(){
	var left = new enyo.g11n.PhoneNumber('+39 0545 123 456', {locale: "en_us"}),
		right = new enyo.g11n.PhoneNumber('+378 0548 123 456', {locale: "en_us"});
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchITOtherReverse = function(){
	var left = new enyo.g11n.PhoneNumber('06-69812345', {locale: "it_it"}),
		right = new enyo.g11n.PhoneNumber('+39 06 69812345', {locale: "it_it"});
	UnitTest.requireEqual(84, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchFRDepartments1Reverse = function(){
	var left = new enyo.g11n.PhoneNumber('0590 123 456', {locale: "fr_fr"}),
		right = new enyo.g11n.PhoneNumber('+590 590 123 456', {locale: "fr_fr"});
	UnitTest.requireEqual(100, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchDEMissingExtensionReverse = function(){
	var left = new enyo.g11n.PhoneNumber('02203 123456-789', {locale: "de_de"}),
		right = new enyo.g11n.PhoneNumber('02203 123456', {locale: "de_de"});
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};
PhoneNumberTests.prototype.testStringsNumberMatchDEDifferentExtensionReverse = function(){
	var left = new enyo.g11n.PhoneNumber('02203 123456-789', {locale: "de_de"}),
		right = new enyo.g11n.PhoneNumber('02203/123456-833', {locale: "de_de"});
	UnitTest.requireEqual(0, left.compare(right));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testEqualsNotEqual = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	var right = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	UnitTest.requireFalse(left.equals(right));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testEquals = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	UnitTest.require(left.equals(right));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testEqualsDifferentLocaleOkay = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	// same number because they have the country code
	UnitTest.require(left.equals(right));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testEqualsDifferentLocaleNotOkay = function(){
	var left = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "en_us"});
	var right = new enyo.g11n.PhoneNumber({
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	// same local number, but different country
	UnitTest.requireFalse(left.equals(right));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testEqualsMissingLocaleLeft = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	
	UnitTest.require(left.equals(right));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testEqualsMissingLocaleRight = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	}, {locale: "fr_fr"});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	});
	
	UnitTest.require(left.equals(right));
	
	return UnitTest.passed;
};

PhoneNumberTests.prototype.testEqualsMissingLocaleBoth = function(){
	var left = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	});
	var right = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "590",
		areaCode: "590",
		subscriberNumber: "123456"
	});
	
	UnitTest.require(left.equals(right));
	
	return UnitTest.passed;
};

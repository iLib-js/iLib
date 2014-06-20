NormalizeTests.prototype.testIDDPrefix = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "011",
		countryCode: "31",
		areaCode: "456",
		subscriberNumber: "3453434"
	}, {locale: 'en_us'});
	var expected = "+314563453434";
	
	UnitTest.requireEqual(expected, parsed.normalize({locale: 'en_us'})); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testIDDPrefixAlreadyPlus = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "31",
		areaCode: "456",
		subscriberNumber: "3453434"
	}, {locale: 'en_us'});
	var expected = "+314563453434";
	
	UnitTest.requireEqual(expected, parsed.normalize({locale: 'en_us'})); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testWithNoLocale = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "011",
		countryCode: "31",
		areaCode: "456",
		subscriberNumber: "3453434"
	}, {locale: 'en_us'});
	var expected = "+314563453434";
	
	UnitTest.requireEqual(expected, parsed.normalize({}));
	return UnitTest.passed;
};

NormalizeTests.prototype.testNoHints = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "011",
		countryCode: "31",
		areaCode: "456",
		subscriberNumber: "3453434"
	}, {locale: 'en_us'});
	var expected = "+314563453434";
	
	UnitTest.requireEqual(expected, parsed.normalize()); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testWithNoHintsNoLocale = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "011",
		countryCode: "31",
		areaCode: "456",
		subscriberNumber: "3453434"
	}, {locale: 'en_us'});
	var expected = "+314563453434";
	
	UnitTest.requireEqual(expected, parsed.normalize());
	return UnitTest.passed;
};

NormalizeTests.prototype.testLDNumberUsingUSMCC = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "650",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "316"
	};
	var expected = "+16507654321";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testLDNumberUsingUSMCCOtherLocale = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "650",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "316"
	};
	var expected = "+16507654321";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testLDNumberUsingDEMCC = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "2302",
		subscriberNumber: "654321"
	}, {locale: 'de_de'});
	var hints = {
		mcc: "262"
	};
	var expected = "+492302654321";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testServiceNumberUsingDEMCC = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "191",
		subscriberNumber: "7654321"
	}, {locale: 'de_de'});
	var hints = {
		mcc: "262"
	};
	var expected = "+491917654321";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testServiceNumberDontAddAreaCode = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		serviceCode: "191",
		subscriberNumber: "7654321"
	}, {locale: 'de_de'});
	var hints = {
		defaultAreaCode: "30"
	};
	var expected = "+491917654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testMobileNumberUsingDEMCC = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "16",
		subscriberNumber: "87654321"
	}, {locale: 'de_de'});
	var hints = {
		mcc: "262"
	};
	var expected = "+491687654321";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testMobileNumberDontAddAreaCode = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		mobilePrefix: "16",
		subscriberNumber: "87654321"
	}, {locale: 'de_de'});
	var hints = {
		defaultAreaCode: "30"
	};
	var expected = "+491687654321";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testLDNumberUsingDEMCCOtherLocale = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "2302",
		subscriberNumber: "654321"
	}, {locale: 'de_de'});
	var hints = {
		mcc: "262"
	};
	var expected = "+492302654321";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'fr_fr'
	return UnitTest.passed;
};

NormalizeTests.prototype.testLDNumberUsingUSLocale = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "650",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var expected = "+16507654321";
	
	UnitTest.requireEqual(expected, parsed.normalize()); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testLDNumberUsingUSSpanishLocale = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "650",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var expected = "+16507654321";
	
	UnitTest.requireEqual(expected, parsed.normalize()); // 'es_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testLDNumberUsingDELocale = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "30",
		subscriberNumber: "87654321"
	}, {locale: 'de_de'});
	var expected = "+493087654321";
	
	UnitTest.requireEqual(expected, parsed.normalize()); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAreaCodeFromHint = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		defaultAreaCode: "650"
	};
	var expected = "+16507654321";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAreaCodeIgnoreHint = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "408",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		defaultAreaCode: "650"
	};
	var expected = "+14087654321";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testNoAreaCodeAndNoCountry = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var expected = "7654321";
	
	UnitTest.requireEqual(expected, parsed.normalize()); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testDontAddCountry = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: 'de_de'});
	var hints = {
		mcc: "262"	// de
	};
	var expected = "7654321";	// can't add country because we don't know the area code
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testIgnoreTrunkAccessUS = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "408",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var expected = "+14087654321";
	
	UnitTest.requireEqual(expected, parsed.normalize()); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testIgnoreTrunkAccessDE = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "30",
		subscriberNumber: "87654321"
	}, {locale: 'de_de'});
	var expected = "+493087654321";
	
	UnitTest.requireEqual(expected, parsed.normalize()); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testDontIgnoreTrunkAccessIT = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "6",	// rome
		subscriberNumber: "87654321"
	}, {locale: 'it_it'});
	var expected = "+390687654321";
	
	UnitTest.requireEqual(expected, parsed.normalize()); // 'it_it'
	return UnitTest.passed;
};

NormalizeTests.prototype.testDontIgnoreTrunkAccessNoCountryIT = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6", // rome
		subscriberNumber: "87654321"
	}, {locale: 'it_it'});
	var expected = "+390687654321";
	
	UnitTest.requireEqual(expected, parsed.normalize()); // 'it_it'
	return UnitTest.passed;
};

NormalizeTests.prototype.testDontIgnoreTrunkAccessUseMCCIT = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6", // rome
		subscriberNumber: "87654321"
	}, {locale: 'it_it'});
	var hints = {
		mcc: "222"
	};
	var expected = "+390687654321";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAddTrunkAccessNoCountryIT = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "6", // rome
		subscriberNumber: "87654321"
	}, {locale: 'it_it'});
	var expected = "+390687654321";
	
	UnitTest.requireEqual(expected, parsed.normalize()); // 'it_it'
	return UnitTest.passed;
};

NormalizeTests.prototype.testCountryHintUS = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "408",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		country: "us"
	};
	var expected = "+14087654321";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testCountryHintUSOverrideLocale = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "408",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		country: "us"
	};
	var expected = "+14087654321";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testCountryHintFR = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "2",
		subscriberNumber: "12345678"
	}, {locale: 'fr_fr'});
	var hints = {
		country: "fr"
	};
	var expected = "+33212345678";
	
	UnitTest.requireEqual(expected, parsed.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testStringIDDPrefix = function() {
	var phone = new enyo.g11n.PhoneNumber("011-31-456-3453434", {locale: "en_us"});
	var expected = "+314563453434";
	
	UnitTest.requireEqual(expected, phone.normalize());
	return UnitTest.passed;
};

NormalizeTests.prototype.testStringLDNumberUsingUSMCC = function() {
	var phone = new enyo.g11n.PhoneNumber("650-765-4321", {locale: "en_us"});
	var hints = {
		mcc: "316"
	};
	var expected = "+16507654321";
	
	UnitTest.requireEqual(expected, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testStringLDNumberUsingUSMCCOtherLocale = function() {
	var phone = new enyo.g11n.PhoneNumber("650.765.4321", {locale: "en_us"});
	var hints = {
		mcc: "316"
	};
	var expected = "+16507654321";
	
	UnitTest.requireEqual(expected, phone.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testStringLDNumberUsingDEMCC = function() {
	var phone = new enyo.g11n.PhoneNumber("02302-654321", {locale: "de_de"});
	var hints = {
		mcc: "262"
	};
	var expected = "+492302654321";
	
	UnitTest.requireEqual(expected, phone.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testStringServiceNumberUsingDEMCC = function() {
	var phone = new enyo.g11n.PhoneNumber("0191 7654321", {locale: "de_de"});
	var hints = {
		mcc: "262"
	};
	var expected = "+491917654321";
	
	UnitTest.requireEqual(expected, phone.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testStringServiceNumberDontAddAreaCode = function() {
	var phone = new enyo.g11n.PhoneNumber("0191/7654321", {locale: "de_de"});
	var hints = {
		defaultAreaCode: "30"
	};
	var expected = "+491917654321";
	
	UnitTest.requireEqual(expected, phone.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testStringMobileNumberUsingDEMCC = function() {
	var phone = new enyo.g11n.PhoneNumber("016 8765 4321", {locale: "de_de"});
	var hints = {
		mcc: "262"
	};
	var expected = "+491687654321";
	
	UnitTest.requireEqual(expected, phone.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testStringMobileNumberDontAddAreaCode = function() {
	var phone = new enyo.g11n.PhoneNumber("016 87654321", {locale: "de_de"});
	var hints = {
		defaultAreaCode: "30"
	};
	var expected = "+491687654321";
	
	UnitTest.requireEqual(expected, phone.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

NormalizeTests.prototype.testStringLDStringNumberUsingUSMCCOtherLocale = function() {
	var phone = new enyo.g11n.PhoneNumber("(650) 765-4321", {mcc: "316"});
	var hints = {
		mcc: "316"
	};
	var expected = "+16507654321";
	
	UnitTest.requireEqual(expected, phone.normalize(hints)); // 'de_de'
	return UnitTest.passed;
};

// for CFISH-7296
NormalizeTests.prototype.testNormalizeForSkype = function() {
	var phone = new enyo.g11n.PhoneNumber("765-4321", {mcc: "310"});  // en_us
	var hints = {
		mcc: "310",
		defaultAreaCode: "408"
	};
	var expected = "+14087654321";
	
	UnitTest.requireEqual(expected, phone.normalize(hints));
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingLocalToLocalUMTS = function() {
	var phone = new enyo.g11n.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "316",
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "6507654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingLocalToLocalUMTSAddTrunkClosed = function() {
	var phone = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "1",
		subscriberNumber: "87654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "0187654321";
	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'fr_fr'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingLocalToLocalUMTSAddTrunkOpenNoAreaCodes = function() {
	var phone = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "352",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "270", // from Luxembourg, where there are no area codes
		networkType: "umts",
		assistedDialing: true
	};
	var expectedString = "7654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'de_lu'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingLocalToLocalUMTSAddTrunkOpen = function() {
	var phone = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "31",
		areaCode: "20",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "204", // from Netherlands
		networkType: "umts",
		defaultAreaCode: "10",
		assistedDialing: true
	};
	var expectedString = "0207654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'nl_nl'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingLocalToLocalUMTSNoTrunkOpen = function() {
	var phone = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "31",
		areaCode: "20",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "204", // from Netherlands
		networkType: "umts",
		defaultAreaCode: "20",
		assistedDialing: true
	};
	var expectedString = "0207654321";


	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'nl_nl'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingLocalToLocalCDMA = function() {
	var phone = new enyo.g11n.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "310", // US
		networkType: "cdma",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "6507654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingLocalToLocalCDMAAddTrunkClosed = function() {
	var phone = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "33",
		areaCode: "1",
		subscriberNumber: "87654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "1",
		assistedDialing: true
	};
	var expectedString = "0187654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'fr_fr'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingLocalToLocalCDMAAddTrunkOpen = function() {
	var phone = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "31",
		areaCode: "20",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "204", // from Netherlands
		networkType: "cdma",
		defaultAreaCode: "10",
		assistedDialing: true
	};
	var expectedString = "0207654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'nl_nl'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingLocalToLocalCDMANoTrunkOpen = function() {
	var phone = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "31",
		areaCode: "20",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "204", // from Netherlands
		networkType: "cdma",
		defaultAreaCode: "20",
		assistedDialing: true
	};
	var expectedString = "0207654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'nl_nl'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingIntlToLocalUMTS = function() {
	var phone = new enyo.g11n.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "+16507654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingIntlToLDUMTS = function() {
	var phone = new enyo.g11n.PhoneNumber({
		areaCode: "416",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "+14167654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingIntlToLDUMTSRemoveTrunk = function() {
	var phone = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "416",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "+14167654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingIntlToLDUMTSKeepTrunk = function() {
	var phone = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "87654321"
	}, {locale: 'it_it'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "1",
		assistedDialing: true
	};
	var expectedString = "+3901087654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'it_it'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingIntlToLocalCDMA = function() {
	var phone = new enyo.g11n.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "505", // From Australia
		networkType: "cdma",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "001116507654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingIntlToLDCDMA = function() {
	var phone = new enyo.g11n.PhoneNumber({
		areaCode: "416",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "0014167654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingIntlToLDCDMARemoveTrunk = function() {
	var phone = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "416",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "0014167654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingIntlToLDCDMAKeepTrunk = function() {
	var phone = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "87654321"
	}, {locale: 'it_it'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "1",
		assistedDialing: true
	};
	var expectedString = "003901087654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'it_it'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingLocalToLocalUMTSOpenNoDefAreaCode = function() {
	var phone = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "31",
		areaCode: "20",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "204", // from Netherlands
		networkType: "umts",
		assistedDialing: true
	};
	var expectedString = "0207654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'nl_nl'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingLocalToLocalCDMAOpenNoDefAreaCode = function() {
	var phone = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "31",
		areaCode: "20",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "204", // from Netherlands
		networkType: "cdma",
		assistedDialing: true
	};
	var expectedString = "0207654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'nl_nl'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingIntlToLDDefaultToUMTS = function() {
	var phone = new enyo.g11n.PhoneNumber({
		areaCode: "416",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "208", // from France
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "+14167654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingDefaultIntlToLocalUMTS = function() {
	var phone = new enyo.g11n.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "730", // from Chile
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "+16507654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingNonDefaultIntlToLocalUMTS = function() {
	var phone = new enyo.g11n.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "440",	// from Japan
		networkType: "umts",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "+16507654321";
	
	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingDefaultIntlToLocalCDMA = function() {
	var phone = new enyo.g11n.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "415", // from Lebanon
		networkType: "cdma",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "0016507654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingNonDefaultIntlToLocalCDMA = function() {
	var phone = new enyo.g11n.PhoneNumber({
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		mcc: "440", // from Japan
		networkType: "cdma",
		defaultAreaCode: "650",
		assistedDialing: true
	};
	var expectedString = "01016507654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};


NormalizeTests.prototype.testAssistedDialingThreeLocalesCDMA = function() {
	var phone = new enyo.g11n.PhoneNumber({
		trunkAccess: "8",
		areaCode: "495",	// moscow
		subscriberNumber: "7654321"
	}, {locale: 'ru_ru'});
	var hints = {
		mcc: "732", // from Columbia
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "00974957654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingThreeLocalesUMTS = function() {
	var phone = new enyo.g11n.PhoneNumber({
		trunkAccess: "8",
		areaCode: "495",	// moscow
		subscriberNumber: "7654321"
	}, {locale: 'ru_ru'});
	var hints = {
		mcc: "732", // from Columbia
		networkType: "umts",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "+74957654321";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

// for CFISH-5258
NormalizeTests.prototype.testAssistedDialNormalizeBogusNumberNonVerizon = function(){
	var left = new enyo.g11n.PhoneNumber("449876543211", {locale: 'de_de'});
	
	var hints = {
		homeLocale: 'de_de',
		mcc: "262", // in Germany
		networkType: "umts",
		defaultAreaCode: "30",	// phone is a German phone
		assistedDialing: true
	};
	var expectedString = "449876543211"; // don't assume it is international and add the bogus plus

	UnitTest.requireEqual(expectedString, left.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialNormalizeBogusNumberForVerizonUMTS = function(){
	var left = new enyo.g11n.PhoneNumber("449876543211"); // number is too long, so try with a + prefix
	
	var hints = {
		mcc: "310",
		networkType: "umts",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "+449876543211"; // assumed to be an international call

	UnitTest.requireEqual(expectedString, left.normalize(hints)); // 'en_us'

	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialNormalizeBogusNumberForVerizonCDMA = function(){
	var left = new enyo.g11n.PhoneNumber("449876543211"); // number is too long, so try with a + prefix
	
	var hints = {
		mcc: "310",  // US
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "011449876543211"; // the plus gets converted to 011 for cdma

	UnitTest.requireEqual(expectedString, left.normalize(hints)); // 'en_us'

	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialNormalizeBogusNumberForVerizonAlreadyPlus = function(){
	var left = new enyo.g11n.PhoneNumber("+449876543211");
	
	var hints = {
		mcc: "310",  // US
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "011449876543211"; // plus gets converted to 011 for cdma

	UnitTest.requireEqual(expectedString, left.normalize(hints)); // 'en_us'

	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialNormalizeBogusNumberForVerizonAlreadyIDD = function(){
	var left = new enyo.g11n.PhoneNumber("011449876543211");
	
	var hints = {
		mcc: "310",  // US
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "011449876543211";

	UnitTest.requireEqual(expectedString, left.normalize(hints)); // 'en_us'

	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialNormalizeBogusNumberForVerizonWithTrunk = function(){
	var left = new enyo.g11n.PhoneNumber("1449876543233");
	
	var hints = {
		mcc: "310",  // US
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "1449876543233"; // don't touch things that already have a trunk prefix

	UnitTest.requireEqual(expectedString, left.normalize(hints)); // 'en_us'

	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialNormalizeBogusNumberForVerizonInvalidCountryCode = function(){
	var left = new enyo.g11n.PhoneNumber("4259876543233");
	
	var hints = {
		mcc: "310",  // US
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone
		assistedDialing: true
	};
	var expectedString = "4259876543233"; // don't touch things with an invalid country code. ie. the reparse with a + didn't work.

	UnitTest.requireEqual(expectedString, left.normalize(hints)); // 'en_us'

	return UnitTest.passed;
};

//for CFISH-5447
NormalizeTests.prototype.testDontRemoveDefaultAreaCodeAtHome = function() {
	var phone = new enyo.g11n.PhoneNumber("408-234-5678", {locale: 'en_us'}); // number is invalid in the UK with no valid area code
	var hints = {
		mcc: "310", // currently located in the US
		networkType: "cdma",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true
	};
	var expectedString = "4082345678"; // should not strip default area code

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};
NormalizeTests.prototype.testDoAddDefaultAreaCodeAtHome = function() {
	var phone = new enyo.g11n.PhoneNumber("234-5678", {locale: 'en_us'});
	var hints = {
		mcc: "310", // currently located in the US
		networkType: "cdma",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true
	};
	var expectedString = "4082345678"; // should add default area code

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

// for CFISH-5217
NormalizeTests.prototype.testDefaultAreaCodeOnlyAtHome = function() {
	var phone = new enyo.g11n.PhoneNumber("+449876543211", {locale: 'en_us'}); // number is invalid in the UK with no valid area code
	var hints = {
		mcc: "310", // currently located in the US
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true
	};
	var expectedString = "011449876543211"; // should not add default area code, which is for the US, not the UK

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};
NormalizeTests.prototype.testDefaultAreaCodeAtHome = function() {
	var phone = new enyo.g11n.PhoneNumber("6543211", {locale: 'en_us'}); // number is in the same area code as the device is
	var hints = {
		mcc: "234", // currently located in the UK
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true
	};
	var expectedString = "0016506543211"; // should not add default area code, which is for the US, not the UK

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};
NormalizeTests.prototype.testDefaultAreaCodeAtHomeNoDefault = function() {
	var phone = new enyo.g11n.PhoneNumber("4086543211", {locale: 'en_us'}); // number is in the same area code as the device is
	var hints = {
		mcc: "234", // currently located in the UK
		networkType: "cdma",
		defaultAreaCode: "650",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true
	};
	var expectedString = "0014086543211"; // should not add default area code, which is for the US, not the UK

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

// for CFISH-5307
NormalizeTests.prototype.testSMSToUSNumbersCDMA = function() {
	var phone = new enyo.g11n.PhoneNumber("650 456 7890", {locale: 'en_us'});
	var hints = {
		mcc: "208", // currently located in India
		networkType: "cdma",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "16504567890"; // should not add IDD for CDMA and not the default area code
	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};
NormalizeTests.prototype.testSMSToUSNumbersUMTS = function() {
	var phone = new enyo.g11n.PhoneNumber("650 456 7890", {locale: 'en_us'});
	var hints = {
		mcc: "208", // currently located in India
		networkType: "umts",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "+16504567890"; // should add IDD for UMTS and not the default area code
	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};
NormalizeTests.prototype.testSMSToUSNumbersNoAreaCodeCDMA = function() {
	var phone = new enyo.g11n.PhoneNumber("456 7890", {locale: 'en_us'});
	var hints = {
		mcc: "208", // currently located in India
		networkType: "cdma",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "14084567890"; // should not add IDD, but do add the default area code
	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};
NormalizeTests.prototype.testSMSToUSNumbersNoAreaCodeUMTS = function() {
	var phone = new enyo.g11n.PhoneNumber("456 7890", {locale: 'en_us'});
	var hints = {
		mcc: "208", // currently located in India
		networkType: "umts",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "+14084567890"; // should not add IDD, but do add the default area code
	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};
//for CFISH-5308
NormalizeTests.prototype.testSMSToNonUSNumbersFromAbroadCDMA = function() {
	var phone = new enyo.g11n.PhoneNumber("+44 20 4567890", {locale: 'en_us'});
	var hints = {
		mcc: "208", // currently located in India
		networkType: "cdma",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "01144204567890"; // should add special IDD and no area code
	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};
NormalizeTests.prototype.testSMSToNonUSNumbersFromAbroadUMTS = function() {
	var phone = new enyo.g11n.PhoneNumber("+44 20 4567890", {locale: 'en_us'});
	var hints = {
		mcc: "208", // currently located in India
		networkType: "umts",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "01144204567890"; // should add special IDD and no area code
	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};
NormalizeTests.prototype.testSMSToNonUSNumbersFromUSCDMA = function() {
	var phone = new enyo.g11n.PhoneNumber("+44 20 4567890", {locale: 'en_us'});
	var hints = {
		mcc: "310", // currently located in US
		networkType: "cdma",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "01144204567890"; // should add special IDD and no area code
	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};
NormalizeTests.prototype.testSMSToNonUSNumbersFromUSUMTS = function() {
	var phone = new enyo.g11n.PhoneNumber("+44 20 4567890", {locale: 'en_us'});
	var hints = {
		mcc: "310", // currently located in US
		networkType: "umts",
		defaultAreaCode: "408",	// phone is a US phone, so this default area code only applies to calls to US numbers
		assistedDialing: true,
		sms: true
	};
	var expectedString = "+44204567890"; // should add special IDD and no area code
	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'en_us'
	return UnitTest.passed;
};

// for CFISH-5729
NormalizeTests.prototype.testAssistedDialingEmergencyNumberDontNormalize = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		emergency: "911"
	}, {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "204", // from the Netherlands
		defaultAreaCode: "408"
	};
	var expected = "911";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

// for CFISH-5753
NormalizeTests.prototype.testAssistedDialingServiceNumberDontAddAreaCodeCDMA = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		serviceCode: "800",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "cdma",
		mcc: "204", // from the Netherlands
		defaultAreaCode: "430"
	};
	var expected = "0018007654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

NormalizeTests.prototype.testAssistedDialingServiceNumberDontAddAreaCodeUMTS = function() {
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		serviceCode: "800",
		subscriberNumber: "7654321"
	}, {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "204", // from the Netherlands
		defaultAreaCode: "430"
	};
	var expected = "+18007654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

// for CFISH-6022
NormalizeTests.prototype.testAssistedDialingVerizonVSC = function() {
	var parsed = new enyo.g11n.PhoneNumber("*228", {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "310", // US
		defaultAreaCode: "430"
	};
	var expected = "*228";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

// for CFISH-5261
NormalizeTests.prototype.testAssistedDialingNonManual = function() {
	var parsed = new enyo.g11n.PhoneNumber("987-6543", {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: false,
		mcc: "208", // France
		defaultAreaCode: "408"
	};
	var expected = "+14089876543";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingNonManualNoOption = function() {
	var parsed = new enyo.g11n.PhoneNumber("987-6543", {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "208", // France
		defaultAreaCode: "408"
	};
	var expected = "+14089876543";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingNonManualCDMA = function() {
	var parsed = new enyo.g11n.PhoneNumber("987-6543", {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "cdma",
		manualDialing: false,
		mcc: "208", // France
		defaultAreaCode: "408"
	};
	var expected = "0014089876543";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingManual = function() {
	var parsed = new enyo.g11n.PhoneNumber("987-6543", {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: true,
		mcc: "208", // France
		defaultAreaCode: "408"
	};
	var expected = "9876543";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingManualWithTrunk = function() {
	var parsed = new enyo.g11n.PhoneNumber("1-408-987-6543", {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: true,
		mcc: "208", // France
		defaultAreaCode: "408"
	};
	var expected = "+14089876543";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingManualWithIDD = function() {
	var parsed = new enyo.g11n.PhoneNumber("011-1-408-987-6543", {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: true,
		mcc: "208", // France
		defaultAreaCode: "408"
	};
	var expected = "+14089876543";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingManualWithTrunkFR = function() {
	var parsed = new enyo.g11n.PhoneNumber("01 12 34 56 78", {locale: 'fr_fr'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: true,
		mcc: "204", // Netherlands
		defaultAreaCode: "2"
	};
	var expected = "+33112345678";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingManualWithIDDFR = function() {
	var parsed = new enyo.g11n.PhoneNumber("+33 1 12 34 56 78", {locale: 'fr_fr'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: true,
		mcc: "208", // France
		defaultAreaCode: "2"
	};
	var expected = "0112345678";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingManualLocalIN = function() {
	var parsed = new enyo.g11n.PhoneNumber("40861 76683", {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: true,
		mcc: "405", // India
		defaultAreaCode: "80"
	};
	var expected = "4086176683";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingNonManualIN = function() {
	var parsed = new enyo.g11n.PhoneNumber("4086176683", {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: false,
		mcc: "405", // India
		defaultAreaCode: "80"
	};
	var expected = "+14086176683";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

// for CFISH-8481
NormalizeTests.prototype.testAssistedDialingLocalMobileIN = function() {
	var parsed = new enyo.g11n.PhoneNumber("011 91 9911234567", {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: false,
		mcc: "405", // India
		defaultAreaCode: "80"
	};
	var expected = "09911234567";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingLocalLandLineIN = function() {
	var parsed = new enyo.g11n.PhoneNumber("011 91 11 12345678", {locale: 'en_us'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: false,
		mcc: "405", // India
		defaultAreaCode: "80"
	};
	var expected = "01112345678";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

//for CFISH-6043
NormalizeTests.prototype.testNormalizeES = function() {
	var parsed = new enyo.g11n.PhoneNumber("987654321", {locale: 'es_es'});
	var hints = {
		networkType: "umts",
		mcc: "214", // from US
		defaultAreaCode: "984"
	};
	var expected = "+34987654321";  // should not add trunk code

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingESSMS = function() {
	var parsed = new enyo.g11n.PhoneNumber("987654321", {locale: 'es_es'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: false,
		mcc: "310", // from US
		defaultAreaCode: "984",
		sms: true
	};
	var expected = "+34987654321";  // should not add trunk code

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingES = function() {
	var parsed = new enyo.g11n.PhoneNumber("987654321", {locale: 'es_es'});
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		manualDialing: false,
		mcc: "310", // from US
		defaultAreaCode: "984"
	};
	var expected = "+34987654321";  // should not add trunk code

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};


NormalizeTests.prototype.testAssistedDialingFR = function() {
	var parsed = new enyo.g11n.PhoneNumber("12345678", {locale: 'fr_fr'});
	var hints = {
		homeLocale: 'en_fr',
		assistedDialing: true,
		networkType: "umts",
		mcc: "310", // from US
		defaultAreaCode: "1"
	};
	var expected = "+33112345678";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

// for CFISH-6444
NormalizeTests.prototype.testAssistedDialingCN1 = function() {
	var parsed = new enyo.g11n.PhoneNumber("011 86 10 30123456");
	var hints = {
		assistedDialing: true,
		networkType: "cdma",
		mcc: "460", // from China
		defaultAreaCode: "408"
	};
	var expected = "01030123456";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingCN2 = function() {
	var parsed = new enyo.g11n.PhoneNumber("011 44 9876543211");
	var hints = {
		assistedDialing: true,
		networkType: "cdma",
		mcc: "460", // from China
		defaultAreaCode: "408"
	};
	var expected = "00449876543211";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

// for DFISH-6274
NormalizeTests.prototype.testAssistedDialingBogusInputs1 = function() {
	var parsed = new enyo.g11n.PhoneNumber("617 6683");
	var hints = {
		assistedDialing: true,
		networkType: "bogus",
		mcc: "460", // from China
		defaultAreaCode: "408"
	};
	var expected = "+14086176683"; // should default to UMTS

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingBogusInputs2 = function() {
	var parsed = new enyo.g11n.PhoneNumber("617 6683");
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "460", // from China
		defaultAreaCode: undefined
	};
	var expected = "6176683"; // should return as much as it can

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingBogusInputs3 = function() {
	var parsed = new enyo.g11n.PhoneNumber("617 6683");
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "-4564", // from never never land
		defaultAreaCode: "408"
	};
	var expected = "+14086176683"; // should default to international call

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingBogusInputs4 = function() {
	var parsed = new enyo.g11n.PhoneNumber({locale: {language: "en", region: "us", locale: "en_us"}}); // empty!
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: "460", // from China
		defaultAreaCode: "408"
	};
	var expected = ""; // should return something instead of giving an exception

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingBogusInputs5 = function() {
	var parsed = new enyo.g11n.PhoneNumber("4157773456");
	var hints = {
		assistedDialing: true,
		mcc: "310", // from US
		defaultAreaCode: undefined
	};
	var expected = "4157773456"; // should return something instead of giving an exception

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingBogusInputs6 = function() {
	var parsed = new enyo.g11n.PhoneNumber("617 6683");
	var hints = {
		assistedDialing: true,
		networkType: "umts",
		mcc: undefined,
		defaultAreaCode: "408"
	};
	var expected = "4086176683"; // should default to domestic call

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

// for CFISH-6873
NormalizeTests.prototype.testAssistedDialingSMSSameCountryHomeIsUS = function() {
	var parsed = new enyo.g11n.PhoneNumber("+861098765432");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "011861098765432"; // should go through US first

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

// for CFISH-6444
NormalizeTests.prototype.testAssistedDialingForeignIDD = function() {
	var parsed = new enyo.g11n.PhoneNumber("0044209876543");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: false,
		networkType: "cdma",
		mcc: "310", // in US
		defaultAreaCode: "408"
	};
	var expected = "01144209876543"; // normalize the foreign IDD to the proper US one

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

// for CFISH-6845
NormalizeTests.prototype.testAssistedDialingSameCountryHomeIsUS = function() {
	var parsed = new enyo.g11n.PhoneNumber("00861098765432");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: false,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "01098765432"; // should be a domestic call

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

//for CFISH-6869
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlCDMA1 = function() {
	var parsed = new enyo.g11n.PhoneNumber("0019087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "19087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlCDMA2 = function() {
	var parsed = new enyo.g11n.PhoneNumber("+19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "19087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlCDMA2Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("+19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "19087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlCDMA3 = function() {
	var parsed = new enyo.g11n.PhoneNumber("19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "19087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlCDMA3Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "19087654321"; // don't touch manually dialed stuff

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlCDMA4 = function() {
	var parsed = new enyo.g11n.PhoneNumber("9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "19087654321";  // fix up things in your contact list

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlCDMA4Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "9087654321"; // don't touch manually dialed stuff

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlCDMA5 = function() {
	var parsed = new enyo.g11n.PhoneNumber("65876"); // short code
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "65876"; // special case -- don't do anything to short codes

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlCDMA6 = function() {
	var parsed = new enyo.g11n.PhoneNumber("7654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "908"
	};
	var expected = "19087654321";  // fix up things in your contact list

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlCDMA6Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("7654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "908"
	};
	var expected = "7654321";  // don't fix up manually dialed things

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlCDMA1 = function() {
	var parsed = new enyo.g11n.PhoneNumber("+9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlCDMA1Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("+9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlCDMA2 = function() {
	var parsed = new enyo.g11n.PhoneNumber("009087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlCDMA2Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("009087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlCDMA3 = function() {
	var parsed = new enyo.g11n.PhoneNumber("908765432101"); // +90 is Turkey
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "011908765432101";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlCDMA3Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("908765432101"); // +90 is Turkey
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "011908765432101";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlCDMA4 = function() {
	var parsed = new enyo.g11n.PhoneNumber("658765432101"); // +65 is Singapore -- special case
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "658765432101"; // special case -- don't add the special IDD

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlCDMA5 = function() {
	var parsed = new enyo.g11n.PhoneNumber("0119087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlCDMA5Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("0119087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "cdma",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};


NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlUMTS1 = function() {
	var parsed = new enyo.g11n.PhoneNumber("0019087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "+19087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlUMTS2 = function() {
	var parsed = new enyo.g11n.PhoneNumber("+19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "+19087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlUMTS2Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("+19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "+19087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlUMTS3 = function() {
	var parsed = new enyo.g11n.PhoneNumber("19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "+19087654321";  // fix up things in your contact list

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlUMTS3Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("19087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "+19087654321"; // does touch the manually dialed stuff when there is a trunk prefix

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlUMTS4 = function() {
	var parsed = new enyo.g11n.PhoneNumber("9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "+19087654321";  // fix up things in your contact list

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlUMTS4Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "9087654321"; // don't touch manually dialed stuff

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlUMTS5 = function() {
	var parsed = new enyo.g11n.PhoneNumber("65876"); // short code
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "65876"; // special case -- don't do anything to short codes

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlUMTS6 = function() {
	var parsed = new enyo.g11n.PhoneNumber("7654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "908"
	};
	var expected = "+19087654321";  // fix up things in your contact list

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToUSFromIntlUMTS6Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("7654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "908"
	};
	var expected = "7654321";  // don't fix up manually dialed things

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlUMTS1 = function() {
	var parsed = new enyo.g11n.PhoneNumber("+9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlUMTS1Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("+9087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlUMTS2 = function() {
	var parsed = new enyo.g11n.PhoneNumber("009087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlUMTS2Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("009087654321");
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "0119087654321";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlUMTS3 = function() {
	var parsed = new enyo.g11n.PhoneNumber("908765432101"); // +90 is Turkey
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "011908765432101";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlUMTS3Manual = function() {
	var parsed = new enyo.g11n.PhoneNumber("908765432101"); // +90 is Turkey
	var hints = {
		assistedDialing: true,
		manualDialing: true,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "011908765432101";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlUMTS4 = function() {
	var parsed = new enyo.g11n.PhoneNumber("658765432101"); // +65 is Singapore -- special case
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "umts",
		mcc: "460", // in China
		defaultAreaCode: "408"
	};
	var expected = "658765432101"; // special case -- don't add the special IDD

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

// for CFISH-3992
NormalizeTests.prototype.testAssistedDialingSMSToIntlFromIntlCDMAChina = function() {
	var parsed = new enyo.g11n.PhoneNumber("+8613917331446");
	var hints = {
		assistedDialing: true,
		manualDialing: false,
		sms: true,
		networkType: "cdma",
		mcc: "460" // in China
	};
	var expected = "0118613917331446";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};

//for CFISH-7040
NormalizeTests.prototype.testNormalizeESRegular1 = function() {
	var parsed = new enyo.g11n.PhoneNumber("665 545 880", {locale: "es_es"});
	var hints = {
		assistedDialing: false,
		manualDialing: false,
		sms: false,
		networkType: "umts",
		mcc: "214" // in Spain
	};
	var expected = "+34665545880";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};
NormalizeTests.prototype.testNormalizeESRegular2 = function() {
	var parsed = new enyo.g11n.PhoneNumber("+34 665 545 880", {locale: "es_es"});
	var hints = {
		assistedDialing: false,
		manualDialing: false,
		sms: false,
		networkType: "umts",
		mcc: "214" // in Spain
	};
	var expected = "+34665545880";

	UnitTest.requireEqual(expected, parsed.normalize(hints));
	return UnitTest.passed;
};


// for CFISH-10884
NormalizeTests.prototype.testAssistedDialingIntlToLLDUMTSForES= function() {
	var phone = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "34", // calling to Spain
		areaCode: "659",
		subscriberNumber: "702066"
	}, {locale: 'es_es'});
	var hints = {
		mcc: "214", // already in Spain
		networkType: "umts",
		defaultAreaCode: "659",
		assistedDialing: true
	};
	var expectedString = "659702066";

	UnitTest.requireEqual(expectedString, phone.normalize(hints)); // 'es_es'
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSNoLocale = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "(456) 345-3434";
	
	// default to US format
	var fmt = new enyo.g11n.PhoneFmt({style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSStyle0 = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "(456) 345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSStyle1 = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "456-345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSFull0 = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "415",
			subscriberNumber: "4154155"
	});
	var expected = "(415) 415-4155";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSInternational = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSInternationalLongArea = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "1997",
			subscriberNumber: "123456"
	});
	var expected = "+44 1997 123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSInternationalAccessCode = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "011",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "011 33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSPlusIDDtoUnknownCountry = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "506",	// costa rica
		subscriberNumber: "87654321"
	});
	var expected = "+506 87654321";	// use last resort rule for subscriber number
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSStyle0DialAround = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			cic: "1010321",
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "10-10-321 (456) 345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSStyle1DialAround = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			cic: "1010321",
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "10-10-321-456-345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSStyle0Vertical = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			vsc: "*55",
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "*55 (456) 345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSStyle0OldVertical = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			vsc: "115",
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "115 (456) 345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLocalWithPauseChars = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	var expected = "617-5568 w1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLDWithPauseChars = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	var expected = "(415) 617-5568 w1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLocalWithExtension = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6175568",
		extension: "1234"
	});
	var expected = "617-5568 1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLDWithExtension = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "1234"
	});
	var expected = "(415) 617-5568 1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLDWithTrunkAndExtension = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "1234"
	});
	var expected = "1 (415) 617-5568 1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSStyle0Emergency = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			emergency: "911"
	});
	var expected = "911 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatEmergencyLikeServiceNumber = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			emergency: "411"
	});
	var expected = "411 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatUSStyle0EmergencyExtended = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			emergency: "911",
			subscriberNumber: "123"
	});
	var expected = "911 123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatNumberWithUSMCC = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "(615) 987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatNumberWithUSMCCNoLocale = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "(615) 987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLocalNumberWithUSMCC = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLocalNumberWithUSMCCNoLocale = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsUS.prototype.testFormatNumberWithFRMCC = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "15987654"
	});
	var expected = "06 15 98 76 54";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatNumberWithFRMCCNoLocale = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "15987654"
	});
	var expected = "06 15 98 76 54";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLocalNumberWithFRMCC = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "15987654"
	});
	var expected = "15 98 76 54";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLocalNumberWithFRMCCNoLocale = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "15987654"
	});
	var expected = "15 98 76 54";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsUS.prototype.testFormatNumberWithDEMCC = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "98765432"
	});
	var expected = "0212 98 76 54 32";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default", mcc: "262"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatNumberWithDEMCCNoLocale = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "98765432"
	});
	var expected = "0212 98 76 54 32";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "262"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLocalNumberWithFRMCC = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "98765432"
	});
	var expected = "98 76 54 32";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLocalNumberWithFRMCCNoLocale = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "98765432"
	});
	var expected = "98 76 54 32";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsUS.prototype.testFormatNumberWithMXMCC = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "615-987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatNumberWithMXMCCNoLocale = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "615-987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLocalNumberWithMXMCC = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testFormatLocalNumberWithMXMCCNoLocale = function() { 
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "334"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

//for NOV-108200
PhoneFormatTestsUS.prototype.testFormatWithBogusSpecialChars = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "P1",
		areaCode: "381",
		subscriberNumber: "7803573"
	});
	var expected = "+P1 381 780 3573";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};





PhoneFormatTestsUS.prototype.testWithParamsFormatUSNoLocale = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "(456) 345-3434";
	
	// default to US format
	var fmt = new enyo.g11n.PhoneFmt({style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "(456) 345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "456-345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSFull0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "415",
			subscriberNumber: "4154155"
	});
	var expected = "(415) 415-4155";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatPartialSMS = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "34534"
	});
	var expected = "345-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatWholeSMS = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "34534"
	});
	var expected = "34534";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSInternationalLongArea = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "1997",
			subscriberNumber: "123456"
	});
	var expected = "+44 1997 123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSInternationalAccessCode = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "011",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "011 33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSPlusIDDtoUnknownCountry = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "506",	// costa rica
		subscriberNumber: "87654321"
	});
	var expected = "+506 87654321";	// use last resort rule for subscriber number
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0DialAround = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			cic: "1010321",
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "10-10-321 (456) 345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1DialAround = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			cic: "1010321",
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "10-10-321-456-345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Vertical = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			vsc: "*55",
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "*55 (456) 345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0OldVertical = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			vsc: "115",
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "115 (456) 345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLocalWithPauseChars = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	var expected = "617-5568 w1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLDWithPauseChars = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "w1234"
	});
	var expected = "(415) 617-5568 w1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLocalWithExtension = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "6175568",
		extension: "1234"
	});
	var expected = "617-5568 1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLDWithExtension = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "1234"
	});
	var expected = "(415) 617-5568 1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLDWithTrunkAndExtension = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "1",
		areaCode: "415",
		subscriberNumber: "6175568",
		extension: "1234"
	});
	var expected = "1 (415) 617-5568 1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Emergency = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			emergency: "911"
	});
	var expected = "911 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0EmergencyExtended = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			emergency: "911",
			subscriberNumber: "123"
	});
	var expected = "911 123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Partial1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "4"
	});
	var expected = "(4)";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Partial2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "45"
	});
	var expected = "(45)";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Partial3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456"
	});
	var expected = "(456) ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Partial4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "3"
	});
	var expected = "(456) 3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Partial5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "34"
	});
	var expected = "(456) 34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Partial6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "345"
	});
	var expected = "(456) 345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Partial7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "3453"
	});
	var expected = "(456) 345-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Partial8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "34534"
	});
	var expected = "(456) 345-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Partial9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "345343"
	});
	var expected = "(456) 345-343";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Partial10 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "(456) 345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0Partial11 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "34534345" // too long
	});
	var expected = "45634534345"; // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialLocal1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialLocal2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialLocal3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialLocal4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "456-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialLocal5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "456-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialLocal6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456-345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialLocal7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456-3453";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialLocal8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634535"  // too long
	});
	var expected = "45634535";  // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialTrunk1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1"
	});
	var expected = "1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialTrunk1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "4"
	});
	var expected = "1 (4)";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialTrunk2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "45"
	});
	var expected = "1 (45)";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialTrunk3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456"
	});
	var expected = "1 (456) ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialTrunk4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "3"
	});
	var expected = "1 (456) 3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialTrunk5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "34"
	});
	var expected = "1 (456) 34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialTrunk6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "345"
	});
	var expected = "1 (456) 345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialTrunk7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "3453"
	});
	var expected = "1 (456) 345-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialTrunk8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "34534"
	});
	var expected = "1 (456) 345-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialTrunk9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "345343"
	});
	var expected = "1 (456) 345-343";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialTrunk10 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "1 (456) 345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle0PartialTrunk11 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "34534345" // too long
	});
	var expected = "145634534345";	// use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1Partial1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "4"
	});
	var expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1Partial2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "45"
	});
	var expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1Partial3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456"
	});
	var expected = "456-";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1Partial4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "3"
	});
	var expected = "456-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1Partial5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "34"
	});
	var expected = "456-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1Partial6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "345"
	});
	var expected = "456-345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1Partial7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "3453"
	});
	var expected = "456-345-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1Partial8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "34534"
	});
	var expected = "456-345-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1Partial9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "345343"
	});
	var expected = "456-345-343";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1Partial10 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "456-345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1Partial11 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			areaCode: "456",
			subscriberNumber: "34534345"
	});
	var expected = "45634534345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialLocal1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialLocal2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialLocal3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialLocal4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "456-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialLocal5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "456-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialLocal6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456-345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialLocal7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456-3453";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialLocal8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634534" // too long
	});
	var expected = "45634534";  // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialTrunk1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1"
	});
	var expected = "1-";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialTrunk1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "4"
	});
	var expected = "1-4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialTrunk2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "45"
	});
	var expected = "1-45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialTrunk3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456"
	});
	var expected = "1-456-";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialTrunk4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "3"
	});
	var expected = "1-456-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialTrunk5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "34"
	});
	var expected = "1-456-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialTrunk6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "345"
	});
	var expected = "1-456-345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialTrunk7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "3453"
	});
	var expected = "1-456-345-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialTrunk8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "34534"
	});
	var expected = "1-456-345-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialTrunk9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "345343"
	});
	var expected = "1-456-345-343";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialTrunk10 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "3453434"
	});
	var expected = "1-456-345-3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSStyle1PartialTrunk11 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "1",
			areaCode: "456",
			subscriberNumber: "34534343" // too long
	});
	var expected = "145634534343";  // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatUSPartialIDDToPreserveZeroCountry0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+"
	});
	var expected = "+";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSPartialIDDToPreserveZeroCountry1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		subscriberNumber: "3"
	});
	var expected = "+3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSPartialIDDToPreserveZeroCountry2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39"
	});
	var expected = "+39 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSPartialIDDToPreserveZeroCountry3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0"
	});
	var expected = "+39 0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSPartialIDDToPreserveZeroCountry4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		subscriberNumber: "4"
	});
	var expected = "+39 04";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSPartialIDDToPreserveZeroCountry5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "40"
	});
	var expected = "+39 040 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSPartialIDDToPreserveZeroCountry6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "40",
		subscriberNumber: "1"
	});
	var expected = "+39 040 1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testWithParamsFormatUSPartialIDDToPreserveZeroCountry7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "39",
		trunkAccess: "0",
		areaCode: "40",
		subscriberNumber: "12345678"
	});
	var expected = "+39 040 12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "dashes"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsUS.prototype.testWithParamsFormatNumberWithUSMCC = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "(615) 987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", mcc: "316"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatNumberWithUSMCCNoLocale = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "(615) 987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({style: "default", mcc: "316"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLocalNumberWithUSMCC = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", mcc: "316"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLocalNumberWithUSMCCNoLocale = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({mcc: "316"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsUS.prototype.testWithParamsFormatNumberWithFRMCC = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "15987654"
	});
	var expected = "06 15 98 76 54";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatNumberWithFRMCCNoLocale = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "6",
		subscriberNumber: "15987654"
	});
	var expected = "06 15 98 76 54";
	
	var fmt = new enyo.g11n.PhoneFmt({mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLocalNumberWithFRMCC = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "15987654"
	});
	var expected = "15 98 76 54";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLocalNumberWithFRMCCNoLocale = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "15987654"
	});
	var expected = "15 98 76 54";
	
	var fmt = new enyo.g11n.PhoneFmt({mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsUS.prototype.testWithParamsFormatNumberWithDEMCC = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "98765432"
	});
	var expected = "0212 98 76 54 32";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", mcc: "262"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatNumberWithDEMCCNoLocale = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "212",
		subscriberNumber: "98765432"
	});
	var expected = "0212 98 76 54 32";
	
	var fmt = new enyo.g11n.PhoneFmt({mcc: "262"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLocalNumberWithFRMCC = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "98765432"
	});
	var expected = "98 76 54 32";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLocalNumberWithFRMCCNoLocale = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "98765432"
	});
	var expected = "98 76 54 32";
	
	var fmt = new enyo.g11n.PhoneFmt({mcc: "208"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsUS.prototype.testFormatNumberWithMXMCC = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "615-987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", mcc: "334"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatNumberWithMXMCCNoLocale = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "615",
		subscriberNumber: "9876543"
	});
	var expected = "615-987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({mcc: "334"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLocalNumberWithMXMCC = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "es_mx", mcc: "334"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatLocalNumberWithMXMCCNoLocale = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "9876543"
	});
	var expected = "987-6543";
	
	var fmt = new enyo.g11n.PhoneFmt({mcc: "334"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

//for NOV-108200
PhoneFormatTestsUS.prototype.testWithParamsFormatWithBogusSpecialChars = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "P1",
		areaCode: "381",
		subscriberNumber: "7803573"
	});
	var expected = "+P1 381 780 3573";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatWith555Number = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "408",
		subscriberNumber: "5551234"
	});
	var expected = "(408) 555-1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatFictitiousNumberLocal = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "5555555"
	});
	var expected = "555-5555";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatFictitiousNumberLD = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		areaCode: "555",
		subscriberNumber: "5555555"
	});
	var expected = "(555) 555-5555";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testWithParamsFormatSMSThatLooksFictitious = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "5555"
	});
	var expected = "5555";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

//for NOV-113367
PhoneFormatTestsUS.prototype.testCrazyIntl = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "1",
		trunkAccess: "1",
		subscriberNumber: "23"
	});
	var expected = "+1 123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

//for NOV-109333
PhoneFormatTestsUS.prototype.testOddVSC = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "*#43#"
	});
	var expected = "*#43#";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testSSCode = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		vsc: "*64",
		subscriberNumber: "6#"
	});
	var expected = "*64 6#";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

// for CFISH-5088
PhoneFormatTestsUS.prototype.testVSCUMTS1 = function(){
	var parsed = new enyo.g11n.PhoneNumber("#*06", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = "#*06 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testVSCUMTS2 = function(){
	var parsed = new enyo.g11n.PhoneNumber("*#06#408-987-6543", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = "*#06#4089876543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testVSCUMTS3 = function(){
	var parsed = new enyo.g11n.PhoneNumber("*#062#408-987-6543", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = "*#062#4089876543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testVSCUMTS4 = function(){
	var parsed = new enyo.g11n.PhoneNumber("#62#408-987-6543", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = "#62#4089876543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testVSCUMTS5 = function(){
	var parsed = new enyo.g11n.PhoneNumber("*##62#408-987-6543", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = "*##62#4089876543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testVSCUMTS6 = function(){
	var parsed = new enyo.g11n.PhoneNumber("##62#408-987-6543", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = "##62#4089876543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	return UnitTest.passed;
};

PhoneFormatTestsUS.prototype.testVSCUMTS7 = function(){
	var parsed = new enyo.g11n.PhoneNumber("*911", {locale: "en_us"});
	UnitTest.requireDefined(parsed);
	
	var expected = "*911 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	return UnitTest.passed;
};
PhoneFormatTestsUS.prototype.testVSCUMTS8 = function(){
	var parsed = new enyo.g11n.PhoneNumber("*844752224458", {mcc: "310"}); // US
	UnitTest.requireDefined(parsed);
	
	var expected = "*844752224458";
	
	var fmt = new enyo.g11n.PhoneFmt({isPartial: true, mcc: "310"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	return UnitTest.passed;
};

// for CFISH-6362
PhoneFormatTestsUS.prototype.testVSCCDMALong = function(){
	var parsed = new enyo.g11n.PhoneNumber("1112345", {mcc: "310"}); // US
	UnitTest.requireDefined(parsed);
	
	var expected = "1112345";
	
	var fmt = new enyo.g11n.PhoneFmt({mcc: "310"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	return UnitTest.passed;
};

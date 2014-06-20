PhoneFormatTestsCN.prototype.testFormatCNStyle0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "10",
			subscriberNumber: "12345678"
	});
	var expected = "010 12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatCNInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatCNInternationalLongArea = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "1997",
			subscriberNumber: "123456"
	});
	var expected = "+44 1997 123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatCNInternationalAccessCode = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsCN.prototype.testFormatCNPlusIDDtoUnknownCountry = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "872",	// pitcairn island
		subscriberNumber: "987654321"
	});
	var expected = "+872 987654321";	// use last resort rule for subscriber number
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn": style: "破折号"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatMobile = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	});
	var expected = "150 05179573";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatMobileInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "86",
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	});
	var expected = "+86 150 05179573";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatCNStyle0Partial1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0Partial2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	});
	var expected = "01";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0Partial3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10"
	});
	var expected = "010 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0Partial4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1"
	});
	var expected = "010 1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0Partial5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12"
	});
	var expected = "010 12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0Partial6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123"
	});
	var expected = "010 123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0Partial7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1234"
	});
	var expected = "010 1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0Partial8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345"
	});
	var expected = "010 12345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0Partial9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123456"
	});
	var expected = "010 123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0Partial10 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1234567"
	});
	var expected = "010 1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0Partial11 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345678"
	});
	var expected = "010 12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0Partial12 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123456789" // too long
	});
	var expected = "010123456789"; // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatCNStyle0PartialLocal1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "8"
	});
	var expected = "8";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0PartialLocal2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "87"
	});
	var expected = "87";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0PartialLocal3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "876"
	});
	var expected = "876";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0PartialLocal4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "8765";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0PartialLocal5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "87654"
	});
	var expected = "87654";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0PartialLocal6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "876543"
	});
	var expected = "876543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0PartialLocal7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8765432"
	});
	var expected = "8765432";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0PartialLocal8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "87654321"
	});
	var expected = "87654321";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatCNStyle0PartialLocal9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "876543210"  // too long
	});
	var expected = "876543210";  // shouldn't matter, but theoretically use the last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};






PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "10",
			subscriberNumber: "12345678"
	});
	var expected = "010 12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatWithParamsInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatWithParamsInternationalLongArea = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			areaCode: "1997",
			subscriberNumber: "123456"
	});
	var expected = "+44 1997 123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatWithParamsInternationalAccessCode = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsCN.prototype.testFormatWithParamsPlusIDDtoUnknownCountry = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "872",	// pitcairn island
		subscriberNumber: "987654321"
	});
	var expected = "+872 987654321";	// use last resort rule for subscriber number
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn", style: "破折号"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatMobile = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	});
	var expected = "150 05179573";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatMobileInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "86",
		mobilePrefix: "150",
		subscriberNumber: "05179573"
	});
	var expected = "+86 150 05179573";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0Partial1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0Partial2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	});
	var expected = "01";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0Partial3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10"
	});
	var expected = "010 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0Partial4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1"
	});
	var expected = "010 1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0Partial5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12"
	});
	var expected = "010 12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0Partial6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123"
	});
	var expected = "010 123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0Partial7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1234"
	});
	var expected = "010 1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0Partial8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345"
	});
	var expected = "010 12345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0Partial9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123456"
	});
	var expected = "010 123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0Partial10 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "1234567"
	});
	var expected = "010 1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0Partial11 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "12345678"
	});
	var expected = "010 12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0Partial12 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "10",
		subscriberNumber: "123456789" // too long
	});
	var expected = "010123456789"; // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0PartialLocal1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "8"
	});
	var expected = "8";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0PartialLocal2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "87"
	});
	var expected = "87";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0PartialLocal3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "876"
	});
	var expected = "876";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0PartialLocal4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "8765";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0PartialLocal5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "87654"
	});
	var expected = "87654";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0PartialLocal6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "876543"
	});
	var expected = "876543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0PartialLocal7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8765432"
	});
	var expected = "8765432";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0PartialLocal8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "87654321"
	});
	var expected = "87654321";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsCN.prototype.testFormatWithParamsStyle0PartialLocal9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "876543210"  // too long
	});
	var expected = "876543210";  // shouldn't matter, but theoretically use the last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "zh_cn"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

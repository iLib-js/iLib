PhoneFormatTestsIN.prototype.testFormatINStyle0 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "11",
			subscriberNumber: "12345678"
	});
	var expected = "011-12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "11",
			subscriberNumber: "12345678"
	});
	var expected = "011 1234 5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "spaces"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "11",
			subscriberNumber: "12345678"
	});
	var expected = "011-1234-5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "hyphens"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsIN.prototype.testFormatINInternational = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "91",
			areaCode: "11",
			subscriberNumber: "12345678"
	});
	var expected = "+91 11 12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINInternationalLongArea = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "91",
			areaCode: "7753",
			subscriberNumber: "123456"
	});
	var expected = "+91 7753 123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINInternationalAccessCode = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "91",
			areaCode: "11",
			subscriberNumber: "12345678"
	});
	var expected = "00 91 11 12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsIN.prototype.testFormatINPlusIDDtoUnknownCountry = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "872",	// pitcairn island
		subscriberNumber: "987654321"
	});
	var expected = "+872 987654321";	// use last resort rule for subscriber number
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "spaces"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsIN.prototype.testFormatINInternationalMobile = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		iddPrefix: "+",
		countryCode: "91",
		mobilePrefix: "912",
		subscriberNumber: "7654321"
	});
	var expected = "+91 91276 54321";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_us", style: "spaces"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsIN.prototype.testFormatINMobile = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		mobilePrefix: "912",
		subscriberNumber: "7654321"
	});
	var expected = "91276-54321";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "spaces"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsIN.prototype.testFormatINStyle0Partial1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0Partial2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		subscriberNumber: "1"
	});
	var expected = "01";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0Partial3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11"
	});
	var expected = "011-";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0Partial4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "1"
	});
	var expected = "011-1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0Partial5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12"
	});
	var expected = "011-12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0Partial6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "123"
	});
	var expected = "011-123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0Partial7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "1234"
	});
	var expected = "011-1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0Partial8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345"
	});
	var expected = "011-12345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0Partial9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "123456"
	});
	var expected = "011-123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0Partial10 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "1234567"
	});
	var expected = "011-1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0Partial11 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "12345678"
	});
	var expected = "011-12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0Partial12 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		trunkAccess: "0",
		areaCode: "11",
		subscriberNumber: "123456789" // too long
	});
	var expected = "011123456789"; // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsIN.prototype.testFormatINStyle0PartialLocal1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "8"
	});
	var expected = "8";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0PartialLocal2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "87"
	});
	var expected = "87";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0PartialLocal3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "876"
	});
	var expected = "876";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0PartialLocal4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "8765";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0PartialLocal5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "87654"
	});
	var expected = "87654";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0PartialLocal6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "876543"
	});
	var expected = "876543";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0PartialLocal7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8765432"
	});
	var expected = "8765432";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0PartialLocal8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "87654321"
	});
	var expected = "87654321";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINStyle0PartialLocal9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "876543210"  // too long
	});
	var expected = "876543210";  // shouldn't matter, but theoretically use the last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIN.prototype.testFormatINMobile = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		mobilePrefix: "991",
		subscriberNumber: "2345678"
	});
	var expected = "99123-45678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_in", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsIT.prototype.testFormatITStyle0 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "89",
			subscriberNumber: "1234567"
	});
	var expected = "089 1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "89",
			subscriberNumber: "1234567"
	});
	var expected = "089-1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "89",
			subscriberNumber: "1234567"
	});
	var expected = "089/1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "slash"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsIT.prototype.testFormatITInternational = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "39",
			trunkAccess: "0",
			areaCode: "6",
			subscriberNumber: "12345678"
	});
	var expected = "+39 06 12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsIT.prototype.testFormatITInternationalAccessCode = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "39",
			trunkAccess: "0",
			areaCode: "6",
			subscriberNumber: "12345678"
	});
	var expected = "00 39 06 12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsIT.prototype.testFormatITMobile = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			mobilePrefix: "399",
			subscriberNumber: "1234567"
	});
	var expected = "399 1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITService = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			serviceCode: "799",
			subscriberNumber: "1234567"
	});
	var expected = "799 1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITNetService = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			serviceCode: "4",
			subscriberNumber: "34565434"
	});
	var expected = "4 34565434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITSpecialRate = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			serviceCode: "899",
			subscriberNumber: "1234567"
	});
	var expected = "899 1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsIT.prototype.testFormatITStyle0Partial1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle0Partial2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "9"
	});
	var expected = "09";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle0Partial3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "96"
	});
	var expected = "096";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle0Partial4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962"
	});
	var expected = "0962 ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle0Partial5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "1"
	});
	var expected = "0962 1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle0Partial6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "12"
	});
	var expected = "0962 12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle0Partial7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "123"
	});
	var expected = "0962 123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle0Partial8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "1234"
	});
	var expected = "0962 1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle0Partial9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "12345"
	});
	var expected = "0962 12345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle0Partial10 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "123456"
	});
	var expected = "0962 123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle0Partial11 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "1234567"
	});
	var expected = "0962 1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle0Partial12 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "12345678"
	});
	var expected = "0962 12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle0Partial12 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "123456789" // too long
	});
	var expected = "0962123456789"; // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsIT.prototype.testFormatITStyle1Partial1 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1Partial2 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "9"
	});
	var expected = "09";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1Partial3 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "96"
	});
	var expected = "096";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1Partial4 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962"
	});
	var expected = "0962-";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1Partial5 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "1"
	});
	var expected = "0962-1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1Partial6 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "12"
	});
	var expected = "0962-12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1Partial7 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "123"
	});
	var expected = "0962-123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1Partial8 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "1234"
	});
	var expected = "0962-1234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1Partial9 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "12345"
	});
	var expected = "0962-12345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1Partial10 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "123456"
	});
	var expected = "0962-123456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1Partial11 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "1234567"
	});
	var expected = "0962-1234567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1Partial12 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "12345678"
	});
	var expected = "0962-12345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsIT.prototype.testFormatITStyle1Partial13 = function(){
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "962",
			subscriberNumber: "123456789" // too long
	});
	var expected = "0962123456789"; // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "it_it", style: "trattini"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

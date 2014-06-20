PhoneFormatTestsHK.prototype.testFormatStyle0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "34523434"
	});
	var expected = "3452 3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsHK.prototype.testFormatInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsHK.prototype.testFormatInternationalAccessCode = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "001",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "001 33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsHK.prototype.testFormatMobile = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		subscriberNumber: "61234567"
	});
	var expected = "6123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsHK.prototype.testFormatMobileInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "852",
			subscriberNumber: "61234567"
	});
	var expected = "+852 6123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsHK.prototype.testFormatService = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
		serviceCode: "1",
		subscriberNumber: "8501"
	});
	var expected = "18501";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsHK.prototype.testFormatIEIDD = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "353",
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "+353 1 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsHK.prototype.testFormatStyle0Partial0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "6"
	});
	var expected = "6";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsHK.prototype.testFormatStyle0Partial1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "61"
	});
	var expected = "61";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsHK.prototype.testFormatStyle0Partial2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "612"
	});
	var expected = "612";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsHK.prototype.testFormatStyle0Partial3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "6123"
	});
	var expected = "6123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsHK.prototype.testFormatStyle0Partial4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "61234"
	});
	var expected = "6123 4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsHK.prototype.testFormatStyle0Partial5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "612345"
	});
	var expected = "6123 45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsHK.prototype.testFormatStyle0Partial6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "6123456"
	});
	var expected = "6123 456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsHK.prototype.testFormatStyle0Partial7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "61234567"
	});
	var expected = "6123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsHK.prototype.testFormatStyle0Partial8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "612345678"	// too long
	});
	var expected = "612345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_hk"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

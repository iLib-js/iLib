PhoneFormatTestsGB.prototype.testFormatStyle0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "20",
			subscriberNumber: "34523434"
	});
	var expected = "(020) 3452 3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsGB.prototype.testFormatStyle1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "20",
			subscriberNumber: "34523434"
	});
	var expected = "020 3452 3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "common"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsGB.prototype.testFormatInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "+33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsGB.prototype.testFormatInternationalAccessCode = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "33",
			areaCode: "1",
			subscriberNumber: "12345678"
	});
	var expected = "00 33 1 12 34 56 78";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsGB.prototype.testFormatLongAreaCode = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "17684",
			subscriberNumber: "12345"
	});
	var expected = "(0176 84) 12345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsGB.prototype.testFormatMobile = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "75",
			subscriberNumber: "1234567"
	});
	var expected = "075 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsGB.prototype.testFormatMobileInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			trunkAccess: "0",
			mobilePrefix: "75",
			subscriberNumber: "1234567"
	});
	var expected = "+44 75 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsGB.prototype.testFormatService = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "300",
			subscriberNumber: "1234567"
	});
	var expected = "(0300) 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsGB.prototype.testFormatIEIDD = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "353",
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "+353 1 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsGB.prototype.testFormatStyle0Partial0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0Partial1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "1"
	});
	var expected = "01";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0Partial2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "12"
	});
	var expected = "012";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0Partial3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			subscriberNumber: "120"
	});
	var expected = "0120";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0Partial4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202"
	});
	var expected = "(01202) ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0Partial5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "3"
	});
	var expected = "(01202) 3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0Partial6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "34"
	});
	var expected = "(01202) 34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0Partial7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "345"
	});
	var expected = "(01202) 345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0Partial8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "3453"
	});
	var expected = "(01202) 3453";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0Partial9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "34534"
	});
	var expected = "(01202) 34534";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0Partial10 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "1202",
			subscriberNumber: "345343"
	});
	var expected = "(01202) 345343";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsGB.prototype.testFormatStyle0PartialLocal1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0PartialLocal2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0PartialLocal3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0PartialLocal4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0PartialLocal5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0PartialLocal6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0PartialLocal7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 3453";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0PartialLocal8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "4563 4535";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle0PartialLocal9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345352"	// too long
	});
	var expected = "456345352";	// use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsGB.prototype.testFormatStyle1PartialLocal1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "common"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle1PartialLocal2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "common"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle1PartialLocal3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "common"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle1PartialLocal4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "common"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle1PartialLocal5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "common"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle1PartialLocal6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "common"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle1PartialLocal7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 3453";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "common"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle1PartialLocal8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "4563 4534";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "common"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsGB.prototype.testFormatStyle1PartialLocal9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_gb", style: "common"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

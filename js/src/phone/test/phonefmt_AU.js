PhoneFormatTestsAU.prototype.testFormatStyle0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "34523434"
	});
	var expected = "(02) 3452 3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsAU.prototype.testFormatStyle1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "34523434"
	});
	var expected = "02 3452 3434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "nobrackets"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsAU.prototype.testFormatStyle2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "34523434"
	});
	var expected = "02 34523434";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "compressed"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsAU.prototype.testFormatInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "61",
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "12345678"
	});
	var expected = "+61 2 1234 5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsAU.prototype.testFormatInternationalAccessCode = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "0011",
			countryCode: "61",
			areaCode: "2",
			subscriberNumber: "12345678"
	});
	var expected = "0011 61 2 1234 5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsAU.prototype.testFormatMobile = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "4192",
			subscriberNumber: "12345"
	});
	var expected = "0419 212 345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsAU.prototype.testFormatMobileInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "61",
			trunkAccess: "0",
			mobilePrefix: "4192",
			subscriberNumber: "12345"
	});
	var expected = "+61 419 212 345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsAU.prototype.testFormatService = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			serviceCode: "1800",
			subscriberNumber: "123456"
	});
	var expected = "1800 123 456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsAU.prototype.testFormatIEIDD = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "353",
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "+353 1 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsAU.prototype.testFormatStyle0Partial0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0Partial1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2"
	});
	var expected = "(02) ";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0Partial2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "8"
	});
	var expected = "(02) 8";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0Partial3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "87"
	});
	var expected = "(02) 87";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0Partial4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "876"
	});
	var expected = "(02) 876";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0Partial5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "8765"
	});
	var expected = "(02) 8765";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0Partial6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "87654"
	});
	var expected = "(02) 8765 4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0Partial7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "876543"
	});
	var expected = "(02) 8765 43";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0Partial8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "8765432"
	});
	var expected = "(02) 8765 432";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0Partial9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "87654321"
	});
	var expected = "(02) 8765 4321";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0Partial10 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "2",
			subscriberNumber: "876543210"	// too long
	});
	var expected = "02876543210";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsAU.prototype.testFormatStyle0PartialLocal1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8"
	});
	var expected = "8";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0PartialLocal2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "87"
	});
	var expected = "87";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0PartialLocal3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "876"
	});
	var expected = "876";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0PartialLocal4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8765"
	});
	var expected = "8765";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0PartialLocal5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "87654"
	});
	var expected = "8765 4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0PartialLocal6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "876543"
	});
	var expected = "8765 43";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0PartialLocal7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8765432"
	});
	var expected = "8765 432";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0PartialLocal8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "87654321"
	});
	var expected = "8765 4321";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle0PartialLocal9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "876543210"	// too long
	});
	var expected = "876543210";	// use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsAU.prototype.testFormatStyle2PartialLocal1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle2PartialLocal2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle2PartialLocal3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle2PartialLocal4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "4563";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle2PartialLocal5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "45634";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle2PartialLocal6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle2PartialLocal7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "4563453";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle2PartialLocal8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "45634534";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsAU.prototype.testFormatStyle2PartialLocal9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_au", style: "compressed"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

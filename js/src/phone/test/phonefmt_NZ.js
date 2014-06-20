PhoneFormatTestsNZ.prototype.testFormatStyle0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "3452343"
	});
	var expected = "(03) 345-2343";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsNZ.prototype.testFormatStyle1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "3452343"
	});
	var expected = "03 345 2343";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "spaces"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsNZ.prototype.testFormatInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "64",
			areaCode: "3",
			subscriberNumber: "1234567"
	});
	var expected = "+64 3 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "spaces"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsNZ.prototype.testFormatInternationalAccessCode = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "64",
			areaCode: "3",
			subscriberNumber: "1234567"
	});
	var expected = "00 64 3 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsNZ.prototype.testFormatLongNumber = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "12345678"
	});
	var expected = "(03) 1234-5678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsNZ.prototype.testFormatMobile = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			mobilePrefix: "21",
			subscriberNumber: "1234567"
	});
	var expected = "021 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsNZ.prototype.testFormatMobileInternational = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "44",
			trunkAccess: "0",
			mobilePrefix: "75",
			subscriberNumber: "1234567"
	});
	var expected = "+44 75 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsNZ.prototype.testFormatService = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			serviceCode: "800",
			subscriberNumber: "12345"
	});
	var expected = "0800 12345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsNZ.prototype.testFormatIEIDD = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "353",
			trunkAccess: "0",
			areaCode: "1",
			subscriberNumber: "1234567"
	});
	var expected = "+353 1 123 4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsNZ.prototype.testFormatStyle0Partial0 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0Partial1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3"
	});
	var expected = "(03) ";
	
	var fmt = new enyo.g11n.PhoneFmt({ locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0Partial2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "1"
	});
	var expected = "(03) 1";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0Partial3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "22"
	});
	var expected = "(03) 22";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0Partial4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "220"
	});
	var expected = "(03) 220";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0Partial5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "2203"
	});
	var expected = "(03) 220-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0Partial6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "22034"
	});
	var expected = "(03) 220-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0Partial7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "220345"
	});
	var expected = "(03) 220-345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0Partial8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "2203456"
	});
	var expected = "(03) 220-3456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0Partial9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "22034567"
	});
	var expected = "(03) 2203-4567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0Partial10 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			trunkAccess: "0",
			areaCode: "3",
			subscriberNumber: "220345678"	// too long
	});
	var expected = "03220345678";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsNZ.prototype.testFormatStyle0PartialLocal1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0PartialLocal2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0PartialLocal3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0PartialLocal4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "456-3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0PartialLocal5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "456-34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0PartialLocal6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456-345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0PartialLocal7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456-3453";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0PartialLocal8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634535"
	});
	var expected = "4563-4535";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle0PartialLocal9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345352"	// too long
	});
	var expected = "456345352";	// use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsNZ.prototype.testFormatStyle1PartialLocal1 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4"
	});
	var expected = "4";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle1PartialLocal2 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45"
	});
	var expected = "45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle1PartialLocal3 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456"
	});
	var expected = "456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle1PartialLocal4 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563"
	});
	var expected = "456 3";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle1PartialLocal5 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634"
	});
	var expected = "456 34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle1PartialLocal6 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345"
	});
	var expected = "456 345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle1PartialLocal7 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "4563453"
	});
	var expected = "456 3453";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle1PartialLocal8 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "45634534"
	});
	var expected = "4563 4534";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsNZ.prototype.testFormatStyle1PartialLocal9 = function() {
	var formatted;
	var parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "456345345"	// too long
	});
	var expected = "456345345"; // use last resort rule
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "en_nz", style: "spaces"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

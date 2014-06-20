PhoneFormatTestsLU.prototype.testFormatStyle0 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "223456"
		}),
		expected = "22 34 56";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsLU.prototype.testFormatStyle1 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "223456"
		}),
		expected = "223456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle2 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "223456"
		}),
		expected = "223-456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsLU.prototype.testFormatInternational = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "352",
			subscriberNumber: "123456"
		}),
		expected = "+352 123 456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsLU.prototype.testFormatInternationalAccessCode = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "00",
			countryCode: "352",
			subscriberNumber: "123456"
		}),
		expected = "00 352 123 456";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsLU.prototype.testFormatMobile = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			mobilePrefix: "661",
			subscriberNumber: "234567"
		}),
		expected = "661 234 567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsLU.prototype.testFormatMobileInternational = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			iddPrefix: "+",
			countryCode: "352",
			mobilePrefix: "661",
			subscriberNumber: "234567"
		}),
		expected = "+352 661 234 567";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsLU.prototype.testFormatWithParamsSMSPartial = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8765"
		}),
		expected = "87 65";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsLU.prototype.testFormatWithParamsSMSWhole = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "8765"
		}),
		expected = "8765";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};

PhoneFormatTestsLU.prototype.testFormatPremium = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			serviceCode: "901",
			subscriberNumber: "12345"
		}),
		expected = "901 123 45";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatBlock = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			serviceCode: "116",
			subscriberNumber: "116"
		}),
		expected = "116 116";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "default"});
	formatted = fmt.format(parsed);
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};



PhoneFormatTestsLU.prototype.testFormatStyle0Partial1 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "5"
		}),
		expected = "5";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle0Partial2 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "50"
		}),
		expected = "50";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle0Partial3 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "501"
		}),
		expected = "501";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle0Partial4 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "5012"
		}),
		expected = "50 12";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle0Partial5 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "50123"
		}),
		expected = "501 23";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle0Partial6 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "501234"
		}),
		expected = "50 12 34";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle0Partial7 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "5012345" // too long
		}),
		expected = "5012345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsLU.prototype.testFormatStyle1Partial1 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "5"
		}),
		expected = "5";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle1Partial2 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "50"
		}),
		expected = "50";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle1Partial3 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "501"
		}),
		expected = "501";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle1Partial4 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "5012"
		}),
		expected = "5012";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle1Partial5 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "50123"
		}),
		expected = "50123";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle1Partial6 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "501234"
		}),
		expected = "501234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle1Partial7 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "5012345"
		}),
		expected = "5012345"; // too long
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "komprimierte/comprimé"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};


PhoneFormatTestsLU.prototype.testFormatStyle2Partial1 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "5"
		}),
		expected = "5";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle2Partial2 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "50"
		}),
		expected = "50";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle2Partial3 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "501"
		}),
		expected = "501";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle2Partial4 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "5012"
		}),
		expected = "501-2";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle2Partial5 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "50123"
		}),
		expected = "501-23";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle2Partial6 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "501234"
		}),
		expected = "501-234";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
PhoneFormatTestsLU.prototype.testFormatStyle2Partial7 = function () {
	var formatted,
		parsed = new enyo.g11n.PhoneNumber({
			subscriberNumber: "5012345" // too long
		}),
		expected = "5012345";
	
	var fmt = new enyo.g11n.PhoneFmt({locale: "de_lu", style: "Bindestrichen/tirets"});
	formatted = fmt.format(parsed, {partial: true});
	
	UnitTest.requireEqual(expected, formatted);
	
	return UnitTest.passed;
};
